// src/App.tsx

import { useState, useEffect } from "react";
import LandingGrid from "./components/LandingGrid";
import Journey from "./components/Journey";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [bgColor, setBgColor] = useState('rgb(247,247,249)');

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(1, window.scrollY / maxScroll);
      const start = [247, 247, 249];
      const end = [241, 235, 226];
      const r = Math.round(start[0] + (end[0] - start[0]) * progress);
      const g = Math.round(start[1] + (end[1] - start[1]) * progress);
      const b = Math.round(start[2] + (end[2] - start[2]) * progress);
      setBgColor(`rgb(${r}, ${g}, ${b})`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <LandingGrid />
      <Journey />
      <Portfolio />
      <Footer />
    </div>
  );
}
