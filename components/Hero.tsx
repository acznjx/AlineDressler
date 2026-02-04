"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Flame, Target, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#FFFCF9] pt-24 pb-12 lg:py-0">
      
      {/* BACKGROUND DE CONTEXTO - Inteligente por dispositivo */}
      <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-10 lg:opacity-20 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000" 
          alt="Academy Performance"
          fill
          className="object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#FFFCF9]/90 to-[#FFFCF9]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LADO DA IMAGEM (Dra. Juliana) - Ordem 1 no mobile para impacto visual imediato */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative flex justify-center order-2 lg:order-1"
          >
            {/* Moldura Editorial Premium */}
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[4/5] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(234,88,12,0.2)] bg-orange-50/30 border-[8px] border-white">
              <Image 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000" 
                alt="Dra Juliana Monteiro - Alta Performance"
                fill
                className="object-cover mix-blend-multiply brightness-[1.05]"
                priority
              />
            </div>
            
            {/* Card Flutuante - Sincronizado para não quebrar no mobile */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 bottom-10 lg:-right-10 lg:bottom-20 bg-white/95 backdrop-blur-md p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-orange-50 max-w-[140px] lg:max-w-[180px] z-20"
            >
              <Target className="text-orange-600 mb-2" size={24} />
              <p className="text-zinc-950 font-black text-[11px] lg:text-[13px] leading-tight uppercase">
                Metabolismo <br/> de Elite <br/> em 21 dias.
              </p>
              <div className="mt-2 lg:mt-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-orange-500 fill-orange-500" />)}
              </div>
            </motion.div>
          </motion.div>

          {/* LADO DO TEXTO - Ordem 1 no Mobile */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm"
            >
              <Flame size={14} className="text-orange-600 fill-orange-600" />
              <span className="text-[10px] tracking-[0.3em] font-black uppercase text-orange-900/80">
                Performance Inabalável
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-[100px] font-serif text-zinc-900 leading-[0.9] tracking-tighter"
              >
                DOMINE SUA <br /> 
                <span className="italic font-light text-orange-600 font-sans">BIOLOGIA.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-zinc-500 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Chega de protocolos genéricos. Tenha acesso à nutrição de elite para máxima queima e clareza mental.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 items-center lg:items-center pt-4 w-full sm:w-auto"
            >
              <a 
                href="#contato" 
                className="w-full sm:w-auto group flex items-center justify-center gap-5 bg-orange-600 text-white px-10 py-5 lg:py-6 rounded-full text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:bg-zinc-900 hover:scale-[1.02] shadow-xl shadow-orange-200"
              >
                Ativar Protocolo
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-zinc-100 overflow-hidden relative shadow-sm">
                      <Image src={`https://i.pravatar.cc/100?u=${i + 60}`} alt="Paciente" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest text-center lg:text-left">+2.000 vidas transformadas</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Detalhe de Branding Lateral (Desktop only) */}
      <div className="absolute bottom-10 left-10 hidden xl:flex items-center gap-4 opacity-30">
        <div className="h-px w-16 bg-zinc-900" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-900">
          Elite Health Protocol • 2026
        </span>
      </div>
    </section>
  );
}