import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaPython,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaRocket,
  FaHandshake,
  FaCode,
  FaServer,
  FaCloud,
  FaUserFriends,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVuedotjs,
  SiMysql,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";

function Skills() {
  const { darkMode } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend", icon: FaCode, color: "from-blue-500 to-cyan-500" },
    { id: "backend", label: "Backend", icon: FaServer, color: "from-purple-500 to-pink-500" },
    { id: "database", label: "Database & DevOps", icon: FaCloud, color: "from-green-500 to-emerald-500" },
    { id: "softskills", label: "Soft Skills", icon: FaUserFriends, color: "from-orange-500 to-red-500" },
  ];

  // Function to get level based on percentage
  const getLevel = (percentage) => {
    if (percentage >= 90) return { name: "Expert", color: "text-purple-500", bg: "bg-purple-500/20", icon: "🏆" };
    if (percentage >= 80) return { name: "Advanced", color: "text-blue-500", bg: "bg-blue-500/20", icon: "⭐" };
    if (percentage >= 70) return { name: "Intermediate", color: "text-green-500", bg: "bg-green-500/20", icon: "📚" };
    return { name: "Beginner", color: "text-yellow-500", bg: "bg-yellow-500/20", icon: "🌱" };
  };

  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React.js", icon: FaReact, color: "#61DAFB", level: 85, experience: "±2 years" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 80, experience: "±1 years" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 86, experience: "±3 years" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#3178C6", level: 80, experience: "±1 years" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: 82, experience: "±1 years" },
        { name: "HTML5/CSS3", icon: FaHtml5, color: "#E34F26", level: 88, experience: "±3 years" },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Laravel", icon: FaLaravel, color: "#FF2D20", level: 88, experience: "±2 years" },
        { name: "Python", icon: FaPython, color: "#3776AB", level: 85, experience: "±1 years" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 82, experience: "± years" },
      ],
    },
    database: {
      title: "Database & DevOps",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 88, experience: "±2 years" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 85, experience: "±1 years" },
        { name: "Git", icon: FaGitAlt, color: "#F05032", level: 89, experience: "±3 years" },
      ],
    },
    softskills: {
      title: "Soft Skills",
      icon: "💫",
      skills: [
        { name: "Team Collaboration", icon: FaUsers, color: "#FF6B6B", level: 88, experience: "Always" },
        { name: "Problem Solving", icon: FaLightbulb, color: "#FFD93D", level: 90, experience: "4+ years" },
        { name: "Communication", icon: FaComments, color: "#6BCB77", level: 88, experience: "4+ years" },
        { name: "Time Management", icon: FaClock, color: "#4D96FF", level: 90, experience: "4+ years" },
        { name: "Agile/Scrum", icon: FaRocket, color: "#9B59B6", level: 85, experience: "1+ years" },
        { name: "Leadership", icon: FaHandshake, color: "#FF8C42", level: 82, experience: "2+ years" },
      ],
    },
  };

  const currentData = skillsData[activeTab];
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <section id="skills" className="flex items-center py-15 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4" />
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Explore my technical expertise and professional competencies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group relative px-5 py-2.5 rounded-xl font-medium text-sm
                  transition-all duration-300 flex items-center gap-2
                  ${isActive
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : darkMode
                      ? "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
                      : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tab.color} -z-10`}
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Category Title */}
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-200 dark:border-slate-700">
              <span className="text-3xl">{currentData.icon}</span>
              <div>
                <h3 className={`text-xl md:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {currentData.title}
                </h3>
                <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${currentTab.color} mt-1`} />
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentData.skills.map((skill, idx) => {
                const levelInfo = getLevel(skill.level);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`
                      p-5 rounded-xl transition-all duration-300
                      backdrop-blur-sm border cursor-default group
                      ${darkMode
                        ? "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50"
                        : "bg-white/50 border-slate-200 hover:border-blue-500/50 shadow-sm"
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="p-3 rounded-xl transition-all group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <skill.icon className="text-2xl" style={{ color: skill.color }} />
                      </div>

                      {/* Skill Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                            {skill.name}
                          </h4>
                          {/* Level Badge */}
                          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${levelInfo.bg} ${levelInfo.color}`}>
                            <span>{levelInfo.icon}</span>
                            <span>{levelInfo.name}</span>
                          </div>
                        </div>

                        {/* Experience */}
                        <p className={`text-xs mb-3 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                          📅 {skill.experience} experience
                        </p>

                        {/* Progress Bar dengan Label */}
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Proficiency</span>
                            <span className={`font-mono font-semibold ${darkMode ? "text-cyan-400" : "text-blue-600"}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="relative h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className={`absolute h-full rounded-full bg-gradient-to-r ${currentTab.color}`}
                            />
                          </div>
                        </div>

                        {/* Stars Rating */}
                        <div className="flex gap-0.5 mt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className={`w-3 h-3 ${star <= Math.round(skill.level / 20) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Level Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mt-8 text-xs"
        >
          <div className="flex items-center gap-1">
            <span>🏆</span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Advanced (80-89%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📚</span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Intermediate (70-79%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span>🌱</span>
            <span className={darkMode ? "text-gray-400" : "text-gray-500"}>Beginner (60-69%)</span>
          </div>
        </motion.div>

        {/* Additional Tools Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div
            className={`
              rounded-2xl p-6 text-center
              backdrop-blur-sm border
              ${darkMode
                ? "bg-slate-800/30 border-slate-700"
                : "bg-white/30 border-slate-200"
              }
            `}
          >
            <h3 className={`text-sm font-semibold mb-4 uppercase tracking-wider ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              🛠️ Additional Tools & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "VS Code", "Postman", "Figma", "Jira", "Notion",
                "GitHub Actions", "Vercel", "Netlify", "AWS",
              ].map((tool, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.02 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`
                    px-3 py-1.5 rounded-full text-xs font-medium
                    border transition-all duration-300 cursor-default
                    ${darkMode
                      ? "bg-slate-800 border-slate-700 text-gray-300 hover:border-cyan-500/50"
                      : "bg-white border-slate-200 text-gray-600 hover:border-blue-500/50 shadow-sm"
                    }
                  `}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}

export default Skills;