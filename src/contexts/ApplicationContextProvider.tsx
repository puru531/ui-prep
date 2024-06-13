import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type ApplicationContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showLoginWindow: boolean;
  setShowLoginWindow: Dispatch<SetStateAction<boolean>>;
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

const ApplicationContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true",
  );
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const [showLoginWindow, setShowLoginWindow] = useState(false)


  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const contextValue: ApplicationContextType = {
    isDarkMode,
    toggleDarkMode,
    showLoginWindow,
    setShowLoginWindow
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

function useApplicationContext(): ApplicationContextType{
  const context = useContext(ApplicationContext);
  if (!context)
    throw new Error("ThemeContext was used outside of the ThemeProvider.");
  return context;
}

export { ApplicationContextProvider, useApplicationContext };
