import SectionHeading from "@/components/ui/SectionHeading";

export default function ProductIntroSection() {
  return (
    <section id="product" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Product"
          title="Meet FUURRSBEE™"
          description="Scaffold copy placeholder."
        />
        <div className="placeholder-card">
          <p>This section will explain the core product clearly and emotionally.</p>
        </div>
      </div>
    </section>
  );
}
