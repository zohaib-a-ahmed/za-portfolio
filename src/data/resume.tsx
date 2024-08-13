
import { Icons } from "@/components/icons";
import { Download, Home } from "lucide-react";

export const DATA = {
  name: "Zohaib Ahmed",
  initials: "DV",
  url: "https://zahmed.dev",
  location: "St. Louis,",
  locationLink: "",
  description:
    "software engineer | cs @ ut",
  second_description: 'i just love building things and helping people.',
  summary:
    "I am a young software engineer with experience in both startup and corporate environments. Recently, I completed my undergrad in computer science and [I am now pursuing my masters](/#education) part-time. I&apos;m really interested in ML and software development. You can often find me [building projects](/#projects) for fun.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Flask",
    "Java",
    "Spring",
    "JUnit",
    "Typescript",
    "React",
    "NextJS",
    "NodeJS",
    "SQL",
    "Docker",
    'AWS',
    'Postman',
    'Security+'
  ],
  navbar: [
    { href: "/zohaib_ahmed_resume.pdf", icon: Download, label: "PDF Resume" },
  ],
  contact: {
    email: "mailto:ahmed.a.zohaib@gmail.com",
    tel: "636-484-6916",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/zohaib-a-ahmed",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zohaibaahmed/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ahmed.a.zohaib@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Saint Louis University",
      href: "https://www.efleets.com/",
      badges: [],
      location: "St. Louis, MO",
      title: "Teaching Assistant",
      logoUrl: "/slu.png",
      start: "2023",
      end: "2024",
      dates: 'Jan 2023 - May 2024',
      links: [],
      description:
        "Implemented comprehensive JUnit and pytest auto-scoring scripts to reduce grading time by approx. 70%. Used Github Actions workflows to automate grading for 100+ repositories weekly.",
    },
    {
      company: "Enterprise Fleet Management",
      href: "https://www.efleets.com/",
      badges: [],
      location: "Remote",
      title: "Java Engineer Intern",
      logoUrl: "/efleets.png",
      start: "May 2023",
      end: "Aug 2023",
      dates: 'May 2023 - Aug 2023',
      links: [],
      description: 
        "Developed new features on existing Spring applications with Java and deployed comprehensive automated testing using JUnit onto AWS infrastructure, increasing static test coverage by ~12%."
    },
    {
      company: "Lingotutors",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "/lingo.png",
      start: "Jan 2022",
      end: "May 2022",
      dates: 'Jan 2022 - May 2022',
      links: [],
      description:
        "Designed new components for an online language tutoring platform using PHP, HTML, and CSS."
    },
  ],
  education: [
    {
      school: "University of Texas at Austin",
      href: "",
      degree: "Master of Science in Computer Science",
      logoUrl: "/UT.png",
      start: "2024",
      end: "2025",
      description: 'Coursework: Deep Learning, Natural Language Processing, Machine Learning',
    },
    {
      school: "Saint Louis University",
      href: "",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/slu.png",
      start: "2020",
      end: "2024",
      description: 'Coursework: Software Engineering, Operating Systems, Algorithms & Data Structures, Introduction to Machine Learning',
    },
  ],
  projects: [
    {
      title: "CardRace",
      href: "",
      dates: "July 2024 - Current",
      active: true,
      description:
      "Currently designing and developing an online Carbles variant. Think Monopoly, but with playing cards and marbles.",
      technologies: [
        "Java",
        "Spring",
        "Typescript",
        "NextJS",
        "TailwindCSS",
        "Redis",
        "SQL",
        "AWS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/zohaib-a-ahmed/cardrace-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-de22877d49bc449c808a91bb68ad4f84.r2.dev/Screen%20Recording%202024-08-13%20at%201.12.52%E2%80%AFPM.mov",
    },
    {
      title: "Priorify",
      href: "",
      dates: "Jan 2024 - Apr 2024",
      active: true,
      description:
        "Designed and developed a calendar/assignment management tool to help students organize busy schedules. Integrated LLM inference to understand and format human-text commands.",
      technologies: [
        "Python",
        "Flask",
        "Typescript",
        "NextJS",
        "TailwindCSS",
        "Langchain"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/zohaib-a-ahmed/priorify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-de22877d49bc449c808a91bb68ad4f84.r2.dev/Priorify-Usage.mp4",
    },
    {
      title: "MeltShiny",
      href: "https://oss-slu.shinyapps.io/MeltShiny/",
      dates: "Aug 2023 - May 2024",
      active: true,
      description:
        "Developed automated analysis of large datasets of DNA absorbance for open-source package as part of an undergraduate capstone. ",
      technologies: [
        "R",
        "Shiny",
        "Shell Script",
      ],
      links: [
        {
          type: "Website",
          href: "https://oss-slu.shinyapps.io/MeltShiny/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/oss-slu/MeltShiny",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-de22877d49bc449c808a91bb68ad4f84.r2.dev/meltshiny-usage.mov",
    },
  ],
} as const;
