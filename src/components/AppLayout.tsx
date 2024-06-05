import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLogin } from "@/services/apiAuth";
import { useEffect } from "react";
const AppLayout = () => {
  const { login, isLoading: logging } = useLogin();

  useEffect(() => {
    login({ email: "puru@codepract.com", password: "puru531" });
  }, []);

  return (
    <div className="theme flex min-h-screen flex-col">
      <div className="z-50 mb-2 flex h-12">
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
