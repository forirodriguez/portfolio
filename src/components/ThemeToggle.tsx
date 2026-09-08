"use client";

import { Moon, Sun } from "lucide-react";
import type { Locale } from "@/content";

// El lib DOM de TS 5 todavia no la declara.
declare global {
  interface Document {
    startViewTransition?: (update: () => void) => { ready: Promise<void> };
  }
}

/** Light es el default, asi que solo guardamos cuando el usuario elige.
 *  El script inline de layout.tsx aplica lo guardado antes del primer paint. */
export default function ThemeToggle({ locale }: { locale: Locale }) {
  const label = locale === "es" ? "Cambiar entre tema claro y oscuro" : "Switch between light and dark theme";

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const dark = root.dataset.theme !== "dark";
    const apply = () => {
      if (dark) root.dataset.theme = "dark";
      else delete root.dataset.theme;
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
    };

    const startViewTransition = document.startViewTransition?.bind(document);
    if (!startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) return apply();

    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    // Arranca en el circulo inscrito en el boton (no en 0) para que se lea como
    // que el boton mismo se expande, no como un punto que aparece encima.
    const from = Math.min(width, height) / 2;
    const to = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    // ready rechaza si el navegador saltea la transicion (pestania oculta, o un
    // segundo click que interrumpe al primero). El theme igual quedo aplicado.
    startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(${from}px at ${x}px ${y}px)`, `circle(${to}px at ${x}px ${y}px)`] },
        // ease-in y no ease-in-out: en pantallas angostas el circulo tapa todo el
        // ancho a mitad de camino y el resto se lee como cortina bajando. Con
        // arranque lento se mantiene chico junto al boton mas tiempo.
        { duration: 700, easing: "ease-in", pseudoElement: "::view-transition-new(root)" }
      );
    }, () => {});
  }

  return (
    <li>
      <button type="button" onClick={toggle} aria-label={label} title={label} className="nav-link border border-teal/20 rounded-full">
        <Moon className="icon-moon" size={18} aria-hidden="true" />
        <Sun className="icon-sun" size={18} aria-hidden="true" />
      </button>
    </li>
  );
}
