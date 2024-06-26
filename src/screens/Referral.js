import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
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
import AuthContext from "../context/AuthProvider";
import DataStorage from "../utillity/DataStorage";
import axios from "../context/axios";
import Loading from "../components/Loading";

export default function Referral({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { isLogin,setIsLogin, user, fetchUserData } = useContext(AuthContext);
  const [referralPhone, setReferralPhone] = useState("");

  const handleSkip = async () => {
    if(isLogin) navigation.navigate("Home");
    else setIsLogin(true);
  };
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^0\d{9}$/;
    return re.test(phoneNumber);
  };
  const checkValidate = () => {
    if (referralPhone === "") {
      Alert.alert("Cảnh báo", "Số điện thoại không được để trống");
      return false;
    }
    if (!validatePhoneNumber(referralPhone)) {
      Alert.alert("Cảnh báo", "Số điện thoại không đúng định dạng");
      return false;
    }
    return true;
  };
  const handleConfirm = async () => {
    if (checkValidate() === true) {
      setLoading(true);
      try {
        let email = user.email_collaborator;
        const response = await axios.post("/collaborator/presenter-phone", {
          phone: referralPhone,
          email: email,
        });
        if (response.data.message === "success") {
          setLoading(false);
          const storedData = await DataStorage.GetDataStorage(["@userInfo"]);
          let userInfo = storedData[0] ? JSON.parse(storedData[0]) : null;
          userInfo.data[0].presenter_phone = referralPhone;
          await DataStorage.SetDataStorage([
            { key: "@userInfo", value: JSON.stringify(userInfo) },
          ]);
          await fetchUserData();
          Alert.alert(
            "Thành công",
            "Thêm số điện thoại người giới thiệu thành công.",
            [
              {
                text: "OK",
                onPress: () => {
                  {
                    if(isLogin) navigation.navigate("Home");
                    else setIsLogin(true);
                  }
                },
                style: "cancel",
              },
            ]
          );
        }
      } catch (error) {
        setLoading(false);
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
      {loading === true ? <Loading /> : ""}
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.titleForm}>Người giới thiệu</Text>

        <View style={styles.formContainer}>
          <InputText
            label={"Số điện thoại"}
            placeholder={"092xxxxx29"}
            data={referralPhone}
            setData={setReferralPhone}
            typeKeyboard={"number-pad"}
          />
          <View style={{ marginTop: 20 }}>
            <Button title={"Xác nhận"} onPress={handleConfirm} />
          </View>
        </View>

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.subLabel}>Bỏ qua</Text>
        </TouchableOpacity>
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
  subLabel: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#9795A4",
  },
});
