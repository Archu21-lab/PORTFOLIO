import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
   FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot 
} from "react-icons/fa";

import MyImg1 from "../assets/MyImg-1.jpeg";
import MyImg2 from "../assets/MyImg-2.jpeg";
import Project1 from "../assets/Project-1.png";
import Project2 from "../assets/Project-2.png";
import Project3 from "../assets/Project-3.png";
import Project4 from "../assets/Project-4.avif";
import ProjectPortfolio from "../assets/ProjectPortfolio.png"

export const assets = {
   MyImg1,MyImg2
}

export const aboutInfo =[
    {
        icon:FaLightbulb,
        title:'Innovative',
        description:'I Love creating unique solutions to complex problems with cutting-edge technologies',
        color: 'text-purple',
    },
    {
        icon:FaPaintBrush,
        title:'Design Oriented',
        description:'Beautiful design and user experience are at the heart of everything i create',
        color:'text-pink',
    },
    {
        icon:FaCode,
        title:'Clean Code',
        description:'Beautiful design and user experience are at the heart of every',
        color:'text-blue',
    },
]

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  // {
  //   title: 'Tools & Technologies',
  //   icon: FaTools,
  //   description: 'Essential tools and technologies I use in my development workflow.',
  //   tags: ['Git & GitHub', 'Webpack', 'Figma', 'Jest']
  // }
];



export const projects = [
  {
    title: "Daily Notes App",
    description: "Structure Your Thoughts By Daily Notes.",
    image: Project1,
    tech: ["HTML", "CSS", "JS", "React"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Student Registration Form",
    description: "A productivity application with drag-and-drop functionality and real-time updates.",
    image: Project2,
    tech: ["HTML", "JS", "Tailwind CSS", "React"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: Project3,
    tech: ["HTML", "CSS", "JS", "React"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: ProjectPortfolio,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: Project2,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase ],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: Project4,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];


export const workData = [
  
  {
    role: "Web Developer",
    learning: "Red & White Skill Education",
    duration: "2025 - 2026",
    description:
      "Developed web applications , focusing on responsive design and performance optimization.",
    color: "pink"
  },
  
];
