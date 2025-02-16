import ic1 from "../assets/git.png";
import ic from "../assets/js.png";
import ic3 from "../assets/github.png";
import ic4 from "../assets/java.png";
import ic5 from "../assets/programing.png";
import ic6 from "../assets/atom.png";
import ic7 from "../assets/nextjs.png";
import ic8 from "../assets/express.png";
import ic9 from "../assets/mongodb.png";
import ic10 from "../assets/redux.png";
import ic11 from "../assets/jwt.png";
import ic12 from "../assets/gpt.png";
import ic13 from "../assets/firebase.png";
import ic14 from "../assets/tailwind.png";
import project2 from "../assets/project1.png";
import project3 from "../assets/project2.png";
import project1 from "../assets/devtinder.png";



export const caseStudy = {
  id: 1,
  title: "E-commerce Platform Redesign",
  client: "TechMart Inc.",
  duration: "3 months",
  role: "Lead Frontend Developer",
  technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  description:
    "Redesigned and rebuilt the entire e-commerce platform to improve user experience, increase conversion rates, and modernize the tech stack.",
  challenges:
    "The main challenge was migrating from a legacy system while maintaining all existing functionalities and improving performance.",
  solutions:
    "Implemented a micro-frontend architecture, allowing for gradual migration and independent scaling of different parts of the application.",
  results:
    "Achieved a 40% increase in conversion rate and a 25% reduction in bounce rate within the first month after launch.",
  testimonial: {
    text: "The redesign exceeded our expectations. Our customers love the new interface, and we've seen a significant boost in sales.",
    author: "Jane Doe, CTO of TechMart Inc.",
  },
};

export const caseStudies = {
  projects: [
    {
      id: 1,
      title: "DevTinder - Developer Networking Platform",
      image: project1,
      client: "Personal Project",
      duration: "4 weeks",
      role: "Full Stack Developer",
      technologies: [
        { name: "MongoDB", icon: ic9 },
        { name: "Express", icon: ic8 },
        { name: "React", icon: ic6 },
        { name: "Node.js", icon: ic5 },
        { name: "JavaScript", icon: ic },
        { name: "Redux", icon: ic10 },
        { name: "Jwt", icon: ic11 },
      ],
      description:
        "Built a Tinder-style platform for developers to connect based on skills, projects, and interests.",
      challenges:
        "Implementing real-time matching and chat features while ensuring smooth performance.",
      solutions:
        "Used Socket.IO for real-time chat, implemented an advanced matching algorithm based on skills, and optimized database queries for faster response times.",
      results:
        "Created an engaging networking platform for developers with interactive UI and real-time matching, boosting connections in the tech community.",
      github: "https://github.com/Dayasagar88/devtinder-app",
      demo: "https://devtinder-app.onrender.com/",
    },
    {
      id: 2,
      title: "Netflix GPT with Firebase Authentication",
      image: project3,
      client: "Personal Project",
      duration: "2 weeks",
      role: "Frontend Devloper",
      technologies: [
        { name: "JavaScript", icon: ic },
        { name: "React", icon: ic6 },
        { name: "Redux", icon: ic10 },
        { name: "Tailwind CSS", icon: ic14 },
        { name: "Gpt", icon: ic12 },
        { name: "Firebase", icon: ic13 },
      ],
      description:
        "Developed a Netflix-inspired streaming platform with real-time authentication, dynamic movie listings, and personalized recommendations.",
      challenges:
        "Handling authentication securely while maintaining a smooth UI experience. Optimizing API calls to prevent slow loading.",
      solutions:
        "Integrated Firebase authentication for secure sign-in, used Redux for state management, and optimized API requests for better performance.",
      results:
        "Delivered a seamless user experience with responsive UI, secure authentication, and optimized API performance.",
      github: "https://github.com/Dayasagar88/Netflix-GPT",
      demo: "https://netflix-gpt-five-lovat.vercel.app/",
    },
    {
      id: 3,
      title: "Industrial Design Portfolio for Client",
      image: project2,
      client: "Confidential",
      duration: "1 weeks",
      role: "Frontend Developer",
      technologies: [
        { name: "React", icon: ic6 },
        { name: "Tailwind CSS", icon: ic14 },
        { name: "JavaScript", icon: ic },
      ],
      description:
        "Developed a sleek, interactive portfolio for an industrial designer to showcase their work with a modern UI.",
      challenges:
        "Creating a visually appealing yet lightweight website with smooth animations and optimal performance.",
      solutions:
        "Implemented Framer Motion for fluid animations, optimized images and assets for performance, and used Tailwind CSS for responsive design.",
      results:
        "Delivered a highly engaging, visually striking portfolio with smooth transitions and fast load times, enhancing the client's online presence.",
      github: "https://github.com/Dayasagar88/minimalportfolio",
      demo: "https://www.sahityakashyap.in/",
    },
  ],
};
