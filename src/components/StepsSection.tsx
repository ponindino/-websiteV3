// src/components/StepsSection.tsx

import { FaRegHandshake, FaDraftingCompass, FaTools, FaSmile } from "react-icons/fa";

export default function StepsSection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto mt-16 mb-10">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-gray-800 mb-10">
        Ihr Weg zur Traumküche
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Schritt 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#36432B] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            <FaRegHandshake />
          </div>
          <h3 className="font-bold text-lg mb-2">Beratung & Planung</h3>
          <p className="text-gray-600">Wir beraten Sie ehrlich und planen Ihre Küche individuell.</p>
        </div>
        {/* Schritt 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#36432B] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            <FaDraftingCompass />
          </div>
          <h3 className="font-bold text-lg mb-2">Materialauswahl</h3>
          <p className="text-gray-600">Sie wählen hochwertige Materialien, wir zeigen Ihnen die Möglichkeiten.</p>
        </div>
        {/* Schritt 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#36432B] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            <FaTools />
          </div>
          <h3 className="font-bold text-lg mb-2">Handwerk & Montage</h3>
          <p className="text-gray-600">Meisterhaft gefertigt & fachgerecht bei Ihnen aufgebaut.</p>
        </div>
        {/* Schritt 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-[#36432B] text-white w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
            <FaSmile />
          </div>
          <h3 className="font-bold text-lg mb-2">Genießen</h3>
          <p className="text-gray-600">Freuen Sie sich über Ihre einzigartige neue Küche mit Seele.</p>
        </div>
      </div>
    </section>
  );
}
