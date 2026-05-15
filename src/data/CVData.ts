export const CV_DATA = {
  name: "Anugerah Gari",
  role: "UI/UX Designer & Frontend Developer",
  location: "Airmadidi, North Sulawesi",
  email: "anugerahgari170405@gmail.com",
  website: "linkedin.com/in/anugerah-gari",
  profile:
    "Frontend Developer and UI/UX Designer with experience building modern, responsive, and user-centered digital products through personal and academic projects. Skilled in developing interactive web and mobile applications while creating clean and engaging user experiences. Passionate about combining design thinking with scalable frontend development to deliver functional and visually polished applications.",
  experience: [

    {
      period: "2026 - Present",
      role: "Frontend Developer",
      company: "Paper (RAG) — AI Research Assistant",
      location: "Indonesia",
      current: true,
      desc: "Developed an AI-powered research paper assistant focused on improving scientific journal reading and research workflows. Built responsive frontend interfaces and modern user interactions using React and TypeScript.",
      tags: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
    },

    {
      period: "2026",
      role: "UI/UX Designer",
      company: "Leafup",
      location: "Indonesia",
      current: false,
      desc: "Designed modern and user-friendly mobile application interfaces with a focus on clean layouts, usability, and responsive design consistency.",
      tags: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
    },

    {
      period: "2025",
      role: "Frontend Developer",
      company: "Todo + AI Productivity App",
      location: "Indonesia",
      current: false,
      desc: "Designed and developed a modern productivity application with AI-assisted task management features. Focused on responsive UI, interactive user experience, and clean component architecture.",
      tags: ["Flutter", "Firebase", "UI/UX", "Mobile Development"],
    },

    {
      period: "2025",
      role: "Python Developer",
      company: "Terminal Chess Game",
      location: "Indonesia",
      current: false,
      desc: "Developed a terminal-based chess game using object-oriented programming principles, featuring move validation, timers, and check/checkmate detection.",
      tags: ["Python", "OOP", "Algorithms", "Terminal UI"],
    },
  ],
  education: [
    {
      period: "2024 – Present",
      degree: "Bachelor of Computer Science",
      school: "Universitas Klabat",
      location: "North Sulawesi, Indonesia",
      desc: "Focused on frontend development, mobile application development, UI/UX design, and software engineering through academic and personal projects.",
      highlight: "Computer Science Student",
    },
  ],
  awards: [
    {
      year: "2026",
      title: "Best Design Solution — Proxo Coris 2026",
      org: "Proxo Coris UI/UX Competition",
      desc: "Received the Best Design Solution award for creating an innovative and user-centered UI/UX concept in a international-level competition.",
      type: "🏆 Award",
    },
    {
      year: "2024",
      title: "Codewars — 6 kyu",
      org: "Codewars",
      desc: "Solved 35+ algorithm and problem-solving challenges focused on Python programming and logical thinking.",
      type: "💻 Coding Profile",
    },
  ],
  skills: {
    design: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],

    development: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
    ],
  }
};

export type CVData = typeof CV_DATA;