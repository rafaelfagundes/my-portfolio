"use client";
import { CaretDown, CaretUp, Pause, Play } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";
import {
  siDotnet,
  siGit,
  siGo,
  siKotlin,
  siLinux,
  siMongodb,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siSwift,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { Button } from "./ui/button";
import CustomCard from "./ui/custom-card";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SectionHeader from "./ui/section-header";

const techIcons = [
  {
    title: "TypeScript",
    image: siTypescript.svg,
    color: siTypescript.hex,
  },
  {
    title: "Swift",
    image: siSwift.svg,
    color: siSwift.hex,
  },
  {
    title: "Go",
    image: siGo.svg,
    color: siGo.hex,
  },
  {
    title: ".Net/C#",
    image: siDotnet.svg,
    color: siDotnet.hex,
  },
  {
    title: "Python",
    image: siPython.svg,
    color: siPython.hex,
  },
  {
    title: "Kotlin",
    image: siKotlin.svg,
    color: siKotlin.hex,
  },
  {
    title: "React",
    image: siReact.svg,
    color: siReact.hex,
  },
  {
    title: "Next.js",
    image: siNextdotjs.svg,
    color: siNextdotjs.hex,
    invertOnDark: true,
  },
  {
    title: "Tailwind",
    image: siTailwindcss.svg,
    color: siTailwindcss.hex,
  },
  {
    title: "Node.js",
    image: siNodedotjs.svg,
    color: siNodedotjs.hex,
  },
  {
    title: "Nest.js",
    image: siNestjs.svg,
    color: siNestjs.hex,
  },
  {
    title: "PostgreSQL",
    image: siPostgresql.svg,
    color: siPostgresql.hex,
  },
  {
    title: "MongoDB",
    image: siMongodb.svg,
    color: siMongodb.hex,
  },
  {
    title: "Redis",
    image: siRedis.svg,
    color: siRedis.hex,
  },
  {
    title: "Linux",
    image: siLinux.svg,
    color: "000000",
    invertOnDark: true,
  },
  {
    title: "Git",
    image: siGit.svg,
    color: siGit.hex,
  },
];

function AboutMeCard() {
  const [readMore, setReadMore] = useState(false);
  const [pause, setPause] = useState(false);

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
            "max-h-96": !readMore,
          }
        )}
      >
        <p className={paragraphStyle}>
          {`Hi, I'm Rafael Fagundes! A Full Stack and Mobile Developer with over
          12 years of experience, I am passionate about creating innovative and
          efficient solutions that empower businesses to grow and adapt in the
          digital age. I recently completed a Mobile Solutions Development
          graduate program at Conestoga College, where I graduated with high
          distinction.`}
        </p>
        <div className="mt-3">
          <InfiniteMovingCards
            items={techIcons}
            speed="slow"
            small={true}
            play={!pause}
            onClick={() => setPause(!pause)}
            className="mb-1 sm:mb-0 cursor-pointer"
          ></InfiniteMovingCards>
          <div className="hidden sm:block">
            {!pause ? (
              <div className="flex flex-row items-center justify-center mt-2 cursor-pointer">
                <Pause
                  size={12}
                  className="text-black/40 dark:text-white/40 mr-1"
                ></Pause>
                <p
                  className="text-xs text-black/40 text-center dark:text-white/40"
                  onClick={() => setPause(true)}
                >
                  Click to pause
                </p>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-center mt-2 cursor-pointer">
                <Play
                  size={12}
                  className="text-black/40 dark:text-white/40 mr-1"
                ></Play>
                <p
                  className="text-xs text-black/40 text-center   dark:text-white/40"
                  onClick={() => setPause(false)}
                >
                  Click to resume
                </p>
              </div>
            )}
          </div>
        </div>
        <p className={paragraphStyle}>
          {`Throughout my career, I have honed my skills in both frontend and
          backend development, working with cutting-edge technologies like
          React, Flutter, .NET, and Node.js. My work spans industries such as
          e-commerce, food delivery, and architecture, with a focus on
          delivering scalable, robust systems that meet real-world challenges.`}
        </p>
        <p className={paragraphStyle}>
          {`From integrating Solana Blockchain with Discord to optimizing
          cloud-based rendering for 3D architecture models, my diverse
          experiences have allowed me to build cross-platform applications and
          collaborate with top developers globally.`}
        </p>
        <p className={paragraphStyle}>
          {`Currently, I am diving deeper into mobile development, building on my
          knowledge of iOS and Android to create impactful, user-friendly apps.`}
        </p>
        <p className={paragraphStyle}>
          {`Let's build something amazing together!`}
        </p>
        {!readMore && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t to-transparent from-[#fafbfc] dark:from-[#1c1c1c] transition-opacity duration-500 ease-in-out"></div>
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
