interface NavbarLink {
    title: string;
    id: string;
    link?: string;
}
export const navbarLinks: NavbarLink[] = [{ title: "About", id: "about" }, { title: "Experience", id: "experience" }, { title: "Work", id: "work" }, { title: "Contact", id: "contact" }, { title: "Blogs", id: "blogs", link: "/blogs" }];

export const experiences = [
    {
        date: "06/2024 — Present",
        title: "Backend Developer",
        company: "Binapani Edu",
        description: [
            "Architected and built REST APIs from scratch using Express.js, PostgreSQL, and Sequelize, laying the foundation for a robust and scalable backend architecture that accelerated product launch by 4 weeks, cut initial development costs by 25%, and facilitated rapid onboarding of new developers.",
            "Provisioned and configured the entire system on a bare-metal server with static IP using Nginx and Docker containers, implementing optimized routing for both production and development environments; lowered infrastructure costs by 30%, boosted deployment speed by 40%, and achieved 99.9% system uptime.",
            "Set up and managed CI/CD pipelines using GitHub Workflows, automating deployments to both production and development servers; slashed deployment time by 60%, eliminated manual errors, and streamlined release cycles, increasing development productivity by 35%.",
            "Created a blogging system that allows users to submit blogs by contributing to a separate GitHub repository, inspired by Hugging Face’s community blog workflow; empowered community-driven content creation, simplified editorial review with pull requests, and enhanced user engagement and content variety."
        ],
        website: "https://binapani.com/",
        technologies: ["JavaScript", "Angular", "Express.js", "Nextjs (App Router)", "Azure", "PostgreSQL", "Github Actions", "Docker"],
    },
    {
        date: "07/2023 - 05/2024",
        title: "Full Stack Developer",
        company: "Root On Immigrations",
        description: [
            "Created a comprehensive payment solution using Next.js, TypeScript, and Material UI for the frontend and FastAPI for the backend. Implemented support for both fixed and custom payments via Razorpay and Stripe based on domain, resulting in a 30% increase in successful transactions and a 20% drop in payment failures.",
            "Orchestrated seamless deployment by hosting the frontend on AWS EC2 and containerizing the backend on Google Cloud Run, optimizing load times by 40% and cutting infrastructure costs by 25%.",
            "Engineered and embedded a RAG chatbot as a paid service within the platform, boosting user engagement by 50% and generating new revenue by delivering tailored, accurate counseling contributing to a 15% rise in customer satisfaction.",
            "Built a custom Chrome extension for company counselors to automate client communication regarding immigration updates, streamlining repetitive tasks and saving 20 hours per week per counselor, which elevated operational efficiency by 35% and improved client response time by 40%."
        ],
        website: "https://rooton.ca/",
        technologies: ["TypeScript", "Nextjs", "FastAPI", "Stripe", "Razorpay", "AWS", "GCP", "Strapi", "Hubspot", "Material UI"],
    },
];
