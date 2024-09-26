import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Custom404() {
  return (
    <div className="bg-teal min-h-screen flex items-center justify-center p-4">
      <div className="bg-cream text-teal p-8 rounded-3xl max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="mb-8">
          Lo siento, la página que estás buscando no existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-gold text-charcoal px-6 py-3 rounded-full font-bold hover:bg-cream hover:text-teal transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
