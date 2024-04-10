import { Outlet } from "react-router-dom";
import Header from "./Header";
const AppLayout = () => {
  return (
    <div className="theme flex min-h-screen flex-col">
      <div className="flex h-12">
        <Header />
      </div>

      <main className="flex-grow px-2">
        <Outlet />
      </main>

      <footer className="bg-gray-800 py-4 text-white">
        <div className="container mx-auto">Your Footer</div>
      </footer>
    </div>
  );
};

export default AppLayout;
