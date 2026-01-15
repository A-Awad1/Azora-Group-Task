import { useState } from "react";

const pages: string[] = ["How it works", "All apps", "Pricing", "For Teams", "Blog", "Podcast"];

export default function AppHeader() {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <button className="my-5 sm:hidden" onClick={() => setMenuShow(true)}>
        <img className="w-[25px]" src="/menu-icon.svg" alt="menu icon" />
      </button>
      <header className={menuShow ? "flex" : "max-sm:hidden"}>
        <div className="grow fixed top-0 left-0 h-screen w-3xs flex flex-col gap-[8px] whitespace-nowrap select-none text-[14px] p-[20px] bg-[#404547] sm:bg-transparent sm:static sm:h-auto sm:w-auto sm:flex-row sm:items-center sm:justify-between sm:p-0 sm:pt-[17px] md:gap-[15px] lg:gap-[20px] xl:gap-[30px]">
          <button className="absolute right-2 top-2 sm:hidden" onClick={() => setMenuShow(false)}>
            <img className="w-[25px]" src="/close-icon.svg" alt="close icon" />
          </button>
          <img className="w-[20px]" src="/logo.svg" alt="logo icon" />
          <div className="flex flex-col gap-[inherit] sm:flex-row sm:items-center">
            <ul className="flex flex-col gap-[inherit] py-[30px] border-light border-b sm:flex-row sm:items-center sm:py-0 sm:px-[8px] sm:border-b-0 sm:border-r md:px-[15px] lg:px-[20px] xl:px-[30px]">
              {pages.map((page) => (
                <li key={page} className="cursor-pointer">
                  {page}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-[inherit] py-[30px] sm:flex-row sm:py-0">
              <button className="flex justify-center items-center border rounded-small border-light h-8 sm:border-0 sm:h-auto">
                <img className="min-w-[18px]" src="/english-flag.svg" alt="english flag icon" />
              </button>
              <button className="border rounded-small border-light h-8 sm:h-auto sm:border-0">
                Sign In
              </button>
              <button className="border rounded-small border-light h-8 sm:h-auto sm:py-[4px] sm:px-[6px] md:py-[6px] md:px-[15px] xl:px-[23px]">
                Try free
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
