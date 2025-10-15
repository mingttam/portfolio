import { Contact, FolderDot, House, Layers, Mail } from "lucide-react";

export const navItems = [
  { name: "HOME", link: "#home", icon: <House /> },
  { name: "ABOUT", link: "#about", icon: <Contact /> },
  { name: "SKILLS", link: "#skills", icon: <Layers /> },
  { name: "PROJECTS", link: "#projects", icon: <FolderDot /> },
  { name: "CONTACT", link: "#contact", icon: <Mail /> },
];

export const resumeLink = "https://drive.google.com/file/d/1wfAUgfZomR6lEA2sIvXi2T7xi7sfGP8R/view";

export const techStack = [
  { name: "React", value: 85, icon: "/re.svg" },
  { name: "TypeScript", value: 85, icon: "/ts.svg" },
  { name: "Tailwind CSS", value: 70, icon: "/tail.svg" },
  { name: "Next.js", value: 85, icon: "/next.svg" },
  { name: "HTML/CSS/JS", value: 85, icon: "/js.svg" },
  { name: "Spring Boot", value: 50, icon: "/icons8-spring-boot-50.svg" },
];

export const gridItems = [
  {
    id: 1,
    title: "I’m Cao Minh Tâm - a Vietnamese 🇻🇳 , living in Danang City.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Education",
    description:
      "I'm currently studying at Vietnam - Korea University of Information and Communication Technology and my major is information technology. I have started studied since 2021 and expected to graduate in early 2026.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "View more of me on my Resume",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Certificates",
    description: [
      {
        text: "THE WEB DEVELOPER - K-Teck College 2025",
        link: "https://drive.google.com/file/d/1wfAUgfZomR6lEA2sIvXi2T7xi7sfGP8R/view",
      },
      {
        text: "English: TOEIC 900 - IIG Vietnam 2025",
        link: "https://drive.google.com/file/d/18bf0Xowh80cOHeQI9xswyB3S1z7iH7tx/view",
      },
    ],
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description:
      "If you are interested in working with me just drop me a short mail at mingtam.713@gmail.com",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center itenms-center text-black",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    des: "A personal portfolio website showcasing skills, projects, and experience to highlight professional growth and expertise.",
    img: "/portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://github.com/mingttam/portfolio",
  },
  {
    id: 2,
    title: "Sybau - Online learning platform",
    des: "An online learning platform where users can purchase and learn courses created by instructors, with all activities managed and monitored by an admin.",
    img: "/sybau.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/icons8-spring-boot-50.svg"],
    link: "https://github.com/mingttam/sybau-education",
  },
  {
    id: 3,
    title: "Employee Management System",
    des: "An Employee Management System where I learned to build custom API endpoints and integrate them with the frontend for seamless data interaction.",
    img: "/employee.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/icons8-spring-boot-50.svg"],
    link: "https://github.com/mingttam/employee-management",
  },
  {
    id: 4,
    title: "Task Manager",
    des: "A task manager app to practice frontend and Web API integration, featuring task creation, editing, deletion, filtering, and basic authentication.",
    img: "/taskmanager.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://github.com/mingttam/KTC-Exercises/tree/main/react-taskmanager",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mingttam",
  },
  {
    id: 2,
    img: "/facebook.svg",
    link: "https://facebook.com/mingttam",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/minh-t%C3%A2m-cao-032009366/",
  },
];
