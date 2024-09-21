import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  ThreadsLogo,
  XLogo,
} from "@phosphor-icons/react/dist/ssr";
import CustomCard from "./ui/custom-card";

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
          <LinkedinLogo size={iconSize} className={iconClassName} />
          <GithubLogo size={iconSize} className={iconClassName} />
          <InstagramLogo size={iconSize} className={iconClassName} />
          <ThreadsLogo size={iconSize} className={iconClassName} />
          <XLogo size={iconSize} className={iconClassName} />
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
