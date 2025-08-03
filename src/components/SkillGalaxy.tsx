import { useState } from 'react';
import { Code, Server, Brain, Database, Smartphone, Globe } from 'lucide-react';

const skillCategories = {
  frontend: {
    name: 'Frontend',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Vue'],
    color: 'hsl(200 100% 65%)',
    position: { x: 20, y: 25 }
  },
  backend: {
    name: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Flask', 'Go', 'PHP'],
    color: 'hsl(30 100% 70%)',
    position: { x: 80, y: 25 }
  },
  mobile: {
    name: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'hsl(120 100% 70%)',
    position: { x: 20, y: 75 }
  },
  database: {
    name: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
    color: 'hsl(60 100% 70%)',
    position: { x: 80, y: 75 }
  },
  ai: {
    name: 'AI/ML',
    icon: Brain,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'HuggingFace', 'NumPy', 'OpenCV', 'scikit-learn'],
    color: 'hsl(280 100% 75%)',
    position: { x: 50, y: 50 }
  }
};

export const SkillGalaxy = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Skill Galaxy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navigate through my constellation of technologies and expertise
          </p>
        </div>

        {/* Galaxy Map */}
        <div className="relative h-[600px] md:h-[700px] mx-auto max-w-6xl scroll-reveal" style={{ animationDelay: '0.2s' }}>
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(200 100% 65%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(30 100% 70%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(30 100% 70%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(280 100% 75%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(280 100% 75%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(200 100% 65%)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <line 
              x1="25%" y1="30%" x2="75%" y2="30%" 
              stroke="url(#lineGradient1)" 
              strokeWidth="2"
              className="animate-pulse"
            />
            <line 
              x1="75%" y1="30%" x2="50%" y2="70%" 
              stroke="url(#lineGradient2)" 
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <line 
              x1="50%" y1="70%" x2="25%" y2="30%" 
              stroke="url(#lineGradient3)" 
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </svg>

          {/* Skill Categories */}
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ 
                left: `${category.position.x}%`, 
                top: `${category.position.y}%` 
              }}
              onMouseEnter={() => setHoveredCategory(key)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Central Node */}
              <div 
                className="w-24 h-24 rounded-full border-2 flex flex-col items-center justify-center
                           bg-card/80 backdrop-blur-sm transition-all duration-500
                           hover:scale-125 cursor-pointer animate-bounce-in group"
                style={{ 
                  borderColor: category.color,
                  boxShadow: `0 0 30px ${category.color}60`,
                  animationDelay: `${Object.keys(skillCategories).indexOf(key) * 200}ms`
                }}
                onMouseEnter={() => setHoveredCategory(key)}
              >
                <category.icon 
                  size={24} 
                  style={{ color: category.color }}
                  className="mb-1 group-hover:animate-skill-pulse"
                />
                <span className="text-xs font-bold text-center leading-none" style={{ color: category.color }}>
                  {category.name}
                </span>
              </div>

              {/* Skill Nodes */}
              {hoveredCategory === key && (
                <div className="absolute inset-0">
                  {category.skills.map((skill, index) => {
                    const angle = (360 / category.skills.length) * index;
                    const radius = 120;
                    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
                    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;

                    return (
                      <div
                        key={skill}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-fade-in"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          animationDelay: `${index * 100}ms`
                        }}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div 
                          className="px-4 py-2 rounded-full border-2 bg-card/95 backdrop-blur-sm
                                     text-sm font-medium transition-all duration-300
                                     hover:scale-125 cursor-pointer whitespace-nowrap shadow-lg
                                     hover:animate-skill-pulse"
                          style={{ 
                            borderColor: category.color,
                            color: category.color,
                            boxShadow: hoveredSkill === skill ? `0 0 25px ${category.color}80` : `0 0 10px ${category.color}40`
                          }}
                        >
                          {skill}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Central Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-galactic animate-pulse-glow flex items-center justify-center">
              <Code size={20} className="text-white animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};