import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import {prisma}  from "@/lib/prisma";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy : "database",
    },
    providers: [
        CredentialsProvider({
            name:"credentials",
            credentials : {
                email : {label: "email" , type: "email"},
            password : {label : "password" , type: "password"}
            },
        async authorize(credentials){
            if(!credentials?.email  || !credentials?.password)
                throw new Error("Credentials Missing"); 

            const user = await prisma.user.findUnique({
                where: {email : credentials.email}
        })

        if(!user || !user.password)
                    throw new Error("Invalid Credentials")

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        )

        if(!isPasswordCorrect)
            throw new Error("Invalide Credentials")

        return {
            id : user.id,
            email : user.email,
            name : user.name
        };
           
    }
}),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET!
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),

    ],
    pages:{
        signIn:'/sigin'
    },
    secret : process.env.NEXTAUTH_SECRET
})

export {handler as GET , handler as POST};