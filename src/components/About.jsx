

import { motion } from 'framer-motion'
import { Image } from 'lucide-react'
import { Link } from 'react-router-dom'
import ic from "../assets/js.png"                                          
import ic1 from "../assets/git.png"                                          
import ic3 from "../assets/github.png"                                          
import ic4 from "../assets/java.png"                                          
import ic5 from "../assets/programing.png"                                          
import ic6 from "../assets/atom.png"                                          
import ic7 from "../assets/nextjs.png"                                          
import ic8 from "../assets/express.png"                                          
import ic9 from "../assets/mongoDB.png"                                          

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

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>
      <div className="grid mb-8 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
          <p className="mb-4">
            {"I'm"} a passionate software engineer with a love for creating efficient and elegant solutions. My journey in tech started when I built my first website at the age of 15, and {"I've"} been hooked ever since.
          </p>
          <p className="mb-4">
            After graduating with a degree in Computer Science, {"I've"} worked on various projects ranging from web applications to mobile apps and backend systems. {"I'm"} always excited to learn new technologies and apply them to solve real-world problems.
          </p>
          <p>
            When {"I'm"} not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid  grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <img src={skill.icon} alt={skill.name} width={48} height={48} className="mb-2" />
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <hr></hr>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link to="/resume.pdf" className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded transition duration-300">
            Download Resume
          </Link>
        </motion.div>
    </div>
  )
}