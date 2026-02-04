"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Trophy, ArrowRight, Check } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#FFFCF9] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* LADO DA FOTO - Impacto Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 relative"
          >
            {/* Elemento de design atrás da foto */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl opacity-60" />
            
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
                alt="Especialista em Performance"
                fill
                className="object-cover"
                priority
              />
              
              {/* Badge de Autoridade Flutuante */}
              <div className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <Trophy size={14} />
                <span className="text-[10px] font-black uppercase tracking-tighter">Referência em Alta Performance</span>
              </div>
            </div>

            {/* Card de Prova Social Humano */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-5 rounded-2xl shadow-xl border border-orange-50 max-w-[220px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Sparkles key={i} size={12} className="text-orange-500 fill-orange-500" />)}
              </div>
              <p className="text-xs font-medium text-zinc-600 italic leading-relaxed">
                &quot;O método da Juliana me devolveu o foco que eu não tinha há anos.&quot;
              </p>
            </div>
          </motion.div>

          {/* LADO DO TEXTO - Copy Persuasivo */}
          <div className="w-full lg:w-7/12 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-[0.2em]"
              >
                Resultados Inegociáveis
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-serif leading-[0.95] tracking-tighter text-zinc-950">
                Pare de aceitar uma biologia <span className="italic font-light text-orange-600">limitada.</span>
              </h2>
              
              <p className="text-zinc-500 text-lg lg:text-2xl font-light leading-relaxed">
                Você já tentou de tudo e continua cansado? O erro não está em você, mas em seguir protocolos feitos para a média. Eu sou <strong>Juliana Monteiro</strong> e eu projeto o fim do seu ciclo de tentativas frustradas.
              </p>
            </div>

            {/* Pontos de Convencimento */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { t: "Fim do Efeito Sanfona", d: "Reprogramação metabólica celular real." },
                { t: "Clareza Mental", d: "Nutrição desenhada para o seu cérebro." },
                { t: "Energia Infinita", d: "Acorde pronto para o dia, sem depender de café." },
                { t: "Protocolo de Elite", d: "O mesmo método usado por CEOs e atletas." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-tight">{item.t}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chamada para Ação */}
            <div className="pt-6 flex flex-col sm:flex-row gap-6 items-center">
              <a 
                href="#contato" 
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-zinc-950 text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition-all hover:scale-105 shadow-xl"
              >
                Quero meu protocolo
                <ArrowRight size={16} />
              </a>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                Vagas limitadas para este mês
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}