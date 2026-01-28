import React from "react";
import Layout from "./Layout";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSection from "./components/portfolio/AboutSection";
import ServicesSection from "./components/portfolio/ServicesSection";
import AchievementsSection from "./components/portfolio/AchievementsSection";
import TestimonialsSection from "./components/portfolio/TestimonialsSection";
import ContactSection from "./components/portfolio/ContactSection";
import Footer from "./components/portfolio/Footer";

export default function App() {
  return (
    <Layout>
      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </Layout>
  );
}
