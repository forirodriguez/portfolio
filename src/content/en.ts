import type { Content } from "./types";

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  switchLabel: "ES",
  nav: {
    projects: "PROJECTS",
    about: "ABOUT",
    talk: "LET'S TALK",
    cv: "CV",
    back: "Back",
    home: "Home",
    bio: "Bio",
    info: "Info",
    viewProject: "View project",
    viewMore: "Read more",
    liveSite: "Visit site",
    repo: "Code",
    stack: "Stack",
    description: "About the project",
    role: "Role",
    period: "Period",
  },
  home: {
    heroPrefix: "I build",
    rotatingWords: ["products", "web apps", "MVPs"],
    heroMiddle: "people",
    heroHighlight: "actually use",
    intro:
      "I'm Alfonso, a Full Stack Developer based in Montevideo. I work with Next.js, TypeScript and Postgres, and I run the product research that decides what gets built. Right now I'm building MedShift, a web app for doctors already in production with beta users.",
    contactSmall: "Got a project?",
    contactBig: "Get in touch",
    tabWork: "Work",
    tabProjects: "Projects",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm Alfonso Rodríguez, a Full Stack Developer focused on building and scaling SaaS products. I came from a Business Administration background, and I use that mix every day: I write the code, but I also run the discovery interviews, define the MVP scope and decide what doesn't get built.",
      "My stack is Next.js, TypeScript, Prisma and PostgreSQL, on top of solid UX/UI and frontend performance fundamentals. I work from Montevideo, in Spanish and English (C2), with both local and remote teams.",
    ],
    experienceTitle: "Professional Experience",
    skillsTitle: "Technical Skills",
    educationTitle: "Education",
    languagesTitle: "Languages & International Experience",
    international:
      "I did a university exchange at the University of Western Australia and spent four years at Altisource Portfolio Solutions coordinating payroll and accounts payable processes with teams in the United States and India. That's where the English and the habit of working across time zones come from.",
    jobs: [
      {
        company: "MedShift",
        role: "Full Stack Developer & Product",
        period: "March 2026 - Present",
        description:
          "My own product. Mobile-first web app for doctors working across multiple institutions: it projects how much they'll get paid and when. I run it end to end: research, product and engineering. In production, in closed beta.",
        projectId: "medshift",
      },
      {
        company: "GreenLight.ai",
        role: "AI Trainer & Reviewer (Independent Contractor)",
        period: "June 2026 - Present",
        description:
          "AI training and evaluation programs. I apply detailed rubrics to produce structured annotations and quality ratings, and review other contributors' submissions for rubric adherence and consistency. Promoted to reviewer for quality oversight of peer work.",
      },
      {
        company: "Weedly.uy",
        role: "Fullstack & Business Developer",
        period: "February 2025 - March 2026",
        description:
          "Full-stack architecture in Next.js and TypeScript, plus the business side: partnerships with cannabis clubs, discovery meetings and a roadmap shaped by real user feedback.",
        projectId: "weedly",
      },
      {
        company: "iParkings",
        role: "Frontend Developer",
        period: "November 2023 - December 2024",
        description:
          "Self-payment system for private parking lots in Uruguay, serving over 150,000 monthly users. I cut the payment flow from 6-8 steps down to 4-6, driving a 40% drop in user complaints.",
        projectId: "iparkings",
      },
      {
        company: "TengoKarga",
        role: "Full Stack Developer",
        period: "November 2021 - November 2023",
        description:
          "Logistics platform. I rebuilt order creation as a step-by-step flow, shipped an impersonation mode for internal support, and took part in QA and the PR-to-production workflow.",
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
        title: "Backend & Data",
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
        title: "Testing & Tooling",
        items: ["Vitest", "Playwright", "Git / GitHub", "CI/CD", "Vercel"],
      },
      {
        title: "Product & Design",
        items: [
          "Figma",
          "User Research",
          "Prototyping",
          "MVP definition",
          "Design Thinking",
        ],
      },
    ],
    education: [
      {
        title: "UX/UI Diploma",
        institution: "Academia Senpai, Montevideo",
        year: "2023",
      },
      {
        title: "Bachelor of Business Administration",
        institution: "Universidad de Montevideo",
        year: "2021",
      },
      {
        title: "Full Stack Developer Diploma",
        institution: "Academia Senpai, Montevideo",
        year: "2020",
      },
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "C2" },
      { language: "Portuguese", level: "Basic" },
    ],
  },
  bio: {
    title: "From numbers to product",
    sections: [
      {
        heading: "How I got here",
        body: "I studied Business Administration and spent four years in corporate finance, processing payroll and accounts payable for a company with teams in the United States and India. I learned to work with other people's money, deadlines that don't move, and colleagues in another time zone. Then I moved into development and never went back.",
      },
      {
        heading: "What that detour left me",
        body: "I didn't switch careers, I added one. The business side is what makes me ask why before I ask how: who does this hurt, how much, and would they actually pay to fix it. That's the difference between shipping a feature and shipping something someone still uses next month.",
      },
      {
        heading: "MedShift, where all of it comes together",
        body: "MedShift is a web app for Uruguayan doctors who work across three or four institutions at once and have no way of knowing how much they'll get paid or when. Before writing the MVP I ran a survey and collected 50 responses. The data confirmed the problem, changed my pitch, and killed the pricing assumption I had in my head. It's in production, in closed beta.",
      },
      {
        heading: "And in parallel, AI",
        body: "Since June 2026 I've worked as an independent contractor for GreenLight.ai on AI training and evaluation programs. I apply rubrics to produce structured annotations and review other contributors' work. I was promoted to reviewer. It's a different muscle: reading with judgement, staying consistent, and justifying why something is right or wrong.",
      },
      {
        heading: "Discipline, or the cheap gym analogy",
        body: "Building a gym routine and sticking to it taught me more about consistency than any book. The hard part is never day one, it's day 40 with no visible results. Programming has the same problem and the same solution: show up.",
      },
      {
        heading: "Leading teams before leading code",
        body: "I spent a stretch in hospitality, at Club Silvergate, managing a diverse team, negotiating with suppliers and putting together commercial strategy. That's where I learned customer satisfaction starts with a team that isn't burned out. Still true in software.",
      },
    ],
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist.",
    cta: "Back to home",
  },
  projects: [
    {
      id: "medshift",
      title: "MedShift",
      role: "Full Stack Developer & Product",
      period: "March 2026 - Present",
      type: "work",
      shortDescription:
        "A web app for doctors working across multiple institutions: how much they'll be paid, by whom, and on what date.",
      fullDescription:
        "MedShift is my own product, run end to end from research to deploy. It is a mobile-first web app for Uruguayan doctors who log on-call shifts and salaried jobs across several institutions at once. It projects what they've earned, what they're owed and when it lands. It's in production at medshift.uy, in closed beta. What follows is the full process: the research that came first, what the data changed, and what I ended up building.",
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
        "50 survey responses before writing the MVP; 64% turned out to be exactly the target profile.",
        "The most requested feature (58%) was the product's core promise: knowing in real time how much you'll be paid and by whom.",
        "18 doctors volunteered as testers, against an initial target of 10 to 15.",
        "In production with closed beta, minimized telemetry, and unit, SQL and mobile E2E test suites.",
      ],
      liveLink: "https://www.medshift.uy",
      caseStudy: [
        {
          heading: "The problem",
          body: "A typical Uruguayan doctor works across three or more institutions, mixes on-call shifts with salaried positions, and every place pays with its own rate, its own rules for bonuses and its own payment date. The result is they don't know what they'll be paid next month, by whom, or whether what landed in their account is correct. It isn't a scheduling problem. It's a money problem.",
        },
        {
          heading: "What I did before writing the MVP",
          body: "I built a survey and distributed it among doctors. I collected 50 responses between May and June 2026. It wasn't there to validate what I already wanted to build: it was there so I could kill ideas cheaply.",
          bullets: [
            "32 of 50 (64%) work in 3 or more places and do 5 or more shifts a month: the survey reached the right profile.",
            "29 of 50 (58%) picked “show me in real time how much I'll be paid and by whom” as the single feature they wanted most.",
            "23 of 50 were paid an amount that differed by 10% or more from what they expected in the last year. Another 7 had never checked: they don't know whether they were paid correctly.",
            "23 of 50 (46%) flagged accounting and tax obligations as their single biggest stressor, above knowing what they'll be paid.",
            "33 of 50 already organize everything in Google Calendar. Only 2 use a purpose-built app.",
            "36 of 50 (72%) pay an external accountant and the topic still stresses them out.",
            "18 volunteered as beta testers, against a target of 10 to 15.",
          ],
        },
        {
          heading: "What the data changed",
          body: "This is the part that justifies running the survey at all. Five decisions changed:",
          bullets: [
            "The pitch. Organizing shifts barely stresses anyone (2 of 50 flagged it as their biggest stressor). I stopped selling “organize your shifts” and started selling “know what you'll be paid and when”. The calendar is the input method, not the value.",
            "The price. My pricing hypothesis sat well above stated willingness to pay. I corrected it, and lowered a post-trial conversion target that was optimistic too. I'd rather find that out from a survey than from an empty checkout.",
            "The roadmap order. Tax and accounting was the number one stressor, but the full tax module was deferred for good reasons. Instead of pulling the whole thing forward, I built a cheap bridge: a due-date calendar for the local tax and pension bodies with email reminders, no calculation and no tax advice.",
            "The Google Calendar integration. Since two thirds already live there, two-way sync stopped being a nice-to-have and became the way to lower migration friction.",
            "Overlap alerts. They were already built and only 2 of 50 valued them. They stay as a detail: no further investment, and they're out of the pitch.",
          ],
        },
        {
          heading: "What I built",
          bullets: [
            "Real-time payment projection: amount and payment date are recalculated in the database on every shift insert or update, not in the client.",
            "Multi-institution data model with Row Level Security and indirect scoping by institution, plus a SQL suite that verifies isolation between users.",
            "3-step shift creation, manual entry with a historical rate snapshot, complements (hourly, fixed, per patient, multiplier), weekly recurrence and long shifts.",
            "Salaried positions with recurring complements, one-off adjustments and their own payment calendar.",
            "Payments grouped by payment month with real-amount logging and deviation calculation: the direct answer to “I don't know if they paid me right”.",
            "Two-way Google Calendar sync: OAuth with a reduced scope, a dedicated calendar, an inbound webhook and outbound sync with pending events.",
            "Email reminders for overdue payments and tax due dates, with idempotency, catch-up and retries.",
            "Minimized telemetry: error tracking without PII, and analytics only after the user opts in, with opt-out available from their profile.",
            "An internal admin surface to run the beta and support users without touching the database by hand.",
          ],
        },
        {
          heading: "Where it stands",
          body: "In production, in closed beta, with volunteers who came out of that same survey. Before widening the beta there's a legal review of data retention, backups and a physical mobile smoke test left. The most expensive lesson was cheap: a 50-response survey saved me from building the wrong checkout.",
        },
      ],
    },
    {
      id: "weedly",
      title: "Weedly",
      role: "Fullstack & Business Developer",
      period: "February 2025 - March 2026",
      type: "work",
      shortDescription:
        "Management platform for cannabis clubs in Uruguay.",
      fullDescription:
        "Weedly is a management platform for Uruguayan cannabis clubs, a sector with very specific operational and legal requirements. I had a cross-functional role: I owned the full-stack architecture and the business development at the same time, which in a product this regulated is what defines what can be built at all.",
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
        "Designed and implemented the full-stack architecture in Next.js and TypeScript.",
        "Server Actions and SSR to keep state consistent in real time without hurting performance.",
        "Defined the MVP and roadmap, prioritizing by real business and user impact.",
        "Closed partnerships with cannabis clubs and ran the discovery meetings that adapted the product to the sector's operational and legal requirements.",
      ],
      liveLink: "https://weedly.uy",
      caseStudy: [
        {
          heading: "What I did",
          bullets: [
            "Complete full-stack architecture: Next.js, TypeScript, Prisma and PostgreSQL.",
            "Secure Server Actions and server-side rendering for real-time consistency.",
            "Responsive UI designed for daily administrative use, not for a demo.",
            "MVP definition and product roadmap.",
            "Club partnerships, discovery meetings and adapting the product to legal and operational requirements.",
            "Continuous iteration on real user feedback.",
            "Brand identity and communication strategy, so product and marketing told the same story.",
          ],
        },
      ],
    },
    {
      id: "iparkings",
      title: "iParkings",
      role: "Frontend Developer",
      period: "November 2023 - December 2024",
      type: "work",
      shortDescription:
        "Self-payment system for private parking lots, serving over 150,000 monthly users.",
      fullDescription:
        "iParkings operates private parking lots across Uruguay. I worked on the self-payment system: the terminal where drivers pay before collecting their car. It's a demanding context, because the user is in a hurry, standing up, and when the flow fails it's the parking staff who take the complaint.",
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
        "Over 150,000 monthly users on the system I worked on.",
        "Cut the payment flow from 6-8 steps to 4-6, driving a 40% drop in user complaints.",
        "Built the “Free Parking” mode, which took operational load off the staff.",
        "Led UX/UI design, functional testing and the platform's technical documentation.",
      ],
      liveLink: "https://pagoparking.com",
      caseStudy: [
        {
          heading: "The detail that mattered most",
          body: "Every step I removed was one less place for someone to get stuck with a car waiting behind them. Going from 6-8 steps to 4-6 wasn't a visual redesign: it was removing decisions the system could make on its own. The 40% drop in complaints is the metric that confirms it.",
        },
        {
          heading: "Working with hardware",
          body: "Self-payment isn't just a screen: there are terminals, printers and barriers on the other side. I coordinated with the backend and hardware teams so the integration stayed clean, and wrote the technical documentation that didn't exist before.",
        },
      ],
    },
    {
      id: "tengokarga",
      title: "TengoKarga",
      role: "Full Stack Developer",
      period: "November 2021 - November 2023",
      type: "work",
      shortDescription:
        "Logistics platform: order creation, internal support tooling and QA.",
      fullDescription:
        "TengoKarga was a logistics platform connecting freight with carriers. I worked full stack for two years, on product features and on the tooling the internal team needed to support users. The platform is no longer online.",
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
        "Rebuilt order creation as a step-by-step experience, replacing the previous long form.",
        "Built impersonation mode, letting a super-admin operate as a user to provide support.",
        "Took part in QA: written and video documentation, unit and integration tests.",
        "Worked the team's GitHub flow: PR reviews, merges into dev and tracking deploys to production.",
      ],
      caseStudy: [
        {
          heading: "Note",
          body: "TengoKarga stopped operating and the domain is no longer active, so there's no live demo to show. I'm leaving the detail of what I built here instead of a broken link.",
        },
      ],
    },
    {
      id: "timb-arquitectura",
      title: "Timb Arquitectura",
      role: "Design and development",
      period: "2023",
      type: "project",
      shortDescription:
        "Responsive website for an architecture studio, built on WordPress.",
      fullDescription:
        "Website for the Timb Arquitectura studio. The requirement was that the studio could publish its own projects without depending on anyone, so WordPress was the base, with CSS customization so the template wouldn't show and the design would match the studio's aesthetic.",
      imageSrc: "/images/timb1.jpg",
      technologies: ["WordPress", "CSS", "Responsive Design", "UX/UI Design"],
      liveLink: "https://www.timb.com.uy",
    },
    {
      id: "portfolio",
      title: "This portfolio",
      role: "Design and development",
      period: "2024 - 2026",
      type: "project",
      shortDescription:
        "The site you're on. Next.js, no animation dependencies, bilingual.",
      fullDescription:
        "My own portfolio, built with Next.js App Router. Project pages are static and generated at build time, so there's no server function that can fail at runtime. Animations are pure CSS: the content is visible in the HTML and the animation is an enhancement, not a requirement for reading the page. Available in Spanish and English.",
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
        "Full Stack Developer based in Montevideo. Next.js, TypeScript and PostgreSQL, with the product research that decides what gets built. Currently building MedShift.",
      keywords:
        "Full Stack Developer, Next.js, TypeScript, React, PostgreSQL, Supabase, Product, UX/UI, Uruguay, Montevideo, remote",
    },
    about: {
      title: "Alfonso Rodriguez | About",
      description:
        "Experience, stack and education of Alfonso Rodriguez: Full Stack Developer with a business background, working from Montevideo with local and remote teams.",
      keywords:
        "Alfonso Rodriguez, Full Stack Developer, experience, stack, Next.js, TypeScript, Uruguay",
    },
    bio: {
      title: "Alfonso Rodriguez | From numbers to product",
      description:
        "How I moved from corporate finance to building software products, and what I took from that detour.",
      keywords:
        "Alfonso Rodriguez, career change, product development, MedShift, AI",
    },
  },
};
