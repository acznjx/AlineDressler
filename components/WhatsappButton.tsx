"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  return (
    <motion.a
      href="https://wa.me/5585988781031"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 lg:bottom-12 lg:right-12 z-50 flex items-center group"
    >
      {/* Tooltip Minimalista: Ajustado para ambos os temas */}
      <span className="mr-4 bg-zinc-900/80 dark:bg-white/10 backdrop-blur-md text-white text-[9px] uppercase tracking-[0.4em] px-5 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0 pointer-events-none border border-white/10 hidden md:block font-light">
        Olá, Jéssika
      </span>

      <div className="relative flex items-center justify-center">
        {/* Aura de Brilho Sutil */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-brand-gold blur-xl" 
        />
        
        {/* Botão Principal */}
        <div className="relative z-10 bg-brand-gold text-brand-navy p-4 lg:p-5 rounded-full shadow-[0_15px_40px_rgba(197,165,114,0.3)] transition-all duration-700 group-hover:bg-zinc-900 group-hover:text-brand-gold dark:group-hover:bg-white dark:group-hover:text-brand-navy">
          <MessageCircle size={24} strokeWidth={1.2} />
        </div>
      </div>
    </motion.a>
  );
}