"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage(){

    const router = useRouter();
    const [loading , setLoading] = useState(false);
    const [error , setError]     = useState("");

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const res = await signIn("credentials" , {
            email,
            password,
            redirect : false
        })

        if(res?.error){
            setError("Invalid Email or Password");
            setLoading(false)
        }
        else{
            router.push("/dashboard");
            router.refresh()
        }
    };

    return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="p-8 bg-white border rounded-xl shadow-lg w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Log in to your Rsync account</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center border border-red-200">
            {error}
          </div>
        )}

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="email" type="email" placeholder="Email" required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          <input name="password" type="password" placeholder="Password" required 
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          
          <button disabled={loading} type="submit" 
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or continue with</span></div>
        </div>

        {/* OAuth Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center p-3 border rounded-lg hover:bg-gray-50 transition"
          >
            Google
          </button>
          <button 
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="flex items-center justify-center p-3 border rounded-lg hover:bg-gray-50 transition"
          >
            GitHub
          </button>
        </div>

        <p className="text-sm text-center text-gray-600">
          Don't have an account? <Link href="/register" className="text-blue-600 font-medium">Create one</Link>
        </p>
      </div>
    </div>
  );
}