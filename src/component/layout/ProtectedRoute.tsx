import { ReactNode } from "react";
import { useAppSelector } from "../../redux/features/hooks";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);


  // console.log(user,token);

  if (!user && !token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
