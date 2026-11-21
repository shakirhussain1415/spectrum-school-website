import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8E6] min-h-screen">
        <header className="bg-[#0A2A5E] text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <a href="/" className="font-black text-lg">🌟 SPECTRUM <span className="text-yellow-400">SCIENTIFIC SCHOOL</span></a>
            <nav className="flex flex-wrap gap-1 text-sm font-bold">
              <a href="/" className="px-3 py-2 hover:bg-white/10 rounded-full">Home</a>
              <a href="/about" className="px-3 py-2 hover:bg-white/10 rounded-full">About</a>
              <a href="/classes" className="px-3 py-2 hover:bg-white/10 rounded-full">Classes</a>
              <a href="/teachers" className="px-3 py-2 hover:bg-white/10 rounded-full">Teachers</a>
              <a href="/admissions" className="px-3 py-2 hover:bg-white/10 rounded-full">Admissions</a>
              <a href="/contact" className="px-3 py-2 hover:bg-white/10 rounded-full">Contact</a>
              <a href="/admin" className="px-3 py-2 bg-yellow-400 text-[#0A2A5E] rounded-full">Admin</a>
              <a href="/teacher" className="px-3 py-2 bg-white text-[#0A2A5E] rounded-full">Teacher</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[#0A2A5E] text-white text-center py-6 mt-10">
          <p className="font-bold">Spectrum Scientific School</p>
          <p className="text-sm text-white/70">Khalid Colony, Phase 2, Rawalpindi | 0330 5547548</p>
          <p className="text-sm text-white/70">Shakir1415hussain@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}