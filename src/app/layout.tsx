import type { Metadata } from "next";
import {
  Caveat,
  Cormorant_Garamond,
  Inter,
  Lora,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-family-inter",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-family-cormorant-garamond",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-family-lora",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-family-caveat",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cermin - Jurnal reflektif pribadi",
  description:
    "Cermin adalah ruang menulis yang membantu kamu mengenali emosi, melihat pola diri, dan pulang ke hal yang terasa penting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorantGaramond.variable} ${lora.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
