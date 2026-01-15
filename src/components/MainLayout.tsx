import AppHeader from "./AppHeader";
import IntroContent from "./IntroContent";
import SetappComments from "./SetappComments";
import SetappContent from "./SetappContent";
import VideosSection from "./VideosSection";
import PromotionCard from "./PromotionCard";
import AppFooter from "./AppFooter";

export default function MainLayout() {
  return (
    <main className="flex flex-col bg-dark text-light font-display min-h-screen">
      <AppHeader />
      <IntroContent />
      <SetappContent />
      <section className="gradient pt-[108px]">
        <VideosSection />
        <SetappComments />
        <PromotionCard />
        <AppFooter />
      </section>
    </main>
  );
}
