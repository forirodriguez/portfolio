import { FileDown } from "lucide-react";
import { CV_PATH } from "@/lib/links";

export default function DownloadCV({ label }: { label: string }) {
  return (
    <a
      href={CV_PATH}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:text-gold transition-colors"
    >
      <FileDown size={20} className="mr-2" />
      {label}
    </a>
  );
}
