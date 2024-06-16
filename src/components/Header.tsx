import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HiBars3, HiHome, HiMiniUserCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import LoginToggle from "./LoginToggle";
import { useUser } from "@/services/apiAuth";
import { Logo } from ".";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

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
    if (value === "admin") {
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
              <Logo />
            </div>
            {/* ============== For menus in center =========== */}
            {/* <div className="hidden sm:flex sm:items-center sm:justify-center sm:gap-5">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </div> */}
            <div className="hidden items-center justify-end gap-3 sm:flex">
              <Link className="nav-link" to="/">
                <HiHome className="h3-bold" />
              </Link>

              <ThemeToggle />

              {isAuthenticated && (
                <Link className="nav-link" to="/admin">
                  <HiMiniUserCircle className="h3-bold" />
                </Link>
              )}
              <LoginToggle />
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
