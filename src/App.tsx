// src/App.tsx

import LandingGrid from "./components/LandingGrid";
import StepsSection from "./components/StepsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#f7f7f9] min-h-screen">
      <LandingGrid />
      <StepsSection />
      <Footer />
    </div>
  );
}
