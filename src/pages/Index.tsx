import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import LogoSection from "@/components/LogoSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToActionSection from "@/components/CallToActionSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <div className="relative">
        {/* Unified background for navbar and hero */}
        <div 
          className="absolute inset-0 w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/assets/3e8044b8-6fd1-41cd-af40-0e4013cba0f9.png)',
          }}
        />
        <Navbar />
        <HeroSection />
      </div>
      <LogoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
};

export default Index;
