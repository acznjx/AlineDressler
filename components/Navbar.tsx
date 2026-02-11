"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Instagram, MessageCircle } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Correção para evitar o erro de "cascading renders" e hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="bg-white/80 dark:bg-[#020a13]/90 backdrop-blur-lg h-20 md:h-28 px-4 sm:px-8 md:px-12 lg:px-20 flex items-center justify-between border-b border-black/5 dark:border-white/10 relative transition-all duration-500">
        
        {/* ESQUERDA: Logo */}
        <div className="flex flex-col items-start shrink-0 text-left">
          <h1 className="text-zinc-900 dark:text-white text-base sm:text-lg md:text-2xl font-serif tracking-[0.2em] sm:tracking-[0.4em] uppercase font-light leading-none">
            Jéssika <span className="font-bold">Mourão</span>
          </h1>
          {/* Ajuste sugerido pelo Tailwind v4: max-w-15 */}
          <div className="h-px w-8 sm:w-full max-w-15 bg-black/10 dark:bg-white/20 my-1.5 md:my-2" />
          <p className="text-zinc-500 dark:text-white/40 text-[7px] sm:text-[9px] tracking-[0.3em] uppercase">
            Advocacia Estratégica
          </p>
        </div>

        {/* DIREITA: Navegação + Ícones */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] xl:text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5 border-l border-black/10 dark:border-white/10 pl-4 sm:pl-8">
            <a 
              href="https://www.instagram.com/jessika.mourao.adv/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram 
                size={18} 
                className="text-zinc-500 dark:text-white/60 hover:text-brand-gold transition-colors cursor-pointer shrink-0" 
              />
            </a>

            {/* BOTÃO DE TROCA DE TEMA */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className="text-zinc-500 dark:text-white/60 hover:text-brand-gold transition-colors shrink-0 p-1 flex items-center justify-center min-w-8"
              aria-label="Trocar Tema"
            >
              {/* Só renderiza o ícone após o 'mounted' para evitar erro de hidratação */}
              {mounted ? (
                theme === "dark" ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                <div className="w-[18px] h-[18px]" /> 
              )}
            </button>

            <a 
              href="https://wa.me/5585988781031" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 dark:text-white/60 hover:text-[#25D366] transition-colors shrink-0 p-1"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}