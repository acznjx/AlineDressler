"use client";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";

const reviews = [
  {
    author: "Larissa Menezes",
    date: "há uma semana",
    quote: "A Dra. Juliana é incrível! Minha relação com a comida mudou completamente e o melhor de tudo foi ver minha energia voltando. O plano é super possível de seguir.",
    initial: "L"
  },
  {
    author: "Camila Rocha",
    date: "há um mês",
    quote: "Melhor investimento que fiz na minha saúde este ano. Atendimento humano, direto ao ponto e resultados que eu nunca tinha conseguido sozinha. Recomendo muito!",
    initial: "C"
  },
  {
    author: "Renata Fonseca",
    date: "há 2 meses",
    quote: "Excelente profissional. Me ajudou a entender o que realmente funciona para o meu corpo. Hoje me sinto muito mais disposta e confiante. Nota 10!",
    initial: "R"
  }
];

export function Results() {
  return (
    <section id="resultados" className="py-24 bg-[#FFFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CABEÇALHO ESTILO GOOGLE REVIEWS */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-zinc-200 pb-10 gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">O que dizem os pacientes</h2>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-600">4.9 de 5 estrelas</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <Check size={12} className="text-white" strokeWidth={4} />
            </div>
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Perfil Verificado</span>
          </div>
        </div>

        {/* GRID DE REVIEWS */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {/* Avatar Circular com Inicial */}
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-zinc-900 leading-none">{review.author}</p>
                    <p className="text-[11px] text-zinc-400 mt-1">Local Guide • {review.date}</p>
                  </div>
                </div>

                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed italic">
                  &quot;{review.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CHAMADA GOOGLE SUTIL */}
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="text-xs font-bold text-blue-600 hover:underline tracking-tight"
          >
            Ver todas as avaliações no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}