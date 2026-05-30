import type { Metadata } from "next";
import { Inter, Outfit, Montserrat, Syncopate } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leon Gutierrez Studio | Páginas Web y Software en Perú",
  description:
    "Desarrollamos páginas web, sistemas POS, ecommerce y software a medida para negocios en Perú. Cotización gratuita y precios transparentes.",
  keywords: [
    "páginas web Perú",
    "desarrollo de software Perú",
    "sistemas POS Perú",
    "ecommerce Perú",
    "Leon Gutierrez Studio",
  ],
  openGraph: {
    title: "Leon Gutierrez Studio | Páginas Web y Software en Perú",
    description:
      "Páginas web, sistemas POS, ecommerce y software empresarial. Hablamos directo contigo, sin rodeos.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable} ${montserrat.variable} ${syncopate.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
