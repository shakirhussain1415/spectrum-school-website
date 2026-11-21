"use client";
import { useState } from "react";
export default function Admin() {
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  if (!login) return (
    <div className="max-w-md mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-black text-[#0A2A5E]">Admin Login</h1>
      <p className="text-gray-600 mt-2">Principal / Owner Only</p>
      <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Enter Password" className="w-full border rounded-full px-5 py-3 mt-6" />
      <button onClick={()=>{ if(pass==="admin123") setLogin(true); else alert("Wrong Password! Try admin123"); }} className="w-full bg-[#0A2A5E] text-white py-3 rounded-full font-bold mt-3">Login</button>
      <p className="text-xs text-gray-400 mt-3">Demo Password: admin123</p>
    </div>
  );
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-[#0A2A5E]">Welcome Principal! 👋</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white p-5 rounded-2xl text-center shadow"><p className="text-3xl font-black">250</p><p>Total Students</p></div>
        <div className="bg-white p-5 rounded-2xl text-center shadow"><p className="text-3xl font-black">7</p><p>Teachers</p></div>
        <div className="bg-white p-5 rounded-2xl text-center shadow"><p className="text-3xl font-black">12</p><p>New Admissions</p></div>
        <div className="bg-white p-5 rounded-2xl text-center shadow"><p className="text-3xl font-black">Rs 85,000</p><p>Fee Collected</p></div>
      </div>
      <div className="bg-white p-6 rounded-2xl shadow mt-6">
        <h2 className="font-bold text-lg">School Info</h2>
        <p className="mt-2">📍 Khalid Colony, Phase 2, Rawalpindi</p>
        <p>📞 0330 5547548</p>
        <p>📧 Shakir1415hussain@gmail.com</p>
      </div>
    </div>
  );
}