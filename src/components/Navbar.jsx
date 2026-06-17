import { useContext, useState, useEffect, useRef, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const menuItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Optimized scroll spy dengan throttle
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Jangan update active section saat sedang scroll dari klik menu
          if (isScrolling.current) return;
          
          const scrollPosition = window.scrollY + 120; // offset untuk navbar
          
          // Cari section yang aktif
          for (const item of menuItems) {
            const element = document.getElementById(item.id);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (
                scrollPosition >= offsetTop &&
                scrollPosition < offsetTop + offsetHeight
              ) {
                if (activeSection !== item.id) {
                  setActiveSection(item.id);
                }
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inisialisasi awal

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeSection]);

  // Optimized smooth scroll
  const handleClick = useCallback((e, href, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      // Set flag bahwa sedang scrolling
      isScrolling.current = true;
      
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      
      // Langsung update active section
      setActiveSection(id);
      
      // Smooth scroll dengan promise
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      
      // Reset flag setelah scroll selesai
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 800); // Durasi smooth scroll biasanya 500-800ms
    }
  }, []);

  const menuClass = darkMode
    ? "text-gray-300 hover:text-cyan-400 transition"
    : "text-gray-700 hover:text-blue-600 transition";

  const activeClass = darkMode
    ? "text-cyan-400 border-b-2 border-cyan-400"
    : "text-blue-600 border-b-2 border-blue-600";

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50
          backdrop-blur-md
          border-b
          transition-all duration-300
          ${
            darkMode
              ? "bg-slate-900/80 border-slate-700"
              : "bg-white/80 border-slate-200"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo - bisa diklik ke atas */}
          <a 
            href="#about" 
            onClick={(e) => handleClick(e, "#about", "about")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={logo} alt="Logo Image" className="w-10 h-10 rounded-lg" />
            <h1
              className={`
                text-2xl md:text-3xl font-bold
                ${darkMode ? "text-white" : "text-gray-800"}
              `}
            >
              Portfolio.
            </h1>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.id)}
                className={`
                  relative py-2 cursor-pointer
                  ${activeSection === item.id ? activeClass : menuClass}
                  transition-all duration-300
                  font-medium
                `}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${darkMode ? "bg-cyan-400" : "bg-blue-600"}`}
                    transition={{ type: "spring", stiffness: 380, damping: 30, duration: 0.3 }}
                  />
                )}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes
                size={24}
                className={darkMode ? "text-white" : "text-gray-800"}
              />
            ) : (
              <FaBars
                size={24}
                className={darkMode ? "text-white" : "text-gray-800"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.3 }}
            className={`
              fixed top-0 right-0 w-full max-w-sm h-screen z-40
              backdrop-blur-xl
              shadow-2xl
              md:hidden
              ${
                darkMode
                  ? "bg-slate-900/95 border-l border-slate-700"
                  : "bg-white/95 border-l border-slate-200"
              }
            `}
          >
            <div className="flex flex-col pt-24 px-8 gap-6">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href, item.id)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.2 }}
                  className={`
                    text-xl font-medium py-3 px-4 rounded-xl
                    transition-all duration-200
                    ${
                      activeSection === item.id
                        ? darkMode
                          ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400"
                          : "bg-blue-500/10 text-blue-600 border-l-4 border-blue-600"
                        : darkMode
                          ? "text-gray-300 hover:bg-slate-800"
                          : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* Mobile Theme Toggle */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between px-4">
                  <span
                    className={darkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    Dark Mode
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay background when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;