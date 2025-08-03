import { StarfieldBackground } from '@/components/StarfieldBackground';
import { HeroSection } from '@/components/HeroSection';
import { AnimeAssistant } from '@/components/AnimeAssistant';
import { NavigationButtons } from '@/components/NavigationButtons';
import { SkillGalaxy } from '@/components/SkillGalaxy';
import { AISection } from '@/components/AISection';
import { QuoteWall } from '@/components/QuoteWall';
import { PhotoGallery } from '@/components/PhotoGallery';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Background Elements */}
      <StarfieldBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <SkillGalaxy />
        <AISection />
        <QuoteWall />
        <PhotoGallery />
      </main>

      {/* Fixed UI Elements */}
      <AnimeAssistant />
      <NavigationButtons />
    </div>
  );
};

export default Index;
