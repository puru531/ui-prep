import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { useUser } from "@/services/apiAuth";
import { HiArrowLeftOnRectangle, HiArrowRightOnRectangle, HiBookOpen, HiMoon, HiOutlineSun } from "react-icons/hi2";

type SideBarProps = {
  handleSideBarMenuClick: (value: string) => void;
};

const SideBar = ({ handleSideBarMenuClick }: SideBarProps) => {
  const { isDarkMode, toggleDarkMode, setShowLoginWindow } = useApplicationContext();
  const { isAuthenticated } = useUser();

  function toggleTheme() {
    toggleDarkMode();
    handleSideBarMenuClick("");
  }
  return (
    <div
      className="sidebar theme-light fixed right-0 top-12 z-10 h-auto w-1/2 overflow-y-auto rounded-b-xl transition duration-200
      ease-in-out"
    >
      <div className="flex flex-col">
        <div
          onClick={() => handleSideBarMenuClick("js")}
          className="nav-sidebar"
        >
          <HiBookOpen className="h3-bold" />
          <span className="ml-1">JavaScript</span>
        </div>
        <div
          onClick={() => handleSideBarMenuClick("react")}
          className="nav-sidebar"
        >
          <HiBookOpen className="h3-bold" />
          <span className="ml-1">React.Js</span>
        </div>
        <div
          onClick={toggleTheme}
          className="nav-sidebar border-t-2 border-slate-800 dark:border-slate-100"
        >
          {isDarkMode ? (
            <div className="flex">
              <HiOutlineSun className="h3-bold" />
              <span className="ml-1">Light Mode</span>
            </div>
          ) : (
            <div className="flex">
              <HiMoon className="h3-bold" />
              <span className="ml-1">Dark Mode</span>
            </div>
          )}
        </div>
        <div
          className="nav-sidebar border-t-2 border-slate-800 dark:border-slate-100"
        >
          {isAuthenticated ? (
            <div className="flex" onClick={()=> console.log('implement logout')}>
              <HiArrowRightOnRectangle className="h3-bold" />
              <span className="ml-1">Logout</span>
            </div>
          ) : (
            <div className="flex" onClick={()=> setShowLoginWindow(true)}>
              <HiArrowLeftOnRectangle className="h3-bold" />
              <span className="ml-1">Login</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
