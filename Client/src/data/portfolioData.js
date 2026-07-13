const portfolioData = {
  personal: {
    name: "Harit Sharma",
    title: "Python Full Stack Developer",
    email: "haritsharma0807@gmail.com",
    location: "Indore, Madhya Pradesh",

    description:
      "Passionate Computer Science student focused on Python Full Stack Development, Python, Artificial Intelligence, and building real-world applications.",
  },

  skills: [
    {
      name: "HTML",
      level: 95,
    },

    {
      name: "CSS",
      level: 90,
    },

    {
      name: "JavaScript",
      level: 85,
    },

    {
      name: "React",
      level: 80,
    },

    {
      name: "Python",
      level: 60,
    },

  ],
  projects: [
  {
    id: 1,
    title: "AI Path Finder",
    description:
      "An AI-based pathfinding system for game characters using A* Algorithm and Unity.",

    technologies: ["Python", "Unity", "A*"],

    github: "https://github.com/HaritSharma-07",

    demo: "#",

    image: "https://placehold.co/600x400"
  },

  {
    id: 2,
    title: "Utility Management System",

    description:
      "A webdevelopment application for managing electricity and water complaints with an admin dashboard.",

    technologies: ["React", "Node", "MongoDB"],

    github: "https://github.com/HaritSharma-07",

    demo: "#",

    image: "https://placehold.co/600x400"
  },

  {
    id: 3,

    title: "Python Automation",

    description:
      "Collection of Python automation scripts including email automation and data processing.",

    technologies: ["Python"],

    github: "https://github.com/HaritSharma-07",

    demo: "#",

    image: "https://placehold.co/600x400"
  }
],
experience: [
  {
    id: 1,
    year: "2024",
    title: "Python Developer",
    company: "Self Learning",
    description:
      "Completed Python Bootcamp, built automation projects, APIs, GUI apps, and problem-solving projects."
  },

  {
    id: 2,
    year: "2026",
    title: "MERN Stack Developer",
    company: "Personal Projects",
    description:
      "Developing full-stack web applications using React, Node.js, Express.js, and MongoDB."
  }
],

education: [
  {
    id: 1,
    year: "2023 - Present",
    degree: "Bachelor of Technology",
    institute: "RGPV Affiliated College",
    description: "Computer Science Engineering"
  },

  {
    id: 2,
    year: "2023",
    degree: "Higher Secondary (12th)",
    institute: "Takshshila Higher Secondary School",
    description: "PCM"
  }
],
};

export default portfolioData;