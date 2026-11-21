"use client";
import { useState } from "react";

export default function Admissions() {
  const [form, setForm] = useState({ student: "", father: "", phone: "", clas: "Class 1", address: "" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `*NEW ADMISSION - SPECTRUM SCHOOL*%0A%0A*Student Name:* ${form.student}%0A*Father Name:* ${form.father}%0A*Phone:* ${form.phone}%0A*Class:* ${form.clas}%0A*Address:* ${form.address}`;
    window.open(`https://wa.me/923305547548?text=${msg}`, "_blank");
    alert("Thank you! Your form is ready on WhatsApp - Just press SEND!");
  };

  return (
    <div className="max-w-md mx-auto px-6 py-12">
      <h1 className="text-3xl font-black text-[#0A2A5E]">Admission Form</h1>
      <p className="text-gray-600 mt-1">Khalid Colony, Phase 2, Rawalpindi</p>
      <form onSubmit={submit} className="mt-6 space-y-3">
        <input name="student" onChange={change} required placeholder="Student Name" className="w-full border rounded-full px-5 py-3" />
        <input name="father" onChange={change} required placeholder="Father Name" className="w-full border rounded-full px-5 py-3" />
        <input name="phone" onChange={change} required placeholder="Parent Mobile Number" className="w-full border rounded-full px-5 py-3" />
        <select name="clas" onChange={change} className="w-full border rounded-full px-5 py-3">
          <option>Class 1</option><option>Class 2</option><option>Class 3</option><option>Class 4</option><option>Class 5</option><option>Class 6</option><option>Class 7</option><option>Class 8</option>
        </select>
        <input name="address" onChange={change} placeholder="Home Address" className="w-full border rounded-full px-5 py-3" />
        <button className="w-full bg-green-500 text-white py-3 rounded-full font-bold">Submit on WhatsApp →</button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">After Submit, WhatsApp will open - Just press SEND and we will receive it!</p>
    </div>
  );
}