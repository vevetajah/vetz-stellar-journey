import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Vetz — Fullstack Developer | Mobile Developer | Next AI Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula Background */}
      <div className="absolute inset-0 gradient-nebula opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 animate-float blur-xl" />
      <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-secondary/20 animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-accent/20 animate-float blur-xl" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="relative">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight glitch"
            data-text={displayText}
          >
            <span className="text-gradient">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
          <div className="absolute -bottom-10 -right-10 w-3 h-3 bg-secondary rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting digital experiences across the stack, building intelligent mobile solutions, 
          and pioneering the future with AI-powered applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-primary/10 border border-primary rounded-full text-primary font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-blue">
            <span className="relative z-10">Explore My Universe</span>
            <div className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
          
          <button className="group relative px-8 py-4 bg-secondary/10 border border-secondary rounded-full text-secondary font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:glow-orange">
            <span className="relative z-10">Contact Mission Control</span>
            <div className="absolute inset-0 bg-secondary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
};