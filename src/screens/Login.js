import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { jwtDecode } from "jwt-decode";
import DataStorage from "../utillity/DataStorage";
import { Button } from "../components/Button";
import { InputPassword, InputText } from "../components/Input";
import AuthContext from "../context/AuthProvider";
import { useToast } from "react-native-toast-notifications";

export default function Login({ navigation }) {
  const { setIsLogin, login } = useContext(AuthContext);
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [token, setToken] = useState("");
  let payload = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    try {
      const res = await login(payload);
  
      if (res) {
        const { data } = res;
        let decoded = jwtDecode(data.access_token);
  
        if (data.message === "success") {
          console.log(decoded);
          if(decoded.data[0].status_account===1){
            await DataStorage.SetDataStorage([
            { key: "@accessToken", value: data.access_token },
            { key: "@userInfo", value: decoded },
          ]);
  
          const storedData = await DataStorage.GetDataStorage(["@userInfo"]);
          const userInfo = storedData[0] ? JSON.parse(storedData[0]) : null;
  
          Alert.alert("Thành công", "Đăng nhập thành công", [
            {
              text: "Ok",
              onPress: () => {
                
                userInfo.data[0].status_verify ===0?
                (
                  navigation.navigate('VerifyCode')
                ):(
                    setIsLogin(true)
                )
              },
              style: "cancel",
            },
          ]);
          }else if(decoded.data[0].status_account===0){
            Alert.alert("Thông báo", "Tài khoản này đã bị khóa. Vui lòng liên hệ CSKH để biết thêm thông tin", [
              { text: "OK", onPress: () => console.log("Đã nhấn OK") },
            ]);
          }
          
        } else if (data.message === "fails") {
          Alert.alert("Thông báo", "Đăng nhập thất bại", [
            {
              text: "Hủy",
              onPress: () => console.log("Đã nhấn hủy"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("Đã nhấn OK") },
          ]);
        }
      }
    } catch (error) {
      console.error("Lỗi đăng nhập: ", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.titleForm}>Đăng Nhập</Text>

        <View style={styles.formContainer}>
          <InputText
            label={"Email hoặc số điện thoại của bạn"}
            data={email}
            setData={setEmail}
          />

          <InputPassword
            label={"Mật khẩu"}
            data={password}
            setData={setPassword}
            eyeStatus={passwordHide}
            setEyeStatus={() => setPasswordHide(!passwordHide)}
          />

          <TouchableOpacity
            style={{ marginTop: 30, marginBottom: 30 }}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text
              style={[styles.label, { textAlign: "right", color: "#9795A4" }]}
            >
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <Button title={"Đăng nhập"} onPress={handleLogin} />
          <TouchableOpacity
            style={{ marginTop: 30, marginBottom: 30 }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text
              style={[styles.label, { textAlign: "center", color: "#3F8CFF" }]}
            >
              Người dùng mới? Tạo tài khoản
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: Dimensions.get("screen").height,
  },

  logoContainer: {
    marginTop: 80,
    marginBottom: 40,
    alignItems: "center",
  },

  loginContainer: {
    marginTop: 30,
    marginBottom: 20,
  },

  titleForm: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  formContainer: {
    marginTop: 18,
    marginBottom: 10,
    marginHorizontal: 46,
  },

  label: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "300",
  },
});
