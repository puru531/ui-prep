import { Header } from "@/components";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-gray-800 dark:text-white">
      <div className="flex h-12">
        <Header />
      </div>

      <main className="m-auto w-3/4 flex-grow px-2 pt-40">
        <div className="h1-semibold text-center">
          The requested page does not exist, please check your URL or visit{" "}
          <Link to="/" className="link-tertiary">
            Homepage
          </Link>
        </div>
      </main>

      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto">Your Footer</div>
      </footer>
    </div>
  );
};

export default PageNotFound;
