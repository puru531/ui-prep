import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { useUser } from "@/services/apiAuth";
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

const LoginToggle = () => {
  const { isAuthenticated } = useUser();
  const { setShowLoginWindow } = useApplicationContext();
  const handleLoginLogout = () => {
    if (isAuthenticated) {
      console.log("implement logout");
    } else {
      setShowLoginWindow(true);
    }
  };
  return (
    <button onClick={() => handleLoginLogout()}>
      {isAuthenticated ? (
        <HiArrowRightOnRectangle className="h3-bold" />
      ) : (
        <HiArrowLeftOnRectangle className="h3-bold" />
      )}
    </button>
  );
};

export default LoginToggle;
