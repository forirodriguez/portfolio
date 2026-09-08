# Portfolio — Alfonso Rodriguez

Portfolio personal, bilingüe (español / inglés), orientado a oportunidades de Product Owner y construido con Next.js App Router.

**Live:** https://portfolio-alfonsorodriguez-20.vercel.app · [Español](https://portfolio-alfonsorodriguez-20.vercel.app/es)

---

## Decisiones de diseño

Tres cosas que definen cómo está armado:

**1. Todo el contenido vive en datos, no en JSX.**
`src/content/es.ts` y `src/content/en.ts` exportan el mismo tipo (`src/content/types.ts`).
Las páginas son componentes finos que reciben un `locale` y leen de ahí. Agregar un
proyecto o corregir una fecha es editar un objeto, no tocar markup — y el compilador
avisa si un idioma se quedó atrás.

**2. Las páginas son estáticas, sin excepción.**
Las rutas de proyecto (`/[id]` y `/es/[id]`) usan `generateStaticParams` con
`dynamicParams = false`. Se generan en build y se sirven desde el CDN: las páginas no necesitan una función de servidor para generar su contenido en cada visita.
Un id que no existe da 404, no error.

**3. El contenido no depende de JavaScript.**
El titular es fijo y los proyectos son enlaces visibles en el HTML, sin pestañas
ni acordeones. El menú, el cambio de idioma y los casos se pueden recorrer sin
JavaScript.

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
python3 scripts/check_site.py http://127.0.0.1:3000 # con el sitio corriendo
```

---

## Estructura

```text
src/
  app/
    page.tsx                  # home (en, idioma por defecto)
    about/                    # about (en)
    (projects)/
      bio/                    # bio (en)
      [id]/                   # detalle de proyecto (en), estático
    es/
      page.tsx                # home (es)
      sobre-mi/  bio/  [id]/  # equivalentes en español
    opengraph-image.tsx       # tarjeta 1200x630 para compartir el link
    not-found.tsx             # 404 bilingüe
  components/
    pages/                    # HomeView, AboutView, BioView (compartidas entre idiomas)
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

`featured: { value, label, detail }` destaca un caso en la portada. Los demás
trabajos se muestran como una lista visible; el portfolio propio conserva su
ruta pero no ocupa una tarjeta en la portada. `imageCaption` describe la imagen
sin asumir que es una captura del producto.

---

## i18n

El inglés es el idioma por defecto y vive en la raíz (`/about`); el español va
bajo `/es` (`/es/sobre-mi`). No hay middleware ni detección por `Accept-Language`:
son rutas estáticas y un switch en el header, así que cualquiera cae en inglés y
cambia si quiere.

Cada página declara `canonical` y `hreflang` vía `buildMetadata()`, con
`x-default` apuntando al inglés, y cada vista marca su `lang` en el contenedor
para que el idioma del contenido no dependa del `<html lang>` del layout.

`next.config.mjs` mantiene redirects 308 desde las URLs del esquema anterior
(`/en/*` y `/sobre-mi`).

## CV

Cada idioma enlaza a su PDF: `public/docs/CV-Alfonso-Rodriguez.pdf` (inglés) y
`public/docs/CV-Alfonso-Rodriguez-ES.pdf` (español). Las versiones editables están
en `documents/`. Actualizar ambos formatos cuando cambien los datos.

Las métricas de septiembre de 2026 distinguen usuarios del estacionamiento,
tickets de quejas en Jira y uso de la beta de MedShift. El caso de iParkings no
incluye capturas ni documentación interna por confidencialidad.
