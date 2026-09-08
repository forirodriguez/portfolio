import type { Content } from "./types";

export const es: Content = {
  locale: "es",
  htmlLang: "es",
  switchLabel: "EN",
  nav: {
    projects: "Trabajos",
    about: "Sobre mí",
    talk: "Hablemos",
    cv: "CV",
    back: "Volver",
    home: "Inicio",
    bio: "Bio",
    info: "Info",
    viewProject: "Ver proyecto",
    viewMore: "Ver más",
    liveSite: "Ver online",
    repo: "Código",
    stack: "Stack",
    description: "Sobre el proyecto",
    role: "Rol",
    period: "Período",
    skip: "Saltar al contenido",
  },
  home: {
    eyebrow: "Producto y tecnología",
    heroTitle: "Definir qué construir.",
    heroHighlight: "Entender cómo hacerlo.",
    intro: "Soy Alfonso. Busco un rol de Product Owner, con experiencia en investigación, desarrollo full stack y negocios.",
    contactSmall: "¿Buscás un Product Owner con base técnica?",
    contactBig: "Escribime",
    contactIntro: "Busco un rol de Product Owner donde pueda trabajar cerca de usuarios y equipos de desarrollo. Si el perfil encaja con tu equipo, conversemos.",
    selectedWork: "Trabajos seleccionados",
    selectedIntro: "Dos casos: investigar qué construir y mejorar lo que ya se usa.",
    moreWork: "Más experiencia",
    aboutTitle: "Producto, negocio y criterio técnico.",
    aboutIntro: "Vengo de Administración de Empresas y de trabajar en finanzas y operaciones con equipos de Estados Unidos e India. Hoy uso esa experiencia para investigar problemas, definir el alcance y desarrollar productos. Trabajo en español e inglés.",
  },
  about: {
    title: "Sobre Mí",
    paragraphs: [
      "Soy Alfonso Rodríguez. Busco orientar mi próxima etapa a Product Owner, apoyado en mi experiencia desarrollando productos SaaS y mi formación en Administración de Empresas. He realizado investigación de usuarios, definido el alcance de MVPs y priorizado roadmaps, además de llevar esas decisiones al código.",
      "Mi stack es Next.js, TypeScript, Prisma y PostgreSQL, con base sólida en UX/UI y performance de frontend. Trabajo desde Montevideo, en español e inglés (C2), con equipos locales y remotos.",
    ],
    experienceTitle: "Experiencia Profesional",
    skillsTitle: "Habilidades Técnicas",
    educationTitle: "Educación",
    languagesTitle: "Idiomas y Experiencia Internacional",
    international:
      "Hice un intercambio universitario en la University of Western Australia y trabajé cuatro años en Altisource Portfolio Solutions coordinando procesos de payroll y cuentas a pagar con equipos en Estados Unidos e India. De ahí vienen el inglés y la costumbre de trabajar con gente en otra zona horaria.",
    jobs: [
      {
        company: "MedShift",
        role: "Full Stack Developer & Producto",
        period: "Marzo 2026 - Actualidad",
        description:
          "Producto propio. Webapp mobile-first para médicos que trabajan en varias instituciones: proyecta cuánto van a cobrar y cuándo. Lo llevo end-to-end: research, producto y desarrollo. En producción, en beta cerrada con 3 médicos que lo están usando.",
        projectId: "medshift",
      },
      {
        company: "GreenLight.ai",
        role: "AI Trainer & Reviewer (Contractor independiente)",
        period: "Junio 2026 - Actualidad",
        description:
          "Programas de entrenamiento y evaluación de modelos de IA. Aplico rúbricas detalladas para producir anotaciones estructuradas y ratings de calidad, y reviso el trabajo de otros contribuidores. Promovido a reviewer para control de calidad del trabajo de pares.",
      },
      {
        company: "Weedly.uy",
        role: "Fullstack & Business Developer",
        period: "Febrero 2025 - Marzo 2026",
        description:
          "Arquitectura full-stack en Next.js y TypeScript, más el lado comercial: alianzas con clubes cannábicos, reuniones de descubrimiento y definición del roadmap según el feedback real de los usuarios.",
        projectId: "weedly",
      },
      {
        company: "iParkings",
        role: "Frontend Developer",
        period: "Noviembre 2023 - Diciembre 2024",
        description:
          "Rediseñé el auto-cobro para un estacionamiento que recibía 150.000 usuarios al mes. El flujo pasó de 6-8 a 4-6 pasos y los tickets de quejas registrados en Jira bajaron un 40%.",
        projectId: "iparkings",
      },
      {
        company: "TengoKarga",
        role: "Full Stack Developer",
        period: "Noviembre 2021 - Noviembre 2023",
        description:
          "Plataforma logística. Rediseñé el alta de pedidos en pasos, construí el modo impersonation para soporte interno y participé del QA y del flujo de PRs a producción.",
        projectId: "tengokarga",
      },
    ],
    skills: [
      {
        title: "Frontend",
        items: [
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
        ],
      },
      {
        title: "Backend y Datos",
        items: [
          "Node.js",
          "PostgreSQL",
          "Supabase",
          "Prisma",
          "Edge Functions",
          "MongoDB",
          "MySQL",
        ],
      },
      {
        title: "Testing y Tooling",
        items: ["Vitest", "Playwright", "Git / GitHub", "CI/CD", "Vercel"],
      },
      {
        title: "Producto y Diseño",
        items: [
          "Figma",
          "User Research",
          "Prototipado",
          "Definición de MVP",
          "Design Thinking",
        ],
      },
    ],
    education: [
      {
        title: "Diploma UX/UI",
        institution: "Academia Senpai, Montevideo",
        year: "2023",
      },
      {
        title: "Licenciatura en Administración de Empresas",
        institution: "Universidad de Montevideo",
        year: "2021",
      },
      {
        title: "Diploma Full Stack Developer",
        institution: "Academia Senpai, Montevideo",
        year: "2020",
      },
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "C2" },
      { language: "Portugués", level: "Básico" },
    ],
  },
  bio: {
    title: "De los números al producto",
    sections: [
      {
        heading: "Cómo llegué acá",
        body: "Estudié Administración de Empresas y trabajé cuatro años en finanzas corporativas, procesando payroll y cuentas a pagar para una empresa con equipos en Estados Unidos e India. Aprendí a trabajar con plata ajena, plazos que no se mueven y gente en otro huso horario. Después me metí en desarrollo y no volví.",
      },
      {
        heading: "Qué me dejó ese desvío",
        body: "No cambié de carrera, sumé una. La parte de negocios es la que me hace preguntar por qué antes de preguntar cómo: a quién le duele esto, cuánto le duele, y si de verdad pagaría por resolverlo. Es la diferencia entre construir una feature y construir algo que alguien usa el mes que viene.",
      },
      {
        heading: "MedShift, que es donde todo esto se junta",
        body: "MedShift es una webapp para médicos uruguayos que trabajan en tres o cuatro instituciones a la vez y no tienen forma de saber cuánto van a cobrar ni cuándo. Antes de escribir el MVP hice una encuesta y junté 50 respuestas. Los datos me confirmaron el problema, me cambiaron el pitch y me tiraron abajo la hipótesis de precio que tenía en la cabeza. Está en producción, en beta cerrada con 3 médicos que lo están usando.",
      },
      {
        heading: "Y en paralelo, IA",
        body: "Desde junio de 2026 trabajo como contractor independiente para GreenLight.ai en programas de entrenamiento y evaluación de modelos. Aplico rúbricas para generar anotaciones estructuradas y reviso el trabajo de otros contribuidores. Me promovieron a reviewer. Es un músculo distinto: leer con criterio, ser consistente y justificar por qué algo está bien o mal.",
      },
      {
        heading: "Liderar equipos antes de liderar código",
        body: "Tuve una etapa en gastronomía, en el Club Silvergate, donde manejé un equipo diverso, negocié con proveedores y armé estrategias comerciales. Ahí aprendí que la satisfacción del cliente arranca por un equipo que no está quemado. Sigue siendo cierto en software.",
      },
    ],
  },
  notFound: {
    title: "Página no encontrada",
    text: "La página que estás buscando no existe.",
    cta: "Volver al inicio",
  },
  projects: [
    {
      id: "medshift",
      featured: {
        value: "50",
        label: "Respuestas antes del MVP",
        detail: "Una encuesta a médicos que cambió el enfoque, el precio y las prioridades del producto.",
      },
      title: "MedShift",
      role: "Full Stack Developer & Producto",
      period: "Marzo 2026 - Actualidad",
      type: "work",
      shortDescription:
        "Webapp para médicos que trabajan en varias instituciones: cuánto van a cobrar, de dónde y en qué fecha.",
      fullDescription:
        "Producto propio para médicos uruguayos que trabajan en varias instituciones. Llevo la investigación, el alcance del MVP y el desarrollo, desde el modelo de datos hasta el deploy.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Supabase",
        "PostgreSQL",
        "Edge Functions",
        "Tailwind CSS",
        "Playwright",
        "Vitest",
        "Google Calendar API",
        "Vercel",
      ],
      highlights: [
        "Producto propio: investigación, definición del MVP y desarrollo full stack.",
        "Beta cerrada en producción, utilizada por 3 médicos; incluye proyección de cobros y sincronización con Google Calendar.",
      ],
      liveLink: "https://www.medshift.uy",
      caseStudy: [
        {
          heading: "El problema que elegí resolver",
          body: "Los médicos que trabajan en varias instituciones combinan guardias y empleos en nómina, con tarifas y fechas de pago distintas. MedShift conecta ese trabajo con una proyección de cuánto van a cobrar, de dónde y cuándo.",
        },
        {
          heading: "Tres decisiones que cambiaron con la investigación",
          body: "Entre mayo y junio de 2026 reuní 50 respuestas de médicos. 32 trabajaban en tres o más lugares y hacían al menos cinco guardias al mes. Usé las respuestas para priorizar el MVP y revisar mis supuestos de precio.",
          bullets: [
            "Priorizar cobros sobre agenda. 29 de 50 eligieron saber cuánto iban a cobrar y de dónde como la función más importante. Solo 2 señalaron organizar guardias como su mayor estrés. Cambié la promesa central del producto.",
            "Revisar el precio. La disposición a pagar declarada era menor que mi hipótesis. Ajusté el precio previsto y la expectativa de conversión, sin tomar la encuesta como prueba de ventas.",
            "Integrar herramientas existentes. 33 de 50 ya usaban Google Calendar. Prioricé la sincronización bidireccional; para lo contable, elegí recordatorios de vencimientos antes que un módulo de cálculo tributario.",
          ],
        },
        {
          heading: "Cómo llevé esas decisiones al producto",
          bullets: [
            "Guardias y empleos en nómina por institución, con tarifas históricas, complementos y fechas de cobro. La proyección se recalcula en la base de datos cuando cambia una guardia.",
            "Cobros agrupados por mes, registro de lo efectivamente recibido y cálculo de diferencias respecto de lo esperado.",
            "Sincronización con Google Calendar mediante OAuth y un calendario dedicado; recordatorios por email con reintentos e idempotencia.",
            "Aislamiento de datos con Row Level Security y pruebas SQL, unitarias y E2E. Telemetría de errores sin PII y analytics sujetos a consentimiento.",
          ],
        },
        {
          heading: "De la encuesta a la beta",
          body: "A septiembre de 2026, 3 médicos usan la beta: 2 desde hace tres meses y el tercero desde hace una semana. La usan principalmente para comprobar cuánto deberían cobrar cada mes y recibir recordatorios de cobro. Ese uso coincide con el foco de producto elegido tras la encuesta. Los 18 voluntarios iniciales eran interés en participar, no usuarios activos.",
        },
      ],
    },
    {
      id: "weedly",
      title: "Weedly",
      role: "Fullstack & Business Developer",
      period: "Febrero 2025 - Marzo 2026",
      type: "work",
      shortDescription:
        "Plataforma de administración para clubes cannábicos en Uruguay.",
      fullDescription:
        "Weedly es una plataforma de gestión para clubes cannábicos uruguayos, un sector con requisitos operativos y legales muy específicos. Tuve un rol cruzado: llevé la arquitectura full-stack y al mismo tiempo el desarrollo de negocio, que en un producto tan regulado es la parte que define qué se puede construir.",
      imageSrc: "/images/weedly.jpg",
      imageCaption: "Presentación visual de Weedly.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Server Actions",
        "Tailwind CSS",
        "SSR",
      ],
      highlights: [
        "Diseñé e implementé la arquitectura full-stack en Next.js y TypeScript.",
        "Server Actions para las operaciones de datos y SSR para renderizar las páginas en el servidor.",
        "Definí el MVP y el roadmap priorizando por impacto real de negocio y de usuario.",
        "Cerré alianzas con clubes cannábicos y llevé las reuniones de descubrimiento que ajustaron el producto a los requisitos operativos y legales del sector.",
      ],
      liveLink: "https://weedly.uy",
      caseStudy: [
        {
          heading: "Lo que hice",
          bullets: [
            "Arquitectura full-stack completa: Next.js, TypeScript, Prisma y PostgreSQL.",
            "Operaciones de datos con Server Actions y páginas renderizadas en el servidor.",
            "UI responsive pensada para uso administrativo diario, no para demo.",
            "Definición del MVP y del roadmap de producto.",
            "Alianzas con clubes, reuniones de descubrimiento y adaptación del producto a requisitos legales y operativos.",
            "Iteración continua sobre feedback de usuarios reales.",
            "Identidad de marca y estrategia de comunicación, para que producto y marketing contaran lo mismo.",
          ],
        },
      ],
    },
    {
      id: "iparkings",
      featured: {
        value: "6-8 → 4-6",
        label: "Pasos en el flujo de pago",
        detail: "Rediseño del auto-cobro: menos decisiones antes de retirar el auto.",
      },
      title: "iParkings",
      role: "Frontend Developer",
      period: "Noviembre 2023 - Diciembre 2024",
      type: "work",
      shortDescription:
        "Rediseño del auto-cobro: menos pasos para pagar y una reducción del 40% en tickets de quejas registrados en Jira.",
      fullDescription:
        "iParkings opera estacionamientos privados en Uruguay. Trabajé sobre el sistema de auto-cobro: la terminal donde el usuario paga antes de retirar el auto. Es un contexto exigente, porque el usuario está apurado, de pie, y si el flujo falla el reclamo lo recibe el personal del parking.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "UX/UI Design",
        "Responsive Design",
      ],
      highlights: [
        "El estacionamiento recibía 150.000 usuarios al mes: es el volumen del lugar, no usuarios medidos de la interfaz.",
        "Reduje el flujo de pago de 6-8 a 4-6 pasos. Los tickets de quejas registrados en Jira bajaron un 40%.",
        "Construí el modo “Free Parking”, que sacó carga operativa del personal.",
        "Lideré el diseño UX/UI, el testing funcional y la documentación técnica de la plataforma.",
      ],
      liveLink: "https://pagoparking.com",
      caseStudy: [
        {
          heading: "Confidencialidad",
          body: "Las interfaces, capturas y documentación interna de este trabajo son confidenciales. Presento mi contribución y la forma de medir el resultado sin publicar esos materiales.",
        },
        {
          heading: "El detalle que más importó",
          body: "Cada paso que sacaba del flujo era un punto menos donde alguien se trababa con el auto atrás esperando. La reducción de 6-8 pasos a 4-6 no fue un rediseño visual: fue sacar decisiones que el sistema podía tomar solo. La reducción del 40% en quejas se midió a partir de los tickets registrados en Jira.",
        },
        {
          heading: "Trabajo con hardware",
          body: "El auto-cobro no es solo una pantalla: hay terminales, impresoras y barreras del otro lado. Coordiné con los equipos de backend y hardware para que la integración fuera limpia, y escribí la documentación técnica que antes no existía.",
        },
      ],
    },
    {
      id: "tengokarga",
      title: "TengoKarga",
      role: "Full Stack Developer",
      period: "Noviembre 2021 - Noviembre 2023",
      type: "work",
      shortDescription:
        "Plataforma logística: alta de pedidos, herramientas de soporte interno y QA.",
      fullDescription:
        "TengoKarga era una plataforma logística para conectar cargas con transportistas. Trabajé full stack durante dos años, sobre features de producto y sobre las herramientas que el equipo interno necesitaba para dar soporte. La plataforma ya no está online.",
      imageSrc: "/images/tengokarga.jpg",
      imageCaption: "Imagen de archivo de TengoKarga; la plataforma dejó de operar.",
      technologies: [
        "React",
        "Redux",
        "Redux-Saga",
        "Node.js",
        "Express",
        "MongoDB",
        "Testing",
        "Git",
      ],
      highlights: [
        "Rediseñé el alta de pedidos como experiencia paso a paso, en lugar del formulario largo anterior.",
        "Construí el modo impersonation, que permite a un super-admin operar como un usuario para dar soporte.",
        "Participé del QA: documentación escrita y en video, tests unitarios y de integración.",
        "Trabajé el flujo de GitHub del equipo: revisión de PRs, merges a dev y seguimiento de deploys a producción.",
      ],
      caseStudy: [
        {
          heading: "Nota",
          body: "TengoKarga dejó de operar y el dominio ya no está activo, así que no hay demo para mostrar. Dejo el detalle de lo que construí en lugar de un link roto.",
        },
      ],
    },
    {
      id: "timb-arquitectura",
      title: "Timb Arquitectura",
      role: "Diseño y desarrollo web",
      period: "2023",
      type: "project",
      shortDescription:
        "Sitio responsive para un estudio de arquitectura, sobre WordPress.",
      fullDescription:
        "Sitio web para el estudio Timb Arquitectura. La necesidad era que el estudio pudiera cargar sus propias obras sin depender de nadie, así que la base fue WordPress, con personalizaciones de CSS para que no se notara la plantilla y el diseño acompañara la estética del estudio.",
      imageSrc: "/images/timb1.jpg",
      imageCaption: "Sitio web de Timb Arquitectura.",
      technologies: ["WordPress", "CSS", "Responsive Design", "UX/UI Design"],
      liveLink: "https://www.timb.com.uy",
    },
    {
      id: "portfolio",
      title: "Este portfolio",
      role: "Diseño y desarrollo",
      period: "2024 - 2026",
      type: "project",
      shortDescription:
        "El sitio donde estás parado. Next.js, estático y bilingüe.",
      fullDescription:
        "Portfolio propio en Next.js con App Router. Las páginas de proyecto son estáticas y se generan en build, sin generar el contenido de cada página en cada visita. El contenido está completamente visible en el HTML del servidor, sin dependencias de animación. Disponible en español e inglés.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Static Generation",
        "i18n",
        "SEO",
      ],
      githubLink: "https://github.com/forirodriguez/portfolio",
      liveLink: "https://portfolio-alfonsorodriguez-20.vercel.app/es",
    },
  ],
  meta: {
    home: {
      title: "Alfonso Rodríguez | Producto y tecnología",
      description:
        "Alfonso Rodríguez, perfil de producto con experiencia full stack y formación en negocios. Busco un rol de Product Owner. Casos de MedShift e iParkings.",
      keywords:
        "Product Owner, Producto, Discovery, MVP, Priorización, Full Stack, UX/UI, Uruguay, Montevideo",
    },
    about: {
      title: "Alfonso Rodriguez | Sobre mí",
      description:
        "Experiencia de Alfonso Rodríguez en investigación de usuarios, definición de MVP y desarrollo full stack. En búsqueda de un rol de Product Owner.",
      keywords:
        "Alfonso Rodriguez, Product Owner, experiencia, producto, discovery, desarrollo, Uruguay",
    },
    bio: {
      title: "Alfonso Rodriguez | De los números al producto",
      description:
        "Cómo pasé de finanzas corporativas a construir productos de software, y qué me llevé de ese desvío.",
      keywords:
        "Alfonso Rodriguez, cambio de carrera, desarrollo de producto, MedShift, IA",
    },
  },
};
