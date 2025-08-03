import { useEffect, useState } from 'react';

const quotes = [
  {
    text: "Train your mind like a neural network",
    author: "The Future",
    gradient: "hsl(200 100% 65%)"
  },
  {
    text: "Code is poetry written in logic",
    author: "Digital Philosopher",
    gradient: "hsl(30 100% 70%)"
  },
  {
    text: "AI is not about replacing humans, but amplifying intelligence",
    author: "Tech Visionary",
    gradient: "hsl(280 100% 75%)"
  },
  {
    text: "Every bug is a feature waiting to be understood",
    author: "Code Zen",
    gradient: "hsl(120 100% 70%)"
  },
  {
    text: "The best algorithms are inspired by nature",
    author: "Bio-Tech Pioneer",
    gradient: "hsl(320 100% 75%)"
  },
  {
    text: "Data is the new oil, but insight is the refinement",
    author: "Data Scientist",
    gradient: "hsl(60 100% 70%)"
  }
];

export const QuoteWall = () => {
  const [visibleQuotes, setVisibleQuotes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleQuotes(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const quoteElements = document.querySelectorAll('.quote-card');
    quoteElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" 
             style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Wisdom Archive
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collected thoughts from the digital frontier
          </p>
        </div>

        {/* Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {quotes.map((quote, index) => (
            <div
              key={index}
              data-index={index}
              className={`quote-card group relative p-6 rounded-2xl bg-card/40 backdrop-blur-sm 
                         border border-primary/20 hover:border-primary/40 transition-all duration-700
                         hover:scale-105 cursor-pointer ${
                           visibleQuotes.includes(index) ? 'animate-fade-in' : 'opacity-0'
                         }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transform: visibleQuotes.includes(index) ? 'translateY(0)' : 'translateY(50px)'
              }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 
                           transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: quote.gradient }}
              />
              
              {/* Quote Mark */}
              <div className="absolute top-4 left-4 text-6xl opacity-20 font-serif"
                   style={{ color: quote.gradient }}>
                "
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-8">
                <blockquote className="text-lg font-medium mb-6 leading-relaxed text-foreground">
                  {quote.text}
                </blockquote>
                
                <footer className="flex items-center justify-between">
                  <cite className="text-sm font-medium not-italic" style={{ color: quote.gradient }}>
                    — {quote.author}
                  </cite>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-px" style={{ backgroundColor: quote.gradient }} />
                </footer>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full animate-pulse"
                   style={{ backgroundColor: quote.gradient }} />
              <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full animate-pulse"
                   style={{ backgroundColor: quote.gradient, animationDelay: '1s' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};