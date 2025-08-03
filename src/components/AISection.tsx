import { Brain, Eye, Cpu, Zap } from 'lucide-react';

const aiCategories = [
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Advanced text understanding, sentiment analysis, and language generation',
    color: 'hsl(200 100% 65%)',
    projects: ['Chatbot Systems', 'Text Analytics', 'Language Translation']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image recognition, object detection, and visual AI applications',
    color: 'hsl(30 100% 70%)',
    projects: ['Image Classification', 'Object Detection', 'OCR Systems']
  },
  {
    icon: Cpu,
    title: 'Generative AI',
    description: 'Content creation, code generation, and creative AI solutions',
    color: 'hsl(280 100% 75%)',
    projects: ['AI Code Assistant', 'Content Generator', 'Art Creation']
  },
  {
    icon: Zap,
    title: 'ML Pipelines',
    description: 'End-to-end machine learning workflows and deployment systems',
    color: 'hsl(120 100% 70%)',
    projects: ['Model Training', 'Data Pipelines', 'MLOps Systems']
  }
];

export const AISection = () => {
  return (
    <section id="ai" className="relative py-20 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <defs>
            <pattern id="neuralGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(200 100% 65%)" opacity="0.5" />
              <line x1="50" y1="50" x2="150" y2="50" stroke="hsl(200 100% 65%)" strokeWidth="1" opacity="0.3" />
              <line x1="50" y1="50" x2="50" y2="150" stroke="hsl(200 100% 65%)" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            AI Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering intelligent solutions with cutting-edge artificial intelligence
          </p>
        </div>

        {/* AI Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aiCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-primary/20
                         hover:border-primary/40 transition-all duration-500 hover:scale-105
                         hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ backgroundColor: category.color }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6
                             bg-card/60 backdrop-blur-sm border transition-all duration-300
                             group-hover:scale-110"
                  style={{ 
                    borderColor: category.color,
                    color: category.color 
                  }}
                >
                  <category.icon size={28} />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Projects */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3">Key Projects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.projects.map((project) => (
                      <span
                        key={project}
                        className="px-3 py-1 rounded-full text-xs font-medium
                                   bg-card/60 backdrop-blur-sm border transition-all duration-300
                                   hover:scale-105"
                        style={{ 
                          borderColor: category.color,
                          color: category.color 
                        }}
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" 
                   style={{ backgroundColor: category.color }} />
              <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full animate-pulse" 
                   style={{ backgroundColor: category.color, animationDelay: '1s' }} />
            </div>
          ))}
        </div>

        {/* Neural Network Animation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full 
                          bg-card/40 backdrop-blur-sm border border-primary/30">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Neural networks processing...</span>
          </div>
        </div>
      </div>
    </section>
  );
};