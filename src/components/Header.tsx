import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HiBars3 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        !(event.target! as HTMLElement).closest(".sidebar") &&
        !(event.target! as HTMLElement).closest(".humburger")
      ) {
        setIsSidebarOpen(false); // Close sidebar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick); // Cleanup
  }, [isSidebarOpen]); // Re-run useEffect when isSidebarOpen changes

  function toggleSideBar() {
    setIsSidebarOpen((open) => !open);
  }

  function handleSideBarMenuClick(value: string) {
    if (value === "js" || value === "react") {
      navigate(`/${value}`);
    }
    toggleSideBar();
  }
  return (
    <>
      <header className="fixed top-0 mx-auto w-full py-2 shadow-lg backdrop-blur-3xl">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-10 w-auto" src="ui-prep-logo.png" alt="" />
                <span className="h3-bold ml-2">
                  ui-<span className="text-orange-500">prep</span>
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-5">
              <Link className="nav-link" to="/js">
                JavaScript
              </Link>
              <Link className="nav-link" to="/react">
                React.Js
              </Link>
            </div>
            <div className="hidden items-center justify-end gap-3 sm:flex">
              <ThemeToggle />
            </div>
            <div className="humburger text-3xl sm:hidden">
              <HiBars3 onClick={toggleSideBar} />
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <SideBar handleSideBarMenuClick={handleSideBarMenuClick} />
      )}
    </>
  );
};
export default Header;
