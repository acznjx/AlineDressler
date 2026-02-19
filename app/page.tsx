"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Results } from "@/components/Results";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-[#0a141f] transition-colors duration-500 selection:bg-[#c5a37d]/30 selection:text-[#0a141f] dark:selection:text-[#c5a37d]">
      <Navbar />
      
      <div className="flex flex-col w-full">
        <Hero />
        
        <About />
        
        <Results />
        
        <Faq />
        
        <Contact />

        <Footer />
      </div>
      
      <WhatsappButton />
    </main>
  );
}