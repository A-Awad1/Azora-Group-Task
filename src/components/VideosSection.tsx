export default function VideosSection() {
  return (
    <div className="big-container">
      <section className="relative flex flex-col rounded-big bg-[#765070] pt-[30px] px-[30px] lg:pr-[65px] lg:pl-[90px] lg:flex-row">
        <div className="flex flex-col self-center">
          <p className="mt-[50px] text-[26px] font-medium">
            Musicians like Jason use Setapp to push the limits of their creativity, dancing through
            tasks for more time to play.
          </p>
          <span className="mt-[20px] mb-[40px] lg:mb-[130px]">Jason Staczek</span>
          <button>
            <img src="/play.svg" alt="play icon" />
          </button>
        </div>
        <div className="mt-[50px] max-w-[450px] flex items-end self-center lg:mt-0 xl:min-w-[670px]">
          <img className="max-w-full" src="/staczek.png" alt="staczek image" />
        </div>
        <div className="absolute top-[25px] right-[25px] flex gap-[46px] lg:top-[65px] lg:right-[46px]">
          <button>
            <img src="/left-angle.svg" alt="angle icon" />
          </button>
          <button>
            <img src="/right-angle.svg" alt="angle icon" />
          </button>
        </div>
      </section>
      <div className="flex justify-center gap-[25px] mt-[25px]">
        {Array.from({ length: 4 }, (_, i) => (
          <button
            key={i}
            className={`${
              i === 0 ? "bg-[#1D1D22]" : "bg-[#D5D4D4]"
            } rounded-full w-[12px] aspect-square`}
          ></button>
        ))}
      </div>
    </div>
  );
}
