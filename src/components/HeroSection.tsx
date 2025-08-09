import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-transparent font-inter flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Main hero content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center space-y-8 py-12"
      >
        {/* Hero headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-semibold leading-tight text-hero-text drop-shadow-text">
            Your shortcut to<br />
            everything.
          </h1>
        </motion.div>

        {/* Hero description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-lg space-y-1"
        >
          <p className="text-lg text-hero-subtitle drop-shadow-text tracking-wide">
            A collection of powerful productivity tools all within
          </p>
          <p className="text-lg text-hero-subtitle drop-shadow-text tracking-wide">
            an extendable launcher. Fast, ergonomic and reliable.
          </p>
        </motion.div>

        {/* Download button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4"
        >
          <Button 
            variant="hero"
            size="lg" 
            className="px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Download
          </Button>

          {/* Version and platform info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-hero-meta font-mono">
            <span>v1.72.1</span>
            <div className="flex items-center">
              <span className="w-px h-2.5 bg-hero-meta mr-6"></span>
              <span>macOS 12+</span>
            </div>
            <div className="flex items-center">
              <span className="w-px h-2.5 bg-hero-meta mr-6"></span>
              <span>Install via homebrew</span>
            </div>
          </div>
          </motion.div>

        {/* Promotional badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="pt-10"
        >
          <div className="inline-flex p-px bg-hero-badge-bg shadow-hero-glow rounded-full">
            <div className="flex items-center gap-3 bg-hero-badge-inner px-3 py-1.5 rounded-full">
              <span className="text-sm font-medium text-hero-text tracking-wide">
                More AI models
              </span>
              <div className="flex items-center gap-2 text-hero-meta">
                <span className="text-sm">|</span>
                <span className="text-sm font-medium">Read more</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;