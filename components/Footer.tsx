"use client";
import { HardHat, Instagram, Facebook, Youtube, Mail, Phone, MapPin, ArrowUpRight, Hammer } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Structural Repair", href: "#" },
      { name: "Interior Finishing", href: "#" },
      { name: "Custom Installations", href: "#" },
      { name: "Consultation", href: "#" },
    ],
    company: [
      { name: "About Me", href: "#about" },
      { name: "Project Gallery", href: "#projects" },
      { name: "Client Reviews", href: "#resultados" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ]
  };

  return (
    <footer className="bg-zinc-100 border-t-2 border-zinc-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* UPPER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-20">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-900 p-2">
                <Hammer className="text-[#ff5500]" size={32} />
              </div>
              <span className="text-3xl font-[1000] tracking-tighter uppercase italic text-zinc-900">
                MASTER <span className="text-[#ff5500]">CRAFTSMAN</span>
              </span>
            </div>
            <p className="text-zinc-500 font-bold text-lg leading-tight max-w-sm uppercase">
              Building the standard of excellence in every square inch. No shortcuts. No excuses.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white border-2 border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-[#ff5500] hover:text-white hover:border-[#ff5500] transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Services</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-black text-zinc-600 hover:text-[#ff5500] transition-colors uppercase tracking-tight flex items-center gap-1">
                    {link.name} <ArrowUpRight size={12} opacity={0.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Navigation</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-black text-zinc-600 hover:text-[#ff5500] transition-colors uppercase tracking-tight">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO BLOCK - UPDATED TO USA */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">US Operations</h4>
            <div className="space-y-4 text-zinc-600">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff5500] shrink-0" />
                <p className="text-xs font-bold leading-relaxed uppercase">
                  55 Water Street, Suite 3A <br />
                  Brooklyn, NY 11201, USA
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ff5500] shrink-0" />
                <p className="text-xs font-bold uppercase">+1 (718) 555-0198</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ff5500] shrink-0" />
                <p className="text-xs font-bold uppercase">contact@mastercraft.us</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t-2 border-zinc-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
            © {currentYear} MASTER CRAFTSMAN INC. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex gap-8">
            {links.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black text-zinc-400 hover:text-zinc-900 uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 opacity-30 grayscale">
            <HardHat size={16} />
            <span className="text-[10px] font-black uppercase tracking-tighter">US Certified Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}