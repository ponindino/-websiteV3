export default function LandingGrid() {
  return (
    <div className="w-full min-h-screen bg-[#f7f7f9] flex justify-center items-center">
      <div className="w-full max-w-[1750px] px-4">
        <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[95vh] max-h-[900px]">
          {/* Küchen-Slideshow */}
          <div className="col-span-7 row-span-4 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl text-gray-400">
            Küchen-Slideshow
          </div>
          {/* Vertikaler Satz */}
          <div className="col-start-8 col-span-1 row-span-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <span className="transform -rotate-90 text-base font-semibold tracking-widest text-gray-700">
              Design trifft Lebensraum
            </span>
          </div>
          {/* Flur-Slideshow */}
          <div className="col-start-9 col-span-4 row-span-4 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl text-gray-400">
            Flur-Slideshow
          </div>
          {/* Firmenname */}
          <div className="col-span-7 row-start-5 row-span-2 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold tracking-wide text-gray-800">
              Küchenseele Graz
            </span>
          </div>
          {/* Materialien */}
          <div className="col-start-8 col-span-3 row-start-5 row-span-2 bg-white rounded-2xl shadow-lg grid grid-cols-2 grid-rows-2 gap-3 p-3">
            <div className="bg-gray-100 rounded-xl flex items-center justify-center text-base">Material 1</div>
            <div className="bg-gray-100 rounded-xl flex items-center justify-center text-base">Material 2</div>
            <div className="bg-gray-100 rounded-xl flex items-center justify-center text-base">Material 3</div>
            <div className="bg-gray-100 rounded-xl flex items-center justify-center text-base">Material 4</div>
          </div>
          {/* Button */}
          <div className="col-start-11 col-span-2 row-start-5 row-span-2 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold shadow hover:bg-gray-800 transition text-base">
              Jetzt Beratung starten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
