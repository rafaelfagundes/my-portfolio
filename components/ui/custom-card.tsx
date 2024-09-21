"use client";

import clsx from "clsx";
import { Card } from "./card";

function CustomCard({
  children,
  className,
  level = 1,
  blurred = false,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  level?: number;
  blurred?: boolean;
  onClick?: () => void;
}) {
  const classNameCard = clsx(
    "p-2 w-full",
    onClick && "cursor-pointer",
    level === 1 &&
      "dark:bg-[#212121]/80 bg-white/80 rounded-lg shadow-md shadow-gray-950/5 dark:shadow-gray-950/10",
    level === 2 &&
      "dark:bg-[#292929] bg-gray-50 rounded-lg shadow-sm shadow-gray-950/5 dark:shadow-gray-900/10",
    blurred && "bg-white/80 dark:bg-[#212121]/80 backdrop-blur-2xl",
    className
  );

  return (
    <Card className={classNameCard} onClick={onClick}>
      {children}
    </Card>
  );
}

export default CustomCard;
