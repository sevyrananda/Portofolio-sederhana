import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";
import PdfPreview from "./PdfPreview";
import { useState, useContext } from "react";

export default function Hero() {
  const { darkMode } = useContext(ThemeContext);

  const a = {
    text: "text-[#0f254c] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-sky-300 dark:via-cyan-300 dark:to-blue-400 font-extrabold",
    badge:
      "border-slate-200/50 bg-white/80 backdrop-blur-sm text-slate-700 dark:border-slate-700/50 dark:bg-slate-900/80 dark:text-white",
    pingBg: "bg-[#002B49] dark:bg-sky-400",
    gradient:
      "from-[#002B49] to-[#0A192F] dark:from-sky-300 dark:via-slate-200 dark:to-white",
    glowBg: "rgba(14,165,233,0.15)",
    bgAtmosphereLeft: "bg-sky-500/10 dark:bg-sky-900/10",
    bgAtmosphereRight: "bg-[#002B49]/5 dark:bg-[#112a52]/10",
  };

  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen pt-28 pb-10 flex items-center transition-all duration-700"
    >
      {/* Enhanced Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] blur-[120px] rounded-full transition-all duration-700 ${a.bgAtmosphereLeft}`}
        />
        <div
          className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] blur-[150px] rounded-full transition-all duration-700 ${a.bgAtmosphereRight}`}
        />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#6366f1]/10 dark:bg-[#6366f1]/10 blur-[100px] rounded-full" />

        {/* Additional gradient orbs for depth */}
        <div className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] rounded-full animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT DETAILS - Enhanced Typography */}
          <div
            className="
    order-2
    lg:order-1
    lg:col-span-7
    flex
    flex-col
    items-start
    text-left
  "
          >
            {/* Enhanced Working badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center gap-2.5 px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm ${a.badge}`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${a.pingBg}`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${a.pingBg}`}
                ></span>
              </span>
              Available for worldwide roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`
                text-[36px]
              sm:text-[56px]
              md:text-[72px]
              lg:text-[80px]
                leading-[0.95]
                font-extrabold
                tracking-tighter
                mb-5
                ${
                  darkMode
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100"
                    : "text-slate-900"
                }
              `}
            >
              Sevyra Nanda
            </motion.h1>

            {/* Enhanced Dynamic typing row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`
                text-xl
                sm:text-2xl
                font-semibold
                mb-4
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1
                ${darkMode ? "text-slate-200" : "text-slate-800"}
              `}
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Software Developer
              </span>
              <span className="text-blue-900 dark:text-slate-600">✦</span>
              <span
                className={`${a.text} font-mono text-lg sm:text-xl font-bold transition-colors duration-500`}
              >
                <Typewriter
                  words={[
                    "Full-Stack Web Developer",
                    "React & Next.js Enthusiast",
                    "Laravel Developer",
                    "Codeigniter Developer",
                    "Continuous Learner",
                  ]}
                  speed={100}
                  delay={2000}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-6 text-justify"
            >
              I am a person who has a high desire to learn, is responsible, and
              has quite good time management. I am quite experienced in software
              development using SDLC and Agile methods in developing websites.
              In creating websites I have used React.js, next.js for the front
              end framework. For the backend framework I use Laravel and
              CodeIgniter.
            </motion.p>

            {/* Enhanced Grid actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              <button
                onClick={() => setShowCV(true)}
                id="hero-preview-cv-btn"
                className="
                  group
                  relative
                  w-full sm:w-auto
                  px-8 py-4
                  bg-gradient-to-r from-blue-700 to-blue-600
                  text-white
                  font-bold
                  rounded-xl
                  shadow-lg shadow-blue-700/25
                  hover:shadow-xl hover:shadow-blue-700/30
                  hover:from-blue-600 hover:to-blue-500
                  transition-all
                  active:scale-95
                  cursor-pointer
                  text-sm
                  tracking-wide
                  overflow-hidden
                  dark:from-blue-600
                  dark:via-blue-500
                  dark:to-blue-400
                "
              >
                <span className="relative z-10">Curriculum Vitae</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </button>

              <a
                href="#projects"
                className={`
                  group
                  relative
                  w-full sm:w-auto
                  px-8 py-4
                  border-2
                  font-bold
                  rounded-xl
                  shadow-sm
                  transition-all
                  text-sm
                  tracking-wide
                  text-center
                  overflow-hidden
                  ${
                    darkMode
                      ? "border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                      : "border-slate-300 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                  }
                `}
              >
                <span className="relative z-10">View Project</span>
                {!darkMode && (
                  <div className="absolute inset-0 bg-slate-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </a>
            </motion.div>

            {/* Enhanced Social links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-5 mt-5 md:mt-5"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                Connect Hub:
              </span>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://github.com/sevyrananda",
                    icon: FaGithub,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/sevyranandaoctavianti/",
                    icon: FaLinkedinIn,
                    label: "LinkedIn",
                  },
                  { href: "#contact", icon: FaEnvelope, label: "Email" },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl border transition-all ${
                      darkMode
                        ? "border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-cyan-500/50 text-slate-300 hover:text-white"
                        : "border-slate-200 bg-white hover:bg-slate-50 hover:border-cyan-500/50 text-slate-600 hover:text-slate-900 shadow-sm"
                    }`}
                    aria-label={`${social.label} profile`}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Enhanced Immersive concentric visuals */}
          <div
            className="
    order-1
    lg:order-2
    lg:col-start-8
    lg:col-span-5
    relative
    flex
    justify-center
    items-center
    h-[320px]
    sm:h-[400px]
    lg:h-[480px]
  "
          >
            {/* Enhanced Circular Concentric Orbs */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className={`w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border transition-all duration-1000 ${darkMode ? "border-sky-500/20 animate-[spin_80s_infinite_linear]" : "border-slate-200"}`}
              />
              <div
                className={`absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border-2 border-dashed transition-all duration-1000 ${darkMode ? "border-slate-500/20 animate-[spin_50s_infinite_reverse_linear]" : "border-slate-200/80"}`}
              />
              <div
                className={`absolute w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full border border-dotted transition-all duration-1000 ${darkMode ? "border-sky-350/15 animate-[spin_120s_infinite_linear]" : "border-slate-100"}`}
              />

              {/* Particle effects around circles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${
                    darkMode ? "bg-cyan-400/60" : "bg-blue-400/60"
                  }`}
                  style={{
                    transform: `rotate(${i * 30}deg) translateX(${darkMode ? 220 : 240}px)`,
                    animation: `pulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>

            {/* Enhanced Elegant Circular Portrait Shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
              className="relative group cursor-pointer"
            >
              {/* Premium Outer Ambient Aura Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 -m-6 blur-3xl rounded-full ${darkMode ? "bg-sky-600/20" : "bg-[#002B49]/15"}`}
              />

              {/* Main Profile Shield */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${
                  darkMode
                    ? "border-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 shadow-[0_0_50px_rgba(14,165,233,0.3)]"
                    : "border-white shadow-xl shadow-slate-200/50"
                }`}
                style={{
                  boxShadow: darkMode
                    ? `0 25px 50px -12px rgba(0,0,0,0.8), 0 0 35px ${a.glowBg}`
                    : `0 20px 45px -12px rgba(148,163,184,0.3), 0 0 35px ${a.glowBg}`,
                }}
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-spin-slow pointer-events-none" />

                {/* Decorative digital layout grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none mix-blend-overlay" />

                <img
                  src="/foto.png"
                  alt="Sevyra Nanda Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://picsum.photos/seed/sevyra/400/400";
                  }}
                />

                {/* Enhanced status indicator */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full backdrop-blur-md border text-[10px] font-mono flex items-center gap-2 z-30 transition-all ${
                    darkMode
                      ? "bg-slate-950/80 border-slate-700 text-emerald-400"
                      : "bg-white/95 border-slate-200 text-emerald-600 shadow-sm"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 absolute animate-pulse" />
                  <span className="relative">Ready to Deploy</span>
                </motion.div>
              </motion.div>

              {/* Enhanced floating tech cards */}
              {[
                {
                  text: "React.js",
                  position: "top-4 -right-7",
                  gradient: "from-violet-500 to-purple-500",
                  delay: 0,
                },
                {
                  text: "Python.lib",
                  position: "top-1/2 -left-14",
                  gradient: "from-indigo-500 to-blue-500",
                  delay: 0.2,
                },
                {
                  text: "Laravel 11",
                  position: "-bottom-4 -right-6",
                  gradient: "from-fuchsia-500 to-pink-500",
                  delay: 0.4,
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: idx === 0 ? 20 : idx === 1 ? -20 : 20,
                    y: idx === 1 ? 0 : -20,
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.5 + card.delay, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`absolute ${card.position} px-4 py-2 backdrop-blur-md border rounded-xl text-xs font-mono z-30 shadow-lg font-semibold cursor-pointer transition-all select-none
                    ${
                      darkMode
                        ? "bg-slate-950/90 border-white/20 text-white hover:border-white/40"
                        : "bg-white/95 border-slate-200 text-slate-700 shadow-sm hover:border-cyan-400"
                    }`}
                >
                  <span
                    className={`bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                  >
                    {card.text}
                  </span>
                </motion.div>
              ))}

              {/* Additional decorative ring */}
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-sky-500/20 animate-[spin_20s_infinite_linear]" />
            </motion.div>
          </div>
        </div>
      </div>

      <PdfPreview
        isOpen={showCV}
        onClose={() => setShowCV(false)}
        darkMode={darkMode}
      />

      {/* Add keyframes for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
