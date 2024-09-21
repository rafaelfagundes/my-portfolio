"use client";

import { Button } from "./button";
import CustomCard from "./custom-card";
import { ThemeSwitcher } from "./theme-switcher";

import { DM_Mono as Mono } from "next/font/google";

const mono = Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

function Navbar() {
  return (
    <>
      <div className="h-5 w-full  bg-[#eaedf1] dark:bg-[#161616] fixed top-0 z-40"></div>
      <nav className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center justify-between max-w-xl mx-auto px-4">
        <CustomCard blurred={true}>
          <div className="flex flex-row items-center justify-between p-1">
            <div className="bg-zinc-100 dark:bg-black px-3 py-1 rounded-lg">
              <span
                className={`text-sm sm:text-lg font-bold text-green-500/80 dark:text-green-300 tracking-tighter ${mono.className}`}
              >
                rafaelfagundes();
                <span className="animate-blink">▉</span>
              </span>
            </div>

            <div className="flex flex-row items-center gap-3">
              <ThemeSwitcher></ThemeSwitcher>
              <Button
                variant="secondary"
                className="bg-orange-100 hover:bg-orange-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/rafaelcfl/")
                }
              >
                <p className="text-sm">Hire Me</p>
              </Button>
            </div>
          </div>
        </CustomCard>
      </nav>
    </>
  );
}

export default Navbar;
