"use client";
import { motion, Variants } from "framer-motion";
import { MessageSquare, Mail, Instagram, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export function Contact() {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const socialLinks = [
    { 
      icon: <Instagram size={20} />, 
      label: "Instagram", 
      value: "@jessika.mourao.adv", 
      href: "https://www.instagram.com/jessika.mourao.adv/" 
    },
    { 
      icon: <Mail size={20} />, 
      label: "E-mail", 
      value: "contato@jessikamourao.adv.br", 
      href: "mailto:contato@jessikamourao.adv.br" 
    }
  ];

  return (
    <section id="contato" className="relative py-20 lg:py-44 bg-white dark:bg-[#020a13] overflow-hidden border-t border-zinc-100 dark:border-white/5 transition-colors duration-500">
      
      {/* Luz ambiente animada - Agora adaptativa */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-100 bg-brand-gold/10 dark:bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* TEXTO PRINCIPAL */}
          <div className="lg:col-span-6 space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-center lg:justify-start gap-3 text-brand-gold/80 dark:text-brand-gold/60"
              >
                <ShieldCheck size={16} strokeWidth={1.5} />
                <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Atendimento Exclusivo</span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-light text-zinc-900 dark:text-white leading-[0.9] tracking-tighter uppercase">
                Sua paz <br />
                <span className="italic font-serif text-brand-gold lowercase">é inegociável.</span>
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-xl font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Soluções jurídicas estratégicas para proteger o seu patrimônio e a sua tranquilidade na <span className="text-zinc-900 dark:text-white font-medium">Região Metropolitana de POA.</span>
              </p>
            </div>

            {/* LINKS SOCIAIS */}
            <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 pt-4 justify-center lg:justify-start">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-500">
                    {link.icon}
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-bold">{link.label}</p>
                    <p className="text-sm font-light text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CARD DE CONTATO */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-px bg-linear-to-b from-zinc-200 to-transparent dark:from-white/10 dark:to-transparent rounded-2xl shadow-xl dark:shadow-none"
            >
              <div className="bg-zinc-50 dark:bg-[#030d18]/80 backdrop-blur-md p-8 lg:p-16 rounded-2xl text-zinc-900 dark:text-white overflow-hidden">
                
                <div className="relative z-10 space-y-10">
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif italic text-zinc-900 dark:text-white">Inicie sua Consultoria</h3>
                    <div className="h-px w-12 bg-brand-gold/30 mx-auto" />
                  </div>

                  {/* BOTÃO WHATSAPP */}
                  <motion.a 
                    href="https://wa.me/5585988781031" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative flex items-center justify-between w-full bg-brand-gold text-brand-navy px-6 py-6 lg:py-8 group overflow-hidden rounded-sm"
                  >
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent w-full"
                    />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <MessageSquare size={24} strokeWidth={1.5} />
                      <span className="text-xs font-black uppercase tracking-widest">Falar com a Dra. Jéssika</span>
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                  </motion.a>

                  <p className="text-center text-[9px] text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em]">
                    Cachoeirinha • Rio Grande do Sul
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FOOTER FINAL */}
        <div className="mt-20 lg:mt-32 pt-12 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-light text-zinc-900 dark:text-white uppercase tracking-tighter">
              Jéssika <span className="font-serif italic text-brand-gold">Mourão</span>
            </p>
            <p className="text-[8px] uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-600 mt-1 italic leading-none">Direito Bancário & Estratégico</p>
          </div>
          
          <div className="flex flex-col items-center gap-1 opacity-50">
            <MapPin size={14} className="text-brand-gold" />
            <p className="text-[9px] uppercase tracking-widest text-zinc-500">Cachoeirinha • RS</p>
          </div>

          <p className="text-[9px] text-zinc-400 dark:text-zinc-700 uppercase tracking-[0.2em] text-center md:text-right">
            © 2026 • Todos os direitos reservados
          </p>
        </div>

      </div>
    </section>
  );
}