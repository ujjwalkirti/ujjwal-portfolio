interface NavbarLink {
    title: string;
    id: string;
}
export const navbarLinks: NavbarLink[] = [{ title: "About", id: "about" }, { title: "Experience", id: "experience" }, { title: "Work", id: "work" }, { title: "Contact", id: "contact" }]

export const experiences = [
    {
        date: "06/2024 — Present",
        title: "Backend Developer",
        company: "Binapani Edu",
        description: [
            "Developed REST APIs using Express.js, PostgreSQL, and Sequelize, creating a scalable backend that accelerated product launch by 4 weeks, reduced costs by 25%, and streamlined developer onboarding.",
            "Deployed & automated infrastructure with Nginx, Docker, and GitHub Workflows on a bare-metal server, cutting infra costs by 30%, boosting deployment speed by 40%, and ensuring 99.9% uptime."
        ],
        website: "https://binapani.com/",
        technologies: ["JavaScript", "Angular", "Express.js", "Nextjs (App Router)", "Azure", "PostgreSQL", "Github Actions", "Docker"],
    },
    {
        date: "07/2023 - 05/2024",
        title: "Full Stack Developer",
        company: "Root On Immigrations",
        description: [
            "Built a scalable payment system (Next.js, FastAPI) with Razorpay (India) & Stripe (global), replacing manual QR payments; increased transaction success by 20%, boosted monthly volume by 25%, and improved tax rebate tracking.",
            "Optimized cloud costs by hosting on AWS & deploying the dev server on Google Cloud Run (free tier), cutting infra expenses by 40% (~$2,000/month savings) while ensuring 99.9% uptime and scalability."
        ],
        website: "https://rooton.ca/",
        technologies: ["TypeScript", "Nextjs", "FastAPI", "Stripe", "AWS", "GCP"],
    },
];
