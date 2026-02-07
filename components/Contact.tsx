"use client";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Instagram, ArrowRight, Zap } from "lucide-react";

/** * NOTA PARA ALINE: 
 * Os links e informações abaixo (WhatsApp, E-mail, Instagram) são FICTÍCIOS.
 * Você poderá substituí-los pelos seus dados reais facilmente no código.
 */
export function Contact() {
  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", value: "@alinedressler.nutri", href: "#" },
    { icon: <Mail size={18} />, label: "E-mail", value: "contato@alinedressler.com.br", href: "mailto:contato@alinedressler.com.br" },
  ];

  return (
    <section id="contato" className="py-24 lg:py-40 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUNA 1: CHAMADA EDITORIAL */}
          <div className="lg:col-span-6 space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-emerald-600 transition-colors">
                <Zap size={20} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black text-zinc-950 dark:text-white leading-[0.85] tracking-tighter uppercase transition-colors">
                PRONTO PARA A <br />
                <span className="italic font-serif font-light text-emerald-600 lowercase underline decoration-zinc-200 dark:decoration-white/10 underline-offset-8">evolução?</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl font-light leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors">
                Não agende uma consulta se você busca apenas uma dieta. Fale comigo se você busca uma transformação biológica definitiva baseada em ciência.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-6 pt-6">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  className="flex items-center gap-4 group w-fit"
                >
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-400 group-hover:border-emerald-600 group-hover:text-emerald-600 transition-all">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">{link.label}</p>
                    <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: CARD DE AÇÃO */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 dark:bg-emerald-950/20 rounded-4xl p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-emerald-900/10 border border-white/5 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 blur-[80px] -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-2 text-center lg:text-left">
                  <h3 className="text-3xl font-serif italic text-white">Inicie seu protocolo.</h3>
                  <p className="text-zinc-400 text-sm font-medium">Respondo pessoalmente em até 24h úteis.</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://wa.me/555192829482" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-emerald-600 hover:bg-white hover:text-zinc-950 p-6 lg:p-8 rounded-2xl transition-all duration-500 group shadow-xl shadow-emerald-600/20"
                  >
                    <div className="flex items-center gap-5">
                      <MessageSquare size={28} />
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-black tracking-widest opacity-70">Direct Pass</span>
                        <span className="text-xl font-bold uppercase tracking-tighter">WhatsApp</span>
                      </div>
                    </div>
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Selo flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 p-5 rounded-3xl shadow-xl hidden lg:block transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 transition-colors">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none mb-1 transition-colors">Engenharia Química</p>
                  <p className="text-[9px] text-zinc-400 uppercase tracking-widest transition-colors">Aplicada à Saúde</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER INTEGRADO */}
        <div className="mt-32 pt-12 border-t border-zinc-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 transition-colors">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter transition-colors">
              Aline <span className="italic font-serif font-light text-emerald-600 lowercase">dressler</span>
            </p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-black transition-colors">Nutrição & Alta Performance</p>
          </div>
          
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-emerald-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Agendar</a>
          </div>

          <p className="text-[9px] uppercase tracking-widest text-zinc-500 transition-colors">
            © 2026 • Design de Alta Performance.
          </p>
        </div>

      </div>
    </section>
  );
}