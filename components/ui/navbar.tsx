"use client";

import {
  ChatCircle,
  House,
  Package,
  TrendUp,
  UserCircle,
} from "@phosphor-icons/react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { cloneElement, useState } from "react";
import { Button } from "./button";
import CustomCard from "./custom-card";
import { ThemeSwitcher } from "./theme-switcher";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: <House />,
  },
  {
    href: "/about",
    label: "About",
    icon: <UserCircle />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <Package />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <ChatCircle />,
  },
];

function Navbar() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("/");

  const iconSize = 24;

  const handleClick = (page: string) => {
    setCurrentPage(page);
    router.push(page);
  };

  return (
    <>
      <div className="h-5 w-full  bg-[#eaedf1] dark:bg-[#161616] fixed top-0 z-40"></div>
      <nav className="fixed top-4 left-0 right-0 z-50 flex flex-col items-center justify-between max-w-xl mx-auto px-4">
        <CustomCard blurred={true}>
          <div className="flex flex-row items-center justify-between p-1">
            <div className="flex flex-row items-center gap-3">
              {navItems.map((item) => (
                <Icon
                  key={item.href}
                  active={currentPage === item.href}
                  handleClick={() => handleClick(item.href)}
                  iconSize={iconSize}
                  icon={item.icon}
                />
              ))}
            </div>
            <div className="flex flex-row items-center gap-3">
              <ThemeSwitcher></ThemeSwitcher>
              <Button>
                <TrendUp size={iconSize - 6} className="mr-1" />
                <p className="text-xs">Hire Me</p>
              </Button>
            </div>
          </div>
        </CustomCard>
      </nav>
    </>
  );
}

function Icon({
  active,
  handleClick,
  icon,
  iconSize,
}: {
  active: boolean;
  handleClick: (page: string) => void;
  icon: React.ReactElement;
  iconSize: number;
}) {
  return (
    <div
      className={clsx(
        "p-1.5 cursor-pointer",
        active && "bg-gray-100 dark:bg-gray-700/50 rounded-full"
      )}
      onClick={() => handleClick(icon.props.name)}
    >
      {cloneElement(icon, {
        size: iconSize,
        className: clsx(
          icon.props.className,
          active ? "text-black dark:text-white" : "text-gray-400"
        ),
      })}
    </div>
  );
}

export default Navbar;
