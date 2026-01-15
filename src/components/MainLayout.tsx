import AppHeader from "./AppHeader";
import IntroContent from "./IntroContent";
import SetappComments from "./SetappComments";
import SetappContent from "./SetappContent";
import VideosSection from "./VideosSection";
import PromotionCard from "./PromotionCard";
import AppFooter from "./AppFooter";
import { Activity, useEffect, useState } from "react";
import MainLoader from "./MainLoader";

export default function MainLayout() {
  const [pending, setPending] = useState(true);
  useEffect(() => {
    setTimeout(() => setPending(false), 2000);
  }, []);

  return (
    <main className="flex flex-col bg-dark text-light font-display min-h-screen">
      {pending && <MainLoader />}
      <Activity mode={pending ? "hidden" : "visible"}>
        <AppHeader />
        <IntroContent />
        <SetappContent />
        <section className="gradient pt-[108px]">
          <VideosSection />
          <SetappComments />
          <PromotionCard />
          <AppFooter />
        </section>
      </Activity>
    </main>
  );
}
