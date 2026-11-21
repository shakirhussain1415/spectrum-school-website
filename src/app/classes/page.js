export default function Classes() {
  const classes = [
    { name: "Playgroup - KG", fee: "Rs. 2,500 / month", desc: "Play-based learning, colours, rhymes, manners." },
    { name: "Class 1 - 5", fee: "Rs. 3,500 / month", desc: "English, Urdu, Math, Science + Nazra Quran." },
    { name: "Class 6 - 8", fee: "Rs. 4,500 / month", desc: "Science focus, Computer, English speaking." },
    { name: "Class 9 - 10 Science", fee: "Rs. 6,000 / month", desc: "Board exam prep, Physics, Chemistry, Biology." },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black text-[#0A2A5E]">Our Classes & Fees</h1>
      <p className="mt-2 text-gray-600">Low fee, sibling discount & scholarships available.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {classes.map((c) => (
          <div key={c.name} className="bg-white shadow rounded-3xl p-6">
            <h2 className="text-xl font-bold">{c.name}</h2>
            <p className="text-yellow-600 font-bold mt-1">{c.fee}</p>
            <p className="text-gray-600 mt-2">{c.desc}</p>
            <a href="/admissions" className="inline-block mt-4 bg-[#0A2A5E] text-white px-5 py-2 rounded-full text-sm font-bold">Apply Now →</a>
          </div>
        ))}
      </div>
    </div>
  );
}