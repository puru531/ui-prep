import React, { useEffect, useState } from "react";
import { HiMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <HiOutlineSun className="h3-bold" />
      ) : (
        <HiMoon className="h3-bold" />
      )}
    </button>
  );
};

export default ThemeToggle;
