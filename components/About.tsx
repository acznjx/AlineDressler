"use client";
import { motion } from "framer-motion"; // Corrigido para a importação padrão
import Image from "next/image";
import { Trophy, ArrowRight, Beaker, Dumbbell } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-32 bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-white transition-colors duration-500 overflow-hidden">
      
      {/* Texto de fundo decorativo */}
      <div className="absolute top-0 right-0 p-10 opacity-5 hidden lg:block">
        <span className="text-[12vw] font-black leading-none uppercase tracking-tighter select-none">Ciência</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LADO DA FOTO */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 relative group"
          >
            {/* Class rounded-4xl substituindo rounded-[2rem] */}
            <div className="relative aspect-4/5 rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
              <Image 
                src="https://i.imgur.com/NyDbNT3.png" 
                alt="Aline Dressler"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              <div className="absolute top-6 left-6 bg-emerald-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl">
                <Trophy size={14} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-widest">Mestre em Química</span>
              </div>
            </div>

            {/* Cards de tamanho canônico: max-w-45 e lg:max-w-50 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-2 lg:-right-10 bg-white dark:bg-zinc-900 p-5 lg:p-6 rounded-2xl shadow-2xl border border-zinc-100 dark:border-white/5 max-w-45 lg:max-w-50"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-1">Meu Diferencial</p>
              <p className="text-xs font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
                Aplico a ciência exata na sua nutrição.
              </p>
            </motion.div>
          </motion.div>

          {/* LADO DO TEXTO */}
          <div className="w-full lg:w-7/12 space-y-10 lg:space-y-12 pt-10 lg:pt-0">
            <div className="space-y-6 text-center lg:text-left">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-white/5 border border-emerald-100 dark:border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em]">Prazer, Aline</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter text-zinc-950 dark:text-white uppercase">
                Aline <br /> 
                <span className="text-emerald-600 italic font-serif font-light lowercase">dressler</span>
              </h2>
              
              <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                Sou Nutricionista e Mestre em Química. Minha missão é unir o rigor do conhecimento científico com uma nutrição consciente, projetando protocolos individuais para quem não aceita resultados comuns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  t: "Minha Base", 
                  d: "Utilizo meu mestrado para entender sua fisiologia em nível molecular.",
                  icon: <Beaker size={16} />
                },
                { 
                  t: "Minha Entrega", 
                  d: "Desenvolvo estratégias reais para o seu rendimento e qualidade de vida.",
                  icon: <Dumbbell size={16} />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group p-5 rounded-2xl bg-zinc-50 dark:bg-white/5 transition-colors">
                  {/* shrink-0 substituindo flex-shrink-0 */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    {item.icon}
                  </div>
                  <div className="space-y-1 text-left">
                    <h4 className="font-black text-zinc-900 dark:text-white text-[12px] uppercase tracking-wider">{item.t}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-8 items-center justify-center lg:justify-start border-t border-zinc-100 dark:border-white/5">
              <a 
                href="https://linktr.ee/alinedressler" 
                target="_blank"
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Conheça meu método
                <ArrowRight size={18} />
              </a>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    CRN2-18331
                </span>
                <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">Agenda aberta para este mês</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}