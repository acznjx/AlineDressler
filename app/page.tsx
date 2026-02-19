"use client";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Results } from "@/components/Results";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Estado mestre de idioma que controla todo o portfólio
  const [lang, setLang] = useState("EN");

  return (
    <main className="relative min-h-screen transition-colors duration-500 selection:bg-brand-orange selection:text-white dark:selection:bg-brand-orange/30">
      
      {/* Navbar controla o estado global */}
      <Navbar lang={lang} setLang={setLang} />
      
      <div className="flex flex-col w-full">
        {/* Seções que respondem à troca de idioma */}
        <Hero lang={lang} />
        
        <About lang={lang} />
        
        <Results lang={lang} />
        
        <Faq lang={lang} />
        
        {/* Seções estáticas ou que ainda serão traduzidas */}
        <Contact />

        <Footer />
      </div>
      
      {/* Botão flutuante fixo */}
      <WhatsappButton />
    </main>
  );
}