import { useTheme } from "@/contexts/ThemeProvider";
import { HiMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <button onClick={() => toggleDarkMode()}>
      {isDarkMode ? (
        <HiOutlineSun className="h3-bold" />
      ) : (
        <HiMoon className="h3-bold" />
      )}
    </button>
  );
};

export default ThemeToggle;
