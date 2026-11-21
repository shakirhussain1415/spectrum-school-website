export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black text-[#0A2A5E]">About Spectrum Scientific School</h1>
      <p className="mt-2 text-lg text-gray-600">Every Colour of Learning - Since 2010</p>

      <div className="mt-8 bg-[#0A2A5E] text-white rounded-[2rem] p-8">
        <h2 className="text-2xl font-bold text-yellow-400">Our Mission</h2>
        <p className="mt-3">Quality education should not be expensive. Low fee, sibling discount & scholarships for every child in Rawalpindi.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="font-bold text-xl">500+ Students</h3>
          <p className="text-gray-600 mt-2">Happy students from Playgroup to Class 10.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="font-bold text-xl">25+ Teachers</h3>
          <p className="text-gray-600 mt-2">Trained, caring and experienced teachers.</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="font-bold text-xl">100% Result</h3>
          <p className="text-gray-600 mt-2">Board exam success with focus on Science.</p>
        </div>
      </div>

      <a href="/admissions" className="inline-block mt-8 bg-yellow-400 text-[#0A2A5E] font-bold px-8 py-4 rounded-full">
        Apply For Admission →
      </a>
    </div>
  );
}