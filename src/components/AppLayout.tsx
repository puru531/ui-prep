import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { LoginModal } from ".";
import { useGetAllCourses } from "@/services/query";
const AppLayout = () => {
  const { showLoginWindow } = useApplicationContext();
  useGetAllCourses(); // TODO: fix this, call only once

  return (
    <div className="theme flex min-h-screen flex-col">
      {showLoginWindow && <LoginModal />}

      <div className="z-2 mb-2 flex h-12">
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
