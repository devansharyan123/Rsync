import { NextResponse } from "next/server";
import bcrypt  from "bcrypt"
import { prisma } from "@/lib/prisma"; 

export async function POST(req : Request) {
    try {
        const body = await req.json();
        const {email , password , name } = body;
        
        if(!email || !password)
            return new NextResponse("Credentials Missing" , { status: 400 })

        const existingUser = await prisma.user.findUnique({
            where: {email}
        })
         
        if(existingUser)
            return new NextResponse("User already exists " , {status : 400})

        const hashedpassword = await bcrypt.hash(password , 12)

        const user = await prisma.user.create({
            data: {
                name ,
                email,
                password : hashedpassword
            }
        })

        return NextResponse.json({
            id: user.id,
            email: user.email,
            name: user.name
        });

    } catch (error) {
        console.log("Registration Error" , error)
        return new NextResponse("Internal Server Error" , {status : 500})
    }
}