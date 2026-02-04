"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/5551999999999" // Atualize com o seu número real
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center group"
    >
      {/* Tooltip Humano e Elegante */}
      <span className="mr-4 bg-zinc-900/95 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 font-black shadow-2xl pointer-events-none border border-white/10 hidden md:block">
        Falar com Juliana
      </span>

      <div className="relative flex items-center justify-center">
        {/* Efeito de Pulso Sutil no Laranja */}
        <span className="absolute inset-0 rounded-2xl bg-orange-500 animate-ping opacity-20" />
        
        {/* Botão Principal */}
        <div className="relative z-10 bg-orange-600 text-white p-4 lg:p-5 rounded-2xl shadow-xl shadow-orange-900/20 transition-all duration-500 group-hover:bg-zinc-900">
          <MessageCircle size={28} strokeWidth={1.5} />
        </div>
      </div>
    </motion.a>
  );
}