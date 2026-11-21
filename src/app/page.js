export default function Home() {
  return (
    <div className="bg-white text-slate-800 font-sans">

      {/* HERO */}
      <section className="bg-[#0A2A5E] text-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">ADMISSIONS OPEN 2026 - 2027</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mt-4">Every Colour<br/>of <span className="text-yellow-400">Learning.</span></h1>
            <p className="text-blue-100 mt-4 text-lg">Spectrum Scientific School System - Where your child learns with confidence, character & creativity. From Play Group to Class 10.</p>
            <div className="flex gap-3 mt-6">
              <a href="/admissions" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full">Apply Now →</a>
              <a href="/about" className="bg-white/10 border border-white/30 px-6 py-3 rounded-full font-bold">Explore School</a>
            </div>
            <div className="flex gap-6 mt-8 text-sm">
              <div><p className="text-2xl font-black">500+</p><p className="text-blue-200">Happy Students</p></div>
              <div><p className="text-2xl font-black">25+</p><p className="text-blue-200">Expert Teachers</p></div>
              <div><p className="text-2xl font-black">100%</p><p className="text-blue-200">Board Results</p></div>
            </div>
          </div>
<div style={{ background: "white", padding: "12px", borderRadius: "25px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
  <img src="/hero.jpg" alt="Spectrum Student" style={{ width: "100%", height: "340px", objectFit: "cover", borderRadius: "18px", display: "block" }} />
  <div style={{ padding: "16px 8px 8px", textAlign: "center" }}>
    <p style={{ fontSize: "20px", fontWeight: "900", color: "#0A2A5E", margin: "0", lineHeight: "1.3" }}>“Dream Big, Smile Bright,<br/>Learn with Heart!”</p>
    <p style={{ fontSize: "13px", color: "#64748B", marginTop: "8px" }}>Every child is a star. At Spectrum, we help them shine.<br/><b style={{ color: "#0A2A5E" }}>— Spectrum Scientific School System</b></p>
  </div>
</div>
</div>
</section>

      {/* CLASSES */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-black text-center">Choose Your Child&apos;s Journey</h2>
        <p className="text-center text-slate-500 mt-2">One school, complete journey - from first day to Board exams.</p>
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            {t:"Play Group - KG", e:"🧸", c:"bg-pink-100", d:"Play, rhymes, colours & confidence"},
            {t:"Primary 1 - 5", e:"📖", c:"bg-yellow-100", d:"Strong English, Urdu, Math & Science"},
            {t:"Middle 6 - 8", e:"🔬", c:"bg-blue-100", d:"Science, Computer & Critical Thinking"},
            {t:"Matric 9 - 10", e:"🎓", c:"bg-green-100", d:"Board Prep, 100% Focus on Results"},
          ].map((x)=>(
            <div key={x.t} className={`${x.c} rounded-3xl p-6`}>
              <p className="text-4xl">{x.e}</p>
              <h3 className="font-black text-lg mt-3">{x.t}</h3>
              <p className="text-sm mt-1">{x.d}</p>
              <a href="/admissions" className="font-bold text-sm mt-3 inline-block">Apply →</a>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-50 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center">Why Parents Choose Spectrum?</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm"><p className="text-3xl">👩‍🏫</p><h3 className="font-bold mt-2">Caring Teachers</h3><p className="text-sm text-slate-500 mt-1">Small classes, personal attention to every child. Your child is known by name, not roll number.</p></div>
            <div className="bg-white rounded-3xl p-6 shadow-sm"><p className="text-3xl">💻</p><h3 className="font-bold mt-2">Modern Learning</h3><p className="text-sm text-slate-500 mt-1">Computer, Science activities, English speaking & Islamic values - all together.</p></div>
            <div className="bg-white rounded-3xl p-6 shadow-sm"><p className="text-3xl">💰</p><h3 className="font-bold mt-2">Affordable Fee</h3><p className="text-sm text-slate-500 mt-1">Quality education should not be expensive. Low fee, sibling discount & scholarships.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-yellow-400 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div><h2 className="text-3xl font-black">Limited Seats for 2026!</h2><p className="font-medium">Visit campus or apply online today. Free admission test & campus tour.</p></div>
          <a href="/admissions" className="bg-[#0A2A5E] text-white font-bold px-8 py-4 rounded-full whitespace-nowrap">Fill Admission Form →</a>
        </div>
      </section>

    </div>
  );
}