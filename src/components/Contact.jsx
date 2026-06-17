import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const { darkMode } = useContext(ThemeContext);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/sevyrananda",
      label: "GitHub",
      color: "#333",
      bg: "hover:bg-[#333]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/sevyranandaoctavianti/",
      label: "LinkedIn",
      color: "#0077B5",
      bg: "hover:bg-[#0077B5]",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/",
      label: "Instagram",
      color: "#E4405F",
      bg: "hover:bg-[#E4405F]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-10 md:py-15 px-6 md:px-12 overflow-hidden scroll-mt-28"
    >
      {/* Background Decoration - Lebih dramatis */}
      <div className="absolute inset-0 pointer-events-none ">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] ${darkMode ? "bg-blue-500/15" : "bg-blue-200/40"}`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] ${darkMode ? "bg-purple-500/15" : "bg-purple-200/40"}`}
        />
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? "bg-cyan-500/5" : "bg-cyan-200/20"}`}
        />
      </div>

      <div
        className={`
  max-w-4xl mx-auto relative z-10
  backdrop-blur-sm border rounded-3xl
  px-6 py-8 md:px-10 md:py-10
  ${
    darkMode
      ? "bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-slate-700"
      : "bg-gradient-to-r from-white/80 to-gray-50/80 border-slate-200 shadow-xl"
  }
`}
      >
        {/* Header dengan efek glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 mb-4"
          >
            <span className="text-2xl">📬</span>
            <span
              className={`text-sm font-medium ${darkMode ? "text-cyan-400" : "text-blue-600"}`}
            >
              Let's Connect
            </span>
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-5" />
          <p
            className={`text-base md:text-lg max-w-xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            I'm always excited to work on new projects and meet creative people
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                whileHover={{ y: -5, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`
        relative group p-4 rounded-2xl transition-all duration-300
        ${
          darkMode
            ? "bg-slate-800/60 border border-slate-700 text-gray-400"
            : "bg-white border border-gray-200 text-gray-700 shadow-md hover:shadow-lg hover:border-gray-300"
        }
        ${!darkMode && "hover:text-white"}
        ${social.bg}
      `}
              >
                <social.icon size={24} />
                <span
                  className={`
        absolute -bottom-8 left-1/2 transform -translate-x-1/2 
        text-xs whitespace-nowrap transition-all duration-300
        font-medium
        ${
          darkMode
            ? "text-gray-400 opacity-0 group-hover:opacity-100"
            : "text-gray-500 opacity-0 group-hover:opacity-100"
        }
      `}
                >
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`
            relative overflow-hidden rounded-2xl text-center
          `}
        >
          <div className="relative">
            <motion.a
              href="mailto:sevyra02@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 transition-all"
            >
              <FaEnvelope size={18} />
              <span>Hire Me</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8"
        >
          <p
            className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            📍 Based in Indonesia • Available worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
