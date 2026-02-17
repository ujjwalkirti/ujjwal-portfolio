interface NavbarLink {
    title: string;
    id: string;
    link?: string;
}

interface ExperienceDescription {
    text: string;
    link?: string;
}

interface Experience {
    date: string;
    title: string;
    company: string;
    website: string;
    description: ExperienceDescription[];
    technologies: string[];
}

export const navbarLinks: NavbarLink[] = [{ title: "About", id: "about" }, { title: "Experience", id: "experience" }, { title: "Work", id: "work" }, { title: "Contact", id: "contact" }];

export const experiences: Experience[] = [
    {
        date: "06/2024 — Present",
        title: "Full Stack Developer",
        company: "Freelance",
        description: [
            {
                text: "Architected and scaled modular REST APIs using Express.js, PostgreSQL, and Sequelize across Auth, CMS, Syllabus, Analytics, and PYQs services; implemented JWT + RBAC and async processing via RabbitMQ/PubSub, reducing latency by 40% and serving 100K+ users.",
                link: "https://academy.binapani.com"
            },
            {
                text: "Built an AI-powered storytelling platform with Next.js that generates personalized stories using generative models to enhance student and educator engagement.",
                link: "https://curio.binapani.com"
            },
            {
                text: "Optimized infrastructure with bare-metal (Docker + Nginx) for development and Azure (GitHub Actions → ACR → Container Apps + Front Door) for production, achieving 99.9% uptime, zero-downtime releases, and 30% cost reduction."
            },
            {
                text: "Designed commit-based CI/CD pipelines with PR preview environments via reverse-proxy routing; reduced deployment time by 60%, production regressions by 30%, eliminated manual errors, and saved thousands annually.",
                link: "https://github.com/binapani-edu"
            },
            {
                text: "Developed a generative-AI Chrome extension that converts webpages into structured flashcards, adopted by students across 20+ universities.",
                link: "https://chromewebstore.google.com/detail/binapani-academy-your-web/bgfkhoimhjgbgokbgdhackeokkeloblc?pli=1"
            },
            {
                text: "Built a community-driven blogging platform using a GitHub PR workflow (inspired by Hugging Face), enabling scalable content contributions and streamlined editorial review.",
                link: "https://binapani.com/blogs"
            }, {
                text: "A communication toolkit (for neurodivergent and autistic individuals) that breaks down ambiguous language, explains idioms, and provides social context—helping everyone understand and respond with confidence.",
                link: "https://aspra.binapani.com"
            }
        ]
        ,
        website: "https://binapani.com/products",
        technologies: ["JavaScript", "Angular", "Express.js", "Nextjs (App Router)", "Azure", "App Container", "PostgreSQL", "Github Actions", "Docker", "AI/ML", "Chrome Extensions"],
    },
    {
        date: "07/2022 - 05/2024",
        title: "Full Stack Developer",
        company: "Root On Immigrations",
        website: "https://rooton.ca/",
        description: [
            {
                text: "Designed and developed a cloud-native, scalable immigration services platform using Next.js (App Router), TypeScript, TailwindCSS, Material UI, and FastAPI, delivering a seamless experience to thousands of users with >95% Lighthouse scores across devices.",
                link: "https://rooton.ca"
            },
            {
                text: "Architected a hybrid multi-cloud deployment strategy, hosting production workloads on AWS EC2 and optimizing development environments with Vercel (frontend) and Google Cloud Run (Dockerized backend), resulting in a 40% improvement in load times and a 25% reduction in cloud costs."
            },
            {
                text: "Integrated global payment systems (Stripe, Razorpay) with domain-specific flows, boosting successful transactions by 30% and cutting payment failures by 20% through enhanced backend resilience and payment orchestration.",
                link: "https://rooton.ca/checkout"
            },
            {
                text: "Engineered platform accelerators like a Course Recommendation System, SOP/SOWP builders, and a paid RAG-based chatbot, increasing customer engagement by 50% and raising satisfaction scores by 15%.",
                link: "https://rooton.ca/tools"
            },
            {
                text: "Built a modular backend architecture to scalably support 26+ immigration service domains, and implemented Infrastructure-as-Code (IaC) practices to streamline service orchestration, boosting deployment speed and maintainability."
            },
            {
                text: "Developed and deployed a custom Chrome Extension to automate counselor-client communication workflows, saving 20+ hours per week and increasing operational efficiency by 35%."
            },
            {
                text: "Enhanced SEO, accessibility, and performance through React Server Components, dynamic sitemap generation, and server-side optimizations, achieving 35% higher organic visibility and 25% faster server response times."
            }
        ],
        technologies: ["TypeScript", "Next.js", "FastAPI", "Stripe", "Razorpay", "AWS", "GCP", "Vercel", "TailwindCSS", "Material UI", "Strapi", "Hubspot"],
    }
    ,
];
