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
  ToastAndroid,
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

  const register = async () => {
    await axios.post(axios.defaults.baseURL + "/collaborator/register", {
      phone: phone,
      email: email,
      name: name,
      password: password,
    }).then((res) => {
      if (res && res.data.message === "success to register") {
        ToastAndroid.show("Register Successfully", ToastAndroid.SHORT);
        navigation.navigate("Login");
      } else {
        ToastAndroid.show("Register Unsuccessfully", ToastAndroid.SHORT);
      }
    });
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.titleForm}>Đăng ký</Text>

        <View style={styles.formContainer}>
          <InputPhone
            label={"Số điện thoại của bạn"}
            placeholder={"92xxxxx29"}
            data={phone}
            setData={setPhone}
          />

          <InputText label={"Tên của bạn"} data={name} setData={setName} />

          <InputText label={"Email"} data={email} setData={setEmail} />

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
