import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import laptoImg from "../assets/coding.gif";

const skills = [
  'Hello !',   // English  
  'Namaste !', // Hindi  
  'Hola !',    // Spanish  
  'Bonjour !', // French  
  'Konnichiwa !' // Japanese  
];
export default function Home() {
  const [skillIndex, setSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ShadowSlideText = ({ text }) => {
    const words = text.split(' '); // Text ko words mein split karo
  
    return (
      <div className="flex">
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            initial={{ x: '-100%', opacity: 0 }} // Left se start karo
            animate={{ x: 0, opacity: 1 }} // Slide aur show karo
            transition={{
              delay: wordIndex * 0.5, // Har word ke liye delay
              duration: 0.5, // Animation ki duration
              ease: "easeOut" // Smooth animation
            }}
            style={{
              display: 'inline-block',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.)', // Shadow (agar chahiye)
              marginRight: '0.5rem', // Words ke beech mein space
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-6 py-12 mt-14 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src={laptoImg}
          alt="John Doe"
          width={200}
          height={200}
          className="rounded-md mx-auto mb-3"
        />
        <h2 className="sm:text-2xl shadow-none flex justify-center text-xl text-gray-600  dark:text-gray-400 mb-4 h-6">
          <ShadowSlideText text={skills[skillIndex]} /><span className='animate-pulse'></span>
        </h2>
        <p className="md:text-sm text-xs  text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
        I&apos;m a passionate developer who loves building intuitive and engaging digital experiences. I focus on clean, efficient solutions that enhance usability and performance. Constantly learning and refining my craft, I strive to bring ideas to life with precision.
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
  );
}
