"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@spectrum.edu" && password === "Admin123") {
      localStorage.setItem("user", JSON.stringify({ email, role: "admin", name: "Admin" }));
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f1f5f9", padding: "20px" }}>
      <form onSubmit={handleLogin} style={{ background: "white", padding: "32px", borderRadius: "16px", width: "100%", maxWidth: "400px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Spectrum School</h1>
        <p style={{ textAlign: "center", color: "#64748b", marginBottom: "24px" }}>Login to your account</p>
        {error && <p style={{ background: "#fee2e2", color: "#dc2626", padding: "10px", borderRadius: "8px", textAlign: "center" }}>{error}</p>}
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@spectrum.edu" required style={{ width: "100%", padding: "12px", margin: "8px 0 16px", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Admin123" required style={{ width: "100%", padding: "12px", margin: "8px 0 20px", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
        <button type="submit" style={{ width: "100%", padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
        <p style={{ textAlign: "center", marginTop: "16px", fontSize: "13px", color: "#64748b" }}>Demo: admin@spectrum.edu / Admin123</p>
      </form>
    </div>
  );
}
