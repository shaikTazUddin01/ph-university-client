import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";

import { Navigate } from "react-router-dom";
import { currentToken, logout, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utiles/verifyToken";

type TProtectedRoute = { children: ReactNode; role: string | undefined };

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  // const user = useAppSelector((state) => state.auth.user);
  const token = useAppSelector(currentToken);
let user
if (token) {
  user =verifyToken(token as string)
}
console.log(user);
  const dispatch = useAppDispatch();
  // console.log(user?.role == role);
  if (role !==undefined && (user as TUser)?.role !== role) {
    dispatch(logout());
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};

export default ProtectedRoute;
