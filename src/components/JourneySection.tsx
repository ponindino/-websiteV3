
import { useEffect, useRef, useState } from 'react';

interface JourneySectionProps {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  /** Optional image to display if no video is provided */
  imageUrl?: string;
  /** Optional video to display instead of an image */
  videoUrl?: string;
  isReversed?: boolean;
}

const JourneySection = ({
  step,
  title,
  subtitle,
  description,
  imageUrl,
  videoUrl,
  isReversed = false,
}: JourneySectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [textAnimationPhase, setTextAnimationPhase] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Staggered text animation
          setTimeout(() => setTextAnimationPhase(1), 200);
          setTimeout(() => setTextAnimationPhase(2), 400);
          setTimeout(() => setTextAnimationPhase(3), 600);
          setTimeout(() => setTextAnimationPhase(4), 800);
        } else {
          setIsVisible(false);
          setTextAnimationPhase(0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate parallax offset based on element position
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={sectionRef}
      className={`min-h-screen flex items-center py-20 relative overflow-hidden ${isReversed ? 'bg-gradient-to-br from-cream-50 to-cream-100' : 'bg-gradient-to-br from-white to-gray-50'}`}
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 50}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-wood-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cream-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content - 60% width */}
          <div 
            className={`lg:w-3/5 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -20 : 48}px)`,
              transitionDelay: '200ms'
            }}
          >
            {/* Step number and line - animated first */}
            <div className={`flex items-center mb-6 transition-all duration-700 ${
              textAnimationPhase >= 1 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-br from-wood-600 to-wood-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                {step}
              </div>
              <div className="h-px bg-gradient-to-r from-wood-600 via-wood-400 to-wood-200 flex-grow"></div>
            </div>
            
            {/* Title - animated second */}
            <h2 className={`font-playfair text-4xl md:text-5xl font-bold text-wood-800 mb-4 leading-tight transition-all duration-700 ${
              textAnimationPhase >= 2 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}>
              {title}
            </h2>
            
            {/* Subtitle - animated third */}
            <h3 className={`text-xl md:text-2xl text-wood-600 font-medium mb-6 transition-all duration-700 ${
              textAnimationPhase >= 3 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}>
              {subtitle}
            </h3>
            
            {/* Description - animated fourth */}
            <p className={`text-lg text-gray-700 leading-relaxed max-w-2xl transition-all duration-700 ${
              textAnimationPhase >= 4 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}>
              {description}
            </p>
          </div>

          {/* Image - 40% width */}
          <div 
            className={`lg:w-2/5 transition-all duration-1200 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{
              transform: `translateY(${isVisible ? scrollY * 30 : 32}px) scale(${isVisible ? 1 - scrollY * 0.02 : 0.95})`,
              transitionDelay: '400ms'
            }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/30 via-transparent to-transparent"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-wood-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cream-400 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
