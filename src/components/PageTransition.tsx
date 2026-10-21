"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Sin esto cada navegacion es un corte seco: la pagina nueva aparece entera y
 *  de golpe. La key remonta el arbol en cada ruta, asi que la animacion de
 *  entrada del CSS vuelve a correr.
 *  La primera carga va sin clase a proposito: arrancar en opacity 0 retrasaria
 *  el LCP de quien llega directo. */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => { firstRender.current = false; }, []);

  return (
    <div key={pathname} className={firstRender.current ? undefined : "page-enter"}>
      {children}
    </div>
  );
}
