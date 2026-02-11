import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dra. Jéssika Mourão",
  description: "Especialista em redução de dívidas, limpeza de nome e defesa contra abusividades bancárias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-[#020a13] text-zinc-900 dark:text-zinc-100 transition-colors duration-500`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}