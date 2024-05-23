import axios from "./axios";
import { createContext, useState } from "react";
import DataStorage from "../utillity/DataStorage";
import { Alert } from "react-native";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(async () => {
    const info = await DataStorage.GetDataStorage(["@userInfo"]);
    return info ? info : null;
  });

  const login = async (payload) => {
    //res.data.data[0].code_verify
    return await axios.post(axios.defaults.baseURL + "/collaborator/login", {
      payload,
    });
  };
  const logout = async () => {
    await DataStorage.RemoveDataStorage(["@accessToken", "@userInfo"]);
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
