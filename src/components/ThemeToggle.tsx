import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { HiMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useApplicationContext();
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
