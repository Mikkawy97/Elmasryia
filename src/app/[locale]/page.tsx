"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a minimum loading time
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if page is fully loaded
    if (document.readyState === "complete") {
      clearTimeout(minLoadTime);
      setIsLoading(false);
    } else {
      window.addEventListener("load", () => {
        clearTimeout(minLoadTime);
        setIsLoading(false);
      });
    }

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
