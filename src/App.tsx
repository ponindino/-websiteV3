// src/App.tsx

import { useState } from "react";
import LandingGrid from "./components/LandingGrid";
import StepsSection from "./components/StepsSection";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-[#f7f7f9] min-h-screen relative overflow-hidden">
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}
      {!showSplash && (
        <>
          <LandingGrid />
          <StepsSection />
          <Footer />
        </>
      )}
    </div>
  );
}
