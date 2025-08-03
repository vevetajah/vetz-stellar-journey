import { useState, useEffect, useRef } from 'react';

// Sample gallery items - in a real app, these would come from props or API
const galleryItems = [
  { id: 1, title: 'Neural Network Visualization', category: 'AI', image: '/placeholder.svg' },
  { id: 2, title: 'React Component Architecture', category: 'Frontend', image: '/placeholder.svg' },
  { id: 3, title: 'Mobile App Interface', category: 'Mobile', image: '/placeholder.svg' },
  { id: 4, title: 'API Dashboard Design', category: 'Backend', image: '/placeholder.svg' },
  { id: 5, title: 'Machine Learning Pipeline', category: 'AI', image: '/placeholder.svg' },
  { id: 6, title: 'Responsive Web Design', category: 'Frontend', image: '/placeholder.svg' },
  { id: 7, title: 'Cross-Platform App', category: 'Mobile', image: '/placeholder.svg' },
  { id: 8, title: 'Microservices Architecture', category: 'Backend', image: '/placeholder.svg' },
  { id: 9, title: 'Deep Learning Model', category: 'AI', image: '/placeholder.svg' },
  { id: 10, title: 'Progressive Web App', category: 'Frontend', image: '/placeholder.svg' },
  { id: 11, title: 'Flutter Application', category: 'Mobile', image: '/placeholder.svg' },
  { id: 12, title: 'GraphQL Implementation', category: 'Backend', image: '/placeholder.svg' },
];

const categories = ['All', 'AI', 'Frontend', 'Mobile', 'Backend'];

export const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset scroll when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => animationId = requestAnimationFrame(autoScroll);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="relative py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Project Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my digital creations across the development spectrum
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105
                           ${selectedCategory === category 
                             ? 'bg-primary text-primary-foreground border-primary glow-blue' 
                             : 'bg-card/60 backdrop-blur-sm text-muted-foreground border-primary/30 hover:border-primary/60'
                           }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Container */}
          <div ref={scrollRef} className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/30">
            <div className="flex gap-4 pb-4 px-4" style={{ width: `${filteredItems.length * 280}px` }}>
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden
                             bg-card/60 backdrop-blur-sm border border-primary/20
                             hover:border-primary/40 transition-all duration-500 hover:scale-105
                             cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 
                                 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium
                                    bg-card/80 backdrop-blur-sm border border-primary/30 text-primary">
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary
                                     transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A showcase of modern development practices and innovative solutions.
                      </p>
                    </div>

                    {/* Action Button */}
                    <button className="mt-4 w-full py-2 rounded-lg border border-primary/30 text-primary
                                       bg-primary/10 hover:bg-primary/20 transition-all duration-300
                                       hover:scale-105 text-sm font-medium">
                      View Project
                    </button>
                  </div>

                  {/* Glow Effect */}
                  {hoveredItem === item.id && (
                    <div className="absolute inset-0 rounded-xl bg-primary/10 pointer-events-none
                                    animate-pulse-glow" />
                  )}

                  {/* Floating Particles */}
                  <div className="absolute top-2 left-2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  <div className="absolute bottom-2 right-2 w-1 h-1 bg-secondary rounded-full animate-pulse"
                       style={{ animationDelay: '1s' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <span>Auto-scrolling gallery • Hover to pause</span>
            <span className="animate-pulse">←</span>
          </p>
        </div>
      </div>
    </section>
  );
};