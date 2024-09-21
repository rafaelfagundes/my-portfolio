import { CaretRight, GithubLogo, Globe } from "@phosphor-icons/react";
import CustomCard from "./custom-card";
import Emoji from "./emoji";

function ListItem({
  emoji,
  title,
  description,
  link,
  location,
}: {
  emoji: string;
  title: string;
  description: string;
  link: string;
  location: string;
}) {
  const locationIcon =
    location === "github" ? (
      <GithubLogo size={24} className="opacity-50" />
    ) : (
      <Globe size={24} className="opacity-50" />
    );

  return (
    <CustomCard
      level={2}
      onClick={() => window.open(link, "_blank")}
      className="min-h-20 flex flex-col justify-center"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mr-2 px-2">
            <Emoji>{emoji}</Emoji>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-300">
              {title}
            </div>
            <div className="text-xs font-light text-zinc-400 dark:text-zinc-500 pr-4">
              {description}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          {locationIcon}
          <CaretRight size={16} className="ml-1 opacity-25" />
        </div>
      </div>
    </CustomCard>
  );
}

export default ListItem;
