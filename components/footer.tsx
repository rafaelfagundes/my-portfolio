import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import CustomCard from "./ui/custom-card";

const socialLinks = [
  {
    href: "https://github.com/rafaelfagundes",
    icon: (
      <GithubLogo
        size={24}
        className="text-gray-500 dark:text-gray-300 cursor-pointer"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/rafaelcfl/",
    icon: (
      <LinkedinLogo
        size={24}
        className="text-gray-500 dark:text-gray-300 cursor-pointer"
      />
    ),
  },
  {
    href: "https://www.instagram.com/rafael_fagundes/",
    icon: (
      <InstagramLogo
        size={24}
        className="text-gray-500 dark:text-gray-300 cursor-pointer"
      />
    ),
  },
];

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  const iconSize = 24;
  const iconClassName = "text-gray-500 dark:text-gray-300 cursor-pointer";

  return (
    <footer>
      <CustomCard className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-8 pt-2 pb-4">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-950 pt-3 flex flex-row justify-center items-center">
          <p className="text-sm text-gray-400 dark:text-gray-400 text-center">
            &copy;{` ${getCurrentYear()} Rafael Fagundes.`}
          </p>
        </div>
      </CustomCard>
    </footer>
  );
};

export default Footer;
