import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Navigation */}
          <div className="lg:col-span-2">
            <FadeIn delay={100}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Content<br className="sm:hidden" />Craft AI
              </h2>
            </FadeIn>
           
            <FadeIn delay={200}>
              <nav className="flex flex-wrap gap-6 mb-8">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog Posts
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get Started
                </a>
              </nav>
            </FadeIn>
          </div>

          {/* Subscribe Section */}
          <div className="lg:col-span-1">
            <FadeIn delay={300}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Subscribe</h3>
              <div className="flex flex-col sm:flex-row gap-2 mb-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleSubscribe} className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                By subscribing you agree to with our{" "}
                <a href="#" className="underline hover:text-foreground">
                  Privacy Policy
                </a>
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Large Company Name */}
        <div className="text-center py-12">
          <FadeIn delay={350}>
            <h1 className="text-7xl sm:text-8xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none">
              Content<br className="sm:hidden" />Craft AI
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <FadeIn delay={400}>
              <nav className="flex flex-wrap gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Settings
                </a>
              </nav>
            </FadeIn>
           
            <FadeIn delay={500}>
              <p className="text-sm text-muted-foreground">
                © 2025 ContentCraft AI. All rights reserved.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </footer>
  );
};