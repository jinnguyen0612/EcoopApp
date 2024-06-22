import React, { useEffect } from "react";
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import MyScreen from "./navigation/main";
import { AuthContextProvider } from "./context/AuthProvider";
import { Alert } from "react-native";

export default function App() {
  // useEffect(() => {
  //   requestUserPermission();
  //   checkAndSendToken();

  //   const unsubscribeMessage = messaging().onMessage(async remoteMessage => {
  //     // Hiển thị thông báo ngay khi nhận được tin nhắn từ FCM
  //     Alert.alert('Thông báo từ ứng dụng', remoteMessage.notification.body);
  //   });

  //   return () => {
  //     unsubscribeMessage();
  //   };
  // }, []);

  // useEffect(() => {
  //   const unsubscribeBackgroundMessage = messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     // Xử lý khi nhận được tin nhắn từ FCM khi ứng dụng đang ở nền
  //     console.log('Tin nhắn từ FCM khi ứng dụng đang ở nền:', remoteMessage);
  //   });

  //   return () => {
  //     unsubscribeBackgroundMessage();
  //   };
  // }, []);

  // async function requestUserPermission() {
  //   try {
  //     const authStatus = await messaging().requestPermission();
  //     const enabled =
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //     if (enabled) {
  //       Alert.alert('Authorization status:', authStatus.toString());
  //     }
  //   } catch (error) {
  //     console.error('Error requesting permission:', error);
  //   }
  // }

  // async function checkAndSendToken() {
  //   try {
  //     const tokenSent = await AsyncStorage.getItem('tokenSent');
  //     if (!tokenSent) {
  //       const token = await messaging().getToken();
  //       console.log('FCM Token:', token);
  //       await fetch('https://4cd1-113-162-165-238.ngrok-free.app/store-token', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ token }),
  //       });
  //       await AsyncStorage.setItem('tokenSent', 'true');
  //     }
  //   } catch (error) {
  //     console.error('Error checking and sending token:', error);
  //   }
  // }

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <MyScreen />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
