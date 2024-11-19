import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme; default to light mode if none is found
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // Default is light mode (false)
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className=" bg-gray-100 dark:bg-gray-900 fixed w-full ">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl text-gray-600 dark:text-gray-300">
            Daya Sagar
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <NavLink to="/contact">Contact</NavLink> */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className=" md:hidden space-x-4 flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative">
                {/* Menu Icon */}
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} // Initial state with scaling
                    animate={{
                      opacity: 1,
                      scale: 1, // Scale up when visible
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8, // Scale down when hiding
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu />
                  </motion.div>
                )}

                {/* X Icon */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }} // Initial state with scaling
                    animate={{
                      opacity: 1,
                      scale: 1, // Scale up when visible
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8, // Scale down when hiding
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <X />
                  </motion.div>
                )}
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col items-center mt-4 space-y-2"
          >
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/work" onClick={() => setIsOpen(false)}>
              Work
            </NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block py-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
