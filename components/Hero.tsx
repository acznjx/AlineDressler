"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Award } from "lucide-react";

interface HeroProps {
  lang: string;
}

export function Hero({ lang }: HeroProps) {
  const content = {
    EN: {
      tag: "Premium Finishing Expert",
      h1: ["MAKING", "HOMES", "ICONIC."],
      p: "Not just a renovation. It's master craftsmanship that values every detail.",
      btn: "Get a Quote",
      quality: "Master Quality"
    },
    PT: {
      tag: "Especialista em Acabamento Premium",
      h1: ["TORNANDO", "CASAS", "ICÔNICAS."],
      p: "Não é apenas uma reforma. É a execução mestra que valoriza cada detalhe.",
      btn: "Solicitar Orçamento",
      quality: "Qualidade Mestra"
    },
    ES: {
      tag: "Especialista en Acabados Premium",
      h1: ["HACIENDO", "CASAS", "ICÓNICAS."],
      p: "No es solo una reforma. Es la ejecución maestra que valora cada detalle.",
      btn: "Solicitar Presupuesto",
      quality: "Calidad Maestra"
    }
  }[lang as "EN" | "PT" | "ES"] || {
    tag: "Premium Finishing Expert",
    h1: ["MAKING", "HOMES", "ICONIC."],
    p: "Not just a renovation.",
    btn: "Get a Quote",
    quality: "Master Quality"
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-[#fafafa]">
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          
          {/* LADO ESQUERDO: TEXTO */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left pt-10 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-orange-600/20">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {content.tag}
              </div>

              <h1 className="text-[15vw] sm:text-[10vw] lg:text-[8vw] font-[1000] text-zinc-900 leading-[0.8] tracking-[-0.05em] uppercase italic">
                {content.h1[0]} <br />
                <span className="text-brand-orange not-italic">{content.h1[1]}</span> <br />
                {content.h1[2]}
              </h1>

              <p className="text-xl md:text-3xl text-zinc-500 font-bold max-w-xl mx-auto lg:mx-0 leading-tight tracking-tight">
                {content.p}
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#0a0a0a] text-white px-12 py-7 rounded-2xl flex items-center justify-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] font-black uppercase text-sm tracking-widest hover:bg-brand-orange transition-all duration-300"
              >
                {content.btn}
                <ArrowUpRight size={24} strokeWidth={3} />
              </motion.button>

              <div className="hidden sm:flex items-center gap-4 px-6 py-5 bg-white rounded-2xl border-2 border-zinc-100 shadow-xl">
                <ShieldCheck className="text-brand-orange" size={28} />
                <span className="text-xs font-black text-zinc-900 uppercase tracking-tighter">{content.quality}</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: IMAGEM */}
          <div className="hidden lg:col-span-5 relative lg:flex justify-center items-end h-[calc(100vh-6rem)]">
            {/* SPLASH DE TINTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[150%] h-[150%] -z-10">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-brand-orange opacity-20">
                    <path d="M417.5,338Q365,426,268.5,436Q172,446,110.5,366.5Q49,287,100,205Q151,123,248.5,91.5Q346,60,408,155Q470,250,417.5,338Z" />
                </svg>
            </div>
            
            <div className="relative w-full h-[110%] flex items-end justify-center overflow-visible">
              <Image 
                src="https://i.imgur.com/G4aDt2C.png" 
                alt="Professional"
                fill
                unoptimized
                className="object-contain object-bottom drop-shadow-[-20px_30px_60px_rgba(0,0,0,0.25)] scale-[1.3] origin-bottom"
                priority
              />

              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-10 bg-brand-orange p-5 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white z-20 border-4 border-white"
              >
                <Award size={32} strokeWidth={3} />
                <span className="text-[12px] font-black uppercase tracking-tighter">100% EXPERT</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}