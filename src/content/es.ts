import type { Content } from "./types";

export const es: Content = {
  locale: "es",
  htmlLang: "es",
  switchLabel: "EN",
  nav: {
    projects: "PROYECTOS",
    about: "SOBRE MI",
    talk: "HABLEMOS",
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
  },
  home: {
    heroPrefix: "Construyo",
    rotatingWords: ["productos", "webapps", "MVPs"],
    heroMiddle: "que la gente",
    heroHighlight: "usa de verdad",
    intro:
      "Soy Alfonso, Full Stack Developer en Montevideo. Trabajo con Next.js, TypeScript y Postgres, y hago el research de producto que define qué se construye. Hoy estoy en MedShift, una webapp para médicos que ya está en producción con usuarios beta.",
    contactSmall: "Hablamos?",
    contactBig: "Contactame",
    tabWork: "Trabajos",
    tabProjects: "Proyectos",
  },
  about: {
    title: "Sobre Mí",
    paragraphs: [
      "Soy Alfonso Rodríguez, Full Stack Developer con foco en construir y escalar productos SaaS. Vengo de Administración de Empresas, y esa mezcla es lo que uso todos los días: escribo el código, pero también hago las entrevistas de descubrimiento, defino el alcance del MVP y decido qué no se construye.",
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
          "Producto propio. Webapp mobile-first para médicos que trabajan en varias instituciones: proyecta cuánto van a cobrar y cuándo. Lo llevo end-to-end: research, producto y desarrollo. En producción, en beta cerrada.",
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
          "Sistema de auto-cobro para estacionamientos privados en Uruguay, con más de 150.000 usuarios mensuales. Reduje el flujo de pago de 6-8 pasos a 4-6, con una caída del 40% en reclamos.",
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
        body: "MedShift es una webapp para médicos uruguayos que trabajan en tres o cuatro instituciones a la vez y no tienen forma de saber cuánto van a cobrar ni cuándo. Antes de escribir el MVP hice una encuesta y junté 50 respuestas. Los datos me confirmaron el problema, me cambiaron el pitch y me tiraron abajo la hipótesis de precio que tenía en la cabeza. Está en producción, en beta cerrada.",
      },
      {
        heading: "Y en paralelo, IA",
        body: "Desde junio de 2026 trabajo como contractor independiente para GreenLight.ai en programas de entrenamiento y evaluación de modelos. Aplico rúbricas para generar anotaciones estructuradas y reviso el trabajo de otros contribuidores. Me promovieron a reviewer. Es un músculo distinto: leer con criterio, ser consistente y justificar por qué algo está bien o mal.",
      },
      {
        heading: "Disciplina, o el gimnasio como analogía barata",
        body: "Armar una rutina de gimnasio y sostenerla me enseñó más sobre consistencia que cualquier libro. La parte difícil nunca es el primer día, es el día 40 sin resultados visibles. Programar tiene el mismo problema y la misma solución: aparecer.",
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
      title: "MedShift",
      role: "Full Stack Developer & Producto",
      period: "Marzo 2026 - Actualidad",
      type: "work",
      shortDescription:
        "Webapp para médicos que trabajan en varias instituciones: cuánto van a cobrar, de dónde y en qué fecha.",
      fullDescription:
        "MedShift es un producto propio: lo llevo end-to-end, del research al deploy. Es una webapp mobile-first para médicos uruguayos que registran guardias y empleos en nómina en varias instituciones a la vez. Les proyecta cuánto generaron, cuánto van a cobrar y en qué fecha. Está en producción en medshift.uy, en beta cerrada. Lo que sigue es el proceso completo: la investigación previa, qué cambió por los datos y qué terminé construyendo.",
      imageSrc: "/images/medshift.png",
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
        "50 respuestas de encuesta antes de escribir el MVP; 64% resultó ser exactamente el perfil objetivo.",
        "La feature más votada (58%) era la promesa central del producto: saber en tiempo real cuánto se va a cobrar y de dónde.",
        "18 médicos se ofrecieron como testers, contra un target inicial de 10 a 15.",
        "En producción con beta cerrada, telemetría minimizada y suites de tests unitarios, SQL y E2E mobile.",
      ],
      liveLink: "https://www.medshift.uy",
      caseStudy: [
        {
          heading: "El problema",
          body: "Un médico uruguayo típico trabaja en tres o más instituciones, mezcla guardias con empleos en nómina, y cada lugar paga con su propia tarifa, su propio criterio de complementos y su propia fecha. El resultado es que no sabe cuánto va a cobrar el mes que viene, ni de dónde, ni si lo que le depositaron está bien. No es un problema de agenda: es un problema de plata.",
        },
        {
          heading: "Lo que hice antes de escribir el MVP",
          body: "Armé una encuesta y la distribuí entre médicos. Junté 50 respuestas entre mayo y junio de 2026. No fue para validar lo que ya quería hacer: fue para poder matar ideas barato.",
          bullets: [
            "32 de 50 (64%) trabajan en 3 o más lugares y hacen 5 o más guardias por mes: la encuesta llegó al perfil correcto.",
            "29 de 50 (58%) eligieron “mostrarme en tiempo real cuánto voy a cobrar y de dónde” como la única feature que más querían.",
            "23 de 50 cobraron en el último año una diferencia de 10% o más respecto de lo que esperaban. Otros 7 nunca lo calcularon: no saben si les pagaron bien.",
            "23 de 50 (46%) marcaron la parte contable (Caja, BPS, DGI) como su mayor estresor, por encima de saber cuánto van a cobrar.",
            "33 de 50 ya organizan todo en Google Calendar. Solo 2 usan una app específica.",
            "36 de 50 (72%) pagan un contador externo y aún así el tema les estresa.",
            "18 se ofrecieron como testers de la beta, contra un target de 10 a 15.",
          ],
        },
        {
          heading: "Qué cambió por los datos",
          body: "Esta es la parte que justifica haber hecho la encuesta. Cinco decisiones cambiaron:",
          bullets: [
            "El pitch. Organizar guardias casi no estresa a nadie (2 de 50 lo marcaron como mayor estrés). Dejé de vender “organizá tus guardias” y pasé a vender “sabé cuánto vas a cobrar y cuándo”. El calendario es el medio de carga, no el valor.",
            "El precio. Mi hipótesis de precio estaba muy por encima de la disposición a pagar declarada. La corregí y bajé también la meta de conversión post-trial, que era optimista. Prefiero enterarme por una encuesta que por un checkout vacío.",
            "El orden del roadmap. Lo contable era el estresor número uno pero el módulo tributario completo estaba diferido por buenas razones. En vez de adelantarlo entero, construí un puente barato: calendario de vencimientos DGI/BPS/CJPPU con recordatorios por email, sin cálculo ni asesoramiento tributario.",
            "La integración con Google Calendar. Como dos tercios ya viven ahí, la sync bidireccional dejó de ser un extra y pasó a ser la forma de bajar la fricción de migración.",
            "Las alertas de solapamiento. Ya estaban construidas y solo 2 de 50 las valoraron. Se quedan como detalle: no invierto más ahí ni las uso en el pitch.",
          ],
        },
        {
          heading: "Qué construí",
          bullets: [
            "Proyección de cobros en tiempo real: el monto y la fecha de cobro se recalculan en la base ante cada alta o edición de guardia, no en el cliente.",
            "Modelo multi-institución con Row Level Security y scope indirecto por institución, más una suite SQL que verifica el aislamiento entre usuarios.",
            "Alta de guardia en 3 pasos, carga manual con snapshot histórico de tarifa, complementos (por hora, fijos, por paciente, multiplicador), recurrencia semanal y guardias largas.",
            "Empleos en nómina con complementos recurrentes, ajustes puntuales y calendario de cobro propio.",
            "Cobros agrupados por mes de pago con registro del monto real y cálculo de desviación: la respuesta directa al “no sé si me pagaron bien”.",
            "Sync bidireccional con Google Calendar: OAuth con scope reducido, calendario dedicado, webhook inbound y sync outbound con eventos pendientes.",
            "Recordatorios por email de cobros vencidos y vencimientos tributarios, con idempotencia, catch-up y reintentos.",
            "Telemetría minimizada: errores sin PII y analytics recién después de que el usuario acepta, con retiro disponible desde el perfil.",
            "Admin interno para operar la beta y dar soporte sin tocar la base a mano.",
          ],
        },
        {
          heading: "Dónde está hoy",
          body: "En producción, en beta cerrada, con los voluntarios que salieron de la misma encuesta. Antes de ampliar la beta quedan la revisión legal de retención de datos, backups y el smoke test físico en mobile. El aprendizaje más caro fue barato: una encuesta de 50 respuestas me evitó construir el checkout equivocado.",
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
        "Server Actions y SSR para mantener consistencia en tiempo real sin castigar la performance.",
        "Definí el MVP y el roadmap priorizando por impacto real de negocio y de usuario.",
        "Cerré alianzas con clubes cannábicos y llevé las reuniones de descubrimiento que ajustaron el producto a los requisitos operativos y legales del sector.",
      ],
      liveLink: "https://weedly.uy",
      caseStudy: [
        {
          heading: "Lo que hice",
          bullets: [
            "Arquitectura full-stack completa: Next.js, TypeScript, Prisma y PostgreSQL.",
            "Server Actions seguras y renderizado en servidor para consistencia en tiempo real.",
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
      title: "iParkings",
      role: "Frontend Developer",
      period: "Noviembre 2023 - Diciembre 2024",
      type: "work",
      shortDescription:
        "Sistema de auto-cobro para estacionamientos privados, con más de 150.000 usuarios mensuales.",
      fullDescription:
        "iParkings opera estacionamientos privados en Uruguay. Trabajé sobre el sistema de auto-cobro: la terminal donde el usuario paga antes de retirar el auto. Es un contexto exigente, porque el usuario está apurado, de pie, y si el flujo falla el reclamo lo recibe el personal del parking.",
      imageSrc: "/images/iparkings.jpg",
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
        "Más de 150.000 usuarios mensuales sobre el sistema en el que trabajé.",
        "Reduje el flujo de pago de 6-8 pasos a 4-6, con una caída del 40% en reclamos de usuarios.",
        "Construí el modo “Free Parking”, que sacó carga operativa del personal.",
        "Lideré el diseño UX/UI, el testing funcional y la documentación técnica de la plataforma.",
      ],
      liveLink: "https://pagoparking.com",
      caseStudy: [
        {
          heading: "El detalle que más importó",
          body: "Cada paso que sacaba del flujo era un punto menos donde alguien se trababa con el auto atrás esperando. La reducción de 6-8 pasos a 4-6 no fue un rediseño visual: fue sacar decisiones que el sistema podía tomar solo. El 40% de caída en reclamos es la métrica que lo confirma.",
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
        "El sitio donde estás parado. Next.js, sin dependencias de animación, bilingüe.",
      fullDescription:
        "Portfolio propio en Next.js con App Router. Las páginas de proyecto son estáticas y se generan en build, así que no hay función de servidor que pueda fallar en runtime. Las animaciones son CSS puro: el contenido está visible en el HTML y la animación es un agregado, no un requisito para leer la página. Disponible en español e inglés.",
      imageSrc: "/images/portfolio.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Static Generation",
        "i18n",
        "SEO",
      ],
      githubLink: "https://github.com/forirodriguez/portfolio",
      liveLink: "https://portfolio-alfonsorodriguez-20.vercel.app/",
    },
  ],
  meta: {
    home: {
      title: "Alfonso Rodriguez | Full Stack Developer",
      description:
        "Full Stack Developer en Montevideo. Next.js, TypeScript y PostgreSQL, con research de producto para definir qué se construye. Actualmente en MedShift.",
      keywords:
        "Full Stack Developer, Next.js, TypeScript, React, PostgreSQL, Supabase, Producto, UX/UI, Uruguay, Montevideo",
    },
    about: {
      title: "Alfonso Rodriguez | Sobre mí",
      description:
        "Experiencia, stack y formación de Alfonso Rodriguez: Full Stack Developer con background en negocios, trabajando en Montevideo con equipos locales y remotos.",
      keywords:
        "Alfonso Rodriguez, Full Stack Developer, experiencia, stack, Next.js, TypeScript, Uruguay",
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
