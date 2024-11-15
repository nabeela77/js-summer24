import { useContext } from "react"; // useContext hook allows you to consume context values in functional components.
import { AuthContext } from "../contexts/AuthProvider"; //AuthContext is the context created to hold authentication-related state and functions

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw Error("Context cannot be accessed outside of the provider.");

  return context;
};

export default useAuth;
