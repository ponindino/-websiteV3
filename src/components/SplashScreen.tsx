import { useEffect } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 6000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/splashvideo.mp4"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-xl animate-sliceText mb-2 text-center">
          Küchenseele Graz
        </h1>
        <p className="text-lg md:text-2xl text-cream-200 font-inter animate-fade-in mt-4 text-center">
          Ihre Küche – von der Idee bis zum Meisterstück
        </p>
      </div>
    </div>
  );
}
