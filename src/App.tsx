// src/App.tsx
// Resolved merge conflict: keep the new Journey component

import { useState } from "react";
import LandingGrid from "./components/LandingGrid";
import Journey from "./components/Journey";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="bg-[#f7f7f9] min-h-screen">
      <LandingGrid />
      <Journey />
      <Footer />
    </div>
  );
}
