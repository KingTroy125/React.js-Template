import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-background pb-16 sm:pb-24 lg:pb-32 font-inter"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto overflow-hidden"
        >
          <div className="relative w-full">
            <div className="relative px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
              <img 
                src="/lovable-uploads/83bbc16b-cf90-46a1-9231-efbf64278ceb.png"
                alt="Raycast keyboard interface with command shortcuts"
                className="w-full h-auto max-h-[700px] object-cover rounded-2xl mx-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-md mx-auto px-4 sm:px-6"
        >
          <div className="flex flex-col items-center gap-12 sm:gap-20">
            {/* Text Content */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-medium text-cta-text tracking-wide">
                Take the short way.
              </h2>
              <p className="text-xl font-medium text-cta-text-muted tracking-wide">
                Download and use Raycast for free.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center space-y-4">
              {/* Download Button */}
              <Button 
                variant="hero"
                size="default"
                className="px-6 py-3 rounded-lg h-9"
              >
                Download
              </Button>

              {/* Version and platform info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-hero-meta font-mono">
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
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;