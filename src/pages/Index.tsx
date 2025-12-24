import HeroSection from "@/components/HeroSection";
import MessageWall from "@/components/MessageWall";
import CountdownSection from "@/components/CountdownSection";
import PhotoGallery from "@/components/PhotoGallery";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";
import FloatingDoodles from "@/components/FloatingDoodles";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating decorative elements */}
      <FloatingDoodles />
      
      {/* Main sections */}
      <HeroSection />
      <CountdownSection />
      <MessageWall />
      <PhotoGallery />
      <WishesSection />
      <Footer />
    </main>
  );
};

export default Index;
