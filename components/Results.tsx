"use client";
import React from "react";
import Image from "next/image";
import { LayoutGrid } from "./ui/layout-grid"; 
import { Star, Droplets, Zap, DoorOpen, Construction } from "lucide-react";

// Definição das tipagens para evitar o erro de 'any'
interface SkeletonProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const content = {
  EN: {
    badge: "Proven Quality",
    title: "Project",
    subtitle: "Archive.",
    googleLabel: "Google Verified",
    wiring: { title: "Wiring", desc: "Wiring maintenance and socket installation." },
    doors: { title: "Doors", desc: "Technical adjustment of doors and locks." },
    drywall: { title: "Drywall", desc: "Plaster repair and wall finishing." },
    plumbing: { title: "Plumbing", desc: "Hydraulic repairs and leak containment." },
    reviews: [
      { name: "Carlos Andrade", date: "2 days ago", text: "Extremely detailed. Fixed all the wiring and doors perfectly." },
      { name: "Mariana Costa", date: "1 week ago", text: "Excellent service. The drywall finish was flawless!" },
      { name: "Roberto Silva", date: "1 month ago", text: "Fair price and honesty. Solves problems that others can't." },
    ]
  },
  PT: {
    badge: "Qualidade Comprovada",
    title: "Arquivo de",
    subtitle: "Projetos.",
    googleLabel: "Verificado no Google",
    wiring: { title: "Elétrica", desc: "Manutenção de fiação e instalação de tomadas." },
    doors: { title: "Portas", desc: "Ajuste técnico de portas e fechaduras." },
    drywall: { title: "Drywall", desc: "Reparo de gesso e acabamento de paredes." },
    plumbing: { title: "Hidráulica", desc: "Reparos hidráulicos e contenção de vazamentos." },
    reviews: [
      { name: "Carlos Andrade", date: "2 dias atrás", text: "Extremamente detalhista. Arrumou toda a fiação e as portas perfeitamente." },
      { name: "Mariana Costa", date: "1 semana atrás", text: "Excelente atendimento. O acabamento do drywall ficou impecável!" },
      { name: "Roberto Silva", date: "1 mês atrás", text: "Preço justo e honestidade. Resolve problemas que outros não conseguem." },
    ]
  },
  ES: {
    badge: "Calidad Probada",
    title: "Archivo de",
    subtitle: "Proyectos.",
    googleLabel: "Verificado en Google",
    wiring: { title: "Electricidad", desc: "Mantenimiento de cables e instalación de enchufes." },
    doors: { title: "Puertas", desc: "Ajuste técnico de puertas y cerraduras." },
    drywall: { title: "Drywall", desc: "Reparación de yeso y acabado de paredes." },
    plumbing: { title: "Fontanería", desc: "Reparaciones hidráulicas y contención de fugas." },
    reviews: [
      { name: "Carlos Andrade", date: "Hace 2 días", text: "Extremadamente detallista. Arregló todo el cableado y las puertas perfectamente." },
      { name: "Mariana Costa", date: "Hace 1 semana", text: "Excelente servicio. ¡El acabado del drywall quedó impecable!" },
      { name: "Roberto Silva", date: "Hace 1 mes", text: "Precio justo y honestidad. Resuelve problemas que otros no pueden." },
    ]
  }
};

export function Results({ lang = "EN" }: { lang: string }) {
  const t = content[lang as keyof typeof content] || content.EN;

  const cards = [
    { id: 1, content: <SkeletonWrapper title={t.wiring.title} icon={Zap} description={t.wiring.desc} />, className: "md:col-span-2", thumbnail: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" },
    { id: 2, content: <SkeletonWrapper title={t.doors.title} icon={DoorOpen} description={t.doors.desc} />, className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=1000" },
    { id: 3, content: <SkeletonWrapper title={t.drywall.title} icon={Construction} description={t.drywall.desc} />, className: "col-span-1", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" },
    { id: 4, content: <SkeletonWrapper title={t.plumbing.title} icon={Droplets} description={t.plumbing.desc} />, className: "md:col-span-2", thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" },
  ];

  return (
    <section id="results" className="py-16 md:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12 md:mb-20">
          <p className="text-[#ff5500] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            {t.badge}
          </p>
          <h2 className="text-4xl md:text-6xl font-[1000] text-zinc-900 uppercase tracking-tighter leading-[0.9]">
            {t.title} <br />
            <span className="text-zinc-300 italic">{t.subtitle}</span>
          </h2>
        </div>

        <div className="h-auto md:h-225 w-full mb-20">
          <LayoutGrid cards={cards} />
        </div>

        <div className="pt-16 border-t-2 border-zinc-50">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-zinc-900 text-white w-12 h-12 flex items-center justify-center font-black italic shadow-lg">G</div>
            <div>
              <p className="text-xs font-black uppercase text-zinc-900 tracking-widest">{t.googleLabel}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#fbbc05] fill-[#fbbc05]" />)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {t.reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold bg-zinc-400 shadow-inner">
                    {rev.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900">{rev.name}</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">{rev.date}</p>
                  </div>
                </div>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed italic">
                  &quot;{rev.text}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SkeletonWrapper = ({ title, description, icon: Icon }: SkeletonProps) => (
  <div className="bg-white p-8 md:p-12 h-full w-full flex flex-col justify-center border-t-12 border-[#ff5500]">
    <Icon className="text-[#ff5500] mb-6" size={44} strokeWidth={2.5} />
    <h3 className="font-[1000] text-4xl text-zinc-900 uppercase italic leading-none mb-4">{title}</h3>
    <p className="font-bold text-zinc-500 uppercase text-sm md:text-base tracking-tight leading-snug">
      {description}
    </p>
  </div>
);