"use client";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

interface AboutProps {
  lang: string;
}

export function About({ lang }: AboutProps) {
  const content = {
    EN: {
      title: "RAW SKILL. NO BS.",
      p: "I deliver results, not excuses. Master-level finishing and structural integrity in every single project. Dedicated to excellence since day one.",
      list: ["Certified Expert", "Master Equipment", "Clean Workspace"],
      cta: "GET STARTED"
    },
    PT: {
      title: "FORÇA. SEM FRESCURA.",
      p: "Entrego resultados, não desculpas. Acabamento de mestre e integridade em cada projeto. Dedicação total do início ao fim.",
      list: ["Especialista Certificado", "Equipamento de Ponta", "Obra Limpa"],
      cta: "SOLICITAR ORÇAMENTO"
    },
    ES: {
      title: "FUERZA. SIN RODEOS.",
      p: "Entrego resultados, no excusas. Acabado maestro e integridad en cada proyecto. Dedicación total de principio a fin.",
      list: ["Experto Certificado", "Equipo Maestro", "Obra Limpia"],
      cta: "SOLICITAR PRESUPUESTO"
    }
  }[lang as "EN" | "PT" | "ES"] || {
    title: "RAW SKILL. NO BS.",
    p: "I deliver results, not excuses.",
    list: ["Certified Expert", "Master Equipment", "Clean Workspace"],
    cta: "GET STARTED"
  };

  return (
    <section id="about" className="py-20 bg-white text-zinc-900 border-t border-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[#ff5500] font-black text-xs uppercase tracking-widest">
                [ 01 — THE CRAFTSMAN ]
              </p>
              <h2 className="text-[12vw] lg:text-[6vw] font-[1000] leading-[0.9] tracking-tighter uppercase italic">
                {content.title}
              </h2>
            </div>

            <p className="text-xl lg:text-2xl text-zinc-500 font-medium leading-snug max-w-xl">
              {content.p}
            </p>

            <div className="space-y-3">
              {content.list.map((item) => (
                <div key={item} className="flex items-center gap-3 font-black text-xs uppercase tracking-tight">
                  <div className="w-5 h-5 bg-[#ff5500] flex items-center justify-center text-white">
                    <Check size={14} strokeWidth={4} />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <button className="flex items-center gap-6 bg-zinc-900 text-white px-8 py-6 font-black uppercase text-sm tracking-widest hover:bg-[#ff5500] transition-colors group">
              {content.cta}
              <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="hidden lg:block relative aspect-square">
            {/* Unsplash precisa estar configurado no next.config.mjs ou use uma URL local se der erro de hostname */}
            <Image 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" 
              alt="Construction site"
              fill
              unoptimized // Adicionado temporariamente para evitar erros de domínio no build
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500 border-[20px] border-zinc-50"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}