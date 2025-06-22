import JourneySection from './JourneySection';

export default function Journey() {
  return (
    <>
      <JourneySection
        step={1}
        title="Beratung & Planung"
        subtitle="Individuell und ehrlich"
        description="Als Familienbetrieb aus Graz besprechen wir Ihre Wünsche persönlich und entwickeln ein maßgeschneidertes Konzept."
        videoUrl="/videos/step1.mp4"
      />
      <JourneySection
        step={2}
        title="Materialauswahl"
        subtitle="Qualität zum Anfassen"
        description="Sie wählen hochwertige Materialien, wir zeigen Ihnen alle Möglichkeiten in Ruhe."
        videoUrl="/videos/step2.mp4"
        isReversed
      />
      <JourneySection
        step={3}
        title="Handwerk & Montage"
        subtitle="Von Meisterhand gefertigt"
        description="In unserer Grazer Werkstatt entsteht Ihre Küche in liebevoller Handarbeit, bevor wir sie fachgerecht montieren."
        videoUrl="/videos/step3.mp4"
      />
      <JourneySection
        step={4}
        title="Genießen"
        subtitle="Ihre Küche mit Seele"
        description="Genießen Sie Ihr von Hand gefertigtes Unikat – gefertigt von unserem Familienbetrieb in Graz."
        imageUrl="/kitchens/kitchen4.png"
        isReversed
      />
    </>
  );
}
