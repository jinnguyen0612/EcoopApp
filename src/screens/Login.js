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
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [token, setToken] = useState("");
  const { login } = useContext(AuthContext);
  let payload = {
    email: email,
    password: password,
  };
  const handleLogin = async () => {
    const res = await login(payload);
    if (res) {
      let decoded = jwtDecode(res.data.access_token);
      console.log(decoded);
      if (res.data.message === "success") {
        Alert.alert("Success", "Login Success", [
          {
            text: "Ok",
            onPress: () => navigation.navigate("VerifyCode"),
            style: "cancel",
          },
        ]);
        DataStorage.SetDataStorage([
          { key: "@accessToken", value: res.data.access_token },
          { key: "@userInfo", value: decoded },
        ]);
      }
      if (res.data.message === "fails") {
        Alert.alert("Alert Title", "My Alert Msg", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
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
