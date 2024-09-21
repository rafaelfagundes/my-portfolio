"use client";
import {
  ArrowRight,
  CaretRight,
  GithubLogo,
  Globe,
} from "@phosphor-icons/react/dist/ssr";
import { Subtitle, Title } from "./typography";
import { Button } from "./ui/button";
import CustomCard from "./ui/custom-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const projects = {
  web: [
    {
      emoji: "🔥",
      title: "NextBoilerplate",
      description:
        "A Next.js boilerplate with Tailwind CSS, TypeScript, ESLint, Prettier, and more.",
      link: "https://github.com/rafaelfagundes/next-boilerplate",
      location: "github",
    },
    {
      emoji: "💅",
      title: "Elisa Studio",
      description:
        "A website for a beautician based in Kitchener, Ontario, Canada.",
      link: "https://elisa-studio.vercel.app/",
      location: "web",
    },
  ],
  mobile: [
    {
      emoji: "📱",
      title: "WordScrambler",
      description:
        "A Next.js boilerplate with Tailwind CSS, TypeScript, ESLint, Prettier, and more.",
      link: "https://github.com/rafaelfagundes/next-boilerplate",
      location: "github",
    },
  ],
};

function ProjectsCard() {
  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col">
            <Title>Featured Projects</Title>
            <Subtitle>Check out my projects</Subtitle>
          </div>
          <Button variant="secondary" className="text-sm">
            View all
            <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
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
            {projects.web.map((item) => (
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
            {projects.mobile.map((item) => (
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
    <CustomCard level={2} onClick={() => window.open(link, "_blank")}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <div className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mr-2 px-2">
            <Emoji>{emoji}</Emoji>
          </div>
          <div className="flex flex-col">
            <div className="text-base font-bold text-zinc-500 dark:text-zinc-300">
              {title}
            </div>
            <div className="text-sm font-medium text-zinc-400 dark:text-zinc-500 pr-4">
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
