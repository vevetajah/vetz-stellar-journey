import { useState } from 'react';
import { 
  Home, 
  User, 
  Code, 
  Brain, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';

const navigationItems = [
  { icon: Home, label: 'Home', action: 'home' },
  { icon: User, label: 'About', action: 'about' },
  { icon: Code, label: 'Skills', action: 'skills' },
  { icon: Brain, label: 'AI Projects', action: 'ai' },
  { icon: MessageSquare, label: 'Contact', action: 'contact' },
];

const socialItems = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:vetz@example.com' },
];

export const NavigationButtons = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavClick = (action: string) => {
    const element = document.getElementById(action);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {/* Navigation Buttons */}
      <div className="flex flex-col gap-3">
        {navigationItems.map((item) => (
          <div key={item.action} className="relative group">
            <button
              onClick={() => handleNavClick(item.action)}
              onMouseEnter={() => setHoveredItem(item.action)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 
                         flex items-center justify-center text-primary hover:text-primary-foreground
                         transition-all duration-300 hover:scale-110 hover:bg-primary/80 glow-blue
                         hover:shadow-[0_0_30px_hsl(200_100%_65%/0.6)]"
            >
              <item.icon size={20} />
            </button>
            
            {/* Tooltip */}
            {hoveredItem === item.action && (
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                              bg-card/90 backdrop-blur-sm border border-primary/30 rounded-lg px-3 py-2
                              text-sm text-foreground whitespace-nowrap animate-fade-in glow-blue">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                                w-0 h-0 border-t-4 border-b-4 border-l-4 
                                border-transparent border-l-primary/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Separator */}
      <div className="w-8 h-px bg-primary/30 self-center" />

      {/* Social Links */}
      <div className="flex flex-col gap-3">
        {socialItems.map((item) => (
          <div key={item.label} className="relative group">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-secondary/30 
                         flex items-center justify-center text-secondary hover:text-secondary-foreground
                         transition-all duration-300 hover:scale-110 hover:bg-secondary/80 glow-orange
                         hover:shadow-[0_0_30px_hsl(30_100%_70%/0.6)]"
            >
              <item.icon size={20} />
            </a>
            
            {/* Tooltip */}
            {hoveredItem === item.label && (
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                              bg-card/90 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-2
                              text-sm text-foreground whitespace-nowrap animate-fade-in glow-orange">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                                w-0 h-0 border-t-4 border-b-4 border-l-4 
                                border-transparent border-l-secondary/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};