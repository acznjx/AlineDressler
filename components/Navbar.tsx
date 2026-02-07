"use client";
import { useState, useEffect } from "react";
import { Leaf, Sun, Moon } from "lucide-react"; 

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkTheme = document.documentElement.classList.contains("dark");
    setIsDark(isDarkTheme);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    setIsDark((prev) => {
      const newDark = !prev;
      if (newDark) {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newDark;
    });
  };

  const navLinks = [
    { name: "A Nutri", href: "#sobre" },
    { name: "Resultados", href: "#resultados" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <nav className={`fixed w-full z-100 top-0 transition-all duration-500 ${
      scrolled 
        ? "bg-white/90 dark:bg-bg-main/90 backdrop-blur-md py-4 md:py-5 shadow-sm" 
        : "bg-transparent py-6 md:py-10"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-black">
            <Leaf size={22} fill="currentColor" />
          </div>
          <span className={`text-xl md:text-3xl font-serif tracking-tighter font-bold uppercase transition-colors duration-500 ${
            isDark ? "text-white" : "text-zinc-950"
          }`}>
            Aline<span className="text-emerald-500 italic font-light lowercase px-1">dressler</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs uppercase tracking-[0.25em] font-black transition-colors duration-500 ${
                isDark ? "text-zinc-400 hover:text-emerald-400" : "text-zinc-600 hover:text-emerald-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-6 md:border-l border-zinc-200 dark:border-white/10 md:pl-10 transition-colors">
          <button 
            onClick={toggleTheme} 
            className={`p-3 transition-all duration-500 ${
              isDark ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-zinc-950"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="#contato" className="bg-emerald-500 text-black px-6 md:px-10 py-3.5 md:py-4 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest hover:scale-105 transition-all">
            Falar com a Nutri
          </a>
        </div>
      </div>
    </nav>
  );
}