"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <main className="flex min-h-screen flex-col bg-[#121212]">
          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </main>
      )}
    </div>
  );
}
