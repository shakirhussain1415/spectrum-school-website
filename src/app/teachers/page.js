export default function Teachers() {
  const teachers = [
    { name: "Miss Hiba", subject: "English" },
    { name: "Miss Faiza", subject: "Urdu / Islamiat" },
    { name: "Miss Fatima", subject: "Mathematics" },
    { name: "Miss Sumera", subject: "SST - Social Studies" },
    { name: "Miss Tooba", subject: "Science" },
    { name: "Sir Shakir", subject: "Math, Physics, English, Chemistry" },
    { name: "Mam Tooba", subject: "English, Urdu, Math" },
  ];
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black text-[#0A2A5E]">Our Teachers</h1>
      <p className="mt-2 text-gray-600">Trained, caring & experienced team at Spectrum Scientific School.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {teachers.map((t, i) => (
          <div key={i} className="bg-white shadow rounded-3xl p-6 text-center">
            <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto flex items-center justify-center text-2xl font-black text-[#0A2A5E]">{t.name.replace("Miss ", "").replace("Sir ", "").replace("Mam ", "")[0]}</div>
            <h2 className="font-bold text-lg mt-3">{t.name}</h2>
            <p className="text-gray-600">{t.subject}</p>
            <p className="text-sm text-yellow-600 font-bold mt-2">Spectrum Scientific School</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="/admissions" className="inline-block bg-[#0A2A5E] text-white px-8 py-3 rounded-full font-bold">Join Our School →</a>
      </div>
    </div>
  );
}