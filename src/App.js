import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import MyScreen from "./navigation/main";

enableScreens();


export default function App(){
  const isLogin = true;
  return(
    <NavigationContainer>
      <MyScreen isLogin={isLogin}/>
    </NavigationContainer>
  );
}