import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { Button } from "../components/Button";
import { InputPassword, InputPhone, InputText } from "../components/Input";
import axios from "../context/axios";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const checkValidate = () => {
    if (email === "") {
      Alert.alert("Cảnh báo", "Email không được để trống");
      return false;
    }
    if (!validateEmail(email)) {
      Alert.alert("Cảnh báo", "Email không đúng định dạng");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (checkValidate() === true) {
      try {
        let response = await axios.post("/collaborator/renew-password", {
          email: email,
        });
        if (response.data.message === "success") {
          Alert.alert("Thành công", "Vui lòng kiểm tra email",[
            {
              text: "OK",
              style: "cancel",
              onPress: navigation.navigate('Login'),
            },
          ]);
          setEmail("");
        }
      } catch (error) {
        if (error.response.status >= 500) {
          Alert.alert("Lỗi", "Lỗi máy chủ vui lòng thử lại sau", [
            {
              text: "OK",
              style: "cancel",
            },
          ]);
        } else {
          Alert.alert("Lỗi", error.response.data.message, [
            {
              text: "OK",
              style: "cancel",
            },
          ]);
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.titleForm}>Quên mật khẩu</Text>

        <View style={styles.formContainer}>
          <InputText
            label={"Nhập email của bạn"}
            data={email}
            setData={setEmail}
            autoCap="none"
          />
          <View style={{ marginTop: 30 }}>
            <Button title={"Gửi mã"} onPress={handleSubmit} />
          </View>
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
});
