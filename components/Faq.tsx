"use client";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const perguntas = [
  {
    q: "O que é a revisão de contrato bancário?",
    a: "É uma análise técnica detalhada das cláusulas do seu contrato para identificar taxas abusivas, juros capitalizados ilegalmente e encargos que ferem o Código de Defesa do Consumidor, visando a redução do saldo devedor."
  },
  {
    q: "Como impedir a busca e apreensão de veículos?",
    a: "Através de medidas liminares e defesas estratégicas fundamentadas em irregularidades na notificação ou no contrato, é possível manter a posse do bem enquanto discutimos o equilíbrio financeiro da dívida em juízo."
  },
  {
    q: "A consultoria atende em todo o Brasil?",
    a: "Sim. Graças à digitalização do sistema jurídico brasileiro, nossa atuação é 100% online, permitindo representar seus interesses em qualquer estado com a mesma eficiência e rigor técnico."
  },
  {
    q: "Quais documentos são necessários para análise?",
    a: "Inicialmente, precisamos do contrato bancário (ou número do contrato), extratos de pagamento e seus documentos pessoais. Caso não possua o contrato, orientamos como solicitá-lo formalmente à instituição."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white dark:bg-[#020a13] px-6 border-t border-zinc-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center items-center gap-2 text-brand-gold">
            <HelpCircle size={16} />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Consultoria</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
            Dúvidas <span className="italic font-serif text-brand-gold">Frequentes.</span>
          </h2>
        </div>
        
        {/* LISTA DE ACORDEÃO */}
        <div className="space-y-4">
          {perguntas.map((item, i) => (
            <div 
              key={i} 
              className={`transition-all duration-500 border-b ${
                openIndex === i 
                  ? "border-brand-gold/50 bg-zinc-50/50 dark:bg-white/2" 
                  : "border-zinc-100 dark:border-white/10 bg-transparent"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-7 text-left flex justify-between items-center gap-6"
              >
                <span className={`text-sm md:text-base font-bold uppercase tracking-widest transition-colors duration-300 ${
                  openIndex === i ? "text-brand-gold" : "text-zinc-600 dark:text-zinc-400"
                }`}>
                  {item.q}
                </span>
                <div className="shrink-0">
                  {openIndex === i ? (
                    <Minus size={18} className="text-brand-gold" />
                  ) : (
                    <Plus size={18} className="text-zinc-300 dark:text-white/20" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="pb-8 text-zinc-600 dark:text-zinc-500 text-sm md:text-base font-light leading-relaxed italic border-l border-brand-gold/30 ml-1 pl-6">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* FOOTER DO FAQ */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">
            Necessita de uma análise específica? 
            <a 
              href="https://wa.me/5585988781031" 
              className="ml-3 text-brand-gold border-b border-brand-gold/30 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-900 dark:hover:border-white transition-all pb-1"
            >
              Fale com a Dra. Jéssika agora.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}