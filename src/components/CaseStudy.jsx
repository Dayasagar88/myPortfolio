import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { caseStudies } from "@/constants/constants";
import { useEffect } from "react";

const CaseStudy = () => {
  const { id, title } = useParams();
  const { projects } = caseStudies;


  const selectedProject = projects.find(
    (project) => Number(id) === project.id
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); 


  return (
   selectedProject && <div className="min-h-screen lg:w-[70vw] mx-auto">
      <div className="container mx-auto px-4 py-8 mt-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-semibold mb-6 text-center"
        >
          {selectedProject.title}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
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
            <div>
              <h2 className="text-lg font-semibold mb-1">Project Details</h2>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Client: </span>
                {selectedProject.client}
              </p>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Duration: </span>{" "}
                {selectedProject.duration}
              </p>
              <p className="text-sm">
                {" "}
                <span className="font-semibold">Role: </span>
                {selectedProject.role}
              </p>
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0 place-content-end">
              <Button asChild variant="outline">
                <Link
                target="blank"
                  to={selectedProject.github}
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                target="blank"
                  to={selectedProject.demo}
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
          <div className="flex cursor-pointer flex-wrap gap-4">
            {selectedProject.technologies.map((tech, index) => (
              <img title={tech.name} key={index} src={tech.icon} alt="img" width={30} />
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
            {selectedProject.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          {/* <h2 className="text-lg font-semibold mb-4">Project Workflow</h2>
          <LinearProcessFlow /> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-lg font-semibold">Challenges</h2>
            <p className="text-md text-muted-foreground">
              {selectedProject.challenges}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-lg font-semibold ">Solutions</h2>
            <p className="text-md text-muted-foreground">
              {selectedProject.solutions}
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
          <p className="text-md text-muted-foreground">{selectedProject.results}</p>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-muted p-6 rounded-lg"
        >
          <h2 className="text-lg font-semibold">Client Testimonial</h2>
          <blockquote className="text-md text-muted-foreground italic">
            {selectedProject.testimonial.text}
          </blockquote>
          <p className="mt-1 text-sm font-semibold">
            - {selectedProject.testimonial.author}
          </p>
        </motion.div> */}
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

