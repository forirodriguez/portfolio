"use client";

import { ArrowLeft, HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { href, type Locale } from "@/content";

interface GoBackButtonProps {
  locale: Locale;
  label: string;
  homeLabel: string;
}

export default function GoBackButton({
  locale,
  label,
  homeLabel,
}: GoBackButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(href(locale));
    }
  };

  return (
    <div className="p-2 sm:p-0 flex items-center text-teal mb-8">
      <button
        type="button"
        onClick={handleGoBack}
        className="inline-flex items-center hover:text-gold transition-colors mr-2"
      >
        <ArrowLeft className="mr-2" size={20} />
        {label}
      </button>
      <span aria-hidden="true">|</span>
      <Link
        href={href(locale)}
        aria-label={homeLabel}
        className="ml-2 hover:text-gold"
      >
        <HomeIcon size={20} />
      </Link>
    </div>
  );
}
