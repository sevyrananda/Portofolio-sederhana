import { FaHeart, FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sevyrananda", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/sevyranandaoctavianti/", label: "LinkedIn", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  ];

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portofolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="relative mt-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50 to-slate-100'}`} />
          
          {/* Animated Orbs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-16">
          {/* Top Section with Newsletter Style */}
          <div className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}
                >
                  Let's Work Together
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-600 dark:text-slate-400"
                >
                  Have a project in mind? Let's create something amazing together.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-start md:justify-end"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <span>Start a Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Brand Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent`}>
                Sevyra Nanda
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Crafting pixel-perfect, high-performance interfaces where code meets creativity.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-lg transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'} ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3"
            >
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4"
            >
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact Info</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-600" size={16} />
                  <a href="mailto:sevyra02@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    sevyra02@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaGithub className="text-blue-600" size={16} />
                  <a href="https://github.com/sevyrananda" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    sevyrananda
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm text-slate-500 dark:text-slate-500 flex items-center gap-1"
              >
                © {currentYear} Sevyra Nanda. 
                <span className="flex items-center gap-1">
                  Made with <FaHeart className="text-red-500 animate-pulse" size={12} /> in Indonesia
                </span>
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex gap-6 text-xs text-slate-500 dark:text-slate-500"
              >
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookie Policy</a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all z-50 ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <FaArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      </footer>
    </>
  );
}

export default Footer;