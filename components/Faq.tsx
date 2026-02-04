"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const perguntas = [
  {
    q: "Como funciona a consulta inicial?",
    a: "É um mapeamento completo. Analisamos sua bioquímica, rotina de sono, níveis de estresse e objetivos. Não entrego apenas uma dieta, mas um protocolo de estilo de vida desenhado para sua biologia única."
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "Mudanças na clareza mental e energia costumam aparecer nos primeiros 7 a 10 dias. Resultados estéticos e metabólicos profundos são consolidados ao longo do primeiro protocolo de 90 dias."
  },
  {
    q: "O acompanhamento inclui suplementação?",
    a: "Sim. Se houver necessidade baseada em exames ou objetivos de performance (biohacking), prescrevo suplementação personalizada com foco em otimizar sua função cognitiva e física."
  },
  {
    q: "Atende online ou apenas presencial?",
    a: "Atendo em ambos os formatos. A consulta online tem a mesma profundidade e eficácia, utilizando plataformas seguras que permitem o acompanhamento de pacientes em qualquer lugar do mundo."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFCF9] px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* CABEÇALHO SUTIL */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex justify-center items-center gap-2 text-orange-600 mb-2">
            <HelpCircle size={18} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-black">Esclarecimentos</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tighter">
            Dúvidas <span className="italic font-light text-orange-600">frequentes.</span>
          </h2>
        </div>
        
        {/* LISTA DE ACCORDIONS */}
        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <div 
              key={i} 
              className={`transition-all duration-500 rounded-3xl border ${
                openIndex === i 
                  ? "bg-white border-zinc-200 shadow-xl shadow-zinc-200/20" 
                  : "bg-transparent border-transparent hover:border-zinc-200"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-7 md:px-8 md:py-8 text-left flex justify-between items-center group"
              >
                <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${
                  openIndex === i ? "text-zinc-900" : "text-zinc-600 group-hover:text-zinc-900"
                }`}>
                  {item.q}
                </span>
                <div className={`flex-shrink-0 transition-all duration-500 ${openIndex === i ? "rotate-180 scale-110" : "rotate-0"}`}>
                  {openIndex === i ? (
                    <div className="p-2 bg-orange-600 rounded-full shadow-lg shadow-orange-600/20">
                      <Minus size={18} className="text-white" />
                    </div>
                  ) : (
                    <div className="p-2 bg-zinc-100 rounded-full group-hover:bg-zinc-200">
                      <Plus size={18} className="text-zinc-400" />
                    </div>
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-zinc-500 font-light leading-relaxed text-base md:text-lg max-w-[95%]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA FINAL SUTIL */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-widest">
            Ainda tem dúvidas? 
            <a href="#contato" className="ml-2 text-zinc-900 border-b border-orange-500/30 hover:text-orange-600 hover:border-orange-600 transition-all">
              Fale comigo diretamente.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}