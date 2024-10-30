import { ArrowLeft, Badge, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { motion } from 'framer-motion';
import project3 from "../assets/project3.png";
import ic from "../assets/js.png"
import ic1 from "../assets/git.png"
import ic3 from "../assets/github.png"
import ic4 from "../assets/java.png"
import ic5 from "../assets/programing.png"
import ic6 from "../assets/atom.png"
import ic7 from "../assets/nextjs.png"
import ic8 from "../assets/express.png"
import ic9 from "../assets/mongodb.png"


const skills = [
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




const caseStudy = {
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

const CaseStudy = () => {

    if (!caseStudy) {
        return (
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
              <p className="mb-8">Sorry, we {"couldn't"} find the case study {"you're"} looking for.</p>
              <Button asChild>
                <Link href="/work">Back to Work</Link>
              </Button>
            </div>
          </div>
        )
      }

  return (
    <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link to="/work" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Work
        </Link>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        {caseStudy.title}
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={project3} alt={caseStudy.title} width={400} height={300} className="rounded-lg w-full h-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold mb-1">Project Details</h2>
            <p className='text-sm'> <span className='font-semibold'>Client: </span>{caseStudy.client}</p>
            <p className='text-sm'> <span className='font-semibold'>Duration: </span> {caseStudy.duration}</p>
            <p className='text-sm'> <span className='font-semibold'>Role: </span>{caseStudy.role}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Button asChild variant="outline">
              <Link href={caseStudy.github} className="inline-flex items-center">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={caseStudy.demo} className="inline-flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((tech, index) => (
            <img key={index} src={tech.icon} alt="img" width={30} />
          ))}
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold">Project Overview</h2>
        <p className="text-md text-muted-foreground">{caseStudy.description}</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-4">Project Workflow</h2>
        <LinearProcessFlow />
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-xl font-semibold">Challenges</h2>
          <p className='text-md text-muted-foreground'>{caseStudy.challenges}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold ">Solutions</h2>
          <p className='text-md text-muted-foreground'>{caseStudy.solutions}</p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mb-12"
      >
        <h2 className="text-xl font-semibold ">Results</h2>
        <p className='text-md text-muted-foreground'>{caseStudy.results}</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-muted p-6 rounded-lg mb-12"
      >
        <h2 className="text-xl font-semibold">Client Testimonial</h2>
        <blockquote className="text-lg italic">{caseStudy.testimonial.text}</blockquote>
        <p className="mt-2 font-semibold">- {caseStudy.testimonial.author}</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-center"
      >
        <Button asChild>
          <Link href="/contact">Discuss Your Project</Link>
        </Button>
      </motion.div>
    </div>
  </div>
  )
}

export default CaseStudy
function LinearProcessFlow() {
    const steps = [
      { title: "Discovery & Planning", description: "Conducted in-depth client interviews and user research to understand pain points and goals." },
      { title: "Design & Prototyping", description: "Created wireframes and interactive prototypes, iterating based on client feedback." },
      { title: "Development", description: "Implemented the new design using React and Next.js, focusing on performance and scalability." },
      { title: "Testing & Quality Assurance", description: "Conducted thorough testing, including unit tests, integration tests, and user acceptance testing." },
      { title: "Deployment & Launch", description: "Utilized CI/CD pipeline for smooth deployment, with a phased rollout to minimize risks." },
      { title: "Post-Launch Support & Optimization", description: "Monitored performance, gathered user feedback, and made iterative improvements." },
    ]
  
    return (
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
              {index + 1}
            </div>
            <div>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }
