"use client";
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  EN: {
    badge: "Support",
    title: "Common",
    subtitle: "Inquiries.",
    footer: "Still have questions? Contact us",
    data: [
      { q: "What services do you provide?", a: "We specialize in full interior finishing, structural repairs, and master-level home maintenance. Our team utilizes industrial-grade equipment for precision execution." },
      { q: "Do you provide a warranty?", a: "Every project is backed by a structural guarantee. We build for longevity and compliance with safety standards. Quality is our baseline." },
      { q: "How do I get a quote?", a: "Submit your project details via WhatsApp or Email. We provide transparent, itemized estimates without hidden fees or overhead surprises." },
      { q: "What is your service area?", a: "Our primary operations are based in the local area. For large-scale developments, we accept projects across the entire region." }
    ]
  },
  PT: {
    badge: "Suporte",
    title: "Dúvidas",
    subtitle: "Frequentes.",
    footer: "Ainda tem dúvidas? Entre em contato",
    data: [
      { q: "Quais serviços vocês oferecem?", a: "Somos especialistas em acabamento interno completo, reparos estruturais e manutenção residencial de alto padrão. Nossa equipe utiliza equipamentos industriais para execução de precisão." },
      { q: "Vocês oferecem garantia?", a: "Cada projeto conta com garantia estrutural. Construímos para durabilidade e conformidade com as normas de segurança. Qualidade é nossa base." },
      { q: "Como solicito um orçamento?", a: "Envie os detalhes do seu projeto via WhatsApp ou E-mail. Fornecemos orçamentos transparentes e detalhados, sem taxas ocultas ou surpresas." },
      { q: "Qual a área de atendimento?", a: "Nossas operações principais são locais. Para projetos de grande escala, aceitamos serviços em toda a região metropolitana." }
    ]
  },
  ES: {
    badge: "Soporte",
    title: "Dudas",
    subtitle: "Comunes.",
    footer: "¿Aún tienes dudas? Contáctanos",
    data: [
      { q: "¿Qué servicios ofrecen?", a: "Nos especializamos en acabados de interiores completos, reparaciones estructurales y mantenimiento del hogar de nivel maestro. Nuestro equipo utiliza equipos de grado industrial." },
      { q: "¿Ofrecen garantía?", a: "Cada proyecto está respaldado por una garantía estructural. Construimos para la longevidad y el cumplimiento de las normas de seguridad." },
      { q: "¿Cómo obtengo un presupuesto?", a: "Envíe los detalles de su proyecto por WhatsApp o correo electrónico. Proporcionamos estimaciones transparentes y detalladas sin tarifas ocultas." },
      { q: "¿Cuál es su área de servicio?", a: "Nuestras operaciones principales son locales. Para desarrollos a gran escala, aceptamos proyectos en toda la región." }
    ]
  }
};

export function Faq({ lang = "EN" }: { lang: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = translations[lang as keyof typeof translations] || translations.EN;

  return (
    <section id="faq" className="py-16 md:py-32 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER - ALINHADO À ESQUERDA (PADRÃO DO SITE) */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <p className="text-[#ff5500] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            {t.badge}
          </p>
          <h2 className="text-4xl md:text-6xl font-[1000] text-zinc-900 uppercase tracking-tighter leading-[0.9]">
            {t.title} <br />
            <span className="text-zinc-300 italic">{t.subtitle}</span>
          </h2>
        </div>

        {/* FAQ CONTAINER - CENTRALIZADO NA PÁGINA */}
        <div className="max-w-3xl mx-auto"> 
          <div className="border-t-2 border-zinc-900">
            {t.data.map((item, i) => (
              <div key={i} className="border-b border-zinc-100">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-8 md:py-10 text-left flex justify-between items-center gap-6 group transition-all"
                >
                  <span className={`text-xl md:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                    openIndex === i ? "text-[#ff5500]" : "text-zinc-900 group-hover:text-zinc-500"
                  }`}>
                    {item.q}
                  </span>
                  
                  <div className={`shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-500 ${
                    openIndex === i ? "rotate-0 text-[#ff5500]" : "rotate-90 text-zinc-300 group-hover:text-zinc-900"
                  }`}>
                    {openIndex === i ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-10">
                        <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed border-l-4 border-[#ff5500] pl-6">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* FOOTER CALLOUT CENTRALIZADO COM O FAQ */}
          <div className="mt-16 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-[#ff5500] transition-colors group"
            >
              {t.footer}
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}