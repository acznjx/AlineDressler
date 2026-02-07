"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Results } from "@/components/Results";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { WhatsappButton } from "@/components/WhatsappButton";

export default function Home() {
  return (
    /* Ajustado para transição suave entre claro/escuro. 
       O 'selection' define a cor de destaque quando o usuário seleciona um texto.
    */
    <main className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100">
      
      {/* Navegação Fixa */}
      <Navbar />
      
      {/* Conteúdo em Blocos */}
      <div className="flex flex-col w-full">
        <Hero />
        
        <About />
        
        <Results />
        
        <Faq />
        
        <Contact />
      </div>
      
      {/* Acessibilidade e Suporte */}
      <WhatsappButton />
      
    </main>
  );
}