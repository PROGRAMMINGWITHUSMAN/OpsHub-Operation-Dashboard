import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";

const ProtectedRoute = () => {
    const Auth = useContext(AuthContext);
  const { isLogin } = Auth;

  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;