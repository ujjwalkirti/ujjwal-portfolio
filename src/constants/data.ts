import {
  Fira_Mono,
  Inter,
  Libre_Caslon_Text,
  Montserrat,
  Press_Start_2P,
} from "next/font/google";
import { SiAmazonaws, SiApachekafka, SiClickhouse, SiDocker, SiExpress, SiGo, SiGithubactions, SiKubernetes, SiNginx, SiPostgresql, SiRabbitmq, SiRedis, SiSupabase, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";


const featuredProjects: Array<Object> = [
  {
    title: "Aspra",
    desc: {
      short: "A cross-platform AI communication system for neurodivergent users with safe prompt flows designed for school environments.",
      long: "Developed a cross-platform AI communication system for neurodivergent users using Next.js and React Native. Designed safe prompt flows and response handling pipelines to ensure controlled, school-safe outputs. Adopted across multiple primary schools in the UK. Available as a web app and on the Google Play Store for Android."
    },
    tags: ["React Native", "Next.js", "NLP", "AI/ML", "Android", "Google Play Store"],
    image_url: "/assets/landing-page/aspra.webp",
    alt: "Aspra — cross-platform AI communication app for neurodivergent students, adopted across UK primary schools.",
    image_fit: "contain",
    deployed_link: "https://aspra.binapani.com",
    play_store_link: "https://play.google.com/store/apps/details?id=com.binapani.aspra&hl=en_IN",
  },
  {
    title: "Web App Deployment Platform (Vercel-like)",
    desc: {
      short: "A distributed deployment platform with microservices architecture, featuring automated CI/CD, log streaming, and dynamic reverse proxy.",
      long: "Architected a production-grade deployment platform using Go microservices (API server, build runner, reverse proxy) orchestrated via AWS ECS Fargate. Features event-driven log streaming with Apache Kafka and ClickHouse for analytics, complete CI/CD workflow with GitHub integration, Cloudflare R2 for artifact storage, JWT authentication with JWKS caching, PostgreSQL with Supabase Auth, and subdomain-based routing for instant preview URLs. Frontend built with React 19, Vite, Tailwind CSS, and Radix UI."
    },
    tags: ["Go", "Chi Router", "AWS ECS Fargate", "Docker", "Apache Kafka", "ClickHouse", "PostgreSQL", "Cloudflare R2", "JWT", "React 19", "Vite", "Tailwind CSS", "Radix UI"],
    image_url: "/assets/landing-page/deployment-platform.png",
    alt: "Vercel-like deployment platform — Go microservices on AWS ECS Fargate with Kafka log streaming and instant preview URLs.",
    github_link: "https://github.com/ujjwalkirti/mini-vercel",
    // deployed_link: "https://your-deployment-platform.com"
  },
  {
    "title": "Patient Management System",
    "desc": {
      "short": "A modular healthcare management system built using Spring Boot and a microservices-style architecture.",
      "long": "The system manages patient records, appointments, and billing using independent Spring Boot services. It supports REST APIs, asynchronous processing with Kafka/RabbitMQ, secure authentication, and PostgreSQL-backed data storage. The project includes Docker-based deployment on AWS EC2, with real-time updates, centralized logging, and efficient inter-service communication."
    },
    "tags": ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Kafka", "RabbitMQ", "Docker", "AWS"],
    "image_url": "/assets/landing-page/patient-management.png",
    "alt": "Patient Management System — modular Spring Boot microservices for healthcare records, appointments, and billing.",
    // "github_link": "https://github.com/ujjwalkirti/your-patient-management-repo",
    // "deployed_link": "https://your-patient-management-demo-link.com"
  },
];

const NoteworthyProjects: Array<Object> = [
  {
    title: "End to End Ecommerce Website",
    desc: "A full stack Ecommerce website with real-time order tracking, multi-vendor support, authentication, secure payments, and an intuitive checkout process.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn/ui", "TypeScript", "AWS S3", "Netlify", "Razorpay", "Ecommerce"],
    github_link: "https://github.com/Rectangle-Technologies/jeevika-shah-jewellery-frontend",
    deployed_link: "https://jeevikashah.com/",
  },
  {
    title: "Scalable Realtime Chat App",
    desc: " Developed a full-stack chat application using Next.js for the frontend and Node.js for the backend,following the MVC design pattern.",
    tags: ["Next.js", "Expressjs", "Kafka", "Postgresql", "Socket.io", "Turborepo"],
    github_link: "https://github.com/ujjwalkirti/scalable-realtime-chat-app",
  },
  {
    title: "LAC Website",
    desc: "Full Stack Website, developed and currently being maintained by me.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel", "React Hook Forms"],
    github_link: "https://github.com/ujjwalkirti/lac-website/tree/main",
    deployed_link: "https://lac-website.vercel.app/",
  },

];

const monsterrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
});

const firamono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
const libre_caslon_text = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const tools = [
  { title: "TypeScript", icon: SiTypescript },
  { title: "Go", icon: SiGo },
  { title: "Python", icon: IoLogoPython },
  { title: "Next.js", icon: TbBrandNextjs },
  { title: "React Native", icon: TbBrandReactNative },
  { title: "Express", icon: SiExpress },
  { title: "PostgreSQL", icon: SiPostgresql },
  { title: "Redis", icon: SiRedis },
  { title: "Apache Kafka", icon: SiApachekafka },
  { title: "RabbitMQ", icon: SiRabbitmq },
  { title: "ClickHouse", icon: SiClickhouse },
  { title: "Docker", icon: SiDocker },
  { title: "Kubernetes", icon: SiKubernetes },
  { title: "GitHub Actions", icon: SiGithubactions },
  { title: "AWS", icon: SiAmazonaws },
  { title: "Vercel", icon: SiVercel },
  { title: "Supabase", icon: SiSupabase },
  { title: "Nginx", icon: SiNginx },
  { title: "Tailwind CSS", icon: SiTailwindcss },
];

const skillCategories = [
  {
    label: "Languages",
    items: ["TypeScript", "Go", "Python", "Java", "JavaScript"],
  },
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "Tailwind CSS", "Radix UI"],
  },
  {
    label: "Backend",
    items: ["Express", "Chi Router", "Spring Boot", "FastAPI", "Node.js"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "RabbitMQ"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (ECS, EC2, S3)", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "Cloudflare R2"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI", "RAG pipelines", "Prompt orchestration", "Vector DBs"],
  },
];

const navbarOptionStyle = "hover:text-orange-600 cursor-pointer";
const smallNavbarOptionStyle =
  "hover:text-orange-600 cursor-pointer flex items-center gap-3 text-sm px-[20px] pb-[20px] pt-[3px] hover:scale-105 transition-all " +
  pressStart2P.className;

export {
  featuredProjects,
  NoteworthyProjects,
  monsterrat,
  firamono,
  libre_caslon_text,
  inter,
  pressStart2P,
  tools,
  skillCategories,
  navbarOptionStyle,
  smallNavbarOptionStyle,
};
