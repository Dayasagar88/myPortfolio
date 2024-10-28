import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    title: 'Alumni association platform',
    description: 'A full-stack Alumni association platform solution with React, Node.js, and MongoDB.',
    image: project3,
    github: 'https://github.com/johndoe/ecommerce-platform',
    demo: 'https://ecommerce-platform-demo.vercel.app',
  },
  {
    title: 'Netflix Clone',
    description: 'A fully responsive Netflix clone built with React.',
    image: project2,
    github: 'https://github.com/johndoe/task-management-app',
    demo: 'https://task-management-app-demo.vercel.app',
  },
  {
    title: 'Portfolio',
    description: 'A Portfolio built with react for a client.',
    image: project1,
    github: 'https://github.com/johndoe/weather-dashboard',
    demo: 'https://www.sahityakashyap.in/',
  },
];

export default function Work() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        My Work
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-md mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{project.description}</p>
              <div className="flex justify-between text-sm">
                <Link to={project.github} className="text-blue-500 hover:text-blue-600 transition duration-300">
                  GitHub
                </Link>
                <Link to={project.demo} className="text-green-500 hover:text-green-600 transition duration-300">
                  Live Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
   