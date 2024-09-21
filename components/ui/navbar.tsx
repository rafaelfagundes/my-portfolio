"use client";

import { Button } from "./button";
import CustomCard from "./custom-card";
import { ThemeSwitcher } from "./theme-switcher";

import { DM_Mono as Mono } from "next/font/google";

const mono = Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// const navItems = [
//   {
//     href: "/",
//     label: "Home",
//     icon: <House />,
//   },
//   {
//     href: "/about",
//     label: "About",
//     icon: <UserCircle />,
//   },
//   {
//     href: "/projects",
//     label: "Projects",
//     icon: <Package />,
//   },
//   {
//     href: "/contact",
//     label: "Contact",
//     icon: <ChatCircle />,
//   },
// ];

function Navbar() {
  // const pathname = usePathname();
  // const [currentPage, setCurrentPage] = useState("/");

  // const iconSize = 24;

  // useEffect(() => {
  //   setCurrentPage(pathname);
  // }, [pathname]);

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

            {/* <div className="flex flex-row items-center gap-3">
              {navItems.map((item) => (
                <Icon
                  key={item.href}
                  active={currentPage === item.href}
                  iconSize={iconSize}
                  icon={item.icon}
                  href={item.href}
                />
              ))}
            </div> */}
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

// function Icon({
//   href,
//   active,
//   icon,
//   iconSize,
// }: {
//   href: string;
//   active: boolean;
//   icon: React.ReactElement;
//   iconSize: number;
// }) {
//   return (
//     <Link href={href}>
//       <div
//         className={clsx(
//           "p-1.5 cursor-pointer",
//           active && "bg-gray-100 dark:bg-gray-700/50 rounded-full"
//         )}
//       >
//         {cloneElement(icon, {
//           size: iconSize,
//           className: clsx(
//             icon.props.className,
//             active ? "text-black dark:text-white" : "text-gray-400"
//           ),
//         })}
//       </div>
//     </Link>
//   );
// }

export default Navbar;
