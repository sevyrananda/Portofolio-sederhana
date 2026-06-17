import { useState, useEffect } from "react";

export default function Typewriter({
  words = [],
  speed = 120,
  delay = 2000,
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[index] || "";

    // Selesai mengetik satu kata
    if (!reverse && subIndex === currentWord.length) {
      const waitTimeout = setTimeout(() => {
        setReverse(true);
      }, delay);

      return () => clearTimeout(waitTimeout);
    }

    // Selesai menghapus satu kata
    if (reverse && subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const typingTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2.5 : speed);

    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="relative inline-flex items-center">
      <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {words[index]?.substring(0, subIndex) || ""}
      </span>

      <span
        className={`ml-1 transition-opacity duration-100 ${
          blink ? "opacity-100" : "opacity-0"
        }`}
      >
        |
      </span>
    </span>
  );
}