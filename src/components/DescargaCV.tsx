import { FileDown } from "lucide-react";
import type { Locale } from "@/content";
import { CV_PATH } from "@/lib/links";

export default function DownloadCV({ label, locale }: { label: string; locale: Locale }) {
  return (
    <a
      href={CV_PATH[locale]}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center min-h-11 underline underline-offset-4"
    >
      <FileDown aria-hidden="true" size={20} className="mr-2" />
      {label}
    </a>
  );
}
