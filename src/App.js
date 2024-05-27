import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyScreen from "./navigation/main";
import { AuthContextProvider } from "./context/AuthProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MyScreen />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
