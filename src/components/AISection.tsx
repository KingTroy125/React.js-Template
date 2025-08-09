import { ChevronRight } from "lucide-react";

const AISection = () => {
  const features = [
    {
      title: "Ask Anything, Anytime, Anywhere.",
      description: "Quick AI combines the power of AI with the web to answer any question.",
      active: true,
    },
    {
      title: "Always On ChatGPT.",
      description: "Stuck while coding? Need help writing an email? Meet your new virtual assistant.",
      active: false,
    },
    {
      title: "Your Automation Assistant.",
      description: "Create your own AI Commands to automate repetitive tasks and eliminate chores.",
      active: false,
    },
  ];

  return (
    <section className="w-full bg-background py-16 sm:py-24 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-12">
          <div 
            className="flex items-center justify-center h-12 bg-ai-badge px-6"
            style={{ 
              background: 'radial-gradient(ellipse 13.65% 50% at 50% 50%, rgba(245, 48, 107, 0.10) 0%, rgba(255, 103, 167, 0) 100%)' 
            }}
          >
            <span className="text-sm font-medium text-ai-badge-text leading-[22.4px] tracking-wide">
              AI
            </span>
          </div>
          
          <div className="max-w-md space-y-0">
            <h2 className="text-xl font-medium text-ai-text tracking-wide mb-2">
              Your Mac just got smarter.
            </h2>
            <p className="text-xl font-medium text-ai-text-muted tracking-wide">
              AI where it&apos;s most useful - on your OS.
            </p>
          </div>
        </div>

        {/* Main Interface Preview */}
        <div className="relative mb-16">
          {/* Background gradient */}
          <div className="absolute inset-0 flex justify-center">
            <div 
              className="w-full max-w-4xl h-96 rounded-2xl opacity-60"
              style={{
                background: 'linear-gradient(180deg, #D9D9D9 60%, rgba(217, 217, 217, 0) 90%)'
              }}
            />
          </div>
          
          {/* Interface Container */}
          <div className="relative flex justify-center">
            <div className="w-full max-w-4xl">
              <div 
                className="relative bg-black/44 backdrop-blur-sm rounded-2xl p-2 shadow-[0px_0.5px_0px_1px_rgba(255,255,255,0.30)_inset] border border-white/8"
                style={{
                  background: 'radial-gradient(ellipse 85.77% 49.97% at 51% 5.12%, rgba(255, 148, 148, 0.11) 0%, rgba(222, 226, 255, 0.08) 46%, rgba(241, 242, 255, 0.02) 100%), rgba(0, 0, 0, 0.44)'
                }}
              >
                <div 
                  className="relative bg-ai-interface rounded-xl overflow-hidden shadow-[0px_0.5px_0px_1px_rgba(255,255,255,0.10)_inset] border border-white/8"
                  style={{
                    background: 'linear-gradient(0deg, #0C0D0F 0%, #0C0D0F 33%, #07080A 33%, #07080A 100%)'
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 flex justify-center items-start pt-0">
                    <img 
                      src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700&h=700&fit=crop&q=80"
                      alt=""
                      className="w-[700px] h-[700px] object-cover opacity-60 shadow-lg"
                      style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
                    />
                  </div>

                  {/* Chat Interface */}
                  <div className="relative z-10 flex justify-center pt-12 pb-10">
                    <div className="w-full max-w-3xl mx-8">
                      <div 
                        className="bg-ai-interface-overlay backdrop-blur-[18px] rounded-xl border border-ai-interface-border shadow-[0px_0.5px_0px_1px_rgba(255,255,255,0.30)_inset] overflow-hidden"
                        style={{ background: 'rgba(0, 0, 0, 0.60)' }}
                      >
                        {/* Search Bar */}
                        <div className="px-4 py-4 border-b border-white/10">
                          <div className="relative">
                            <div className="text-white text-base leading-[18.4px] tracking-tight">
                              How do I quit Vim?
                            </div>
                            <div className="absolute right-0 top-0 w-0.5 h-4 bg-white/60 rounded-sm"></div>
                          </div>
                        </div>

                        {/* Response Area */}
                        <div className="p-4">
                          <div className="bg-ai-interface-backdrop rounded-lg border border-white/10 p-4 space-y-6">
                            <div className="text-center text-xs font-medium text-white/40 leading-[14px] tracking-tight">
                              What temperature should I cook a steak to?
                            </div>
                            <div className="text-sm text-white leading-5 tracking-tight">
                              To exit Vim, follow these steps:
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            <div 
              className="w-23 h-0.5 rounded-full bg-ai-progress-bg relative overflow-hidden"
              style={{ background: 'linear-gradient(90deg, #452324 0%, #ECA5A7 93%, #581D27 100%, #452324 100%)' }}
            >
              <div 
                className="absolute inset-0 -top-4 h-8"
                style={{
                  background: 'radial-gradient(ellipse 40% 50% at 72% 50%, rgba(245, 48, 107, 0.20) 0%, rgba(255, 103, 167, 0) 100%)'
                }}
              />
            </div>
            <div className="w-12 h-0.5 bg-ai-progress-bg rounded-full"></div>
            <div className="w-12 h-0.5 bg-ai-progress-bg rounded-full"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`py-8 ${feature.active ? 'opacity-100' : 'opacity-50'}`}
            >
              <div className="space-y-1">
                <h3 className={`text-base font-medium leading-[25.6px] ${
                  feature.active ? 'text-ai-feature-active' : 'text-ai-feature-inactive'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-base font-medium leading-[25.6px] ${
                  feature.active ? 'text-ai-text-muted' : 'text-ai-feature-inactive'
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More about Pro Link */}
        <div className="flex justify-center">
          <a 
            href="#" 
            className="flex items-center gap-1 text-base font-medium text-ai-text leading-[22.4px] tracking-wider hover:opacity-80 transition-opacity"
          >
            More about Pro
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AISection;