"use client";

import { FileDown } from "lucide-react";
import React from "react";

export default function BotonDescarga() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV-Rodriguez,Alfonso.pdf";
    link.download = "CV-Rodriguez,Alfonso.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
