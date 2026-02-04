"use client";
import { motion } from "framer-motion";
import { Apple, Zap, Target, ArrowUpRight } from "lucide-react";

export function Servicos() {
  const items = [
    { 
      title: "Protocolo Individual", 
      detail: "Planejamento nutricional de precisão, desenhado exclusivamente para sua bioquímica, rotina e objetivos de alta performance.",
      icon: <Target size={24} strokeWidth={1.5} />,
      tag: "Exclusividade"
    },
    { 
      title: "Acompanhamento Elite", 
      detail: "Suporte contínuo para ajustes em tempo real, garantindo que sua evolução nunca estagne, seja no esporte ou na vida executiva.",
      icon: <Zap size={24} strokeWidth={1.5} />,
      tag: "Performance"
    },
    { 
      title: "Biohacking Nutricional", 
      detail: "Estratégias avançadas de suplementação e nutrição funcional para otimizar sua clareza mental e vitalidade metabólica.",
      icon: <Apple size={24} strokeWidth={1.5} />,
      tag: "Inovação"
    }
  ];

  return (
    <section id="metodo" className="py-24 lg:py-32 bg-[#FFFCF9] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO SUTIL E HUMANO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.4em] text-orange-600 font-black">Frentes de Atuação</span>
            <h2 className="text-5xl md:text-7xl font-serif text-zinc-900 leading-[0.9] tracking-tighter">
              Engenharia da <br />
              <span className="italic font-light text-orange-600">nutrição.</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-400 font-medium leading-relaxed border-l border-zinc-200 pl-6 hidden md:block">
            Métodos baseados em ciência rigorosa para quem busca resultados extraordinários e domínio total sobre o próprio corpo.
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white hover:bg-zinc-900 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-orange-900/20 border border-zinc-100 hover:border-zinc-900"
            >
              <div className="flex flex-col h-full gap-8">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <ArrowUpRight className="text-zinc-200 group-hover:text-orange-500 transition-colors" size={20} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-zinc-900 group-hover:text-white transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed text-sm lg:text-base">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-50 group-hover:border-zinc-800 transition-colors">
                  <span className="text-[10px] uppercase tracking-widest text-orange-600 font-black px-4 py-2 bg-orange-50 group-hover:bg-zinc-800 group-hover:text-orange-400 rounded-full transition-colors">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MENSAGEM DE RODAPÉ SUTIL */}
        <div className="mt-16 text-center">
          <p className="text-[11px] font-bold text-zinc-300 uppercase tracking-[0.3em]">
            Protocolos atualizados • 2026
          </p>
        </div>
      </div>
    </section>
  );
}