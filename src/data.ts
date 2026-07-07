import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Tanisha",
  title: "Full Stack Developer & AI Developer",
  subtitle: "BS Computer Science Undergraduate | Building intelligent, user-focused digital solutions",
  aboutSummary: "I am a Computer Science student at DHA Suffa University passionate about web engineering, data science, and AI. I specialize in building responsive frontends and using data-driven insights to create elegant digital solutions.",
  socials: {
    email: "tanulohana51@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    location: "Karachi, Pakistan",
    phone: "+92 300 1234567"
  },
  education: [
    {
      institution: "DHA Suffa University, Karachi",
      degree: "Bachelor of Science",
      field: "Computer Science",
      duration: "2023 – 2027",
      location: "Karachi, Pakistan",
    },
    {
      institution: "Government Girls Degree College, Mithi",
      degree: "Higher Secondary Certificate",
      field: "Pre-Medical",
      duration: "2020 – 2022",
      location: "Mithi, Pakistan",
      description: "Secured top-tier grades with a focus on analytical sciences, fostering strong logical reasoning and problem-solving skills."
    },
    {
      institution: "Al Mehran Higher Secondary School, Mithi",
      degree: "Secondary School Certificate",
      field: "Science & Matriculation",
      duration: "2020",
      location: "Mithi, Pakistan",
      description: "Completed foundation studies with a focus on physics, chemistry, and mathematics."
    }
  ],
  skillGroups: [
    {
      category: "Web Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Responsive Design", level: 90 },
        { name: "Bootstrap & Tailwind", level: 88 }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 85 },
        { name: "C & C++", level: 80 },
        { name: "SQL", level: 78 },
        { name: "Java", level: 72 }
      ]
    },
    {
      category: "Data Science & Analytics",
      skills: [
        { name: "IBM Data Science", level: 85 },
        { name: "Pandas & NumPy", level: 82 },
        { name: "Matplotlib & Seaborn", level: 80 },
        { name: "Jupyter Notebook", level: 88 }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "GitHub & Git", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Firebase", level: 75 },
        { name: "Google AI Studio", level: 82 },
        { name: "Google Antigravity", level: 80 },
        { name: "Vercel", level: 85 }
      ]
    },
    {
      category: "Professional Competencies",
      skills: [
        { name: "Problem-Solving", level: 92 },
        { name: "UI/UX Design", level: 85 },
        { name: "Team Collaboration", level: 90 },
        { name: "Time Management", level: 88 }
      ]
    }
  ],
  experience: [
    {
      company: "High Tech Software House",
      role: "Frontend Developer Intern",
      duration: "2025 (Present)",
      location: "Karachi, Pakistan",
      points: [
        "Developed highly responsive, user-friendly, and lightweight web pages using modern HTML, CSS, and JavaScript standards.",
        "Collaborated closely with cross-functional design and product teams to implement pixel-perfect layouts and improve core web vitals.",
        "Identified, debugged, and optimized legacy frontend assets, ensuring cross-browser stability and high-performance execution."
      ],
      techUsed: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"]
    },
    {
      company: "Nftcipher",
      role: "Data Analyst & AI Developer",
      duration: "Oct 2025 – Feb 2026",
      location: "Remote / Karachi",
      points: [
        "Analyzed complex datasets and engineered key data models to generate actionable business intelligence and drive executive decision-making.",
        "Designed and implemented high-accuracy Machine Learning algorithms and pipelines for predictive analytics solutions.",
        "Contributed to end-to-end fullstack development, seamlessly integrating data analytical modules with interactive web frontends."
      ],
      techUsed: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning", "React.js"]
    }
  ],
  projects: [
    {
      id: "chat-network",
      title: "Chat & Network Log Monitor",
      description: "Interactive web simulation showcasing network architectures, data transfers, and live packet capture logs. Experience direct visual simulation of packets traversing networks in real time.",
      highlights: [
        "Live Node-to-Node packet transmission mapping",
        "Configurable protocol modes (TCP vs UDP) with simulated window size bottlenecks",
        "Dynamic Console logging mimicking Wireshark output and TCP Three-Way Handshake"
      ],
      demoType: "chat-network",
      techUsed: ["React.js", "Tailwind CSS", "Motion", "Computer Networks"],
      liveUrl: "https://chat-application-network-log-monito-pi.vercel.app/"
    },
    {
      id: "greenverse",
      title: "GreenVerse",
      description: "A gorgeous client-only eco-dashboard showcasing sustainable habit tracking, dynamic carbon footprint calculators, and educational materials.",
      highlights: [
        "Carbon footprint estimator based on energy usage, transport modes, and dietary habits",
        "Eco-friendly task checklist and score tracker to Gamify ecological awareness",
        "Staggered animation grids with interactive climate fact sliders"
      ],
      demoType: "greenverse",
      techUsed: ["React.js", "Tailwind CSS", "Motion", "Environmental Analytics"],
      liveUrl: "https://greenverse-j2k4.vercel.app/"
    }
  ],
  certifications: [
    {
      title: "Stanford University: Code in Place",
      issuer: "Stanford University",
      year: "2026",
      credentialUrl: "#"
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM on Coursera",
      year: "2025",
      credentialUrl: "#"
    },
    {
      title: "Web Development Diploma",
      issuer: "Aptech Computer Education",
      year: "2025",
      credentialUrl: "#"
    }
  ]
};
