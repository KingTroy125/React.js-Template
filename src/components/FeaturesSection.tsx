import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="w-full bg-background py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Features text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 lg:space-y-20"
          >
            {/* Main features content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-features-text tracking-wide">
                What else can Raycast do?
              </h2>
              
              <div className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide text-features-text-muted space-y-1">
                <p>
                  <span className="text-features-text drop-shadow-[0_0_20px_rgba(154,170,255,0.65)]">It can take notes.</span> Track your flights. 
                  Convert anything. Search files. Run scripts. Manage your windows. Plan your day. Remind you of stuff. 
                  Translate into any language. Insert Emojis. Find text in screenshots. And much, much more.
                </p>
              </div>
            </div>

            {/* Featured capability */}
            <div className="max-w-sm space-y-4">
              <div className="inline-block bg-features-badge-bg px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-features-text tracking-wide">
                  Floating Notes
                </span>
              </div>
              <p className="text-sm font-medium text-features-text-muted leading-relaxed tracking-wide">
                A quick way to capture a thought while<br />
                working on something else.
              </p>
            </div>
          </motion.div>

          {/* Right side - Feature showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[578px] mx-auto"
          >
            {/* Feature card */}
            <div className="w-full">
              <div 
                className="overflow-hidden rounded-2xl shadow-[-72px_-50px_40px_-60px_rgba(149,99,255,0.05)]"
                style={{ background: 'transparent' }}
              >
                <div className="relative w-full aspect-[553/528] max-w-[553px]">
                  
                  {/* Overlay with backdrop blur */}
                  <div 
                    className="absolute inset-0 rounded-2xl backdrop-blur-sm shadow-[0px_0.5px_0px_rgba(255,255,255,0.25)_inset] overflow-hidden"
                    style={{ background: 'rgba(149, 99, 255, 0.02)' }}
                  >
                    <img 
                      src="/assets/51171262-819c-43a1-b0df-13bd35c15f31.png"
                      alt="Raycast floating notes feature showing meeting notes interface"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="w-full h-2 flex justify-center px-[169px] mt-0">
              <div className="w-60 h-2 flex items-center justify-center">
                <div className="flex-1 h-px relative">
                  {/* Base gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(ellipse 50% 50% at 50% 50%, white 90%, rgba(255, 255, 255, 0) 100%)'
                    }}
                  />
                  {/* Colored overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: '#452324' }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(ellipse 44.65% 31.10% at 75.43% 50%, rgba(245, 48, 107, 0.12) 0%, rgba(255, 103, 167, 0) 100%)'
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, #452324 0%, #ECA5A7 93%, #581D27 100%, #452324 100%)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 2 - Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 lg:mt-32">
          {/* Left side - Feature showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center w-full max-w-[578px] mx-auto order-2 lg:order-1"
          >
            {/* Feature card */}
            <div className="w-full">
              <div 
                className="overflow-hidden rounded-2xl shadow-[-72px_-50px_40px_-60px_rgba(149,99,255,0.05)]"
                style={{ background: 'transparent' }}
              >
                <div className="relative w-full aspect-[553/528] max-w-[553px]">
                  
                  {/* Overlay with backdrop blur */}
                  <div 
                    className="absolute inset-0 rounded-2xl backdrop-blur-sm shadow-[0px_0.5px_0px_rgba(255,255,255,0.25)_inset] overflow-hidden"
                    style={{ background: 'rgba(255, 149, 99, 0.02)' }}
                  >
                    <img 
                      src="/lovable-uploads/83bbc16b-cf90-46a1-9231-efbf64278ceb.png"
                      alt="Advanced workflow automation interface"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="w-full h-2 flex justify-center px-[169px] mt-0">
              <div className="w-60 h-2 flex items-center justify-center">
                <div className="flex-1 h-px relative">
                  {/* Base gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(ellipse 50% 50% at 50% 50%, white 90%, rgba(255, 255, 255, 0) 100%)'
                    }}
                  />
                  {/* Colored overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{ background: '#452324' }}
                  >
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(ellipse 44.65% 31.10% at 25.43% 50%, rgba(255, 149, 48, 0.12) 0%, rgba(255, 167, 103, 0) 100%)'
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(270deg, #452324 0%, #ECA587 93%, #581D27 100%, #452324 100%)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Features text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-12 lg:space-y-20 order-1 lg:order-2"
          >
            {/* Main features content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-features-text tracking-wide">
                Powerful automation at your fingertips
              </h2>
              
              <div className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide text-features-text-muted space-y-1">
                <p>
                  <span className="text-features-text drop-shadow-[0_0_20px_rgba(255,154,99,0.65)]">Build custom workflows.</span> Automate repetitive tasks. 
                  Connect your favorite apps. Create powerful shortcuts. Set up smart triggers. Schedule actions. 
                  Transform data on the fly. And streamline your entire workflow.
                </p>
              </div>
            </div>

            {/* Featured capability */}
            <div className="max-w-sm space-y-4">
              <div className="inline-block bg-features-badge-bg px-4 py-2 rounded-lg">
                <span className="text-sm font-medium text-features-text tracking-wide">
                  Smart Workflows
                </span>
              </div>
              <p className="text-sm font-medium text-features-text-muted leading-relaxed tracking-wide">
                Chain multiple actions together to create<br />
                powerful automated workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;