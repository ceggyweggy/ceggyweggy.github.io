export const profile = {
  name: "Cadence Loh",
  role: "CS & Applied Mathematics @ UC Berkeley",
  location: "Berkeley, CA",
  summary:
    "\"Practice charity without holding in mind any conceptions about charity, for charity after all is just a word.\"",
  email: "cadence_loh@berkeley.edu",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/ceggyweggy/",
    linkedin: "https://www.linkedin.com/in/cadence-loh-9a268423a/",
    instagram: "https://www.instagram.com/shades_of_yell.owo13",
    substack: "https://slippyslide.substack.com/",
    goodreads: "https://www.goodreads.com/user/show/125283554-cadence",
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
    name: "Robocup Junior Soccer",
    description:
      "Led software development for RCJ Soccer from 2021-2024, designing ball-tracking, boundary-detection, and strategic-positioning algorithms that improved performance without relying on sophisticated hardware — the only competitive soccer team in the world to do so.",
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
      "Used Claude Code to accelerate redevelopment of a Node.js/Supabase reporting platform, building reusable skills to automate repetitive implementation and debugging workflows",
      "Designed a tool-augmented multi-agent code review workflow using specialized agents for frontend, backend, database, and security analysis, enabling parallel review across the stack",
      "Developed reusable Claude Code skills to automate repetitive development workflows, reducing manual intervention in routine coding and debugging tasks",
    ],
  },
  {
    role: "Robotics Research Intern",
    org: "DSO National Laboratories, Singapore",
    period: "Apr. 2025 — Jul. 2025",
    points: [
      "Compared two state-of-the-art pose estimation models, FoundationPose and MASt3R, for a self-balancing robot",
      "Integrated Segment Anything Model and GroundingDINO for automatic, language-prompted object mask generation",
      "Reduced model sizes by over 10% to run on CPU",
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

export const teaching = [
  {
    role: "CS70 Tutor",
    org: "University of California, Berkeley",
    period: "Aug. 2026 - Present",
    points: [
      "Part of Course Staff for CS70: Discrete Mathematics and Probability Theory",
      // "Integrated Segment Anything Model and GroundingDINO for automatic, language-prompted object mask generation.",
      // "Reduced model sizes by over 10% to run on CPU.",
    ],
  },
  {
    role: "CSM Mentor",
    org: "Computer Science Mentors, UC Berkeley",
    period: "Jan. 2026 - Present",
    points: [
      "Held weekly small-group women affinity section for CS61A, teaching and guiding students towards learning new content for CS61A, the introductory CS class at UC Berkeley",
      "Created and organised worksheet problems for review sessions",
    ],
  },
  {
    role: "PiE Mentor",
    org: "Pioneers in Engineering, UC Berkeley",
    period: "Jan. 2026 - May 2026",
    points: [
      "Mentored a team from Arroyo High School as part of Pioneers in Engineering, which provides Robotics competition experience to high schools in the Bay Area",
      "Guided students in building principles and fundamental Python",
    ],
  },
  {
    role: "Robotics Instructor",
    org: "Raffles Girls' School (Secondary)",
    period: "Jan. 2025 - Apr. 2025",
    points: [
      "Mentored a four-person team in RoboCupJunior Soccer Lightweight to build two robots to play soccer autonomously using Raspberry Pi Pico microcontrollers, programming using Arduino IDE, in C",
      "Guided students in basic hardware skills, including soldering, 3D modeling and PCB design",
      "Team achieved 1st place locally in Singapore Open, qualifying to represent Singapore at world championship",
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

export const media: { src: string; alt: string; caption?: string }[] = [
  // Add photos here once available, e.g.:
  // { src: "/media/photo1.jpg", alt: "Description", caption: "Optional caption" },
];

// Newest first.
export const dinoCam: { src: string; date: string; caption: string }[] = [
  { src: "/dino-cam/2026-08-04.jpg", date: "2026-08-04", caption: "Dino enjoying breakfast at Cafe Strada, Berkeley" },
  { src: "/dino-cam/2026-07-19-b.jpg", date: "2026-07-19", caption: "Dino enjoying drinks before World Cup Final" },
  { src: "/dino-cam/2026-07-19-a.jpg", date: "2026-07-19", caption: "Dino enjoying buffet breakfast" },
  { src: "/dino-cam/2026-07-19-c.jpg", date: "2026-07-18", caption: "Dino learns how to play chess" },
  // { src: "/dino-cam/2026-07-17-b.jpg", date: "2026-07-17", caption: "Caption coming soon" },
  { src: "/dino-cam/2026-07-17-a.jpg", date: "2026-07-17", caption: "Dinos in small cruise ship cabin" },
  { src: "/dino-cam/2026-06-13.jpg", date: "2026-06-13", caption: "Many not-dinos (dragons) at The Viking Museum, Stockholm" },
  { src: "/dino-cam/2026-05-28.jpg", date: "2026-05-28", caption: "The Dino family has expanded" },
  { src: "/dino-cam/2026-05-15.jpg", date: "2026-05-15", caption: "Dino getting bullied by other plushies" },
  { src: "/dino-cam/2026-03-24.JPG", date: "2026-03-24", caption: "Dino seeing other dinos at Natural History Museum, London" },
  // { src: "/dino-cam/2026-03-21.JPG", date: "2026-03-21", caption: "Caption coming soon" },
  { src: "/dino-cam/2025-12-17.jpg", date: "2025-12-17", caption: "Dino in dorm bed" },
  { src: "/dino-cam/2025-08-31.jpg", date: "2025-08-31", caption: "Dino with dino nuggets" },
  { src: "/dino-cam/2025-08-16.JPG", date: "2025-08-16", caption: "Dino at Computing History Museum, Mountain View" },
  { src: "/dino-cam/2025-08-13.JPG", date: "2025-08-13", caption: "Dino at Clark Kerr Fire Trails, Berkeley" },
  { src: "/dino-cam/2025-07-28.JPG", date: "2025-07-28", caption: "Found Dino at a store in Singapore" },
];

export const skills = [
  { category: "Languages", items: ["Python", "C++", "Java", "JavaScript", "SQL"] },
  { category: "ML/AI", items: ["PyTorch", "Hugging Face", "Ollama"] },
  { category: "Systems/Dev", items: ["Docker", "Kubernetes", "Git", "Conda"] },
  { category: "Web", items: ["Node.js", "Supabase", "Streamlit"] },
  { category: "Agentic Tools", items: ["Claude Code", "Codex"] },
];
