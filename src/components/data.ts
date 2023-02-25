const featuredProjects: Array<Object> = [
  {
    title: "MMNCT Website",
    desc: {
      short:
        "A full stack web application for day-night cricketing event of my institute.",
      long: "The website was used to display real time live scores, video streaming of the match, take polls on outcome of matches, make announcements, host contests, attract sponsorship as well as display fixtures and points table which updated dynamically.",
    },
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Vercel"],
    image_url: "/mmnct.PNG",
    github_link: "https://github.com/ujjwalkirti/mmnct",
    deployed_link: "https://www.mmnct.in/",
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

export { featuredProjects, NoteworthyProjects };
