import React from "react";
import KitchenSlideshow from "./KitchenSlideshow";
import FlurSlideshow from "./FlurSlideshow";

export default function LandingGrid() {
  return (
    <div className="min-h-screen bg-[#f7f7f9] flex justify-center items-start pt-6">
      <div className="w-full max-w-[1800px] px-6">
        <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[93vh]">

          {/* Küchen-Slideshow */}
          <div className="col-span-7 row-span-4 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden relative transform transition-transform duration-300 hover:-rotate-2 tilt-in">
            <KitchenSlideshow />
            <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-2xl" />
          </div>

          {/* Vertikaler Satz: Machs dir selbst mit Hintergrundbild */}
          <div className="col-start-8 col-span-1 row-span-4 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden transform transition-transform duration-300 hover:-rotate-2">
            <img
              src="/kitchens/landingbeige.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
            />
            <span className="transform -rotate-90 text-2xl font-playfair font-bold tracking-wide text-gray-800 relative z-10 drop-shadow">
              Machs<br />dir<br />selbst
            </span>
          </div>

          {/* Flur-Slideshow */}
          <div className="col-start-9 col-span-4 row-span-4 bg-white rounded-2xl shadow-lg flex items-center justify-center overflow-hidden relative transform transition-transform duration-300 hover:-rotate-2 tilt-in">
            <FlurSlideshow />
            <div className="absolute inset-0 bg-black/10 pointer-events-none rounded-2xl" />
          </div>

          {/* Firmenname: Küchenseele mit Bildhintergrund */}
          <div className="col-span-7 row-start-5 row-span-2 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden transform transition-transform duration-300 hover:-rotate-2">
            <img
              src="/kitchens/namebg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
            />
            <span className="text-5xl md:text-6xl font-playfair font-bold tracking-wide text-white relative z-10 drop-shadow">
              Küchenseele
            </span>
          </div>

          {/* Materialien: 4 Kacheln mit perfekt skalierten Bildern */}
          <div className="col-start-8 col-span-3 row-start-5 row-span-2 bg-white rounded-2xl shadow-lg grid grid-cols-2 grid-rows-2 gap-3 p-4 transform transition-transform duration-300 hover:-rotate-2">
            {["fibo1", "fibo2", "fibo3", "fibo4"].map((fibo) => (
              <div
                key={fibo}
                className="rounded-xl overflow-hidden aspect-square w-full h-full flex items-center justify-center bg-gray-100 group"
              >
                <img
                  src={`/kitchens/${fibo}.png`}
                  alt=""
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:-rotate-2"
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = "0.2";
                  }}
                />
              </div>
            ))}
          </div>

          {/* Beratung starten Kachel */}
          <div className="col-start-11 col-span-1 row-start-5 row-span-2 flex items-center justify-center">
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center transform transition-transform duration-300 hover:-rotate-2"
              style={{
                background: 'linear-gradient(135deg, #36432B 70%, #463727 100%)',
                boxShadow: '0 4px 24px rgba(54,67,43,0.10)',
              }}
            >
              <button
                className="w-full h-full text-white text-xl font-semibold flex flex-col items-center justify-center focus:outline-none"
                style={{ background: 'transparent' }}
              >
                Jetzt<br />Beratung<br />starten
              </button>
            </div>
          </div>

          {/* Drück mich Button (gleiche Größe, rechts daneben) */}
          <div className="col-start-12 col-span-1 row-start-5 row-span-2 flex items-center justify-center">
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center bg-black shadow-lg transform transition-transform duration-300 hover:-rotate-2"
            >
              <button
                className="w-full h-full text-white text-xl font-semibold flex flex-col items-center justify-center focus:outline-none"
                style={{ background: 'transparent' }}
              >
                Drück<br />mich
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
