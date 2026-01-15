export default function IntroContent() {
  return (
    <section className="flex flex-col justify-between gap-5 pt-[30px] lg:pt-[60px] lg:pl-[30px] lg:pr-[10px] lg:flex-row xl:pt-[118px]">
      <div className="flex items-start self-start w-[16vw] sm:ml-[10vw] lg:ml-0 lg:flex-col xl:w-auto">
        <img className="relative z-1 lg:top-10" src="/intro-boxes/pics.svg" alt="pics icon"></img>
        <img
          className="self-end z-2 lg:self-auto"
          src="/intro-boxes/macpaw.svg"
          alt="macpaw icon"
        ></img>
        <img
          className="self-end relative z-2 lg:bottom-16 lg:left-4"
          src="/intro-boxes/blocker.svg"
          alt="blocker icon"
        ></img>
        <img
          className="self-end relative z-1 lg:bottom-15 xl:bottom-10"
          src="/intro-boxes/teamwork.svg"
          alt="teamwork icon"
        ></img>
        <img
          className="self-end relative z-2 lg:self-auto lg:bottom-19"
          src="/intro-boxes/secure.svg"
          alt="secure icon"
        ></img>
      </div>
      <div className="flex flex-col items-center order-first lg:order-0">
        <div className="flex justify-center items-center aspect-square h-[90px] p-[10px] bg-black rounded-big xl:h-[128px] xl:p-[18px]">
          <img className="h-full" src="/logo.svg" alt="logo icon" />
        </div>
        <h2 className="font-bold flex flex-col items-center tracking-[1px] text-[25px] my-[27px] lg:text-[40px] xl:text-[64px] xl:leading-17 xl:my-[50px]">
          <span>Dozens of apps.</span>
          <span>One subscription.</span>
          <span>$9.99</span>
        </h2>
        <div className="flex flex-col gap-[20px] mb-[27px] xl:flex-row">
          <button className="flex justify-center bg-light rounded-small p-[32px] py-[15px] text-dark">
            Try free for 7 days
          </button>
          <button className="flex justify-center bg-light rounded-small py-[10px] px-[14px]">
            <img src="/apple.svg" alt="apple icon" />
          </button>
          <button className="flex justify-center bg-light rounded-small py-[10px] px-[14px]">
            <img src="/google.svg" alt="google icon" />
          </button>
        </div>
        <p className="text-center leading-8 text-[18px] xl:w-2/3">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>
      <div className="flex items-end w-[16vw] sm:ml-[5vw] lg:self-end lg:ml-0 lg:flex-col xl:w-auto">
        <img
          className="relative lg:top-7 xl:top-12 z-1"
          src="/intro-boxes/wifi.svg"
          alt="wifi icon"
        ></img>
        <img
          className="self-start relative z-2 lg:bottom-4 lg:right-18"
          src="/intro-boxes/plan.svg"
          alt="plan icon"
        ></img>
        <img
          className="relative z-2 lg:bottom-20 xl:bottom-16 "
          src="/intro-boxes/convert-jpg.svg"
          alt="convert jpg icon"
        ></img>
        <img
          className="relative z-1 lg:bottom-28 lg:right-14 "
          src="/intro-boxes/manage-mac.svg"
          alt="manage icon"
        ></img>
        <img
          className="relative z-2 lg:bottom-34 xl:right-19"
          src="/intro-boxes/code-easier.svg"
          alt="code easier icon"
        ></img>
      </div>
    </section>
  );
}
