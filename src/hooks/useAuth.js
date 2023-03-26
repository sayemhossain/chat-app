import { useSelector } from "react-redux";

const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  console.log("auth", auth);
  if (auth?.accessToken && auth?.user) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
