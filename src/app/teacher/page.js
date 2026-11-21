"use client";
import { useState } from "react";
export default function Teacher() {
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  if (!login) return (
    <div className="max-w-md mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-black text-[#0A2A5E]">Teacher Login</h1>
      <p className="text-gray-600 mt-2">For Spectrum Teachers Only</p>
      <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="Enter Password" className="w-full border rounded-full px-5 py-3 mt-6" />
      <button onClick={()=>{ if(pass==="teacher123") setLogin(true); else alert("Wrong Password! Try teacher123"); }} className="w-full bg-[#0A2A5E] text-white py-3 rounded-full font-bold mt-3">Login</button>
      <p className="text-xs text-gray-400 mt-3">Demo Password: teacher123</p>
    </div>
  );
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-[#0A2A5E]">Welcome Teacher! 👩‍🏫</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-5 rounded-2xl shadow"><h3 className="font-bold">My Classes</h3><p className="text-gray-600 mt-2">Class 5 - English<br/>Class 6 - Science<br/>Class 7 - Urdu</p></div>
        <div className="bg-white p-5 rounded-2xl shadow"><h3 className="font-bold">Today's Attendance</h3><p className="text-gray-600 mt-2">Total: 45<br/>Present: 42<br/>Absent: 3</p></div>
        <div className="bg-white p-5 rounded-2xl shadow"><h3 className="font-bold">Homework</h3><p className="text-gray-600 mt-2">Class 5: English Page 42<br/>Class 6: Science Ch 3</p></div>
      </div>
      <p className="mt-6 bg-yellow-50 border p-4 rounded-2xl">School: Khalid Colony, Phase 2, Rawalpindi | Phone: 0330 5547548</p>
    </div>
  );
}