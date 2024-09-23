"use client";

import React from "react";
import { ArrowLeft, Home, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="p-2 sm:p-0 flex text-teal">
      <button
        onClick={handleGoBack}
        className="inline-flex items-center  hover:text-gold transition-colors mb-8 mr-2"
      >
        <ArrowLeft className="mr-2" size={20} />
        Volver
      </button>
      |
      <Link href={"/"} className="ml-2 hover:text-gold">
        <HomeIcon />
      </Link>
    </div>
  );
};

export default GoBackButton;
