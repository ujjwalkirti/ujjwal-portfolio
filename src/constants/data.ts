import {
  Fira_Mono,
  Inter,
  Libre_Caslon_Text,
  Montserrat,
} from "@next/font/google";
import { SiAmazonaws, SiAngular, SiDocker, SiExpress, SiFirebase, SiGithubactions, SiKubernetes, SiMongodb, SiNginx, SiPostgresql, SiSupabase, SiTailwindcss, SiVercel } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";


const featuredProjects: Array<Object> = [
  {
    title: "Grocery Delivery Application",
    desc: {
      short: "An ecommerce application for grocery delivery right to your doorstep.",
      long: "The web app provided a seamless grocery shopping experience with real-time order tracking, multi-vendor support, secure payments, and an intuitive checkout process. It ensured smooth performance, responsive design, and efficient handling of user and order data."
    },
    tags: ["Next.js (app router)", "TypeScript", "Shadcn/ui", "Zustand", "MongoDB", "Razorpay", "next-auth", "Render"],
    image_url: "https://firebasestorage.googleapis.com/v0/b/ecommerce-homespa.appspot.com/o/screencapture-localhost-3001-2024-03-27-13_17_17.png?alt=media&token=fbb61d7e-1aa1-45e9-89aa-ea69a621898b",
    github_link: "https://github.com/ujjwalkirtitests/grocery-shopping-nextjs",
    deployed_link: "https://grocery-shopping-nextjs-web.onrender.com/"
  },
  {
    title: "MMNCT Website",
    desc: {
      short:
        "A full stack web application for day-night cricketing event of my institute.",
      long: "The website was used to display real time live scores, video streaming of the match, take polls on outcome of matches, make announcements, host contests, attract sponsorship as well as display fixtures and points table which updated dynamically.",
    },
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-native-expo-bbbae.appspot.com/o/screencapture-mmnct-yzbk-vercel-app-2023-12-14-13_46_07.png?alt=media&token=cddf42d5-fdca-4dde-a504-d6ccf25beeb8",
    github_link: "https://github.com/ujjwalkirti/mmnct",
    deployed_link: "https://mmnct-yzbk.vercel.app/",
  },
  {
    title: "LAC Website",
    desc: {
      short:
        "Full Stack Website, developed and currently being maintained by me.",
      long: "The Literary Affairs Committee web application was developed using Next.js in Typescript and styled with Tailwind CSS. The website used Firebase as the database, which allowed for efficient development and real-time synchronization. The website included an admin panel for content and user management and was deployed on Vercel, resulting in an excellent user experience.",
    },
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel", "React Hook Forms"],
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-native-expo-bbbae.appspot.com/o/lac-website.png?alt=media&token=daffa70b-37d5-4a8c-b99b-be7587c01e6d",
    github_link: "https://github.com/ujjwalkirti/lac-website/tree/main",
    deployed_link: "https://lac-website.vercel.app/",
  },
];

const NoteworthyProjects: Array<Object> = [
  {
    title: "Scalable Realtime Chat App",
    desc: " Developed a full-stack chat application using Next.js for the frontend and Node.js for the backend,following the MVC design pattern.",
    tags: ["Next.js", "Expressjs", "Kafka", "Postgresql", "Socket.io", "Turborepo"],
    github_link: "https://github.com/ujjwalkirti/scalable-realtime-chat-app",
  },
  {
    title: "Reddit Clone",
    desc: "Reddit 2.0, made using Next.js, TypeScript and backed by graphql.",

    tags: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "StepZen",
      "Graphql",
      "Vercel",
    ],
    github_link: "https://github.com/ujjwalkirti/reddit-clone",
    // deployed_link: "https://www.mmnct.in/",
  },
  {
    title: "Pomodoro Timer (Based on Harry Potter Movies)",
    desc: "A Pomodoro timer to help you concentrate on your work, with an integrated todo list to keep track of your progress. It comes with theme based on Harry Potter movies, so that all Potterheads out there feel at home!",
    tags: ["Reactjs", "Firebase", "React-icons", "Context APIs"],
    github_link:
      "https://github.com/ujjwalkirti/pomodoro-timer-harry_potter-theme",
    deployed_link: "https://nifty-volhard-fa38be.netlify.app/",
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

const tools = [
  { title: "JavaScript (ES6+)", icon: IoLogoJavascript },
  { title: "Python", icon: IoLogoPython },
  { title: "React, Next.js", icon: TbBrandNextjs },
  // angular
  { title: "Angular", icon: SiAngular },
  { title: "Firebase", icon: SiFirebase },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "Express", icon: SiExpress },
  { title: "Docker", icon: SiDocker },
  { title: "Kubernetes", icon: SiKubernetes },
  { title: "Github Actions", icon: SiGithubactions },
  { title: "AWS", icon: SiAmazonaws },
  { title: "Vercel", icon: SiVercel },
  { title: "Supabase", icon: SiSupabase },
  // mongodb
  { title: "MongoDB", icon: SiMongodb },
  { title: "Postgresql", icon: SiPostgresql },
  { title: "Nginx", icon: SiNginx },
];

const navbarOptionStyle = "hover:text-[#64ffda] cursor-pointer";
const smallNavbarOptionStyle =
  "hover:text-[#64ffda] cursor-pointer flex items-center gap-3 text-[18px] px-[20px] pb-[20px] pt-[3px] hover:scale-105 transition-all " +
  firamono.className;

export {
  featuredProjects,
  NoteworthyProjects,
  monsterrat,
  firamono,
  libre_caslon_text,
  inter,
  tools,
  navbarOptionStyle,
  smallNavbarOptionStyle,
};
