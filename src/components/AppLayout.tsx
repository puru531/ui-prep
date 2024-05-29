import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const AppLayout = () => {
  return (
    <div className="theme flex min-h-screen flex-col">
      <div className="flex h-12 z-50">
        <Header />
      </div>

      <main className="flex-grow px-2">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
