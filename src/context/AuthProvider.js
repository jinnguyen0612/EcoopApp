import axios from "./axios";
import { createContext, useEffect, useState } from "react";
import DataStorage from "../utillity/DataStorage";
import { Alert } from "react-native";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const storedData = await DataStorage.GetDataStorage(["@userInfo"]);
      const userInfo = storedData[0] ? JSON.parse(storedData[0]) : null;
      const info = userInfo ? userInfo.data[0] : null;
      setUser(info);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [isLogin]);

  useEffect(() => {
    if (!isLogin) {
      setUser(null);
    }
  }, [isLogin]);

  const login = async (payload) => {
    return await axios.post(axios.defaults.baseURL + "/collaborator/login", {
      payload,
    });
  };
  const logout = async () => {
    setIsLogin(false);
    setUser(null);
    await DataStorage.RemoveDataStorage(["@accessToken", "@userInfo"]);
  };
  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, login, logout, setUser, fetchUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
