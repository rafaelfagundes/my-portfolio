"use client";
import { projects } from "@/app/data";
import { DeviceMobileSpeaker, Globe } from "@phosphor-icons/react";
import CustomCard from "./ui/custom-card";
import ListItem from "./ui/list-item";
import SectionHeader from "./ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

function ProjectsCard() {
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
              <Globe size={16} className="mr-1"></Globe> Web
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-white/85 data-[state=active]:dark:bg-zinc-800"
            >
              <DeviceMobileSpeaker
                size={16}
                className="mr-1"
              ></DeviceMobileSpeaker>{" "}
              Mobile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="web" className="pt-2 gap-3 flex flex-col">
            {projects.web
              .filter((item) => item.featured)
              .map((item) => (
                <ListItem
                  key={item.link}
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
                <ListItem
                  key={item.link}
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

export default ProjectsCard;
