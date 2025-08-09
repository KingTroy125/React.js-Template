import { motion } from "framer-motion";

const LogoSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 font-inter"
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            Trusted by the world's most innovative teams
          </p>
        </motion.div>
        
        {/* Logo Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-2.5"
        >
          {/* First Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {[1, 2, 3, 4].map((index) => (
              <div
                key={`row1-${index}`}
                className="px-10 py-8 rounded-lg border border-white/15 flex items-center justify-center"
              >
                <img 
                  src="https://placehold.co/155x34" 
                  alt={`Partner logo ${index}`}
                  className="w-[155px] h-[34px] object-contain"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Second Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {[5, 6, 7, 8].map((index) => (
              <div
                key={`row2-${index}`}
                className="px-10 py-8 rounded-lg border border-white/15 flex items-center justify-center"
              >
                <img 
                  src="https://placehold.co/155x34" 
                  alt={`Partner logo ${index}`}
                  className="w-[155px] h-[34px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LogoSection;