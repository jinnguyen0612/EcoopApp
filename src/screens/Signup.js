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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "../components/Button";
import { InputPassword, InputPhone, InputText } from "../components/Input";
import axios from "../context/axios";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);
  const [confirmPasswordHide, setConfirmPasswordHide] = useState(true);

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^0\d{9}$/;
    return re.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z\d])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(password);
  };

  const register = async () => {
    setPhone(phone.trim());
    if (phone == "") {
      Alert.alert("Cảnh báo", "Số điện thoại không được để trống");
      return;
    }
    if (!validatePhoneNumber(phone)) {
      Alert.alert("Cảnh báo", "Số điện thoại không đúng định dạng");
      return;
    }
    if (name == "") {
      Alert.alert("Cảnh báo", "Tên không được để trống");
      return;
    }
    if (email == "") {
      Alert.alert("Cảnh báo", "Email không được để trống");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Cảnh báo", "Email không đúng định dạng");
      return;
    }
    if (password == "") {
      Alert.alert("Cảnh báo", "Mật khẩu không được để trống");
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        "Cảnh báo",
        "Mật khẩu không đủ mạnh. Yêu cầu mật khẩu tối thiểu 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, và 1 con số"
      );
      return;
    }
    if (confirmPassword != password) {
      Alert.alert("Cảnh báo", "Xác nhận mật khẩu không giống mật khẩu");
      return;
    }
    try {
      const response = await axios.post(
        `${axios.defaults.baseURL}/collaborator/register`,
        {
          phone: phone,
          email: email.trim().toLowerCase(),
          name: name.trim(),
          password: password,
        }
      );

      if (response.data.message === "success") {
        Alert.alert("Thành công", "Đăng ký tài khoản thành công", [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Login"),
            style: "cancel",
          },
        ]);
      } //flag
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
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.titleForm}>Đăng ký</Text>

        <View style={styles.formContainer}>
          <InputText
            label={"Số điện thoại của bạn"}
            placeholder={"092xxxxx29"}
            data={phone}
            setData={setPhone}
            typeKeyboard={"number-pad"}
          />

          <InputText
            label={"Tên của bạn"}
            data={name}
            setData={setName}
            autoCap="words"
          />

          <InputText
            label={"Email"}
            data={email}
            setData={setEmail}
            autoCap="none"
          />

          <InputPassword
            label={"Mật khẩu"}
            data={password}
            setData={setPassword}
            eyeStatus={passwordHide}
            setEyeStatus={() => setPasswordHide(!passwordHide)}
          />

          <InputPassword
            label={"Xác nhận mật khẩu"}
            data={confirmPassword}
            setData={setConfirmPassword}
            eyeStatus={confirmPasswordHide}
            setEyeStatus={() => setConfirmPasswordHide(!confirmPasswordHide)}
          />

          <View style={{ marginTop: 38 }}>
            <Button title={"Đăng ký"} onPress={register} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
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

  registerContainer: {
    marginTop: 10,
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
