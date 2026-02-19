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
  const [lang, setLang] = useState("EN");

  return (
    <main className="relative min-h-screen transition-colors duration-500 selection:bg-brand-gold/30 selection:text-brand-navy dark:selection:text-brand-gold">
      
      <Navbar lang={lang} setLang={setLang} />
      
      <div className="flex flex-col w-full">
        <Hero lang={lang} />
        
        <About lang={lang} />
        
        <Results lang={lang} />
        
        <Faq lang={lang} />
        
        <Contact />

        <Footer />
      </div>
      
      <WhatsappButton />
    </main>
  );
}