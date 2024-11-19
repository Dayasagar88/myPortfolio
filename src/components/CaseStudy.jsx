import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import project3 from "../assets/project3.png";
import { skills } from "@/constants/constants";
import { caseStudy } from "@/constants/constants";

const CaseStudy = () => {
  if (!caseStudy) {
    return (
      <div className="min-h-screen mt-10 bg-background flex items-center justify-center mt-30">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-8">
            Sorry, we {"couldn't"} find the case study {"you're"} looking for.
          </p>
          <Button>
            <Link  to="/work">Back to Work</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen lg:w-[70vw] mx-auto">
      <div className="container mx-auto px-4 py-8 mt-14">
        

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
            <img
              src={project3}
              alt={caseStudy.title}
              width={400}
              height={300}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-between text-right"
          >
            <div >
              <h2 className="text-lg font-semibold mb-1">Project Details</h2>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Client: </span>
                {caseStudy.client}
              </p>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Duration: </span>{" "}
                {caseStudy.duration}
              </p>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Role: </span>
                {caseStudy.role}
              </p>
            </div>
            <div className="flex space-x-4 place-content-end">
              <Button asChild variant="outline">
                <Link
                  to={caseStudy.github}
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href={caseStudy.demo}
                  className="inline-flex items-center"
                >
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
          <h2 className="text-lg font-semibold mb-4">Technologies Used</h2>
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
          <h2 className="text-lg font-semibold">Project Overview</h2>
          <p className="text-md text-muted-foreground">
            {caseStudy.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-lg font-semibold mb-4">Project Workflow</h2>
          <LinearProcessFlow />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-lg font-semibold">Challenges</h2>
            <p className="text-md text-muted-foreground">
              {caseStudy.challenges}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-lg font-semibold ">Solutions</h2>
            <p className="text-md text-muted-foreground">
              {caseStudy.solutions}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mb-12"
        >
          <h2 className="text-lg font-semibold ">Results</h2>
          <p className="text-md text-muted-foreground">{caseStudy.results}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-muted p-6 rounded-lg"
        >
          <h2 className="text-lg font-semibold">Client Testimonial</h2>
          <blockquote className="text-md text-muted-foreground italic">
            {caseStudy.testimonial.text}
          </blockquote>
          <p className="mt-1 text-sm font-semibold">- {caseStudy.testimonial.author}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Link
            to="/work"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </motion.div>
      </div>
      
    </div>
  );
};

export default CaseStudy;
function LinearProcessFlow() {
  const steps = [
    {
      title: "Discovery & Planning",
      description:
        "Conducted in-depth client interviews and user research to understand pain points and goals.",
    },
    {
      title: "Design & Prototyping",
      description:
        "Created wireframes and interactive prototypes, iterating based on client feedback.",
    },
    {
      title: "Development",
      description:
        "Implemented the new design using React and Next.js, focusing on performance and scalability.",
    },
    {
      title: "Testing & Quality Assurance",
      description:
        "Conducted thorough testing, including unit tests, integration tests, and user acceptance testing.",
    },
    {
      title: "Deployment & Launch",
      description:
        "Utilized CI/CD pipeline for smooth deployment, with a phased rollout to minimize risks.",
    },
    {
      title: "Post-Launch Support & Optimization",
      description:
        "Monitored performance, gathered user feedback, and made iterative improvements.",
    },
  ];

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
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
            {index + 1}
          </div>
          <div>
            <h3 className="text-sm font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
