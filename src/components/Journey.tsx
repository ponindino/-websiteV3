import JourneySection from './JourneySection';

export default function Journey() {
  return (
    <>
      <JourneySection
        step={1}
        title="Beratung & Planung"
        subtitle="Individuell und ehrlich"
        description="Als Familienbetrieb aus Graz nehmen wir uns Zeit für Sie: In einem persönlichen Gespräch besprechen wir alle Wünsche und Ideen und entwickeln daraufhin ein maßgeschneidertes Konzept."
        videoUrl="/videos/step1.mp4"
      />
      <JourneySection
        step={2}
        title="Materialauswahl"
        subtitle="Qualität zum Anfassen"
        description="Sie wählen aus hochwertigen Materialien – wir beraten Sie ausführlich zu den Möglichkeiten und kombinieren Farben, Oberflächen und Beschläge ganz nach Ihrem Geschmack."
        videoUrl="/videos/step2.mp4"
        isReversed
      />
      <JourneySection
        step={3}
        title="Handwerk & Montage"
        subtitle="Von Meisterhand gefertigt"
        description="In unserer Werkstatt in Graz fertigen wir Ihre Küche mit viel Liebe zum Detail. Jedes Stück entsteht in präziser Handarbeit, bevor wir es bei Ihnen vor Ort passgenau montieren."
        videoUrl="/videos/step3.mp4"
      />
      <JourneySection
        step={4}
        title="Genießen"
        subtitle="Ihre Küche mit Seele"
        description="Genießen Sie Ihr handgefertigtes Unikat aus unserem Familienbetrieb in Graz. Nach der Montage stehen wir Ihnen selbstverständlich weiter mit Rat und Tat zur Seite."
        imageUrl="/kitchens/kitchen4.png"
        isReversed
      />
    </>
  );
}
