import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center pt-8 sm:pt-12 md:pt-16 lg:pt-24">
          {/* Badge */}
          <div className="animate-fade-up stagger-1">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              You Made It!
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 sm:mt-10 text-4xl sm:text-5xl md:text-display-md lg:text-display-lg font-serif font-semibold text-foreground leading-tight animate-fade-up stagger-2">
            Explore the Art of
            <span className="block mt-2 text-primary">Mindfulness</span>
          </h1>

          {/* Hero Image */}
          <div className="relative w-full max-w-lg mx-auto mt-10 sm:mt-12 lg:mt-16 animate-fade-up stagger-3">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl relative">
              {/* Decorative borders */}
              <div className="absolute -inset-3 sm:-inset-4 border-2 border-primary/15 rounded-[2rem] -z-10" />
              <div className="absolute -inset-6 sm:-inset-8 border border-primary/5 rounded-[2.5rem] -z-10" />
              
              <img
                src="/e9155879-4bb5-4077-ace8-4b1266f532bd.JPG"
                alt="Theodore - Path to Awareness"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="max-w-2xl mx-auto mt-10 sm:mt-12 lg:mt-16 animate-fade-up stagger-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground mb-4 sm:mb-6">
              Welcome!
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
              In a world buzzing with change, I started this blog to shine a light on the 
              pressing issues of our new generation. Together, we'll explore life lessons, 
              share versatile perspectives, and ignite conversations that matter.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button variant="hero" size="lg" asChild>
                <a href="#blog">
                  Read More
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <a
            href="#blog"
            className="hidden sm:block mt-16 lg:mt-20 p-3 text-muted-foreground/50 hover:text-primary transition-colors"
            aria-label="Scroll to blog"
          >
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;