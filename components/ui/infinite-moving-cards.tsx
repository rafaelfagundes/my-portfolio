"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
  small = false,
  play,
  onClick,
}: {
  items: {
    image: string;
    title: string;
    color: string;
    invertOnDark?: boolean;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
  small?: boolean;
  play?: boolean;
  onClick?: () => void;
}) => {
  const [pause, setPause] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full h-50 scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
      onClick={onClick}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 w-max flex-nowrap gap-5",
          start && "animate-scroll ",
          !play && "[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className={`relative flex-shrink-0 flex flex-col items-center justify-center ${
              small && "scale-90"
            }`}
            key={item.image}
          >
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5"
            ></div>
            <span className="relative z-20 text-sm leading-[1.6] font-normal">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 lg:h-12 lg:w-12 ${
                  item.invertOnDark && "dark:invert"
                }`}
                fill={`#${item.color}`}
                dangerouslySetInnerHTML={{ __html: item.image }}
              />
            </span>
            <div className="relative z-20 mt-2 flex flex-row items-center">
              <span className="text-sm leading-[1.6] text-foreground opacity-80 font-normal text-center">
                {item.title}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
