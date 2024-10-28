
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import myImage from "../assets/myImage.jpg"

const skills = ['Web Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']

export default function Home() {
  const [skillIndex, setSkillIndex] = useState(0)
  const [displayedSkill, setDisplayedSkill] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      setDisplayedSkill('');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (displayedSkill.length < skills[skillIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedSkill(skills[skillIndex].slice(0, displayedSkill.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [displayedSkill, skillIndex]);

  return (
    <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src={myImage}
          alt="John Doe"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="sm:text-4xl text-2xl dark:text-gray-200  font-semibold mb-2">Daya Sagar</h1>
        <h2 className="sm:text-2xl text-xl text-gray-600 dark:text-gray-400 mb-2 h-8">{displayedSkill} <span className='animate-pulse'>|</span></h2>
        <p className="sm:text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
          Passionate about creating elegant solutions to complex problems. Always learning, always growing.
        </p>
        <motion.div
          className="flex justify-center sm:space-x-4 space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/work" className="bg-black hover:bg-gray-700 text-gray-200 font-semibold py-2 sm:px-4 px-2 rounded transition duration-300">
            View My Work
          </Link>
          <Link to="/about" className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-2 sm:px-4 rounded transition duration-300">
            About
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}