"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Something went wrong");
      }

      // If success, send them to login
      router.push("/signin");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="p-8 border rounded-lg shadow-md w-96 space-y-4">
        <h1 className="text-2xl font-bold">Create an account</h1>
        
        {error && <p className="text-red-500 text-sm">{error}</p>}
        
        <input name="name" type="text" placeholder="Full Name" required className="w-full p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />
        
        <button 
          disabled={loading}
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>

        <p className="text-sm text-center">
          Already have an account? <Link href="/signin" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
}