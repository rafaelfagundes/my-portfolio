import CustomCard from "./ui/custom-card";
import SectionHeader from "./ui/section-header";

function ContactCard() {
  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <SectionHeader
          title="Get in touch"
          subtitle="Let's talk about your project"
        />
      </div>
    </CustomCard>
  );
}

export default ContactCard;
