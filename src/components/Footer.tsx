// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full bg-[#36432B] text-white py-8 mt-16 rounded-2xl shadow-lg max-w-[1400px] mx-auto mb-6 flex flex-col md:flex-row items-center justify-between px-6">
      <span className="font-playfair text-2xl font-bold">Küchenseele</span>
      <span className="text-gray-200 mt-3 md:mt-0">© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
    </footer>
  );
}
