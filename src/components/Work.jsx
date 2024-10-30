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
    github: 'https://github.com/Dayasagar88/Alumni-association',
    demo: 'https://alumni-association-khaki.vercel.app/',
  },
  {
    title: 'Netflix Clone',
    description: 'A fully responsive Netflix clone built with React.',
    image: project2,
    github: 'https://github.com/Dayasagar88/Netflix-GPT',
    demo: 'https://netflix-gpt-five-lovat.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: 'A Portfolio built with react for a client.',
    image: project1,
    github: 'https://github.com/Dayasagar88/minimalportfolio',
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
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-md mx-auto flex flex-col"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-contain"
        />
        <div className="px-4 py-2 flex-grow">
          <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
          <p className="text-gray-600 dark:text-gray-400  text-sm">{project.description}</p>
        </div>
        <div className="px-4 py-2 flex justify-between items-center text-sm">
          <Link to="/case-study" className='text-blue-500 hover:text-blue-600'>Case study</Link>
          <div className="flex space-x-2">
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
   