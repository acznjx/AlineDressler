"use client";
import { motion } from "framer-motion";
import { Star, Check, Quote } from "lucide-react";

const reviewsFicticios = [
  {
    author: "Paciente Exemplo A",
    date: "há uma semana",
    quote: "Minha disposição mudou completamente após o primeiro protocolo. O diferencial da Aline é a base científica.",
    initial: "A"
  },
  {
    author: "Paciente Exemplo B",
    date: "há um mês",
    quote: "Melhor investimento que fiz. Atendimento técnico, direto ao ponto e resultados que eu nunca tinha conseguido sozinha.",
    initial: "B"
  },
  {
    author: "Paciente Exemplo C",
    date: "há 2 meses",
    quote: "A abordagem baseada em dados e exames me deu segurança. Hoje me sinto muito mais confiante.",
    initial: "C"
  }
];

export function Results() {
  return (
    <section id="resultados" className="py-20 lg:py-32 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden border-t border-zinc-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 border-b border-zinc-100 dark:border-white/5 pb-10 gap-8 transition-colors"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-black text-zinc-950 dark:text-white uppercase tracking-tighter leading-[0.9] transition-colors">
              Performance <br />
              <span className="italic font-serif font-light text-emerald-600 lowercase">comprovada.</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-emerald-500 fill-emerald-500" />
                ))}
              </div>
              <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-widest transition-colors">Feedback Verificado</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-3 bg-zinc-50 dark:bg-white/5 px-6 py-3 rounded-full border border-zinc-100 dark:border-white/10 shadow-sm transition-colors">
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
              <Check size={12} className="text-white" strokeWidth={4} />
            </div>
            <span className="text-[10px] font-black text-zinc-500 dark:text-zinc-300 uppercase tracking-[0.2em] transition-colors">Google Business</span>
          </div>
        </motion.div>

        {/* ÁREA DE CARROSSEL MOBILE / GRID DESKTOP */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
            {reviewsFicticios.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="min-w-[80vw] sm:min-w-[60vw] md:min-w-0 snap-center bg-zinc-50 dark:bg-white/5 p-6 md:p-8 rounded-[2rem] border border-zinc-100 dark:border-white/5 flex flex-col justify-between relative group transition-colors"
              >
                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-black text-xs transition-colors">
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-xs font-black text-zinc-900 dark:text-white uppercase tracking-tight transition-colors">{review.author}</p>
                        <p className="text-[9px] text-zinc-400 font-bold uppercase mt-0.5 transition-colors">{review.date}</p>
                      </div>
                    </div>
                    <Quote size={20} className="text-emerald-500/10 group-hover:text-emerald-500/30 transition-colors" />
                  </div>

                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={12} className="text-emerald-500 fill-emerald-500" />
                    ))}
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium italic transition-colors">
                    &quot;{review.quote}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* INDICADOR DE SCROLL (MOBILE ONLY) */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-2">
            {reviewsFicticios.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === 0 ? 'w-6 bg-emerald-500' : 'w-1.5 bg-zinc-200 dark:bg-zinc-800'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}