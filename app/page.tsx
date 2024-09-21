import PageContainer from "@/components/page-container";
import ProfileCard from "@/components/profile-card";
import ProjectsCard from "@/components/projects-card";

export default function Home() {
  return (
    <PageContainer className="flex flex-col gap-2">
      <ProfileCard></ProfileCard>
      <ProjectsCard></ProjectsCard>
    </PageContainer>
  );
}
