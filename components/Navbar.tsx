"use client";
import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react"; // Flame combina melhor com a paleta quente
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "A Nutri", href: "#sobre" },
    { name: "Método", href: "#metodo" },
    { name: "Resultados", href: "#resultados" },
  ];

  return (
    <nav className={`fixed w-full z-[100] top-0 transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
            <Flame size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-serif tracking-tighter text-zinc-900 font-bold uppercase">
            Juliana<span className="text-orange-600 italic font-light lowercase">monteiro</span>
          </span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="#contato" 
            className="bg-zinc-900 text-white px-7 py-3.5 rounded-full text-[10px] uppercase tracking-widest font-black hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 active:scale-95"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-zinc-50 z-[200] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="p-2 text-zinc-900"><X size={35}/></button>
            </div>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-5xl font-serif italic text-zinc-900">{link.name}</a>
              ))}
              <a href="#contato" onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase text-orange-600 mt-4">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}