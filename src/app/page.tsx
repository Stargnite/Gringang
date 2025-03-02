"use client"
// import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Collection from "./components/Collection";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-[#f27980]">
      <Navbar />
      <Hero />
      <About />
      {/* <Collection /> */}
      <Roadmap />                                                     
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
