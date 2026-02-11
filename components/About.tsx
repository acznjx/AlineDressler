"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Landmark } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-20 lg:py-32 bg-white dark:bg-[#020a13] overflow-hidden transition-colors duration-500">
      
      {/* Detalhe sutil ao fundo */}
      <div className="absolute top-5 left-5 opacity-[0.04] select-none pointer-events-none">
        <span className="text-7xl md:text-[10vw] font-serif italic text-zinc-900 dark:text-white">Estratégia</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* FOTO - Ajustado max-w-85 e aspect-4/5 conforme sugerido */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-85 lg:max-w-none lg:w-5/12 relative"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-900">
              <Image 
                src="https://i.imgur.com/t5qBNin.png" 
                alt="Dra. Jéssika Mourão"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
            </div>
          </motion.div>

          {/* CONTEÚDO */}
          <div className="w-full lg:w-7/12 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-3"
            >
              <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em]">Perfil Profissional</p>
              <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-white tracking-tight transition-colors">
                Jéssika <span className="font-serif italic text-emerald-600">Mourão</span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              <p>
                Estabelecida em <strong>Cachoeirinha (RS)</strong>, atuo com foco na proteção patrimonial, oferecendo assessoria jurídica estratégica para resguardar bens, direitos e estruturas familiares.
              </p>

              <p>
                Uno rigor técnico, planejamento jurídico e visão preventiva para proteger aquilo que foi construído com esforço. Minha atuação é pautada por ética inegociável, análise minuciosa de riscos e construção de estratégias jurídicas sólidas, sempre voltadas à preservação e <strong>blindagem do patrimônio</strong>.
              </p>

              <p>
                Cada caso é conduzido com posicionamento firme, clareza nas orientações e soluções estruturadas para garantir segurança jurídica, previsibilidade e estabilidade a longo prazo.
              </p>
              
              <p className="italic border-l-2 border-emerald-600/30 pl-5 text-zinc-700 dark:text-zinc-300 font-medium">
                &quot;Meu compromisso é claro: proteger hoje para garantir o amanhã.&quot;
              </p>
            </motion.div>

            {/* DIFERENCIAIS TÉCNICOS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Blindagem Patrimonial</span>
              </div>
              <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                <Landmark size={18} className="text-emerald-600 shrink-0" />
                <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Estruturas Familiares</span>
              </div>
              <div className="flex items-center lg:items-start gap-3 justify-center lg:justify-start">
                <ArrowRight size={18} className="text-emerald-600 shrink-0" />
                <span className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">Segurança Jurídica</span>
              </div>
            </div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <a 
                href="https://wa.me/5551984998986" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 dark:bg-emerald-600 text-white dark:text-zinc-950 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 dark:hover:bg-white transition-all shadow-xl"
              >
                Agendar Assessoria
              </a>
              <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-[0.2em]">
                Cachoeirinha • Rio Grande do Sul
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}