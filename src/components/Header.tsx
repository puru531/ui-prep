import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 mx-auto w-full py-1 shadow backdrop-blur-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-10 w-auto" src="ui-prep-logo.png" alt="" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link className="nav-link" to="/js">
              JavaScript
            </Link>
            <Link className="nav-link" to="/react">
              React.Js
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
