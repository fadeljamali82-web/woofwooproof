import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/content/faq";

export default function FAQSection() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="Scaffold copy placeholder."
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
