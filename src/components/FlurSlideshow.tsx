import React, { useEffect, useState } from "react";

const images = [
  "/kitchens/flur1.png",
  "/kitchens/flur2.png",
  "/kitchens/flur3.png",
  "/kitchens/flur4.png",
];

export default function FlurSlideshow() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500); // Dauer des Übergangs
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Flur ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index && fade
              ? "opacity-100 z-10"
              : "opacity-0 z-0"
          }`}
          draggable={false}
        />
      ))}
    </div>
  );
}
