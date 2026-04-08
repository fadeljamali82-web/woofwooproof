import SectionHeading from "@/components/ui/SectionHeading";

export default function SizesSection() {
  return (
    <section id="sizes" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Sizes"
          title="One toy. Three sizes. Every dog covered."
          description="Scaffold copy placeholder."
        />
        <div className="placeholder-card">
          <p>This section will hold the small, medium, and large breakdown.</p>
        </div>
      </div>
    </section>
  );
}
