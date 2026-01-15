import AppHeader from "./AppHeader";

export default function MainLayout() {
  return (
    <main className="flex flex-col bg-dark text-light font-display min-h-screen">
      <div className="container max-w-[1440px] mx-auto px-[40px]">
        <AppHeader />
      </div>
    </main>
  );
}
