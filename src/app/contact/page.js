export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black text-[#0A2A5E]">Contact Us</h1>
      <p className="mt-2 text-gray-600">Spectrum Scientific School - Rawalpindi</p>
      
      <div className="mt-8 bg-[#0A2A5E] text-white rounded-3xl p-8">
        <p className="text-lg"><b>📍 Address:</b> Khalid Colony, Phase 2, Rawalpindi</p>
        <p className="text-lg mt-3"><b>📞 Phone / WhatsApp:</b> 0330 5547548</p>
        <p className="text-lg mt-3"><b>📧 Email:</b> Shakir1415hussain@gmail.com</p>
        <p className="text-lg mt-3"><b>🕐 Timing:</b> Mon - Sat, 8am - 2pm</p>
        
        <a href="https://wa.me/923305547548" target="_blank" className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-bold">Chat on WhatsApp →</a>
        <a href="/admissions" className="inline-block mt-6 ml-3 bg-yellow-400 text-[#0A2A5E] px-6 py-3 rounded-full font-bold">Apply For Admission →</a>
      </div>

      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-3xl p-6">
        <h2 className="font-bold text-lg">Visit Us</h2>
        <p className="text-gray-600 mt-1">Visit us at Khalid Colony, Phase 2, Rawalpindi for admission test & fee details. Bring B-Form & previous class result card.</p>
      </div>
    </div>
  );
}