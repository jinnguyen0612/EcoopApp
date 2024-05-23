import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import MyScreen from "./navigation/main";
import { AuthContextProvider } from "./context/AuthProvider";

export default function App() {
  const isLogin = false;
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MyScreen isLogin={isLogin} />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
