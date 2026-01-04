import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prisma}  from "@/lib/prisma";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy : "database",
    },
    providers: [],
    secret : process.env.NEXTAUTH_SECRET
})

export {handler as GET , handler as POST};