"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/** * NOTA: As respostas abaixo são sugestões fictícias para apresentação do layout.
 * Podem ser alteradas para refletir exatamente o seu método de trabalho.
 */
const perguntas = [
  {
    q: "Como funciona a nossa consulta?",
    a: "Eu realizo um mapeamento completo. Analiso sua bioquímica e rotina para desenhar um protocolo de estilo de vida exclusivo para sua biologia. Não entrego apenas uma dieta, mas uma estratégia de performance."
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Geralmente, meus pacientes sentem melhora na energia e foco nos primeiros 10 dias. Resultados metabólicos e estéticos mais profundos são consolidados em nosso primeiro ciclo de 90 dias."
  },
  {
    q: "O plano inclui suplementação?",
    a: "Sim. Caso eu identifique necessidade através dos seus exames, prescrevo suplementação personalizada focada em otimizar sua performance física e cognitiva."
  },
  {
    q: "Atende online ou presencial?",
    a: "Atendo em ambos os formatos. Minha consulta online possui a mesma profundidade, permitindo que eu acompanhe sua evolução de qualquer lugar do mundo com total suporte."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-[#0a0a0a] px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center gap-2 text-emerald-600">
            <HelpCircle size={16} />
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">Suporte</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-none">
            Dúvidas <span className="italic font-serif font-light text-emerald-600 lowercase">frequentes.</span>
          </h2>
        </div>
        
        <div className="space-y-3">
          {perguntas.map((item, i) => (
            <div 
              key={i} 
              className={`transition-all duration-300 rounded-2xl border ${
                openIndex === i 
                  ? "bg-zinc-50 dark:bg-white/5 border-emerald-500/20" 
                  : "bg-transparent border-zinc-100 dark:border-white/5"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 py-6 md:px-8 text-left flex justify-between items-start gap-4"
              >
                <span className={`text-base md:text-lg font-bold uppercase tracking-tight leading-tight ${
                  openIndex === i ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-700 dark:text-zinc-300"
                }`}>
                  {item.q}
                </span>
                <div className="shrink-0 mt-1">
                  {openIndex === i ? (
                    <Minus size={18} className="text-emerald-600" />
                  ) : (
                    <Plus size={18} className="text-zinc-400" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-6 md:px-8 text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-medium">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">
            Ainda tem dúvidas? 
            <a href="#contato" className="ml-2 text-zinc-900 dark:text-white border-b border-emerald-500/50 hover:text-emerald-600 transition-all">
              Me chame agora.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}