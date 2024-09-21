"use client";

import clsx from "clsx";
import { Card } from "./card";

function CustomCard({
  children,
  className,
  level = 1,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  level?: number;
  onClick?: () => void;
}) {
  const classNameCard = clsx(
    "p-2",
    onClick && "cursor-pointer",
    level === 1 &&
      "dark:bg-[#212121] bg-white rounded-lg shadow-md shadow-gray-200 dark:shadow-gray-950/10",
    level === 2 &&
      "dark:bg-[#292929] bg-gray-50 rounded-lg shadow-sm shadow-gray-100 dark:shadow-gray-900/10",
    className
  );

  return (
    <Card className={classNameCard} onClick={onClick}>
      {children}
    </Card>
  );
}

export default CustomCard;
