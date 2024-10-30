import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ic from "../assets/js.png"
import ic1 from "../assets/git.png"
import ic3 from "../assets/github.png"
import ic4 from "../assets/java.png"
import ic5 from "../assets/programing.png"
import ic6 from "../assets/atom.png"
import ic7 from "../assets/nextjs.png"
import ic8 from "../assets/express.png"
import ic9 from "../assets/mongodb.png"
import myImage from "../assets/myImage.jpg"

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
    <div className="container mx-auto px-4 py-8 mt-14">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        About Me
      </motion.h1>
      <div className="grid gap-6 md:grid-cols-2">
      <Section title="My Journey" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-32 h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={myImage}
                alt="Your Name"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <p className="text-sm">
            My professional journey began in 2017 with tool engineering at the Delhi Institute of Tool Engineering (DITE). In 2021, I took on the role of Assistant Engineer in the Tool Room Department, where I gained valuable experience in precision and design. However, I soon realized my true passion lay in the dynamic field of software engineering. Driven by this interest, I transitioned into tech and am now pursuing a B.Tech in Information Technology to align my career with my ambitions.
            </p>
          </div>
        </Section>
        <Section title="Technical Skills" delay={0.3}>
          <div className="grid grid-cols-6 gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.05 * index }}
              >
                <img src={skill.icon} alt={skill.name} width={24} height={24} className="mb-1" />
                <span className="text-xs font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </Section>
        <Section title="Education" delay={0.4}>
          <div className='space-y-2'>
          <p className="text-sm">
            <span className='font-semibold'>B-Tech in Information Technology-(2022-2026)</span><br />
            Dr. akhilesh das gupta institute of professional studies,IPU
          </p>
          <p className="text-sm">
            <span className='font-semibold'>Diploma in tool engineering-(2017-2021)</span><br />
            Delhi institute of tool engineering,IPU
          </p>
          </div>
        </Section>
        <Section title="Achievements" delay={0.5}>
          <ul className="list-disc list-inside text-sm">
            <li>1st Place, National Coding Competition 2021</li>
            <li>Published 3 mobile apps with 100k+ downloads</li>
            <li>Open source contributor to React Native</li>
          </ul>
        </Section>
        <Section title="Contact" delay={0.6}>
          <div className="text-sm">
            <p>Email: <Link target='blank'
              to="mailto:dayasagarconnect@gmail.com"
              className="hover:underline"
            >
              {" "}
              dayasagarconnect@gmail.com
            </Link></p>
            <p>Phone: +91 8800715029</p>
            <div className="mt-2">
              <Link to="https://github.com/Dayasagar88" target="_blank" rel="noopener noreferrer" className="mr-4 text-blue-500 hover:text-blue-600">GitHub</Link>
              <Link to="https://www.linkedin.com/in/daya-sagar-903676179?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bj8nlo7iKQjqQYauQrVoNeg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">LinkedIn</Link>
            </div>
          </div>
        </Section>
      </div>
      <hr className='mt-8' />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 text-center"
      >
        <Link to="https://drive.usercontent.google.com/download?id=10GHqIpeUbjIQZrPOHm25GtIQRBEtAPE2&export=download&authuser=1&confirm=t&uuid=376d8727-6246-4255-9fcd-848c601fe3e0&at=AN_67v2ccZ3uTtVE1OjUTF12Fn5f:1730196251290" className="inline-block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-bold py-2 px-4 rounded text-sm transition duration-300">
          Download Resume
        </Link>
      </motion.div>
    </div>
  )
}

const Section = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </motion.div>
)