"use client";
import {
  CaretDown,
  CaretUp,
  LinkedinLogo,
  Pause,
  Play,
} from "@phosphor-icons/react";
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
    "text-sm text-zinc-500 dark:text-zinc-400 p-3 sm:p-4 leading-relaxed max-w-md text-start";

  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <SectionHeader
          title="About Me"
          subtitle="Learn more my journey"
          // buttonText="More about me"
          // buttonLink="/about"
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
        <div className="mt-3 mb-3">
          <InfiniteMovingCards
            items={techIcons}
            speed="normal"
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
        <div className="flex flex-col items-center relative">
          <p className="text-9xl opacity-10 absolute -top-3 left-0 hidden sm:block">
            “
          </p>
          <p className="text-9xl opacity-10 absolute bottom-0 right-0 hidden sm:block">
            ”
          </p>
          <p className={paragraphStyle}>
            {`Hi, I'm Rafael Fagundes! I'm a Full Stack and Mobile Developer with 12+ years of experience. I'm passionate about creating innovative solutions for businesses in the digital age. I recently graduated with high distinction from Conestoga College's Mobile Solutions Development program.`}
          </p>
          <p className={paragraphStyle}>
            {`Throughout my career, I've developed expertise in full-stack development, working with modern technologies such as React, React Native, Flutter, .NET, Node.js, Nest.js, Go, and Python. My experience spans various industries including e-commerce, food delivery, and architecture.`}
          </p>
          <p className={paragraphStyle}>
            {`Currently, I am diving deeper into mobile development, building on my
          knowledge of iOS and Android to create impactful, user-friendly apps.`}
          </p>
          <a
            className="text-sm text-blue-700 dark:text-blue-300 underline mb-8 mt-4 flex flex-row items-center gap-1"
            href="https://www.linkedin.com/in/rafaelcfl/"
          >
            {`Let's build something amazing together!`}
            <LinkedinLogo size={16} className="ml-1 h-4 w-4"></LinkedinLogo>
          </a>
        </div>
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
