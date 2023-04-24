import { Montserrat } from "@next/font/google";

const featuredProjects: Array<Object> = [
  {
    title: "MMNCT Website",
    desc: {
      short:
        "A full stack web application for day-night cricketing event of my institute.",
      long: "The website was used to display real time live scores, video streaming of the match, take polls on outcome of matches, make announcements, host contests, attract sponsorship as well as display fixtures and points table which updated dynamically.",
    },
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-native-expo-bbbae.appspot.com/o/mmnct.png?alt=media&token=b123bccc-0b38-4f55-bf91-abf2f95df239",
    github_link: "https://github.com/ujjwalkirti/mmnct",
    deployed_link: "https://www.mmnct.in/",
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
      "https://firebasestorage.googleapis.com/v0/b/fir-react-native-expo-bbbae.appspot.com/o/Screenshot%202023-04-22%20135249.png?alt=media&token=35fd4d53-e8e3-42f1-ba13-8e72003e7594",
    github_link: "https://github.com/ujjwalkirti/lac-website/tree/main",
    deployed_link: "https://www.lac-website.vercel.app",
  },
];

const NoteworthyProjects: Array<Object> = [
  {
    title: "Helping You Through",
    desc: "Built a one stop solution in the form of a web application to help fresher students of my institute get academic resources, second hand books, bikes, and reviews about various institute facilities easily.",
    tags: ["Next.js", "Firebase", "REST APIs"],
    github_link: "https://github.com/ujjwalkirti/help-college",
    deployed_link: "https://help-college-real.vercel.app/",
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
  {
    title: "Netflix Clone",
    desc: "A Reactjs application based on the popular movie streaming platform Netflix.",
    tags: [
      "JavaScript",
      "Reactjs",
      "React-router",
      "Payment Gateway Integration",
    ],
    github_link: "https://github.com/ujjwalkirti/netflix-clone",
  },
];

const skills = [
  {
    name: "HTML, CSS and JavaScript",
    proficiency: 87,
  },
  {
    name: "React",
    proficiency: 80,
  },
  {
    name: "Next.js",
    proficiency: 70,
  },
];
const otherSkills = [
  { name: "Tailwind CSS", imgUrl: "/tech/tailwindcss.jpg" },
  { name: "Express", imgUrl: "/tech/express.png" },
  { name: "Mongodb", imgUrl: "/tech/mongodb.png" },
  { name: "Ruby on Rails", imgUrl: "/tech/rails.png" },
  { name: "Firebase", imgUrl: "/tech/firebase.png" },
];

const languages = [
  { name: "C++", imgUrl: "/tech/cpp.png" },
  { name: "Ruby", imgUrl: "/tech/ruby.png" },
  {
    name: "TypeScript",
    imgUrl: "/tech/ts.png",
  },
  { name: "Python", imgUrl: "/tech/python.png" },
  { name: "Java", imgUrl: "/tech/java.png" },
];

const monsterrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
});
export {
  featuredProjects,
  NoteworthyProjects,
  skills,
  otherSkills,
  languages,
  monsterrat,
};
