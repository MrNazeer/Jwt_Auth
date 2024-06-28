import React, {createContext, useState, useEffect} from "react";
import authServices from "../services/authServices";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);
  const currentUser = "";
  useEffect(() => {
    const currentUser = authServices.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = async (email, pass) => {
    const data = await authServices.loginUser(email, pass);
    setUser(data);
  };

  const logout = () => {
    authServices.logout();
    setUser(null);
  };

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
