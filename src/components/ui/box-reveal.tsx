import { cn } from "@/lib/utils";

interface BoxRevealProps {
  children: React.ReactNode;
  className?: string;
  boxColor?: string;
  delay?: number;
}

/**
 * Barra que se corre para descubrir el contenido. El contenido nunca se oculta
 * por opacidad: si la animacion no corre, se ve igual.
 */
export default function BoxReveal({
  children,
  className,
  boxColor = "#EFEEE5",
  delay = 0,
}: BoxRevealProps) {
  return (
    <span className={cn("box-reveal", className)}>
      {children}
      <span
        aria-hidden="true"
        className="box-reveal-bar"
        style={
          {
            "--box-color": boxColor,
            "--reveal-delay": `${delay}ms`,
          } as React.CSSProperties
        }
      />
    </span>
  );
}
