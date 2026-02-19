"use client";
import { useState } from "react";
import { Instagram, MessageCircle, Hammer, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [lang, setLang] = useState("EN");

  const navLinks = [
    { name: lang === "PT" ? "Serviços" : lang === "ES" ? "Servicios" : "Services", href: "#services" },
    { name: lang === "PT" ? "Clientes" : lang === "ES" ? "Clientes" : "Clients", href: "#clients" },
    { name: lang === "PT" ? "Contato" : lang === "ES" ? "Contacto" : "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-[#18181b] border-b border-white/5 sticky top-0 z-[100] shadow-2xl">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        
        {/* ESQUERDA: Social, WhatsApp e Idioma (Mantido no lugar) */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex items-center gap-4 pr-6 border-r border-white/10">
            <a href="#" className="text-zinc-400 hover:text-orange-500 transition-all hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-zinc-400 hover:text-orange-500 transition-all hover:scale-110">
              <Facebook size={18} />
            </a>
            <a href="https://wa.me/" className="text-zinc-400 hover:text-green-500 transition-all hover:scale-110">
              <MessageCircle size={18} />
            </a>
          </div>

          <div className="flex bg-zinc-800/50 p-1 rounded-full border border-white/5 relative h-9 items-center">
            {["EN", "PT", "ES"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`relative px-3 py-1 text-[10px] font-black transition-colors duration-300 z-10 ${
                  lang === l ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {lang === l && (
                  <motion.div 
                    layoutId="activeTabNav"
                    className="absolute inset-0 bg-orange-600 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* LOGO: No mobile vai para o canto direito, no desktop mantém o recuo solicitado */}
        <div className="flex flex-1 md:flex-initial flex-col items-end md:items-center justify-center shrink-0 md:ml-20">
          <div className="flex items-center gap-2 md:gap-3">
            <Hammer size={20} className="text-orange-500" />
            <h1 className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase italic leading-none">
              JOHN<span className="text-orange-500">DOE</span>
            </h1>
          </div>
          <span className="text-[7px] md:text-[9px] text-zinc-500 font-bold uppercase tracking-[0.4em] mt-1 whitespace-nowrap">
            Master Craftsmanship
          </span>
        </div>

        {/* DIREITA: Navegação Desktop (Inalterada) */}
        <div className="hidden xl:flex items-center justify-end ml-10">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-orange-500 transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}