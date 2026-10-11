import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [signup, setSignup] = useState("");
  const [login , setLogin] = useState("");
  const [isLogin, setIsLogin] = useState(false); // Later mujhe isko False krna hai Fr

  const getSignup = JSON.parse(localStorage.getItem("signup")) || [];

  if (signup != "") {
    getSignup.push(signup);

    localStorage.setItem("signup", JSON.stringify(getSignup));
  }

  // console.log(getSignup);

  return (
    <AuthContext.Provider value={{ setSignup, getSignup, isLogin, setIsLogin, setLogin, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
