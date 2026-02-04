import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configuração das Fontes (Inter para leitura e Playfair para o toque editorial)
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// 1. CONFIGURAÇÃO DE SEO ATUALIZADA (Para Dominar o Google)
export const metadata: Metadata = {
  title: "Juliana Monteiro | Nutrição de Alta Performance & Biohacking",
  description: "Protocolos nutricionais de elite para empresários e atletas. Reprogramação metabólica e performance cognitiva com a Dra. Juliana Monteiro.",
  keywords: ["Nutricionista de Alta Performance", "Biohacking Brasil", "Juliana Monteiro Nutri", "Nutrição Executiva"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Juliana Monteiro | Alta Performance",
    description: "Engenharia nutricional para quem busca o topo.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.julianamonteiro.com.br", // Atualize com seu domínio real
  },
};

// 2. ESTRUTURA GLOBAL (Ajuste de Cores e Fontes)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#FFFCF9] text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}