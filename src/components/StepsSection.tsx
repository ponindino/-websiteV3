import JourneySection from "./JourneySection";

export default function StepsSection() {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      <JourneySection
        step={1}
        title="Beratung & Planung"
        subtitle="Individuelle Analyse Ihrer Wünsche"
        description="Gemeinsam besprechen wir Ihre Vorstellungen und planen Ihre Küche passgenau."
        imageUrl="/kitchens/kitchen1.png"
      />
      <JourneySection
        step={2}
        title="Materialauswahl"
        subtitle="Qualität spüren"
        description="Sie wählen aus hochwertigen Materialien – wir beraten Sie zu allen Möglichkeiten."
        imageUrl="/kitchens/kitchen2.png"
        isReversed
      />
      <JourneySection
        step={3}
        title="Handwerk & Montage"
        subtitle="Präzision in jedem Detail"
        description="Unsere Meister fertigen Ihre Küche und montieren sie termingerecht bei Ihnen zu Hause."
        videoUrl="/videos/splashvideo.mp4"
      />
      <JourneySection
        step={4}
        title="Genießen"
        subtitle="Ihre Traumküche wartet"
        description="Freuen Sie sich über eine Küche mit Seele, die perfekt zu Ihnen passt."
        imageUrl="/kitchens/kitchen3.png"
        isReversed
      />
    </div>
  );
}
