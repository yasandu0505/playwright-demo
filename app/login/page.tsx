'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e: any) => {
        e.preventDefault(); // stops from reloading

        if (email == "test@example.com" && password == "hi123"){
            router.push("/dashboard")
        }else {
            setError("Invalid Credentials")
        }

    }

    return (
        <main style={{ 
            padding: 20
        }}>
            <h1>Login page</h1>
            <form onSubmit={handleLogin}>
                <input 
                id="email"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /><br/>
                <input 
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                /><br/>
                <button type="submit">Login Here</button>
            </form>
            {error && 
            <p style={{ 
                color: "red"
                }}>{error}</p>}
        </main>
    );

}