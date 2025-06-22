// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="w-full mt-16 bg-gradient-to-r from-wood-700 to-wood-900 text-cream-100 py-12 rounded-t-3xl shadow-inner">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="font-playfair text-3xl font-bold mb-2">Küchenseele</h3>
          <p className="text-cream-200">Handgefertigte Küchen aus Graz</p>
        </div>
        <div className="flex-1 md:text-center">
          <p className="text-cream-200">Adresse: Musterstraße 1, 8010 Graz</p>
          <p className="text-cream-200">Telefon: +43 123 456789</p>
          <p className="text-cream-200">E-Mail: info@kuechenseele.at</p>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-cream-300">© {new Date().getFullYear()} Küchenseele. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
