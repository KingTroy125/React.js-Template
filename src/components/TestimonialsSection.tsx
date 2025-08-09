"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Developer",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "This launcher has transformed my daily workflow. The productivity tools are incredibly fast and the ergonomic design makes everything so much more efficient."
  },
  {
    name: "Sarah Martinez",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The extendable nature of this launcher is amazing. I can customize it to fit exactly what I need for my work. It's become an essential part of my toolkit."
  },
  {
    name: "David Kim",
    role: "Design Lead",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Finally, a launcher that's both powerful and beautiful. The interface is clean and intuitive, while the functionality is incredibly robust."
  },
  {
    name: "Emma Thompson",
    role: "Freelance Writer",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "The reliability is outstanding. I've been using it for months without any issues. It's simplified my workflow and saved me countless hours."
  },
  {
    name: "Michael Rodriguez",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "This is exactly what I needed - a shortcut to everything. The productivity boost has been remarkable and the tool integration is seamless."
  },
  {
    name: "Jennifer Wong",
    role: "UX Researcher",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The user experience is exceptional. Every detail feels thoughtfully designed, and the performance is consistently fast and responsive."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-background font-inter">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-foreground">
            Trusted by Professionals
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of users who've transformed their productivity
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/80 backdrop-blur-xl border-border hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/80 backdrop-blur-xl border-border hover:border-primary/20 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;