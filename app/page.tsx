import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Servicos } from "@/components/Services";
import { Results } from "@/components/Results"; // Nova Importação
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { WhatsappButton } from "@/components/WhatsappButton";

export default function Home() {
  return (
    /* Alterado para bg-[#FFFCF9] para manter a consistência total */
    <main className="relative bg-[#FFFCF9]">
      {/* Componente de Navegação */}
      <Navbar />
      
      {/* Seção de Impacto Inicial */}
      <Hero />
      
      {/* Seção Sobre a Profissional */}
      <About />
      
      {/* Seção de Metodologia e Serviços */}
      <Servicos />

      {/* Seção de Prova Social e Métricas de Sucesso */}
      <Results />
      
      {/* Seção de Dúvidas Frequentes */}
      <Faq />
      
      {/* Seção de Contato (Já inclui o Footer Integrado) */}
      <Contact />
      
      {/* Botão Flutuante de Ação Rápida */}
      <WhatsappButton />
    </main>
  );
}