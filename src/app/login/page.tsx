"use client";
import { useState, useEffect } from "react";

const DEFAULT_USERS = [
  { email: "admin@spectrum.edu", password: "Admin123", role: "Admin", name: "Admin" },
  { email: "teacher@spectrum.edu", password: "Teacher123", role: "Teacher", name: "Teacher" },
  { email: "admit@spectrum.edu", password: "Admit123", role: "Admit Staff", name: "Admit Staff" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("spectrum_users")) {
      localStorage.setItem("spectrum_users", JSON.stringify(DEFAULT_USERS));
    }
    const saved = localStorage.getItem("spectrum_session");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("spectrum_users") || "[]");
    const found = users.find((u: any) => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem("spectrum_session", JSON.stringify(found));
      setMsg("Login successful!");
    } else {
      setMsg("Wrong email or password!");
    }
  };

  const handleChangePassword = () => {
    if (!newPass) return setMsg("Enter new password");
    let users = JSON.parse(localStorage.getItem("spectrum_users") || "[]");
    const idx = users.findIndex((u: any) => u.email === user.email);
    if (users[idx].password !== oldPass) return setMsg("Old password is wrong!");
    users[idx].password = newPass;
    localStorage.setItem("spectrum_users", JSON.stringify(users));
    const updated = { ...user, password: newPass };
    localStorage.setItem("spectrum_session", JSON.stringify(updated));
    setMsg("Password changed successfully!");
    setOldPass(""); setNewPass("");
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("spectrum_session");
    setEmail(""); setPassword("");
  };

  const box: any = { maxWidth: 420, margin: "40px auto", padding: 24, borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", background: "#fff", fontFamily: "sans-serif" };
  const input: any = { width: "100%", padding: 12, margin: "8px 0", borderRadius: 8, border: "1px solid #ddd", boxSizing: "border-box" };
  const btn: any = { width: "100%", padding: 12, borderRadius: 8, border: "none", background: "#1e40af", color: "#fff", fontWeight: "bold", cursor: "pointer", marginTop: 8 };

  if (user) {
    return (
      <div style={box}>
        <h2>Welcome, {user.name} 👋</h2>
        <p>Role: <b>{user.role}</b><br/>Email: {user.email}</p>
        <hr/>
        <h3>Change Password</h3>
        <input style={input} type="password" placeholder="Old Password" value={oldPass} onChange={e=>setOldPass(e.target.value)} />
        <input style={input} type="password" placeholder="New Password" value={newPass} onChange={e=>setNewPass(e.target.value)} />
        <button style={btn} onClick={handleChangePassword}>Change Password</button>
        <button style={{...btn, background:"#dc2626"}} onClick={handleLogout}>Logout</button>
        <p>{msg}</p>
        <a href="/">← Back to Home</a>
      </div>
    );
  }

  return (
    <div style={box}>
      <h2 style={{textAlign:"center"}}>Spectrum School Login</h2>
      <p style={{textAlign:"center", color:"#666", fontSize:14}}>Admin / Teacher / Admit</p>
      <input style={input} placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input style={input} type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button style={btn} onClick={handleLogin}>Login</button>
      <p style={{color:"red"}}>{msg}</p>
      <div style={{background:"#f8fafc", padding:12, borderRadius:8, fontSize:13}}>
        <b>Demo Accounts:</b><br/>
        Admin: admin@spectrum.edu / Admin123<br/>
        Teacher: teacher@spectrum.edu / Teacher123<br/>
        Admit: admit@spectrum.edu / Admit123
      </div>
      <br/><a href="/">← Back to Home</a>
    </div>
  );
}
