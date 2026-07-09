export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "web-app-development",
    name: "Web & App Development",
    shortDescription:
      "Production-grade web platforms and native apps built for speed, scale, and long-term maintainability.",
    problem:
      "Most digital products fail quietly — not at launch, but eighteen months later, when the codebase can't support new features and every release becomes a risk. We build systems that stay easy to extend long after we hand them over.",
    approach: [
      "Technical discovery and architecture planning before a single line of code is written",
      "Component-driven front-end builds with a shared design system",
      "API-first back-end architecture, built for integration from day one",
      "Automated testing and CI/CD pipelines baked into every project",
    ],
    deliverables: [
      "Production web application or native mobile app",
      "Documented component library and design system",
      "CI/CD pipeline with staging and production environments",
      "Technical handover documentation and 30-day post-launch support",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "React Native"],
    faqs: [
      {
        q: "Do you work with an existing codebase, or only greenfield builds?",
        a: "Both. A significant share of our engagements are codebase audits and rebuilds where an existing product has outgrown its architecture.",
      },
      {
        q: "How do you scope timelines and pricing?",
        a: "Every engagement starts with a fixed-scope discovery phase that produces a detailed technical spec, timeline, and fixed price before build work begins.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    shortDescription:
      "Cloud architecture, migration, and DevOps built to eliminate downtime and scale predictably under load.",
    problem:
      "Infrastructure problems rarely show up until traffic spikes or a deploy goes wrong — and by then, the cost of downtime is measured in lost revenue and lost trust. We architect infrastructure that holds under pressure, before it's tested.",
    approach: [
      "Infrastructure audit against reliability, security, and cost benchmarks",
      "Cloud-native architecture design (AWS, GCP, or Azure)",
      "Infrastructure-as-code for reproducible, auditable environments",
      "Monitoring, alerting, and incident-response runbooks",
    ],
    deliverables: [
      "Cloud architecture diagram and migration plan",
      "Infrastructure-as-code repository (Terraform)",
      "Monitoring and alerting dashboard",
      "SLA-backed ongoing infrastructure support",
    ],
    stack: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes", "Datadog"],
    faqs: [
      {
        q: "Can you migrate a live production system without downtime?",
        a: "Yes — our migration plans are built around zero-downtime cutover strategies, including blue-green deployments and staged traffic shifting.",
      },
      {
        q: "Do you offer ongoing infrastructure management after migration?",
        a: "We offer SLA-backed managed infrastructure support as a standing engagement, with defined response times and monthly reliability reporting.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation Solutions",
    shortDescription:
      "Applied AI systems and workflow automation that remove manual work from real operational bottlenecks.",
    problem:
      "Most AI initiatives stall because they start from the technology instead of the bottleneck. We start by identifying the specific process costing your team the most time, then determine whether AI is actually the right tool for it.",
    approach: [
      "Process audit to identify high-cost manual workflows",
      "Feasibility assessment — including when automation is not the right answer",
      "Model selection, integration, and evaluation against real data",
      "Human-in-the-loop safeguards for anything customer-facing",
    ],
    deliverables: [
      "Automated workflow or AI-assisted internal tool",
      "Evaluation report on model performance and reliability",
      "Integration with existing systems (CRM, support desk, internal tools)",
      "Usage monitoring and cost dashboard",
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Anthropic API", "Vector DBs", "n8n"],
    faqs: [
      {
        q: "How do you evaluate whether AI is the right solution?",
        a: "We start every engagement with a feasibility phase that stress-tests the use case against accuracy, cost, and failure-mode requirements before recommending a build.",
      },
      {
        q: "What happens when the model gets something wrong?",
        a: "Every customer-facing automation we build includes human-in-the-loop review points and clear fallback paths — we don't ship unsupervised AI into critical workflows.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortDescription:
      "Interface design grounded in usability research — built to convert and hold up under real-world use.",
    problem:
      "A visually polished interface that confuses users is still a failed interface. Our design process is built around usability validation, not just visual craft.",
    approach: [
      "User research and journey mapping against real business goals",
      "Wireframing and information architecture before visual design",
      "High-fidelity UI design with a documented design system",
      "Usability testing before handoff to engineering",
    ],
    deliverables: [
      "Complete UI design system (Figma)",
      "Interactive prototype for stakeholder and user testing",
      "Developer-ready specs and component documentation",
      "Post-launch usability audit",
    ],
    stack: ["Figma", "Framer", "Maze", "Design Tokens"],
    faqs: [
      {
        q: "Do you design without building, or only as part of a full build engagement?",
        a: "Both — we take standalone design engagements as well as full design-to-development projects.",
      },
      {
        q: "How do you validate designs before development starts?",
        a: "We run structured usability testing on interactive prototypes with real target users before any design is finalized for build.",
      },
    ],
  },
  {
    slug: "it-consulting-strategy",
    name: "IT Consulting & Strategy",
    shortDescription:
      "Technical advisory for leadership teams making high-stakes architecture, vendor, and roadmap decisions.",
    problem:
      "The most expensive technical mistakes happen at the decision layer, not the execution layer. We provide senior technical counsel for the decisions that are hard to reverse.",
    approach: [
      "Technical due diligence for acquisitions, vendor selection, or platform decisions",
      "Roadmap and architecture review with a senior engineering panel",
      "Team and process audits for engineering organizations",
      "Board- and executive-level technical reporting",
    ],
    deliverables: [
      "Technical assessment report with prioritized recommendations",
      "Architecture or vendor decision framework",
      "Engineering roadmap aligned to business objectives",
      "Executive presentation and Q&A session",
    ],
    stack: ["Architecture Review", "Technical Due Diligence", "Roadmapping"],
    faqs: [
      {
        q: "Is this a one-time engagement or ongoing advisory?",
        a: "Both models are available — a fixed-scope assessment, or a standing quarterly advisory retainer for leadership teams.",
      },
      {
        q: "Do you work directly with our existing engineering team?",
        a: "Yes — our consulting engagements are designed to work alongside your team, not around them, and typically include direct sessions with engineering leadership.",
      },
    ],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  serviceSlug: string;
  headline: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "solstice-bank-checkout",
    client: "Solstice Bank",
    industry: "FinTech",
    serviceSlug: "web-app-development",
    headline: "Rebuilding a lending platform's core application flow",
    metric: "+41%",
    metricLabel: "application completion rate",
    challenge:
      "Solstice Bank's loan application flow spanned nine separate screens with a 63% drop-off rate. Legacy architecture made even small copy changes require a full engineering sprint.",
    solution:
      "We rebuilt the application flow as a modular, componentized experience with real-time validation and a redesigned information architecture reducing the flow to four steps, backed by a new API layer.",
    result:
      "Application completion rate increased 41% within the first full quarter post-launch, with a 68% reduction in average completion time.",
  },
  {
    slug: "northfield-logistics-infrastructure",
    client: "Northfield Logistics",
    industry: "Logistics",
    serviceSlug: "cloud-infrastructure",
    headline: "Zero-downtime migration for a national dispatch platform",
    metric: "99.98%",
    metricLabel: "uptime post-migration",
    challenge:
      "Northfield's dispatch platform ran on aging on-premise infrastructure with two major outages in the prior year, each costing an estimated six figures in delayed shipments.",
    solution:
      "We designed and executed a phased, zero-downtime migration to a cloud-native architecture with automated failover, infrastructure-as-code, and full observability tooling.",
    result:
      "The platform has maintained 99.98% uptime since migration, with mean incident detection time reduced from 40 minutes to under 90 seconds.",
  },
  {
    slug: "verita-health-triage",
    client: "Verita Health",
    industry: "Healthcare",
    serviceSlug: "ai-automation",
    headline: "Automating intake triage for a multi-clinic health network",
    metric: "-62%",
    metricLabel: "manual triage workload",
    challenge:
      "Verita's intake coordinators manually reviewed and routed over 400 patient inquiries per day across six clinic locations, creating response delays of up to eight hours.",
    solution:
      "We built an AI-assisted triage system that classifies and routes inbound inquiries by urgency and department, with human review built into every clinical decision point.",
    result:
      "Manual triage workload dropped 62%, and average response time for urgent inquiries fell from hours to under twelve minutes.",
  },
];

export const differentiators = [
  {
    title: "Senior people, every time",
    description:
      "You work with people who've actually done this before — not a junior team that shows up after the pitch is won.",
  },
  {
    title: "Clear pricing, no surprises",
    description:
      "We scope the project up front and give you a fixed price and timeline — not an open-ended hourly bill.",
  },
  {
    title: "We stick around after launch",
    description:
      "Support and monitoring don't stop at handoff. If something breaks, we're still the ones you call.",
  },
  {
    title: "Built with security in mind",
    description:
      "We think about security from day one, not as something bolted on after the fact.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Technical and business discovery to define scope, architecture, and success metrics before any commitment.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Information architecture, UI systems, and technical specifications validated with real users and stakeholders.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Iterative development in two-week cycles with staging environments and continuous client visibility.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Post-launch monitoring, SLA-backed support, and a roadmap for what the platform needs to handle next.",
  },
];

export const testimonials = [
  {
    quote:
      "Mtech Cube didn't just rebuild our platform — they rebuilt how our engineering team thinks about architecture decisions. The handoff documentation alone saved us months.",
    name: "Director of Engineering",
    company: "Solstice Bank",
  },
  {
    quote:
      "We've worked with three agencies before Mtech Cube. This was the first one that treated our downtime as their problem, not just a line in a contract.",
    name: "VP of Operations",
    company: "Northfield Logistics",
  },
];

export const clientWordmarks = [
  "SOLSTICE",
  "NORTHFIELD",
  "VERITA",
  "ARCLIGHT",
  "MERIDIAN",
  "HALFTONE",
];
