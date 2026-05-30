"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)] overflow-x-hidden min-h-screen relative selection:bg-purple-500/10 selection:text-[var(--primary)]">
      <Navbar />
      <Hero />
      <LogoStrip />
      <StatsBar />
      <Services />
      <Portfolio />
      <Benefits />
      <Process />
      <Pricing />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
