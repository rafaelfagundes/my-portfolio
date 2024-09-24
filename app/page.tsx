import AboutMeCard from "@/components/about-me-card";
import ContactCard from "@/components/contact-card";
import PageContainer from "@/components/page-container";
import ProfileCard from "@/components/profile-card";
import ProjectsCard from "@/components/projects-card";

export default function Home() {
  return (
    <PageContainer className="flex flex-col gap-2">
      <ProfileCard></ProfileCard>
      <AboutMeCard></AboutMeCard>
      <ProjectsCard></ProjectsCard>
      <ContactCard></ContactCard>
      <div className="h-10"></div>
    </PageContainer>
  );
}
