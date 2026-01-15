export default function PromotionCard() {
  return (
    <section className="pt-[88px] pb-[20px] border-y border-[#3e3c3c]">
      <div className="flex flex-col rounded-big bg-[#F5F5F5] text-dark p-[20px] md:px-[75px] md:pt-[124px] md:pb-[92px]">
        <div className="w-fit">
          <img className="h-[120px]" src="/logo.svg" alt="logo icon" />
        </div>
        <div className="mt-[21px] mb-[60px] flex flex-col text-[30px] font-semibold md:text-[46px] md:leading-[60px]">
          <span>Superpowers starting $9.99/month.</span>
          <span>Free for 7 days.</span>
        </div>
        <div className="flex gap-[25px] flex-col md:flex-row">
          <button className="text-light bg-dark rounded-small py-[13px] px-[31px]">
            Get started now
          </button>
          <button className="rounded-small py-[13px] px-[31px] border">More about Setapp</button>
        </div>
      </div>
    </section>
  );
}
