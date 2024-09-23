"use client";

import { FileDown } from "lucide-react";
import React from "react";

export default function BotonDescarga() {
  const handleDownload = () => {
    window.open("/docs/CV-Rodriguez,Alfonso.pdf", "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center hover:text-gold transition-colors"
    >
      <FileDown size={24} className="mr-2" />
      CV
    </button>
  );
}
