import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** ms de espera antes de arrancar la animacion */
  delay?: number;
  as?: "div" | "span" | "li";
}

/**
 * Fade + blur de entrada, en CSS. Server component: el contenido va en el HTML
 * visible y la animacion corre sola, sin depender de que hidrate el JS.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
