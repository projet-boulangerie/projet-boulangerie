import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, IM_Fell_English, Cormorant_Garamond, Lora } from "next/font/google";
import DeadOverlay from '@/components/layout/DeadOverlay';
import ConditionalHeader from "@/components/layout/ConditionalHeader";
import Footer from '@/components/layout/Footer';
import '@/styles/global.css';
import '@/styles/SlackMessage.css';
import '@/styles/FourMaudit.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const imFellEnglish = IM_Fell_English({
  variable: "--font-im-fell",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Projet Boulangerie — Post-Mortem",
  description: "La Guilde. L'Événement. La Fin.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${imFellEnglish.variable} ${cormorantGaramond.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}>
        <ConditionalHeader />
        <div className="flex-1 min-h-0 flex flex-col w-full relative">
          <DeadOverlay>
            {children}
          </DeadOverlay>
        </div>
        <Footer />
      </body>
    </html>
  );
}
