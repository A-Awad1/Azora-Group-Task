export default function SetappContent() {
  return (
    <div className="small-container">
      <section className="flex flex-col gap-[88px] pt-[100px] pb-[90px] border-[#E5E5E5] lg:border-y">
        <div className="flex justify-between gap-4 flex-col md:flex-row md:gap-10">
          <h2 className="font-semibold text-[36px] tracking-[1px]">What you get on Setapp.</h2>
          <p className="text-[18px] leading-8 md:w-1/2">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>
        <div className="grid gap-[20px]">
          <article className="col-span-2 rounded-big bg-[#DF96AE] pt-[60px] px-[10px] md:px-[37px]">
            <div className="flex gap-[32px] pl-[25px]">
              <div className="w-[80px]">
                <img src="/setapp/pc-icon.png" alt="pc icon" />
              </div>
              <div className="flex flex-col justify-center text-dark">
                <span className="font-semibold text-[26px]">Keep your Mac clean</span>
                <span className="text-[18px]">
                  Remove junk, scan for malware, wipe email attachments
                </span>
              </div>
            </div>
            <div>
              <img src="/setapp/scan.png" alt="scan image" />
            </div>
          </article>
          <article className="col-span-2 rounded-big bg-[#F4F0E4] md:col-span-1">
            <div>
              <img src="/setapp/code.png" alt="code image" />
            </div>
            <div className="flex flex-col text-dark gap-[19px] p-[60px] pt-0">
              <div className="w-[80px]">
                <img src="/setapp/code-icon.png" alt="code icon" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[26px]">Write code</span>
                <span className="text-[18px]">Create applications in more than 25 languages</span>
              </div>
            </div>
          </article>
          <article className="col-span-2 rounded-big bg-[#384C75] md:col-span-1">
            <div className="flex flex-col gap-[19px] p-[60px] pb-[50px]">
              <div className="w-[80px]">
                <img src="/setapp/meeter-icon.png" alt="meeter icon" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[26px]">Join meetings in a click</span>
                <span className="text-[18px]">
                  Quickly access links to your meetings from menu bar
                </span>
              </div>
            </div>
            <div>
              <img src="/setapp/meeter.png" alt="meeter image" />
            </div>
          </article>
        </div>
        <button className="flex self-center gap-[11px] text-[20px] font-medium">
          <img src="/big-right-arrow.svg" alt="arrow icon" />
          <span>View all superpowers</span>
        </button>
        <div className="flex justify-between gap-4 flex-col md:flex-row md:gap-10">
          <span className="font-semibold text-[36px] tracking-[1px]">Your Setapp journey.</span>
          <p className="text-[18px] leading-8 md:w-1/2">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>
      </section>
    </div>
  );
}
