import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaEye,
  FaTimes,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  const { darkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Get unique categories
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  // Get category display names
  const categoryLabels = {
    all: "📁 All Projects",
    "Web App": "🌐 Web Apps",
    "AI/ML": "🤖 AI/ML",
    Design: "🎨 Design",
  };

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Show only 6 projects initially, or all if showAll is true
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  // Get featured projects count
  const featuredProjects = projects.filter((p) => p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="projects"
      className="py-8 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 right-10 w-72 h-72 rounded-full blur-[100px] ${darkMode ? "bg-purple-500/10" : "bg-purple-200/30"}`}
        />
        <div
          className={`absolute bottom-20 left-10 w-96 h-96 rounded-full blur-[120px] ${darkMode ? "bg-cyan-500/10" : "bg-cyan-200/30"}`}
        />
      </div>

      {/* Container utama dengan center yang tepat */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4" />
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto px-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Some of my best work showcasing my skills and creativity
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Tabs - Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-72 xl:w-80 flex-shrink-0"
          >
            <div
              className={`
            sticky top-24 rounded-2xl p-4 md:p-5
            backdrop-blur-sm border
            ${
              darkMode
                ? "bg-slate-800/50 border-slate-700"
                : "bg-white/50 border-slate-200 shadow-sm"
            }
          `}
            >
              {/* Categories Section */}
              <div className="mb-4 lg:mb-0">
                {/* Header Categories */}
                <div className="flex items-center justify-between mb-3 lg:mb-4 lg:pb-3 lg:border-b lg:border-slate-200 dark:lg:border-slate-700">
                  <h3
                    className={`font-semibold text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    📂 Categories
                  </h3>
                  <span
                    className={`text-xs lg:hidden ${darkMode ? "text-gray-500" : "text-gray-400"}`}
                  >
                    swipe →
                  </span>
                </div>

                {/* Categories Buttons */}
                <div className="lg:block">
                  {/* Mobile: Horizontal scroll */}
                  <div className="overflow-x-auto pb-3 -mx-1 px-1 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">
                    <div className="flex gap-2 min-w-max lg:flex-col lg:gap-1">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveCategory(category);
                            setShowAll(false);
                          }}
                          className={`
              flex-shrink-0 lg:w-full
              px-4 py-2 lg:px-3 lg:py-2
              rounded-full lg:rounded-lg
              text-sm lg:text-base
              font-medium lg:font-normal
              transition-all duration-300 
              whitespace-nowrap lg:whitespace-normal
              flex items-center justify-between group
              ${
                activeCategory === category
                  ? darkMode
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 lg:from-blue-600/20 lg:to-cyan-600/20 text-white lg:text-cyan-400 lg:border-l-2 lg:border-cyan-400"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 lg:from-blue-600/10 lg:to-cyan-600/10 text-white lg:text-blue-600 lg:border-l-2 lg:border-blue-600"
                  : darkMode
                    ? "bg-slate-700/50 lg:bg-transparent text-gray-300 hover:bg-slate-700 lg:hover:bg-slate-700"
                    : "bg-gray-100 lg:bg-transparent text-gray-700 hover:bg-gray-200 lg:hover:bg-gray-100"
              }
            `}
                        >
                          <span className="truncate">
                            {category === "all"}
                            {category === "Web App"}
                            {category === "AI/ML"}
                            {category === "Design"}
                            {categoryLabels[category] || category}
                          </span>
                          <FaChevronRight
                            size={12}
                            className={`
                hidden lg:block transition-all duration-300 flex-shrink-0
                ${
                  activeCategory === category
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                }
              `}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Stats */}
                <div className="mt-4 lg:mt-6 pt-3 lg:pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`text-2xl lg:text-3xl font-bold ${
                        darkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {featuredProjects.length}
                    </div>

                    <div
                      className={`text-xs mt-1 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Featured Projects
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </motion.div>

          {/* Projects Grid - Kanan */}
          <div className="flex-1 min-w-0">
            {" "}
            {/* Tambahkan min-w-0 untuk mencegah overflow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {displayedProjects.length > 0 ? (
                  <>
                    {/* Grid dengan gap yang responsive */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5"
                    >
                      {displayedProjects.map((project) => (
                        <motion.div
                          key={project.title}
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          className={`
                        group rounded-lg overflow-hidden
                        border transition-all duration-300 h-full flex flex-col
                        ${
                          darkMode
                            ? "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50"
                            : "bg-white border-slate-200 hover:border-blue-500/50 shadow-sm"
                        }
                      `}
                        >
                          {/* Image - tinggi responsif */}
                          <div className="relative overflow-hidden h-40 sm:h-36 md:h-40">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div
                              className="
                            absolute inset-0 bg-black/60
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            flex items-center justify-center gap-2
                          "
                            >
                              <button
                                onClick={() => setSelectedProject(project)}
                                className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
                              >
                                <FaEye className="text-white" size={14} />
                              </button>
                              {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
                              >
                                <FaGithub className="text-white" size={14} />
                              </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-all"
                                >
                                  <FaExternalLinkAlt
                                    className="text-white"
                                    size={12}
                                  />
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Content - padding responsif */}
                          <div className="p-3 md:p-4 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
                              <span
                                className={`
                              text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium
                              ${
                                darkMode
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-blue-100 text-blue-600"
                              }
                            `}
                              >
                                {project.category}
                              </span>
                              {project.featured && (
                                <FaStar
                                  className="text-yellow-500 flex-shrink-0"
                                  size={12}
                                />
                              )}
                            </div>

                            <h3
                              className={`
                            font-semibold text-sm sm:text-base mb-1 line-clamp-1
                            ${darkMode ? "text-white" : "text-gray-800"}
                          `}
                            >
                              {project.title}
                            </h3>

                            <p
                              className={`
                            text-xs mb-3 line-clamp-2 leading-relaxed flex-grow
                            ${darkMode ? "text-gray-400" : "text-gray-600"}
                          `}
                            >
                              {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-auto">
                              {project.tech?.slice(0, 2).map((tech, i) => (
                                <span
                                  key={i}
                                  className={`
                                text-[9px] sm:text-[10px] px-2 py-0.5 rounded
                                ${
                                  darkMode
                                    ? "bg-slate-700 text-gray-300"
                                    : "bg-gray-100 text-gray-600"
                                }
                              `}
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.tech?.length > 2 && (
                                <span
                                  className={`
                                text-[9px] sm:text-[10px] px-2 py-0.5 rounded
                                ${
                                  darkMode
                                    ? "bg-slate-700 text-gray-300"
                                    : "bg-gray-100 text-gray-600"
                                }
                              `}
                                >
                                  +{project.tech.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Button dan counter - responsive */}
                    {hasMoreProjects && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mt-8 md:mt-10"
                      >
                        <button
                          onClick={() => setShowAll(!showAll)}
                          className={`
                        inline-flex items-center gap-2
                        px-5 md:px-6 py-2.5 rounded-lg text-sm font-medium
                        transition-all duration-300
                        ${
                          darkMode
                            ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }
                      `}
                        >
                          {showAll ? (
                            <>
                              <FaChevronUp size={14} />
                              <span>Show Less</span>
                            </>
                          ) : (
                            <>
                              <FaChevronDown size={14} />
                              <span>Show More</span>
                            </>
                          )}
                        </button>
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center mt-6"
                    >
                      <p
                        className={`text-xs sm:text-sm ${
                          darkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {displayedProjects.length} / {filteredProjects.length}{" "}
                        Projects
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <div
                    className={`text-center py-12 rounded-xl ${darkMode ? "bg-slate-800/50" : "bg-gray-50"}`}
                  >
                    <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                      No projects in "{activeCategory}" category yet.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* GitHub Link - responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://github.com/sevyrananda"
            target="_blank"
            rel="noopener noreferrer"
            className={`
          group inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base
          transition-all duration-300
          ${
            darkMode
              ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
          }
        `}
          >
            <FaGithub size={18} />
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt
              size={14}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`
                relative max-w-lg w-full rounded-xl overflow-hidden
                ${darkMode ? "bg-slate-900" : "bg-white"}
              `}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              >
                <FaTimes className="text-white" size={16} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`
                    text-xs px-2 py-0.5 rounded-full font-medium
                    ${
                      darkMode
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }
                  `}
                  >
                    {selectedProject.category}
                  </span>
                  {selectedProject.featured && (
                    <div className="flex items-center gap-1 text-yellow-500">
                      <FaStar size={12} />
                      <span className="text-xs">Featured</span>
                    </div>
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}
                >
                  {selectedProject.title}
                </h3>

                <p
                  className={`text-sm mb-3 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                >
                  {selectedProject.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedProject.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-0.5 rounded-md ${darkMode ? "bg-slate-800 text-gray-400" : "bg-gray-100 text-gray-600"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                      transition-all
                      ${
                        darkMode
                          ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                      }
                    `}
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                        transition-all
                        ${
                          darkMode
                            ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-cyan-400"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600"
                        }
                      `}
                    >
                      <FaExternalLinkAlt size={12} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
