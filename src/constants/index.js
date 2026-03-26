const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 1, 2026",
    title: "State Machines in Practice: Modeling Complex Flows with TypeScript",
    image: "/images/blog1.png",
    link: "https://github.com/mdsanz",
  },
  {
    id: 2,
    date: "Feb 15, 2026",
    title: "Building AI Voice Agents with Gemini API and VAPI",
    image: "/images/blog2.png",
    link: "https://github.com/mdsanz",
  },
  {
    id: 3,
    date: "Jan 20, 2026",
    title: "Event-Driven Microservices with Apache Kafka and Spring Boot",
    image: "/images/blog3.png",
    link: "https://github.com/mdsanz",
  },
];

const techStack = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Quarkus", "Node.js"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Redux"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "LESS", "GSAP"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "Apache Kafka", "Docker"],
  },
  {
    category: "AI & Testing",
    items: ["Gemini API", "VAPI", "JUnit", "Playwright"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/mdsanz",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/md-sanz/",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "mailto:marcos.sanzlara@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI Interview Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "AI Interview Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A voice-agent application that conducts role-specific technical interviews for software engineering positions.",
            "Uses Google Gemini API to dynamically generate interview questions and provide structured feedback, and VAPI for real-time voice interaction.",
            "The interview flow is modeled as a state machine with hash map-indexed question banks per role for O(1) retrieval.",
            "Built with Next.js, TypeScript, Tailwind CSS, Gemini API, and VAPI.",
          ],
        },
        {
          id: 2,
          name: "ai-interview.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mdsanz",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "ai-interview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/mdsanz",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Patient Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Patient Management System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A distributed patient administration system built with a microservices architecture.",
            "Services communicate asynchronously via Apache Kafka using producer/consumer patterns, ensuring loose coupling and fault tolerance.",
            "Deployed independently on AWS (EC2, RDS, S3) with Docker containerization and automated CI/CD pipelines.",
            "Built with Java, Spring Boot, Apache Kafka, AWS, Docker, and PostgreSQL.",
          ],
        },
        {
          id: 2,
          name: "patient-system.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mdsanz",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "patient-system.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/mdsanz",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "macOS Portfolio Simulator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "macOS Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "An interactive developer portfolio that simulates a macOS desktop environment.",
            "Features fluid animations powered by GSAP, a working dock, draggable windows, and a Finder-like project browser.",
            "Designed to showcase projects and skills in a creative, memorable way that stands out from typical portfolios.",
            "Built with Next.js, TypeScript, Tailwind CSS, and GSAP.",
          ],
        },
        {
          id: 2,
          name: "portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mdsanz",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Code.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://github.com/mdsanz",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/marcos.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/marcos-2.jpg",
    },
    {
      id: 3,
      name: "coding-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/marcos-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full Stack Engineer based in Mexico City",
      image: "/images/marcos.jpg",
      description: [
        "Hey! I'm Marcos 👋, a Full Stack Engineer with 3+ years building production systems at Netcracker Technology.",
        "I work across the full stack — Java and Spring Boot on the backend, React and Next.js on the frontend — and I'm passionate about clean code, reliable systems, and developer experience.",
        "Outside of work I build things out of curiosity: an AI interview platform with Gemini and voice agents, a distributed patient system on AWS, and yes — this portfolio that simulates macOS because why not 😄",
        "Currently based in Mexico City, open to remote opportunities worldwide.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Marcos_Sanchez_CV.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, isMinimized: false, lastPos: null, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };