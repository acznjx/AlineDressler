"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart, BookOpen, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-32 bg-white dark:bg-[#020a13] overflow-hidden transition-colors duration-500">
      
      <div className="absolute top-5 left-5 opacity-[0.05] dark:opacity-[0.03] select-none pointer-events-none">
        <span className="text-7xl md:text-[12vw] font-serif italic text-zinc-900 dark:text-white">Justiça</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* FOTO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-[320px] lg:max-w-none lg:w-5/12 relative"
          >
            <div className="relative aspect-3/4 border border-brand-gold/20 p-2">
              <div className="relative w-full h-full overflow-hidden shadow-lg bg-zinc-100 dark:bg-zinc-900">
                <Image 
                  src="https://i.imgur.com/t5qBNin.png" 
                  alt="Jéssika Mourão"
                  fill
                  className="object-cover grayscale-30 hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* CONTEÚDO */}
          <div className="w-full lg:w-7/12 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="h-px w-8 bg-brand-gold/50" />
                <span className="text-brand-gold text-[9px] font-bold uppercase tracking-[0.4em]">Trajetória & Valores</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-white tracking-tight transition-colors">
                Jéssika <span className="font-serif italic text-brand-gold">Mourão</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              <p>
                Natural de Fortaleza e gaúcha de coração, estabeleci minha base em <span className="text-zinc-900 dark:text-white font-medium">Cachoeirinha (RS)</span>, onde uno o rigor técnico à advocacia humanizada. Minha atuação é pautada pela ética cristã e pelo compromisso inegociável com a defesa do patrimônio e da dignidade de quem confia em meu trabalho.
              </p>

              <p>
                Esposa e mãe, entendo que por trás de cada processo existe uma família e um futuro a ser preservado. Por isso, não entrego apenas defesas jurídicas; entrego estratégia e tranquilidade para que você possa focar no que realmente importa.
              </p>
              
              <p className="italic border-l border-brand-gold/30 pl-4 lg:pl-6 text-zinc-700 dark:text-zinc-300">
                &quot;Acredito que o direito, quando exercido com fé e especialização, é a ferramenta mais poderosa para restabelecer o equilíbrio e a justiça diante de abusos.&quot;
              </p>
            </motion.div>

            {/* Grid de Ativos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center lg:items-start gap-2">
                <MapPin size={16} className="text-brand-gold" strokeWidth={1} />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Base em Cachoeirinha / RS</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <Heart size={16} className="text-brand-gold" strokeWidth={1} />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Valores Cristãos</span>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2 col-span-2 md:col-span-1">
                <BookOpen size={16} className="text-brand-gold" strokeWidth={1} />
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Estratégia Técnica</span>
              </div>
            </div>

            {/* CTA Final */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <a 
                href="https://wa.me/5585988781031" 
                className="group flex items-center gap-3 text-zinc-900 dark:text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:text-brand-gold transition-colors"
              >
                Conhecer minha atuação
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="hidden sm:block h-8 w-px bg-zinc-200 dark:bg-white/10" />
              
              <div className="text-[9px] text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em] font-medium">
                Atendimento Presencial e Digital
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}