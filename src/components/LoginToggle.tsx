import { useUser } from "@/services/apiAuth";
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

const LoginToggle = () => {
  const { isAuthenticated } = useUser();
  const handleLogout = () => {
    console.log("===== logout");
  };
  return (
    <button onClick={() => handleLogout()}>
      {isAuthenticated ? (
        <HiArrowRightOnRectangle className="h3-bold" />
      ) : (
        <HiArrowLeftOnRectangle className="h3-bold" />
      )}
    </button>
  );
};

export default LoginToggle;
