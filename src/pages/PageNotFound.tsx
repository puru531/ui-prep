import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-100 text-black dark:bg-slate-700 dark:text-white">
      <main className="m-auto w-3/4 flex-grow px-2 pt-40">
        <div className="h1-semibold text-center">
          The requested page does not exist, please check your URL or visit{" "}
          <Link to="/" className="link-tertiary">
            Homepage
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
