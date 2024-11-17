import { Icons } from "@/components/icons";
import { HomeIcon, FileIcon } from "lucide-react";

export const DATA = {
  name: "Faheem",
  initials: "MF",
  url: "https://encikshrimp.com",
  location: "Pahang, Malaysia",
  locationLink: "https://www.google.com/maps/place/Pahang",
  description:
    "A full stack software developer, struggling to make money, and loves cats.",
  summary:
    "One of my life goals is to make enough money to retire early and spend my time on other important things. So, I've broken it down into smaller, manageable steps, and surprise one of them is getting good at software development. I’ll do my best to get there, and for those who also have big goals, best of luck to you too.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Docker",
    "Vue",
    "Nuxt.js",
    "TailwindCSS",
    "GraphQL",
    "Firebase",
    "Express",
    "GCP",
    "AWS",
    "Supabase",
    "Prisma",
    "MongoDB",
    "Postgres",
    "Typescript",
    "Python",
    "C++",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "muhammadfaheemwahid@gmail.com",
    tel: "+6011-12345678",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EncikShrimp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/muhammad-faheem-abd-wahid-b3999a244/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Z6xVI9oR3e7V8h7UbJAAgFsokRQ7LzCA/view?usp=sharing",
        icon: Icons.googleDrive,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Conny Tech",
      href: "https://conny.sg",
      badges: [],
      location: "Kuala Lumpur, Malaysia",
      title: "Full Stack Web Developer",
      logoUrl: "/ConnyTech2.png",
      start: "Oct 2022",
      end: "Present",
      description:
        "Responsibilities included implementing client-requested features to enhance user experience, performing daily website maintenance, and utilizing Google Cloud Platform for monitoring and resolving production issues. Participated in code reviews, collaborated closely with clients, and mentored colleagues in back-end development best practices. Key achievements at Conny Tech include migrating a project from JavaScript to TypeScript, reducing bugs by over 30%, implementing Two-Factor Authentication (2FA) and SAML for enhanced security, and optimizing data distribution to improve load speeds by over 20%.",
    },
    {
      company: "Azmi Productions",
      href: "https://azmiproductions.com/",
      badges: [],
      location: "Selangor, Malaysia",
      title: "Full Stack Web Developer",
      logoUrl: "/AzmiProduction.png",
      start: "Nov 2023",
      end: "Jul 2024",
      description:
        "Responsibilities included developing a full-stack website from scratch using Next.js and Shadcn UI for a responsive, user-friendly interface, designing and testing web applications for robust functionality, and collaborating with developers and clients to define project features and requirements. Regularly participated in project meetings to incorporate feedback and improve applications. At Azmi Productions, achievements included successfully delivering completed web projects to clients and enhancing communication between the development team and stakeholders to streamline the development process.",
    },
    {
      company: "CITA",
      href: "https://kulliyyah.iium.edu.my/kict/centre-for-i-t-a/",
      badges: [],
      location: "Selangor, Malaysia",
      title: "Internship Trainee",
      logoUrl: "/cita.png",
      start: "Jul 2021",
      end: "Oct 2021",
      description:
        "Responsibilities included applying UI/UX principles for user-friendly design, developing a functional WordPress website with PHP, HTML, and CSS to improve site functionality and engagement, and actively contributing ideas in team meetings to support project goals. Skills utilized: HTML, CSS, PHP, and WordPress.",
    },
  ],
  education: [
    {
      school: "International Islamic University Malaysia",
      href: "https://www.iium.edu.my/v2/",
      degree: "Bachelor's Degree of Computer Information and Electronics",
      logoUrl: "/iium.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "MRSM Taiping",
      href: "https://taiping.mrsm.edu.my/",
      degree: "High School",
      logoUrl: "/mrsm.png",
      start: "2015",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Grouple",
      href: "https://grouple.encikshrimp.com",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "Developed an e-learning platform to enhance modern web development skills. Created a collaborative space for course enrollment, community engagement, and social learning. Implemented secure authentication, seamless payments, and responsive UI. Currently adding features like discussion boards, progress tracking, and course recommendations.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://grouple.encikshrimp.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EncikShrimp/webprodigies-grouple",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/grouple.png",
      video: "",
    },
    {
      title: "Yoom (Zoom clone)",
      href: "https://yoom.encikshrimp.com",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "stream-io",
      ],
      links: [
        {
          type: "Website",
          href: "https://yoom.encikshrimp.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EncikShrimp/yoom-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/yoom.png",
      video: "",
    },
  ],
} as const;
