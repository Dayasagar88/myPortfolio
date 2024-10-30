import ic1 from "../assets/git.png"
import ic from "../assets/js.png"
import ic3 from "../assets/github.png"
import ic4 from "../assets/java.png"
import ic5 from "../assets/programing.png"
import ic6 from "../assets/atom.png"
import ic7 from "../assets/nextjs.png"
import ic8 from "../assets/express.png"
import ic9 from "../assets/mongodb.png"


export const skills = [
    { name: 'JavaScript', icon: ic},
    { name: 'MongoDB', icon: ic9},
    { name: 'Express', icon: ic8 },
    { name: 'React', icon: ic6 },
    { name: 'Node.js', icon: ic5 },
    { name: 'Next.js', icon: ic7 },
    { name: 'Java', icon: ic4 },
    { name: 'Git', icon: ic1 },
    { name: 'GitHub', icon: ic3 },
  ]




export const caseStudy = {
    id : 1,
    title: 'E-commerce Platform Redesign',
    client: 'TechMart Inc.',
    duration: '3 months',
    role: 'Lead Frontend Developer',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    description: 'Redesigned and rebuilt the entire e-commerce platform to improve user experience, increase conversion rates, and modernize the tech stack.',
    challenges: 'The main challenge was migrating from a legacy system while maintaining all existing functionalities and improving performance.',
    solutions: 'Implemented a micro-frontend architecture, allowing for gradual migration and independent scaling of different parts of the application.',
    results: 'Achieved a 40% increase in conversion rate and a 25% reduction in bounce rate within the first month after launch.',
    testimonial: {
      text: "The redesign exceeded our expectations. Our customers love the new interface, and we've seen a significant boost in sales.",
      author: "Jane Doe, CTO of TechMart Inc."
    }
  }
