
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className={`font-playfair text-2xl font-bold cursor-pointer transition-colors duration-300 ${
              isScrolled ? 'text-wood-800' : 'text-white text-shadow'
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Küchenseele
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'Beratung', id: 'consultation' },
              { label: 'Material', id: 'materials' },
              { label: 'Fertigung', id: 'crafting' },
              { label: 'Montage', id: 'installation' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Kontakt', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-wood-700 hover:text-wood-900' 
                    : 'text-white/90 hover:text-white text-shadow'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
