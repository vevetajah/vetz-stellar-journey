import { useState } from 'react';
import { 
  Home, 
  User, 
  Code, 
  Brain, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Mail,
  Menu,
  X
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
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNavClick = (action: string, event?: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(action);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
    
    // Add visual feedback
    const button = event?.currentTarget as HTMLButtonElement;
    if (button) {
      button.classList.add('animate-bounce-in');
      setTimeout(() => button.classList.remove('animate-bounce-in'), 600);
    }
  };

  const handleSocialClick = (href: string) => {
    window.open(href, '_blank');
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-3 animate-slide-in-right">
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-3">
            {navigationItems.map((item, index) => (
              <div 
                key={item.action} 
                className="relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={(e) => handleNavClick(item.action, e)}
                  onMouseEnter={() => setHoveredItem(item.action)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 
                             flex items-center justify-center text-primary hover:text-primary-foreground
                             transition-all duration-500 hover:scale-125 hover:bg-primary/80 glow-blue
                             hover:shadow-[0_0_40px_hsl(200_100%_65%/0.8)] animate-fade-in
                             active:scale-95 active:animate-bounce-in"
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
          <div className="w-8 h-px bg-primary/30 self-center animate-fade-in" style={{ animationDelay: '250ms' }} />

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            {socialItems.map((item, index) => (
              <div 
                key={item.label} 
                className="relative group"
                style={{ animationDelay: `${(index + 5) * 50}ms` }}
              >
                <button
                  onClick={() => handleSocialClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-secondary/30 
                             flex items-center justify-center text-secondary hover:text-secondary-foreground
                             transition-all duration-300 hover:scale-110 hover:bg-secondary/80 glow-orange
                             hover:shadow-[0_0_30px_hsl(30_100%_70%/0.6)] animate-fade-in"
                >
                  <item.icon size={20} />
                </button>
                
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
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary backdrop-blur-sm 
                   flex items-center justify-center text-white
                   transition-all duration-300 hover:scale-110 shadow-lg
                   hover:shadow-[0_0_30px_hsl(200_100%_65%/0.8)]"
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};