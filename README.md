# Portfolio — Alfonso Rodriguez

Portfolio personal, bilingüe (español / inglés), construido con Next.js App Router.

**Live:** https://portfolio-alfonsorodriguez-20.vercel.app · [English](https://portfolio-alfonsorodriguez-20.vercel.app/en)

---

## Decisiones de diseño

Tres cosas que definen cómo está armado:

**1. Todo el contenido vive en datos, no en JSX.**
`src/content/es.ts` y `src/content/en.ts` exportan el mismo tipo (`src/content/types.ts`).
Las páginas son componentes finos que reciben un `locale` y leen de ahí. Agregar un
proyecto o corregir una fecha es editar un objeto, no tocar markup — y el compilador
avisa si un idioma se quedó atrás.

**2. Las páginas son estáticas, sin excepción.**
Las rutas de proyecto (`/[id]` y `/en/[id]`) usan `generateStaticParams` con
`dynamicParams = false`. Se generan en build y se sirven desde el CDN: no hay
función de servidor en runtime, así que no hay nada que pueda devolver un 500.
Un id que no existe da 404, no error.

**3. Las animaciones son CSS y no bloquean el contenido.**
No hay librería de animación. El HTML se sirve con el contenido visible y las
animaciones (`reveal`, `box-reveal`, `word-rotate` en `globals.css`) son un
agregado. Si el JS no corre, o el usuario tiene `prefers-reduced-motion`, la
página se lee igual.

---

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Iconos | lucide-react |
| Imagen OG | `next/og` (`ImageResponse`), generada en build |
| Deploy | Vercel |

---

## Correr el proyecto

```bash
npm install
npm run dev
```

http://localhost:3000

```bash
npm run build   # build de producción
npm start       # servir el build
npm run lint
```

---

## Estructura

```text
src/
  app/
    page.tsx                  # home (es)
    sobre-mi/                 # about (es)
    (projects)/
      bio/                    # bio (es)
      [id]/                   # detalle de proyecto (es), estático
    en/
      page.tsx                # home (en)
      about/  bio/  [id]/     # equivalentes en inglés
    opengraph-image.tsx       # tarjeta 1200x630 para compartir el link
    not-found.tsx             # 404 bilingüe
  components/
    pages/                    # HomeView, AboutView, BioView (compartidas entre idiomas)
    ui/                       # reveal, box-reveal, word-rotate (CSS)
  content/
    types.ts  es.ts  en.ts    # todo el texto del sitio
  lib/
    links.ts                  # contacto, redes, ruta del CV
    metadata.ts               # canonical, hreflang, Open Graph
```

---

## Agregar un proyecto

1. Sumar el objeto al array `projects` en `src/content/es.ts` **y** en `src/content/en.ts`
   (mismo `id` en los dos).
2. Poner la imagen en `public/images/` y referenciarla en `imageSrc`.
3. Listo: la ruta, el metadata, el listado del home y el menú de proyectos salen solos.

Campos opcionales para un caso de estudio largo:

```ts
highlights: string[]                              // bullets con resultado concreto
caseStudy: { heading, body?, bullets? }[]         // secciones de texto largo
```

`type: "work"` lo manda a la pestaña Trabajos; `type: "project"` a Proyectos.

---

## i18n

El español vive en la raíz (`/sobre-mi`) y el inglés bajo `/en` (`/en/about`).
No hay middleware ni detección por header: son rutas estáticas y un switch en el
header. Cada página declara `canonical` y `hreflang` vía `buildMetadata()`, y las
vistas en inglés marcan `lang="en"` en su contenedor.
