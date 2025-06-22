
import { useState } from 'react';
import { X } from 'lucide-react';

interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  details: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Placeholder portfolio items - you can replace these with your actual kitchen photos
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1556909086-f36e4c71d343?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Moderne Landküche",
      description: "Elegante Küche mit Naturholz",
      details: "Diese wunderschöne Landküche vereint traditionelles Handwerk mit modernem Design. Gefertigt aus heimischem Eichenholz mit handgefertigten Fronten und einer maßgeschneiderten Kücheninsel. Die warmen Holztöne schaffen eine einladende Atmosphäre für die ganze Familie."
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1556909086-3675c6b20853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Minimalistische Küche",
      description: "Klare Linien, maximale Funktionalität",
      details: "Ein Meisterwerk der Reduktion - diese minimalistische Küche besticht durch klare Linien und durchdachte Funktionalität. Hochwertige Materialien und versteckte Stauräume sorgen für eine aufgeräumte und stilvolle Optik."
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxus Kücheninsel",
      description: "Zentrum für Genuss und Geselligkeit",
      details: "Diese imposante Kücheninsel ist der Mittelpunkt des Hauses. Mit integriertem Kochfeld, großzügiger Arbeitsfläche aus Naturstein und eleganten Barhockern wird sie zum geselligen Zentrum für Familie und Freunde."
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1556909114-c36ed6d3eee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Klassische Holzküche",
      description: "Zeitlose Eleganz aus Massivholz",
      details: "Handgefertigte Schränke aus bestem Massivholz, traditionelle Verbindungstechniken und liebevolle Details machen diese Küche zu einem wahren Kunstwerk. Ein Stück, das Generationen überdauert."
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Offene Wohnküche",
      description: "Leben und Kochen in Harmonie",
      details: "Diese offene Wohnküche verbindet Küche und Wohnraum zu einer harmonischen Einheit. Durchdachte Raumaufteilung und hochwertige Materialien schaffen ein Ambiente zum Wohlfühlen."
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Designer Arbeitsplatte",
      description: "Kunstvolle Steinmetzarbeit",
      details: "Eine Arbeitsplatte der Extraklasse - aus einem Stück Naturstein gefertigt und millimetergenau angepasst. Die natürliche Maserung und die perfekte Oberflächenbearbeitung machen jede Arbeitsplatte zu einem Unikat."
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Vintage Küchenschränke",
      description: "Charme vergangener Zeiten",
      details: "Liebevoll restaurierte und neu interpretierte Küchenschränke im Vintage-Stil. Jedes Stück ein Unikat mit eigener Geschichte, kombiniert mit moderner Funktionalität."
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Smart Kitchen",
      description: "Technologie trifft Handwerk",
      details: "Die Zukunft des Kochens: Intelligente Küchengeräte perfekt integriert in handgefertigte Möbel. Modernste Technik verschmilzt mit traditionellem Handwerk zu einer perfekten Symbiose."
    },
    {
      id: 9,
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Landhausküche Premium",
      description: "Rustikaler Charme meets Luxus",
      details: "Diese Landhausküche vereint rustikalen Charme mit modernem Luxus. Handgeschnitzte Details, antike Beschläge und modernste Küchengeräte schaffen ein einzigartiges Ambiente."
    },
    {
      id: 10,
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Betonküche Industrial",
      description: "Urbaner Style mit Seele",
      details: "Industrial Design neu interpretiert: Sichtbeton trifft auf warmes Holz und schafft einen spannenden Kontrast. Eine Küche für Liebhaber des urbanen Lifestyles mit einer warmen Seele."
    },
    {
      id: 11,
      imageUrl: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Glasfront Eleganz",
      description: "Transparenz und Leichtigkeit",
      details: "Elegante Glasfronten schaffen Transparenz und lassen die Küche leicht und luftig wirken. Hochwertige Materialien und perfekte Verarbeitung sorgen für zeitlose Eleganz."
    },
    {
      id: 12,
      imageUrl: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Penthouse Küche",
      description: "Luxus in höchster Vollendung",
      details: "Eine Küche für höchste Ansprüche: Edelste Materialien, perfekte Verarbeitung und ein Design, das keine Wünsche offen lässt. Der Traum jedes Gourmets wird hier Realität."
    }
  ];

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-cream-50 to-wood-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-wood-800 mb-6">
            Unser Portfolio
          </h2>
          <p className="text-xl md:text-2xl text-wood-700 max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere handgefertigten Küchen - jede ein Unikat, 
            geschaffen mit Leidenschaft und höchster Handwerkskunst
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-4 border-wood-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in">
            <div className="relative">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="font-playfair text-3xl font-bold text-wood-800 mb-4">
                {selectedItem.title}
              </h3>
              <p className="text-wood-600 text-lg mb-4">
                {selectedItem.description}
              </p>
              <p className="text-wood-700 leading-relaxed">
                {selectedItem.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
