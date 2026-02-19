"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Função cn inline para evitar erro de import do lib/utils
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

type Card = {
  id: number;
  content: React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  return (
    <div className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[300px] md:min-h-auto")}>
          <motion.div
            onClick={() => setSelected(card)}
            className={cn(
              "relative overflow-hidden w-full h-full cursor-pointer rounded-xl bg-zinc-100",
              card.className
            )}
            layoutId={`card-${card.id}`}
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-white/90 backdrop-blur-xl cursor-pointer"
            />
            
            <motion.div
              layoutId={`card-${selected.id}`}
              className="bg-white rounded-2xl w-full max-w-[600px] min-h-[450px] z-[110] relative overflow-hidden shadow-2xl flex flex-col border border-zinc-100"
            >
              <button 
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-[120] bg-zinc-900 text-white p-2 rounded-full hover:scale-110 transition active:scale-95"
              >
                <X size={20} />
              </button>
              <div className="h-full w-full">{selected.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.div layoutId={`image-${card.id}-image`} className="h-full w-full">
      <img
        src={card.thumbnail}
        className="object-cover object-center absolute inset-0 h-full w-full"
        alt="Trabalho realizado"
      />
      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition duration-300" />
    </motion.div>
  );
};