export const profile = {
  name: "Cadence Loh",
  role: "Software Engineer",
  location: "Berkeley, CA",
  summary:
    "CS student at UC Berkeley working across agentic AI, ML, and web development. Recent work spans multi-agent developer tooling, robotics perception, and applied cryptography research.",
  email: "lohcadence@gmail.com",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ceggyweggy/",
    linkedin: "https://www.linkedin.com/in/cadence-loh-9a268423a/",
  },
};

export const projects = [
  {
    name: "Project EmpowerHer",
    description:
      "Chatbot for the Cal Women's Mentorship Program, supporting women working at UC Berkeley. Integrated an Ollama chatbot with Streamlit and automated web scraping of mentor data to fine-tune responses.",
    stack: ["Python", "Ollama", "Streamlit"],
    href: "",
  },
  {
    name: "Robotics Software Lead",
    description:
      "Led software development for a robot soccer team, designing ball-tracking, boundary-detection, and strategic-positioning algorithms that improved performance without relying on sophisticated hardware — the only competitive soccer team in the world to do so.",
    stack: ["C", "Python"],
    href: "",
  },
];

export const experience = [
  {
    role: "Agentic AI Intern",
    org: "Sweden Startup Next, Stockholm",
    period: "Jun. 2026 — Aug. 2026",
    points: [
      "Used Claude Code to accelerate redevelopment of a Node.js/Supabase reporting platform, building reusable skills to automate repetitive implementation and debugging workflows.",
      "Designed a tool-augmented multi-agent code review workflow using specialized agents for frontend, backend, database, and security analysis, enabling parallel review across the stack.",
    ],
  },
  {
    role: "Robotics Research Intern",
    org: "DSO National Laboratories, Singapore",
    period: "Apr. 2025 — Jul. 2025",
    points: [
      "Compared two state-of-the-art pose estimation models, FoundationPose and MASt3R, for a self-balancing robot.",
      "Integrated Segment Anything Model and GroundingDINO for automatic, language-prompted object mask generation.",
      "Reduced model sizes by over 10% to run on CPU.",
    ],
  },
  {
    role: "Cryptography Research Intern",
    org: "DSO National Laboratories, Singapore",
    period: "Nov. 2022 — Dec. 2022; Nov. 2023 — Dec. 2023",
    points: [
      "Developed a dynamic programming algorithm to conduct frequency analysis on partially known data derived from SQL search queries.",
      "Implemented four state-of-the-art volume-hiding searchable encryption schemes and improved storage and query volume by an average of 30% across all schemes; awarded Bronze at the Singapore Science and Engineering Fair.",
    ],
  },
];

export const education = [
  {
    school: "University of California, Berkeley",
    degree: "B.A. Computer Science",
    period: "Aug. 2025 — Present",
  },
  {
    school: "Raffles Institution, Singapore",
    degree: "H2 Physics, Chemistry, Mathematics, Economics; H3 Game Theory",
    period: "Feb. 2023 — Dec. 2024",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
  { category: "ML/AI", items: ["PyTorch", "Hugging Face", "Ollama"] },
  { category: "Systems/Dev", items: ["Docker", "Kubernetes", "Git", "Conda"] },
  { category: "Web", items: ["Node.js", "Supabase", "Streamlit"] },
  { category: "Agentic Tools", items: ["Claude Code", "Codex"] },
];
