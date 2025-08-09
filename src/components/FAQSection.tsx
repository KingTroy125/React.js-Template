import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is Launch UI easy to customise?",
      answer: "Yes! Launch UI is built with modern web technologies and follows best practices. All components are fully customizable using Tailwind CSS and can be easily modified to match your brand and design requirements."
    },
    {
      question: "Is Launch UI optimized for search engines?",
      answer: "Absolutely! Launch UI is built with SEO best practices in mind. It includes semantic HTML, proper meta tags, structured data, optimized images, and fast loading times to help your site rank better in search engines."
    },
    {
      question: "How does Launch UI compare to no-code tools?",
      answer: "Launch UI gives you the flexibility of custom code with the speed of no-code tools. Unlike no-code platforms, you have full control over your code, can customize anything, and aren't locked into a specific platform or subscription model."
    },
    {
      question: "Why not just coding a website yourself?",
      answer: "While you can code from scratch, Launch UI saves you hundreds of hours by providing professionally designed, tested, and optimized components. It includes best practices, accessibility features, and responsive design patterns that would take significant time to develop independently."
    },
    {
      question: "Can I get a refund if I don't like it?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with Launch UI within 30 days of purchase, contact our support team and we'll process a full refund, no questions asked."
    },
    {
      question: "What features will be added in the future?",
      answer: "We're constantly improving Launch UI based on user feedback. Upcoming features include additional component variants, more page templates, enhanced animations, dark mode improvements, and integrations with popular tools and services."
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-8 py-20 bg-background font-inter"
    >
      <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-auto lg:min-w-[408px]"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight lg:text-left text-center">
            Questions and Answers
          </h2>
        </motion.div>
        
        {/* FAQ Accordion Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-1 w-full max-w-[720px]"
        >
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left py-4 px-0 hover:no-underline group [&[data-state=open]>svg]:rotate-180">
                  <span className="text-base font-medium text-card-foreground group-hover:text-foreground transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 px-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;