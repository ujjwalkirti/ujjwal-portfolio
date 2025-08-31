interface NavbarLink {
    title: string;
    id: string;
    link?: string;
}
export const navbarLinks: NavbarLink[] = [{ title: "About", id: "about" }, { title: "Experience", id: "experience" }, { title: "Work", id: "work" }, { title: "Contact", id: "contact" }];

export const experiences = [
    {
        date: "06/2024 — Present",
        title: "Backend Developer",
        company: "Freelance",
        description: [
            "Designed and developed scalable REST APIs using Express.js, PostgreSQL, and Sequelize, implementing JWT-based authentication, role-based authorization, and a content management system. Delivered 30+ new services and business-critical endpoints, integrated RabbitMQ + Pub/Sub for asynchronous task processing, and scaled the platform to serve 100,000+ users.",
            "Deployed development on bare-metal (Docker/Nginx) and production on Azure (GitHub Actions → ACR → Azure Container Apps + Front Door), cutting infra costs by 30%, achieving 99.9% uptime, and enabling zero-downtime releases.",
            "Set up and managed CI/CD pipelines using GitHub Workflows, automating deployments to both production and development servers; slashed deployment time by 60%, eliminated manual errors, and streamlined release cycles, increasing development productivity by 35%.",
            "Created a blogging system that allows users to submit blogs by contributing to a separate GitHub repository, inspired by Hugging Face’s community blog workflow; empowered community-driven content creation, simplified editorial review with pull requests, and enhanced user engagement and content variety."
        ],
        website: "https://binapani.com/",
        technologies: ["JavaScript", "Angular", "Express.js", "Nextjs (App Router)", "Azure", "App Container", "PostgreSQL", "Github Actions", "Docker"],
    },
    {
        date: "07/2023 - 05/2024",
        title: "Full Stack Developer",
        company: "Root On Immigrations",
        website: "https://rooton.ca/",
        description: [
            "Designed and developed a cloud-native, scalable immigration services platform using Next.js (App Router), TypeScript, TailwindCSS, Material UI, and FastAPI, delivering a seamless experience to thousands of users with >95% Lighthouse scores across devices.",
            "Architected a hybrid multi-cloud deployment strategy, hosting production workloads on AWS EC2 and optimizing development environments with Vercel (frontend) and Google Cloud Run (Dockerized backend), resulting in a 40% improvement in load times and a 25% reduction in cloud costs.",
            "Integrated global payment systems (Stripe, Razorpay) with domain-specific flows, boosting successful transactions by 30% and cutting payment failures by 20% through enhanced backend resilience and payment orchestration.",
            "Engineered platform accelerators like a Course Recommendation System, SOP/SOWP builders, and a paid RAG-based chatbot, increasing customer engagement by 50% and raising satisfaction scores by 15%.",
            "Built a modular backend architecture to scalably support 26+ immigration service domains, and implemented Infrastructure-as-Code (IaC) practices to streamline service orchestration, boosting deployment speed and maintainability.",
            "Developed and deployed a custom Chrome Extension to automate counselor-client communication workflows, saving 20+ hours per week and increasing operational efficiency by 35%.",
            "Enhanced SEO, accessibility, and performance through React Server Components, dynamic sitemap generation, and server-side optimizations, achieving 35% higher organic visibility and 25% faster server response times."
        ],
        technologies: ["TypeScript", "Next.js", "FastAPI", "Stripe", "Razorpay", "AWS", "GCP", "Vercel", "TailwindCSS", "Material UI", "Strapi", "Hubspot"],
    }
    ,
];
