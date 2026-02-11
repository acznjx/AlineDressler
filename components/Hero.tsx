"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react"; 

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#020a13] transition-colors duration-500">
      
      {/* FUNDO: Imagem de Alta Qualidade */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070" 
          alt="Escritório de Advocacia"
          fill
          className="object-cover opacity-20 dark:opacity-30 blur-sm scale-105"
          priority
        />
        {/* Camadas de Gradiente - Atualizadas para Tailwind v4 (linear-to-b/r) */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white dark:from-[#020a13] dark:to-[#020a13]" />
        <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-white dark:from-[#020a13] dark:to-[#020a13]" />
      </div>

      <div className="max-w-5xl mx-auto w-full px-6 relative z-10 text-center">
        
        {/* Linha Decorativa Superior */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-brand-gold/30 rounded-full bg-brand-gold/5">
            <ShieldCheck size={14} className="text-brand-gold" />
            <span className="text-[10px] md:text-[11px] tracking-[0.4em] font-bold uppercase text-brand-gold">
              Direito Bancário Estratégico
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-light text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
              Proteja seu <br /> 
              <span className="font-serif italic text-brand-gold">Patrimônio</span>
            </h1>
            
            <div className="h-px w-24 bg-brand-gold/40 mx-auto my-8" />

            <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
              &quot;Advocacia de alto impacto para quem busca segurança jurídica e inteligência estratégica contra abusos bancários.&quot;
            </p>
          </div>

          {/* Botão de Ação Centralizado */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-10"
          >
            <a 
              href="https://wa.me/5585988781031" 
              className="group relative inline-flex items-center gap-4 bg-brand-gold text-brand-navy dark:text-brand-navy px-10 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-brand-navy hover:shadow-[0_0_40px_rgba(197,165,114,0.4)]"
            >
              Agendar Consultoria Especializada
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elementos Visuais de Canto */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="text-zinc-300 dark:text-white/10 text-[10px] tracking-[0.8em] uppercase vertical-text">
          Exclusividade • Proteção • Estratégia
        </p>
      </div>
    </section>
  );
}