"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "./ui/button";
import CustomCard from "./ui/custom-card";
import SectionHeader from "./ui/section-header";

function AboutMeCard() {
  const [readMore, setReadMore] = useState(false);

  const paragraphStyle =
    "text-base text-zinc-500 dark:text-zinc-400 p-3 sm:p-4 leading-relaxed";

  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <SectionHeader
          title="About Me"
          subtitle="Learn more my journey"
          buttonText="More about me"
          buttonLink="/about"
        />
      </div>
      <div
        className={clsx(
          "transition-[max-height] duration-500 ease-in-out overflow-hidden relative",
          {
            "max-h-[1000px]": readMore,
            "max-h-80": !readMore,
          }
        )}
      >
        <p className={paragraphStyle}>
          Hi, I'm Rafael Fagundes! A Full Stack and Mobile Developer with over
          12 years of experience, I am passionate about creating innovative and
          efficient solutions that empower businesses to grow and adapt in the
          digital age. I recently completed a Mobile Solutions Development
          graduate program at Conestoga College, where I graduated with high
          distinction.
        </p>
        <p className={paragraphStyle}>
          Throughout my career, I have honed my skills in both frontend and
          backend development, working with cutting-edge technologies like
          React, Flutter, .NET, and Node.js. My work spans industries such as
          e-commerce, food delivery, and architecture, with a focus on
          delivering scalable, robust systems that meet real-world challenges.
        </p>
        <p className={paragraphStyle}>
          From integrating Solana Blockchain with Discord to optimizing
          cloud-based rendering for 3D architecture models, my diverse
          experiences have allowed me to build cross-platform applications and
          collaborate with top developers globally.
        </p>
        <p className={paragraphStyle}>
          Currently, I am diving deeper into mobile development, building on my
          knowledge of iOS and Android to create impactful, user-friendly apps.
        </p>
        <p className={paragraphStyle}>
          Let's build something amazing together!
        </p>
        {!readMore && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t to-transparent from-[#fafbfc] dark:from-[#1c1c1c] transition-opacity duration-500 ease-in-out"></div>
        )}
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button variant="link" onClick={() => setReadMore(!readMore)}>
          {!readMore ? (
            <div className="flex flex-row items-center">
              <span>Read more</span> <CaretDown size={16} className="ml-1" />
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <span>Collapse</span> <CaretUp size={16} className="ml-1" />
            </div>
          )}
        </Button>
      </div>
    </CustomCard>
  );
}

export default AboutMeCard;
