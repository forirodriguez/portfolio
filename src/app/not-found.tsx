import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getContent } from "@/content";

export default function NotFound() {
  const es = getContent("es").notFound;
  const en = getContent("en").notFound;

  return (
    <div className="bg-teal min-h-screen flex items-center justify-center p-4">
      <div className="bg-cream text-teal p-8 rounded-3xl max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">{es.title}</h2>
        <p className="mb-6">{es.text}</p>
        <p lang="en" className="mb-8 text-sm text-charcoal/70">
          {en.title}. {en.text}
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-gold text-charcoal px-6 py-3 rounded-full font-bold hover:bg-teal hover:text-cream transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          {es.cta}
        </Link>
      </div>
    </div>
  );
}
