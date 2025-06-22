import JourneySection from './JourneySection';

export default function Journey() {
  return (
    <>
      <JourneySection
        step={1}
        title="Beratung & Planung"
        subtitle="Individuell und ehrlich"
        description="Gemeinsam besprechen wir Ihre Wünsche und entwickeln ein maßgeschneidertes Konzept."
        imageUrl="/kitchens/kitchen1.png"
      />
      <JourneySection
        step={2}
        title="Materialauswahl"
        subtitle="Qualität zum Anfassen"
        description="Sie wählen hochwertige Materialien, wir zeigen Ihnen die Möglichkeiten."
        imageUrl="/kitchens/kitchen2.png"
        isReversed
      />
      <JourneySection
        step={3}
        title="Handwerk & Montage"
        subtitle="Von Meisterhand gefertigt"
        description="Wir fertigen jedes Stück präzise und montieren es fachgerecht bei Ihnen."
        imageUrl="/kitchens/kitchen3.png"
      />
      <JourneySection
        step={4}
        title="Genießen"
        subtitle="Ihre Küche mit Seele"
        description="Freuen Sie sich über Ihre einzigartige neue Küche."
        imageUrl="/kitchens/kitchen4.png"
        isReversed
      />
    </>
  );
}
