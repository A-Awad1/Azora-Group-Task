const links = {
  firstCol: [
    "Home",
    "How It Works",
    "All Apps",
    "Pricing",
    "Setapp for Teams",
    "Blog",
    "Podcast",
    "Download",
  ],
  secondCol: [
    "About",
    "Support",
    "Education Discount",
    "Family Plan",
    "For Developers",
    "Gift Cards",
    "Redeem Card or Code",
    "Setapp Reviews",
    "Affiliate Program",
    "Mac Developer Survey 2023",
  ],
  thirdCol: [
    "Getting started with Setapp",
    "Remote access to other Mac",
    "Fix macOS Ventura",
    "problems",
    "Best productivity apps",
    "Best YouTube downloaders",
    "Uninstall apps",
  ],
};

export default function AppFooter() {
  return (
    <div className="big-container">
      <footer className="pt-[60px] pb-[40px] flex flex-col">
        <div className="grid grid-cols-6 gap-[10px]">
          <div className="col-span-6 flex flex-col gap-[20px] lg:col-span-3">
            <div className="flex items-center gap-[12px]">
              <img src="/logo.svg" alt="logo icon" />
              SETAPP
            </div>
            <div className="my-auto pb-[30px] flex flex-col gap-[24px]">
              <p>
                Updates from our team, written with love{" "}
                <img className="inline" src="/heart.svg"></img>
              </p>
              <div className="rounded-small overflow-hidden flex bg-[#404547] sm:w-1/2 lg:w-4/5 xl:w-3/5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-[12px] grow focus:outline-0"
                />
                <button className="w-[50px] bg-light flex justify-center items-center">
                  <img className="w-[8px]" src="/right-angle-dark.svg" alt="right angle arrow" />
                </button>
              </div>
            </div>
          </div>
          {Object.values(links).map((col, colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-2 col-span-6 sm:col-span-2 lg:col-span-1">
              {col.map((link, linkIdx) => (
                <li key={linkIdx} className="cursor-pointer select-none">
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="py-[40px] flex flex-wrap gap-3 justify-between items-center">
          <div className="flex text-[11px]">
            <span className="bg-[#969799] py-[6px] px-[4px] flex justify-center items-center">
              DMCA
            </span>
            <span className="bg-[#404547] py-[6px] px-[8px] flex justify-center items-center">
              PROTECTED
            </span>
          </div>
          <div className="flex gap-[10px] cursor-pointer">
            <img src="/english-flag.svg" alt="language icon" />
            <span>English</span>
            <img src="/down-arrow.svg" alt="down arrow" />
          </div>
        </div>
        <div className="border-t border-light pt-[28px] pb-[24px] flex justify-between flex-col gap-3 md:flex-row md:items-center">
          <p className="text-[12px]">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg.
            584165. VAT ID: IE3425001BH
          </p>
          <div className="flex items-center gap-[10px]">
            <button>
              <img src="/sites-icons/facebook-gray.svg" alt="facebook icon" />
            </button>
            <button>
              <img src="/sites-icons/twitter-gray.svg" alt="twitter icon" />
            </button>
            <button>
              <img src="/sites-icons/instagram-gray.svg" alt="instagram icon" />
            </button>
            <button>
              <img src="/sites-icons/youtube-gray.svg" alt="youtube icon" />
            </button>
          </div>
        </div>
        <div className="text-[12px] text-[#969799]">
          <span className="mr-[12px]">Terms of Use</span>
          <span>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}
