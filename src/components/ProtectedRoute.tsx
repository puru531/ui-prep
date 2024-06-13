import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { useUser } from "@/services/apiAuth";
import { Loader } from "@/ui";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { setShowLoginWindow } = useApplicationContext();

  // 1. load authenticated user
  const { user, isLoading, isAuthenticated } = useUser();
  console.log("======= user", user);
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/");
      setShowLoginWindow(true);
    } else {
      setShowLoginWindow(false);
    }
  }, [user, isAuthenticated, navigate]);
  if (isLoading) return <Loader />;
  // 2. If there is no authenticated user, redirect to home page

  // 3. if there is authenticated user render the page

  return children;
};

export default ProtectedRoute;
