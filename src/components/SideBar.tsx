import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { useLogout, useUser } from "@/services/apiAuth";
import { Loader } from "@/ui";
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
  HiHome,
  HiMiniUserCircle,
  HiMoon,
  HiOutlineSun,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

type SideBarProps = {
  handleSideBarMenuClick: (value: string) => void;
};

const SideBar = ({ handleSideBarMenuClick }: SideBarProps) => {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode, setShowLoginWindow } =
    useApplicationContext();
  const { isAuthenticated } = useUser();
  const { logout, isLoading } = useLogout();

  function toggleTheme() {
    toggleDarkMode();
    handleSideBarMenuClick("");
  }
  function handleLogout(): void {
    logout();
    handleSideBarMenuClick("");
  }
  function goToHomepage(): void {
    navigate("/");
    handleSideBarMenuClick("");
  }

  if (isLoading) return <Loader />;

  return (
    <div
      className="sidebar theme-light fixed right-0 top-[55px] z-10 h-auto w-1/2 overflow-y-auto rounded-b-xl transition duration-200
      ease-in-out"
    >
      <div className="flex flex-col">
        <div onClick={() => goToHomepage()} className="nav-sidebar">
          <div className="flex items-center">
            <HiHome className="h3-bold" />
            <span className="ml-1">Home</span>
          </div>
        </div>
        <div className="border-t-2 border-slate-800 dark:border-slate-100" />
        <div onClick={toggleTheme} className="nav-sidebar">
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
        <div className="border-t-2 border-slate-800 dark:border-slate-100" />
        <div className="nav-sidebar">
          {isAuthenticated ? (
            <div className="flex" onClick={handleLogout}>
              <HiArrowRightOnRectangle className="h3-bold" />
              <span className="ml-1">Logout</span>
            </div>
          ) : (
            <div className="flex" onClick={() => setShowLoginWindow(true)}>
              <HiArrowLeftOnRectangle className="h3-bold" />
              <span className="ml-1">Login</span>
            </div>
          )}
        </div>
        {isAuthenticated && (
          <div
            className="nav-sidebar flex"
            onClick={() => {
              handleSideBarMenuClick("admin");
            }}
          >
            <HiMiniUserCircle className="h3-bold" />
            <span className="ml-1">Admin Dashboard</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
