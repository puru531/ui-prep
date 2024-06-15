import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="flex w-full justify-center">
      <Link to="/" className="flex items-center">
        <img className="h-10 w-auto" src="code-puru-logo.png" alt="" />
        <span className="h3-bold ml-2">
          code<span className="text-orange-500">Puru</span>
        </span>
      </Link>
    </div>
  );
};
