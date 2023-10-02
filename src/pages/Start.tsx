import { Navigate } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

export const Start = () => {
  const { user } = useCurrentUser();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Navigate to="/home" />;
};
