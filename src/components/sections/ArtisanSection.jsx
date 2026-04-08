import SectionHeading from "@/components/ui/SectionHeading";

export default function ArtisanSection() {
  return (
    <section id="artisan" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Craft"
          title="Craft matters. So does who makes it."
          description="Scaffold copy placeholder."
        />
        <div className="placeholder-card">
          <p>This section will hold the subtle ethical production story.</p>
        </div>
      </div>
    </section>
  );
}
