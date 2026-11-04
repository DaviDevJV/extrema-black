import HeroSection from "@/components/landing/HeroSection";
import AuthorityBar from "@/components/landing/AuthorityBar";
import StockSection from "@/components/landing/StockSection";
import VideoFeedbacks from "@/components/landing/VideoFeedbacks";
import LogisticsSection from "@/components/landing/LogisticsSection";
import Footer from "@/components/landing/Footer";
import MobileStickBar from "@/components/landing/MobileStickBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <HeroSection />
      <AuthorityBar />
      <StockSection />
      <VideoFeedbacks />
      <LogisticsSection />
      <Footer />
      <MobileStickBar />
    </main>
  );
};

export default Index;
