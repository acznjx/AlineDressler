"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // O efeito que você gostou: o texto desliza conforme o scroll
  const textX = useTransform(scrollY, [0, 800], [0, -200]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-svh flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-500 pt-24 lg:pt-0"
    >
      {/* BACKGROUND ANIMADO - Orbes pulsando */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[80%] h-[60%] bg-emerald-400 dark:bg-emerald-900/40 rounded-full blur-[80px] lg:blur-[120px]"
        />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* TEXTO GIGANTE EM MOVIMENTO (PARALLAX) */}
      <motion.div 
        style={{ x: textX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none z-10 hidden lg:block"
      >
        <h2 className="text-[25vw] font-black text-zinc-950/[0.03] dark:text-white/[0.03] uppercase tracking-tighter transition-colors">
          Aline Dressler
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-20 px-6 py-8 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* IMAGEM COM EFEITO DE COR NO TOQUE/HOVER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex justify-center order-1"
          >
            <div className="relative w-[75vw] max-w-[300px] lg:max-w-112.5 aspect-4/5 group cursor-pointer">
              <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
              
              <div className="relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 shadow-2xl transition-colors">
                <Image 
                  src="https://i.imgur.com/NyDbNT3.png" 
                  alt="Aline Dressler"
                  fill
                  className="object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-active:grayscale-0"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="w-full lg:w-3/5 space-y-8 lg:space-y-10 text-center lg:text-left order-2">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-white/5 border border-emerald-100 dark:border-white/10 transition-colors">
                <Zap size={12} className="text-emerald-600 dark:text-emerald-400 fill-current" />
                <span className="text-[10px] tracking-[0.2em] font-black uppercase text-emerald-800 dark:text-emerald-100">
                  Performance Nutrition
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-zinc-900 dark:text-white leading-[0.95] tracking-tighter transition-colors">
                LEVEL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 italic font-serif">UP.</span>
              </h1>

              <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-xl font-light max-w-md mx-auto lg:mx-0 leading-relaxed transition-colors">
                Transforme sua fisiologia com protocolos baseados em ciência e resultados reais.
              </p>
            </div>

            <div className="flex flex-col gap-10 lg:gap-8 pt-4 lg:pt-0">
              <a 
                href="https://linktr.ee/alinedressler"
                target="_blank"
                className="w-full lg:w-fit group flex items-center justify-center gap-6 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-emerald-500/20"
              >
                Start Protocol
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>

              {/* INFO RODAPÉ */}
              <div className="flex justify-center lg:justify-start gap-8 border-t lg:border-none border-zinc-100 dark:border-white/5 pt-8 lg:pt-0 transition-colors">
                <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest leading-none mb-2">CRN2</p>
                  <p className="text-zinc-900 dark:text-white font-serif italic text-xl lg:text-2xl transition-colors">18331</p>
                </div>
                <div className="w-px bg-zinc-200 dark:bg-white/10 h-10 self-center transition-colors" />
                <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest leading-none mb-2">Status</p>
                  <p className="text-zinc-900 dark:text-white font-serif italic text-xl lg:text-2xl transition-colors">Active</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}