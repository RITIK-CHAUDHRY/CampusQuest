import React, { createContext, useState, useContext } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("userInfo", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
  };
  const isAuthenticated = !!user;
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
