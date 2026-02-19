"use client";
import { MessageSquare, MapPin, HardHat, Mail, Phone } from "lucide-react";

export function Contact() {
  // Real Google Maps Embed URL for 55 Water St, Brooklyn, NY
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.54415336357!2d-73.9934386!3d40.703816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a308678096b%3A0x6e2671542f7e0e7!2s55%20Water%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white border-t border-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-16 lg:mb-24">
          <p className="text-[#ff5500] text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Inquiries & Logistics
          </p>
          <h2 className="text-4xl md:text-6xl font-[1000] text-zinc-900 uppercase tracking-tighter leading-[0.9]">
            Quality execution <br />
            <span className="text-zinc-300 italic">on demand.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* CONTENT */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                High-end residential and commercial developments. Contact our lead specialist for a technical consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/17185550198" 
                  className="flex items-center justify-between bg-zinc-900 text-white px-8 py-5 group transition-all hover:bg-[#ff5500] w-full sm:w-auto sm:min-w-[280px]"
                >
                  <span className="text-[11px] font-[1000] uppercase tracking-widest">Chat on WhatsApp</span>
                  <MessageSquare size={18} strokeWidth={2.5} className="ml-4" />
                </a>
                
                <a 
                  href="tel:+17185550198" 
                  className="flex items-center justify-center border-2 border-zinc-200 text-zinc-900 px-8 py-5 font-[1000] text-[11px] uppercase tracking-widest hover:border-zinc-900 transition-all"
                >
                  <Phone size={16} className="mr-3" />
                  Call Office
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
              <div className="space-y-2">
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Email Official</p>
                <a href="mailto:contact@mastercraft.us" className="text-sm font-bold text-zinc-900 hover:text-[#ff5500] block underline underline-offset-4 decoration-zinc-200 hover:decoration-[#ff5500]">
                  CONTACT@MASTERCRAFT.US
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Contractor License</p>
                <div className="flex items-center gap-2 text-sm font-bold text-zinc-900">
                  <HardHat size={14} className="text-[#ff5500]" />
                  <span>NYC-772901-CLASS B</span>
                </div>
              </div>
            </div>
          </div>

          {/* REAL WORKING MAP */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <div className="w-full max-w-[400px] group">
              <div className="aspect-square bg-zinc-50 border border-zinc-200 relative overflow-hidden shadow-sm">
                
                {/* The Actual Iframe */}
                <iframe
                  title="Brooklyn HQ Location"
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) contrast(1.1) brightness(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                
                {/* Label Overlay */}
                <div className="absolute top-4 left-4 right-4 bg-zinc-900 text-white p-4 pointer-events-none sm:top-6 sm:left-6 sm:right-auto">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-1">HQ Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#ff5500]" />
                    <span className="text-xs font-black uppercase tracking-tight italic">Brooklyn, NY</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <p className="text-[10px] font-black text-zinc-900 uppercase tracking-widest">55 Water Street, Suite 3A</p>
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Brooklyn, NY 11201, USA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}