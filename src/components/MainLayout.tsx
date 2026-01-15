import AppHeader from "./AppHeader";
import IntroContent from "./IntroContent";
import SetappComments from "./SetappComments";
import SetappContent from "./SetappContent";
import VideosSection from "./VideosSection";

export default function MainLayout() {
  return (
    <main className="flex flex-col bg-dark text-light font-display min-h-screen">
      <div className="container max-w-[1440px] mx-auto px-[40px]">
        <AppHeader />
        <IntroContent />
        <SetappContent />
      </div>
      <section className="gradient pt-[108px] pb-[20px]">
        <div className="container max-w-[1440px] mx-auto px-[40px]">
          <VideosSection />
          <SetappComments />
        </div>
      </section>
    </main>
  );
}
