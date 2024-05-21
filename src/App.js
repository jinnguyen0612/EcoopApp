import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import VerifyCode from "./screens/VerifyCode";
import Referral from "./screens/Referral";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Collaborator from "./screens/Collaborator";
import Events from "./screens/Events";
import EventDetails from "./screens/EventDetails";
import MyScreen from "./navigation/main";

export default function App(){
  const isLogin = false;
  return(
    <NavigationContainer>
      <MyScreen isLogin={isLogin}/>
    </NavigationContainer>
  );
}