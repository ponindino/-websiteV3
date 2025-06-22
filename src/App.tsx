// src/App.tsx
// Resolved merge conflict: keep the new Journey component

import LandingGrid from "./components/LandingGrid";
import Journey from "./components/Journey";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#f7f7f9] min-h-screen">
      <LandingGrid />
      <Journey />
      <Footer />
    </div>
  );
}
