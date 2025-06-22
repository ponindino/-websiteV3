
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLight, setIsLight] = useState(false);

  // Placeholder kitchen images - you'll replace these with actual photos
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1556909086-f36e4c71d343?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Moderne Küche mit Holzelementen",
      isLight: false
    },
    {
      url: "https://images.unsplash.com/photo-1556909086-3675c6b20853?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", 
      alt: "Klassische Küchenzeile",
      isLight: true
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Luxuriöse Kücheninsel",
      isLight: false
    },
    {
      url: "https://images.unsplash.com/photo-1556909114-c36ed6d3eee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Handgefertigte Küchenschränke",
      isLight: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Changed to 3 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    setIsLight(slides[currentSlide].isLight);
  }, [currentSlide, slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
        </div>
      ))}

      {/* Main Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center animate-splash">
          <h1 
            className={`font-playfair text-6xl md:text-8xl lg:text-9xl font-bold mb-4 transition-all duration-1000 transform ${
              isLight ? 'text-adaptive-dark' : 'text-adaptive-light'
            }`}
          >
            Küchenseele
          </h1>
          <p 
            className={`text-xl md:text-2xl font-inter font-light transition-all duration-1000 ${
              isLight ? 'text-adaptive-dark opacity-90' : 'text-adaptive-light opacity-95'
            }`}
          >
            Handgefertigte Küchen aus Graz
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/80">
          <div className="text-sm font-inter mb-2">Scrollen</div>
          <div className="w-px h-8 bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
