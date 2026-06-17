import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import {
  FaMoon,
  FaSun
} from "react-icons/fa";

function ThemeToggle() {

  const {
    darkMode,
    setDarkMode
  } = useContext(ThemeContext);

  return (
    <button
      onClick={() =>
        setDarkMode(!darkMode)
      }
      className="
      p-3
      rounded-full
      bg-slate-800
      text-white
      hover:scale-110
      duration-300
      "
    >
      {darkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}

export default ThemeToggle;