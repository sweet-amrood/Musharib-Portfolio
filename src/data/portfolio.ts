import { educationIcons } from "@/lib/education-icons";
import { projectIcons } from "@/lib/project-icons";

export const portfolio = {
  name: {
    short: "Musharib",
    display: "Musharib",
  },
  fullName: "Musharib Rehman",
  title: "Front & Backend/Web Developer",
  titleGradientName: "Musharib Rehman",
  location: {
    city: "Lahore",
    region: "Punjab, Pakistan",
  },
  tagline: {
    parts: [
      { text: "Building ", highlight: false },
      { text: "scalable", highlight: true },
      { text: " web apps from", highlight: false },
      { br: true },
      { text: "the ", highlight: false },
      { text: "frontend", highlight: true },
      { text: " to the ", highlight: false },
      { text: "backend", highlight: true },
      { br: true },
      { text: "with clean code and ", highlight: false },
      { text: "modern", highlight: true },
      { text: " tools.", highlight: false },
    ],
  },
  resumeUrl: "/simple-resume.pdf",
  resumeDownloadName: "Musharib Rehman's Resume.pdf",
  email: "musharib.rehman@email.com",
  linkedinUrl: "https://www.linkedin.com/in/musharib-rehman-769315243/",
  githubUsername: "sweet-amrood",
  githubUrl: "https://github.com/sweet-amrood",
  githubBio:
    "Passionate developer exploring programming and backend development — always learning and improving.",
  footerYear: new Date().getFullYear(),

  toolbox: {
    subtitle:
      "My go-to tools of the trade — the ones I use regularly and am constantly refining.",
    categories: [
      {
        id: "langs",
        label: "Langs & Fullstack",
        skills: [
          { name: "JavaScript" },
          { name: "TypeScript" },
          { name: "React" },
          { name: "HTML" },
          { name: "CSS" },
          { name: "Tailwind CSS" },
          { name: "Node.js" },
          { name: "Express" },
          { name: "C++" },
        ],
      },
      {
        id: "cloud",
        label: "Cloud",
        skills: [
          { name: "MongoDB Atlas" },
          { name: "Vercel" },
          { name: "Render" },
          { name: "Netlify" },
        ],
      },
      // {
      //   id: "devops",
      //   label: "DevOps",
      //   skills: [
      //     { name: "Docker" },
      //     { name: "Kubernetes" },
      //     { name: "CI/CD" },
      //     { name: "GitHub Actions" },
      //   ],
      // },
      {
        id: "database",
        label: "Database",
        skills: [{ name: "MongoDB" }, { name: "Mongoose" }],
      },
      {
        id: "tools",
        label: "Tools & Methods",
        skills: [{ name: "Git" }, { name: "GitHub" }],
      },
    ],
  },

  experience: {
    subtitle: "Where I've applied my skills to make a difference.",
    items: [
      {
        image: projectIcons.weartual,
        imageVariant: "logo" as const,
        title: "Weartual — Full Stack Web Application",
        meta: "Personal Project | JavaScript / TypeScript | 2025 - Present",
        description:
          "Built Weartual, an AI virtual try-on app: upload a person photo or video plus a garment image to generate new looks, with live camera mode via Decart WebRTC. Full-stack monorepo — React + Vite frontend, Express + MongoDB + Python API, deployed on Netlify.",
        demoUrl: "https://weartual.netlify.app/",
      },
      {
        image: projectIcons.rideshare,
        imageVariant: "logo" as const,
        title: "RideShare — Carpooling Web Application",
        meta: "Personal Project | JavaScript / React | Work in progress",
        description:
          "RideShare is a carpooling app for finding and sharing rides, built with a React frontend and Node.js backend. Currently under active development — an early prototype with core flows in place, not a completed product yet. Live demo on Netlify.",
        demoUrl: "https://ride-pooling.netlify.app/",
      },
      {
        image: projectIcons.foodhub,
        imageVariant: "logo" as const,
        title: "FoodHub — Full Stack Food Ordering App",
        meta: "Academic Project | React & Node.js | LGU",
        description:
          "FoodHub is a responsive full-stack food ordering application with a React frontend and a Node.js/Express backend API. Implemented order management, connected client and server, and focused on clean UI and practical full-stack architecture.",
        demoUrl: "https://foodieplanet.netlify.app/home",
      },
      {
        image: projectIcons.ecommerce,
        imageVariant: "logo" as const,
        title: "E-Commerce Management System — Database Design",
        meta: "Academic Project | T-SQL | LGU",
        description:
          "Designed and implemented a comprehensive SQL Server database for an e-commerce platform. Modeled customers, products, orders, payments, and reviews with normalized schemas, queries, and data integrity constraints.",
      },
      {
        image: projectIcons.restaurant,
        imageVariant: "logo" as const,
        title: "Restaurant Ordering System — SJF Scheduling",
        meta: "Academic Project | C++ | LGU",
        description:
          "Simulated a restaurant ordering pipeline using the Shortest Job First (SJF) scheduling algorithm in C++. Demonstrated process scheduling concepts, order queues, and console-based system design.",
      },
      {
        image: projectIcons.atm,
        imageVariant: "logo" as const,
        title: "ATM Banking System — Assembly Language",
        meta: "Academic Project | x86 Assembly | LGU",
        description:
          "Implemented a banking system in x86 assembly for the emu8086 emulator, covering account operations, balance handling, and low-level control flow in Assembly.",
      },
    ],
  },

  education: {
    subtitle: "From early interests to specialized studies.",
    items: [
      {
        period: "2021 - 2025",
        image: educationIcons.lgu,
        title: "Bachelor of Science in Computer Science (BSCS)",
        institution: "Lahore Garrison University (LGU) | Lahore, Pakistan",
        description:
          "Completed undergraduate studies in computer science with coursework in programming, data structures, databases, web development, operating systems, and software engineering projects.",
      },
      {
        period: "2019 - 2021",
        image: educationIcons.civilLines,
        title: "Intermediate — Pre-Engineering",
        institution: "Civil Lines College | Lahore, Pakistan",
        description:
          "Higher secondary education in Pre-Engineering with strong foundations in mathematics, physics, and analytical problem solving.",
      },
      {
        period: "2017 - 2019",
        image: educationIcons.govtSchool,
        title: "Matriculation — Biology",
        institution: "Government High School | Lahore, Pakistan",
        description:
          "Secondary school certification with science (biology group), building the academic base for engineering and computer science studies.",
      },
    ] as Array<{
      period: string;
      image: string;
      title: string;
      institution: string;
      description: string;
      extra?: string;
    }>,
  },

  github: {
    subtitle: "Turning curiosity into functional projects.",
    excludeRepos: ["weartual", "Weartual", "weartual-app"],
    featuredRepos: [
      "Weartual-latest",
      "rideshare",
      "FoodHub-REACTJS",
      "E-Commerce-Management-System",
      "Restaurant-Ordering-System-SJF",
      "ATM-Banking-System-Project-Assembly-Language",
    ],
    repoOverrides: {
      "Weartual-latest": {
        displayName: "Weartual",
        description:
          "AI virtual try-on: upload a person (photo or video) and a garment image, then generate a new look. React + Vite PWA with Express, MongoDB, and Python backend — includes live camera try-on powered by Decart WebRTC.",
        demoUrl: "https://weartual.netlify.app/",
      },
      rideshare: {
        displayName: "RideShare",
        description:
          "A carpooling web app for posting and finding shared rides (React + Node.js). Work in progress — early prototype on Netlify, not a finished product yet.",
        demoUrl: "https://ride-pooling.netlify.app/",
      },
      "FoodHub-REACTJS": {
        displayName: "FoodHub",
        description:
          "FoodHub is a responsive full-stack food ordering web application with a React frontend and a Node.js/Express backend API for managing orders.",
        demoUrl: "https://foodieplanet.netlify.app/home",
      },
    },
  },

  about: {
    subtitle: "More than just lines of code.",
    location: "Lahore, Punjab, Pakistan",
    paragraphs: [
      {
        text: "I'm Musharib Rehman, a web developer based in Lahore, Pakistan. I earned my ",
        bold: "Bachelor's in Computer Science from LGU",
        suffix:
          " and focus on full-stack applications — from React frontends to Node.js backends and cloud deployment.",
      },
      {
        text: "I work with JavaScript, React, Node.js, Express, MongoDB, and SQL Server, plus I am learning about DevOps tooling such as Docker, Kubernetes, CI/CD, and Appache Server.",
      },
      {
        text: "My projects on ",
        bold: "GitHub (@sweet-amrood)",
        suffix:
          " include RideShare (carpooling, work in progress), FoodHub (full-stack food ordering), Weartual western virtual try on app, an e-commerce database in T-SQL, a restaurant scheduler in C++, and an ATM system in Assembly.",
      },
      {
        text: "I'm passionate, curious, and always learning — open to internships, junior developer roles, and remote opportunities.",
      },
    ],
  },
};

export const navLinks = [
  { id: "toolbox", label: "Toolbox" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "about", label: "About me" },
] as const;
