import { Navigation } from '@/components/Navigation';
import { ScrollFlower } from '@/components/ScrollFlower';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { IndividualFlowersSection } from '@/components/sections/IndividualFlowersSection';
import { BouquetSection } from '@/components/sections/BouquetSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { WeddingSection } from '@/components/sections/WeddingSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollFlower />
      <main>
        <HeroSection />
        <StorySection />
        <IndividualFlowersSection />
        <BouquetSection />
        <GallerySection />
        <WeddingSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
