import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "JOHN DOE | Master Craftsmanship",
  description: "High-end interior finishing, structural repairs, and specialized home maintenance services.",
  icons: {
    icon: "/favicon.ico", 
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`
        ${inter.variable} 
        ${playfair.variable} 
        font-sans antialiased 
        bg-white dark:bg-[#020a13] 
        text-zinc-900 dark:text-zinc-100 
        transition-colors duration-500 
        overflow-x-hidden
      `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}