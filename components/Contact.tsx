"use client";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Instagram, ArrowRight, Zap } from "lucide-react";

export function Contact() {
  const socialLinks = [
    { icon: <Instagram size={18} />, label: "Instagram", value: "@julianamonteiro.nutri", href: "#" },
    { icon: <Mail size={18} />, label: "E-mail", value: "contato@juliana.com", href: "mailto:contato@juliana.com" },
  ];

  return (
    /* Corrigido para bg-[#FFFCF9] para igualar às outras seções */
    <section id="contato" className="py-24 lg:py-40 bg-[#FFFCF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* COLUNA 1: CHAMADA EDITORIAL */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-orange-600">
                <Zap size={20} fill="currentColor" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Próximo Passo</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-zinc-900 leading-[0.85] tracking-tighter">
                PRONTO PARA O <br />
                <span className="italic font-light text-orange-600 underline decoration-zinc-200 underline-offset-8">DOMÍNIO?</span>
              </h2>
              <p className="text-zinc-500 text-lg lg:text-xl font-light leading-relaxed max-w-md">
                Não agende uma consulta se você busca apenas uma dieta. Entre em contato se você busca uma transformação biológica definitiva.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-6">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  className="flex items-center gap-4 group w-fit"
                >
                  <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-orange-600 group-hover:text-orange-600 transition-all">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">{link.label}</p>
                    <p className="text-sm font-bold text-zinc-900 group-hover:text-orange-600 transition-colors">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: O CARD DE AÇÃO */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-orange-900/10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif italic">Inicie sua evolução.</h3>
                  <p className="text-zinc-400 text-sm">Respondo em até 24h úteis.</p>
                </div>

                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5551999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-orange-600 hover:bg-white hover:text-zinc-950 p-6 lg:p-8 rounded-2xl transition-all duration-500 group"
                  >
                    <div className="flex items-center gap-5">
                      <MessageSquare size={28} />
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-black tracking-widest opacity-70">Direct Pass</span>
                        <span className="text-xl font-bold">Chamar no WhatsApp</span>
                      </div>
                    </div>
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Selo flutuante ajustado */}
            <div className="absolute -bottom-10 -left-10 bg-white border border-zinc-100 p-6 rounded-3xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tight text-zinc-900">Protocolo Elite</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Foco em Resultados</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER INTEGRADO - Agora com a mesma cor de fundo */}
        <div className="mt-32 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-2xl font-serif text-zinc-900">Juliana <span className="italic text-orange-600">Monteiro</span></p>
            <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-black">Nutrição de Alta Performance</p>
          </div>
          
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-600 transition-colors">LinkedIn</a>
          </div>

          <p className="text-[9px] uppercase tracking-widest text-zinc-400">
            © 2026 • Todos os direitos reservados.
          </p>
        </div>

      </div>
    </section>
  );
}