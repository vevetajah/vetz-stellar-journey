import { useState, useEffect } from 'react';
import animeCharacter from '@/assets/anime-assistant.png';

export const AnimeAssistant = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  const greetings = [
    "Need help exploring? ✨",
    "Welcome to Vetz's universe! 🌟",
    "Ready for an adventure? 🚀",
    "Curious about something? 💫",
    "Let's discover together! 🌙"
  ];

  useEffect(() => {
    // Blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    // Random greetings
    const greetingInterval = setInterval(() => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      setSpeechBubble(randomGreeting);
      setShowBubble(true);
      
      setTimeout(() => {
        setShowBubble(false);
      }, 3000);
    }, 8000 + Math.random() * 5000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(greetingInterval);
    };
  }, []);

  const handleClick = () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setSpeechBubble(randomGreeting);
    setShowBubble(true);
    
    setTimeout(() => {
      setShowBubble(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Speech Bubble */}
      {showBubble && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 animate-fade-in">
          <div className="bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl px-4 py-2 shadow-lg glow-blue">
            <p className="text-sm text-foreground whitespace-nowrap">{speechBubble}</p>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/30" />
        </div>
      )}

      {/* Anime Character */}
      <div 
        className="relative cursor-pointer group transition-all duration-300 hover:scale-110"
        onClick={handleClick}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-galactic opacity-20 blur-xl animate-pulse-glow" />
        
        {/* Character Container */}
        <div className="relative w-24 h-24 animate-float">
          <img 
            src={animeCharacter}
            alt="Anime Assistant"
            className="w-full h-full object-contain drop-shadow-lg"
          />
          
          {/* Blinking Overlay */}
          {isBlinking && (
            <div className="absolute inset-0 bg-background/50 rounded-full transition-opacity duration-150" />
          )}
          
          {/* Floating Particles */}
          <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};