"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

/**
 * Rota palabras en el titular. La primera palabra se sirve en el HTML, asi que
 * el titular se lee completo aunque el JS nunca corra.
 */
export default function WordRotate({
  words,
  duration = 3000,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      duration
    );
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span key={words[index]} className={cn("word-rotate", className)}>
      {words[index]}
    </span>
  );
}
