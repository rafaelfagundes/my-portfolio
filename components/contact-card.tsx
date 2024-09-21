import ContactForm from "./contact-form";
import CustomCard from "./ui/custom-card";
import SectionHeader from "./ui/section-header";

function ContactCard() {
  return (
    <CustomCard>
      <div className="p-3 sm:p-4">
        <SectionHeader
          title="Get in touch"
          subtitle="Let's talk about your project or company"
        />
      </div>
      <ContactForm className="p-4"></ContactForm>
    </CustomCard>
  );
}

export default ContactCard;
