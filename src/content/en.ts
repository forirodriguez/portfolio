import type { Content } from "./types";

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  switchLabel: "ES",
  nav: {
    projects: "Work",
    about: "About",
    talk: "Let's talk",
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
    skip: "Skip to content",
  },
  home: {
    eyebrow: "Product · Technology · Montevideo, Uruguay",
    heroTitle: "Decide what to build.",
    heroHighlight: "Understand how to deliver it.",
    intro: "I'm Alfonso, looking for my next role as a Product Owner. I combine user research, MVP definition and product prioritization with a background in full-stack development and business.",
    contactSmall: "Hiring a Product Owner with a technical background?",
    contactBig: "Get in touch",
    contactIntro: "I'm seeking a Product Owner role working closely with users and engineering teams. If my background fits your team, let's talk.",
    selectedWork: "Selected work",
    selectedIntro: "Two cases: finding what to build and improving what's already in use.",
    moreWork: "More experience",
    aboutTitle: "Product, business and technical judgment.",
    aboutIntro: "My background is in Business Administration, finance and operations, working with teams in the United States and India. Today I use that experience to research problems, define scope and build products. I work in English and Spanish.",
  },
  about: {
    title: "About Me",
    paragraphs: [
      "I'm Alfonso Rodríguez, targeting a Product Owner role with a background in building SaaS products and Business Administration. I've conducted user research, defined MVP scope and prioritized roadmaps, as well as implemented those decisions in code.",
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
          "My own product. Mobile-first web app for doctors working across multiple institutions: it projects how much they'll get paid and when. I run it end to end: research, product and engineering. In production, in closed beta with 3 doctors currently using it.",
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
          "Redesigned self-payment for a parking facility receiving 150,000 users per month. The flow went from 6-8 to 4-6 steps, and complaint tickets recorded in Jira fell by 40%.",
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
        body: "MedShift is a web app for Uruguayan doctors who work across three or four institutions at once and have no way of knowing how much they'll get paid or when. Before writing the MVP I ran a survey and collected 50 responses. The data confirmed the problem, changed my pitch, and killed the pricing assumption I had in my head. It's in production, in closed beta with 3 doctors currently using it.",
      },
      {
        heading: "And in parallel, AI",
        body: "Since June 2026 I've worked as an independent contractor for GreenLight.ai on AI training and evaluation programs. I apply rubrics to produce structured annotations and review other contributors' work. I was promoted to reviewer. It's a different muscle: reading with judgement, staying consistent, and justifying why something is right or wrong.",
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
      featured: {
        value: "50",
        label: "Survey responses before the MVP",
        detail: "Research with doctors that changed the product's positioning, pricing and priorities.",
      },
      title: "MedShift",
      role: "Full Stack Developer & Product",
      period: "March 2026 - Present",
      type: "work",
      shortDescription:
        "A web app for doctors working across multiple institutions: how much they'll be paid, by whom, and on what date.",
      fullDescription:
        "My own product for Uruguayan doctors working across multiple institutions. I own research, MVP scope and development, from the data model to deployment.",
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
        "My own product: research, MVP definition and full-stack development.",
        "Closed beta in production, used by 3 doctors, with payment forecasts and Google Calendar sync.",
      ],
      liveLink: "https://www.medshift.uy",
      caseStudy: [
        {
          heading: "The problem I chose to solve",
          body: "Doctors working across multiple institutions combine on-call shifts and salaried jobs with different rates and payment dates. MedShift connects that work to a forecast of how much they will receive, from whom and when.",
        },
        {
          heading: "Three decisions the research changed",
          body: "Between May and June 2026 I collected 50 responses from doctors. 32 worked across at least three institutions and did five or more shifts a month. I used the responses to prioritize the MVP and revisit my pricing assumptions.",
          bullets: [
            "Payments before scheduling. 29 of 50 chose knowing how much they would be paid and by whom as their most important feature. Only 2 named organizing shifts as their biggest stressor. I changed the core product promise.",
            "Revisit pricing. Stated willingness to pay was below my initial assumption. I adjusted the planned price and conversion expectations, without treating survey answers as proof of sales.",
            "Integrate existing tools. 33 of 50 already used Google Calendar. I prioritized two-way sync; for accounting needs, I chose deadline reminders before a tax calculation module.",
          ],
        },
        {
          heading: "How those decisions shaped the product",
          bullets: [
            "Shifts and salaried jobs per institution, with historical rates, supplements and payment dates. Forecasts are recalculated in the database when a shift changes.",
            "Payments grouped by month, with actual amounts received and differences against expectations.",
            "Google Calendar sync through OAuth and a dedicated calendar; email reminders with retries and idempotency.",
            "Data isolation through Row Level Security with SQL, unit and E2E tests. Error telemetry without PII and consent-based analytics.",
          ],
        },
        {
          heading: "From survey to beta",
          body: "As of September 2026, 3 doctors use the beta: 2 have used it for three months and the third joined a week ago. They mainly check how much they should be paid each month and use payment reminders. This usage aligns with the product focus chosen after the survey. The 18 initial volunteers represented interest in participating, not active users.",
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
      imageCaption: "Weedly visual presentation.",
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
        "Server Actions for data operations and SSR for rendering pages on the server.",
        "Defined the MVP and roadmap, prioritizing by real business and user impact.",
        "Closed partnerships with cannabis clubs and ran the discovery meetings that adapted the product to the sector's operational and legal requirements.",
      ],
      liveLink: "https://weedly.uy",
      caseStudy: [
        {
          heading: "What I did",
          bullets: [
            "Complete full-stack architecture: Next.js, TypeScript, Prisma and PostgreSQL.",
            "Data operations with Server Actions and server-rendered pages.",
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
      featured: {
        value: "6–8 → 4–6",
        label: "Steps in the payment flow",
        detail: "A self-payment redesign: fewer decisions before collecting the car.",
      },
      title: "iParkings",
      role: "Frontend Developer",
      period: "November 2023 - December 2024",
      type: "work",
      shortDescription:
        "Self-payment redesign: fewer steps to pay and a 40% reduction in complaint tickets recorded in Jira.",
      fullDescription:
        "iParkings operates private parking lots across Uruguay. I worked on the self-payment system: the terminal where drivers pay before collecting their car. It's a demanding context, because the user is in a hurry, standing up, and when the flow fails it's the parking staff who take the complaint.",
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
        "The parking facility received 150,000 users per month; this is facility volume, not measured interface users.",
        "Cut the payment flow from 6-8 to 4-6 steps. Complaint tickets recorded in Jira fell by 40%.",
        "Built the “Free Parking” mode, which took operational load off the staff.",
        "Led UX/UI design, functional testing and the platform's technical documentation.",
      ],
      liveLink: "https://pagoparking.com",
      caseStudy: [
        {
          heading: "Confidentiality",
          body: "Interfaces, screenshots and internal documentation from this work are confidential. This case describes my contribution and how the outcome was measured without publishing those materials.",
        },
        {
          heading: "The detail that mattered most",
          body: "Every step I removed was one less place for someone to get stuck with a car waiting behind them. Going from 6-8 steps to 4-6 wasn't a visual redesign: it was removing decisions the system could make on its own. The 40% reduction in complaints was measured through tickets recorded in Jira.",
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
      imageCaption: "Archive image of TengoKarga; the platform no longer operates.",
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
      imageCaption: "Timb Arquitectura website.",
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
      title: "Alfonso Rodríguez | Product & Technology",
      description:
        "Alfonso Rodríguez: product experience, a full-stack background and business training. Seeking a Product Owner role. MedShift and iParkings case studies.",
      keywords:
        "Product Owner, Product Discovery, MVP, Prioritization, Full Stack, UX/UI, Uruguay, Montevideo",
    },
    about: {
      title: "Alfonso Rodriguez | About",
      description:
        "Alfonso Rodríguez: user research, MVP definition and full-stack development experience. Seeking a Product Owner role.",
      keywords:
        "Alfonso Rodriguez, Product Owner, experience, product, discovery, development, Uruguay",
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
