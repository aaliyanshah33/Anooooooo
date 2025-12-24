import HeroSection from "@/components/HeroSection";
import MessageWall from "@/components/MessageWall";
import PhotoGallery from "@/components/PhotoGallery";
import WishesSection from "@/components/WishesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <MessageWall />
      <PhotoGallery />
      <WishesSection />
      <Footer />
    </main>
  );
};

export default Index;
