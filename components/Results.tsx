"use client";
import { motion } from "framer-motion";
import { Star, Check, Quote } from "lucide-react";

const reviewsJuridicos = [
  {
    author: "Ricardo S.",
    date: "há uma semana",
    quote: "A Dra. Jéssika conseguiu interromper uma busca e apreensão que parecia inevitável. Estratégia impecável.",
    initial: "R"
  },
  {
    author: "Marta Oliveira",
    date: "há um mês",
    quote: "Excelente profissional. Conseguiu reduzir minha dívida bancária em 70% através de uma análise técnica dos juros abusivos.",
    initial: "M"
  },
  {
    author: "Empresa Vision",
    date: "há 2 meses",
    quote: "Segurança jurídica total para o nosso patrimônio. O atendimento é direto, transparente e de altíssimo nível.",
    initial: "V"
  }
];

export function Results() {
  return (
    <section id="resultados" className="py-20 lg:py-32 bg-white dark:bg-[#020a13] overflow-hidden border-t border-zinc-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO PROFISSIONAL */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20 border-b border-zinc-100 dark:border-white/5 pb-12 gap-8"
        >
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-7xl font-light text-zinc-900 dark:text-white uppercase tracking-tight leading-[1.1]">
              Resultados <br />
              <span className="italic font-serif text-brand-gold">Estratégicos.</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Avaliações Verificadas</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-zinc-50 dark:bg-white/5 px-8 py-4 border border-zinc-200 dark:border-white/10">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
              <Check size={14} className="text-brand-navy" strokeWidth={3} />
            </div>
            <span className="text-[10px] font-black text-zinc-900 dark:text-white uppercase tracking-[0.2em]">Google Reviews</span>
          </div>
        </motion.div>

        {/* ÁREA DE CARROSSEL / GRID */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
            {reviewsJuridicos.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="min-w-[85vw] md:min-w-0 snap-center bg-zinc-50/50 dark:bg-white/2 p-8 md:p-10 border border-zinc-100 dark:border-white/5 flex flex-col justify-between relative group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="shrink-0 w-12 h-12 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-serif italic text-xl">
                        {review.initial}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-widest">{review.author}</p>
                        <p className="text-[9px] text-zinc-500 uppercase mt-1">{review.date}</p>
                      </div>
                    </div>
                    <Quote size={24} className="text-brand-gold opacity-10 group-hover:opacity-30 transition-opacity" />
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={10} className="text-brand-gold fill-brand-gold" />
                    ))}
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed font-light italic">
                    &quot;{review.quote}&quot;
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* INDICADOR MOBILE */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-4">
            {reviewsJuridicos.map((_, i) => (
              <div key={i} className={`h-1 transition-all ${i === 0 ? 'w-8 bg-brand-gold' : 'w-2 bg-zinc-200 dark:bg-white/10'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}