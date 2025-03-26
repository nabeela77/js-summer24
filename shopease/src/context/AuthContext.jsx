import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("usersession");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("usersession", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("usersession");
    }
  }, [user]);

  const signup = (email, password) => {
    email = email.toLowerCase();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      alert("user already exists.Please log in");
      return;
    }
    const newUser = { email: email, password: password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // setUser(newUser);

    navigate("/login");
  };
  const login = (email, password, rememberMe = false) => {
    email = email.toLowerCase();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      sessionStorage.setItem("usersession", JSON.stringify(foundUser));

      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify(foundUser));
      } else {
        localStorage.removeItem("rememberedUser", JSON.stringify(foundUser));
      }
      navigate("/dashboard");
    } else {
      alert("Invalid Credential");
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("usersession");

    navigate("/");
  };

  const updateUser = (updatedData) => {
    setUser((prevUser) => {
      //if(!prevUser) return null;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = users.map((u) =>
        u.email === prevUser.email ? { ...u, ...updatedData } : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      const newUpdatedUser = { ...prevUser, ...updatedData };

      sessionStorage.setItem("usersession", JSON.stringify(newUpdatedUser));
      return newUpdatedUser;
    });
  };
  return (
    <AuthContext.Provider value={{ user, signup, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
