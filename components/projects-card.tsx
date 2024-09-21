"use client";
import { projects } from "@/app/data";
import { CaretRight, GithubLogo, Globe } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import CustomCard from "./ui/custom-card";
import SectionHeader from "./ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function ProjectsCard() {
  const router = useRouter();

  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="Check out my projects"
          buttonText="View all"
          buttonLink="/projects"
        />
        <Tabs defaultValue="web" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-2 bg-[#e7eaef] dark:bg-[#161616]">
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-white/85 data-[state=active]:dark:bg-zinc-800"
            >
              Web
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-white/85 data-[state=active]:dark:bg-zinc-800"
            >
              Mobile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="web" className="pt-2 gap-3 flex flex-col">
            {projects.web
              .filter((item) => item.featured)
              .map((item) => (
                <ProjectCard
                  emoji={item.emoji}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  location={item.location}
                />
              ))}
          </TabsContent>
          <TabsContent value="mobile" className="gap-3 flex flex-col -mt-0.5">
            {projects.mobile
              .filter((item) => item.featured)
              .map((item) => (
                <ProjectCard
                  emoji={item.emoji}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  location={item.location}
                />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </CustomCard>
  );
}

function Emoji({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-xl font-bold text-zinc-900 dark:text-white"
      style={{ fontSize: "2rem" }}
    >
      {children}
    </span>
  );
}

function ProjectCard({
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

export default ProjectsCard;
