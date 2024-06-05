import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { InputPhone, InputText } from "../components/Input";
import { Button } from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthContext from "../context/AuthProvider";
import axios from "../context/axios";
import DataStorage from "../utillity/DataStorage";

export default function Profile({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user.name_collaborator);
  const [email, setEmail] = useState(user.email_collaborator);
  const [phone, setPhone] = useState(user.phone);
  const [position, setPosition] = useState("Cộng tác viên");
  const [referral, setReferral] = useState(
    user.presenter_phone ? user.presenter_phone : ""
  );
  const [avt, setAvt] = useState(user.avatar);

  const btnEditDisable = () => {
    if (
      name === user.name_collaborator &&
      email === user.email_collaborator &&
      (referral === "" || referral === user.presenter_phone)
    ) {
      return true;
    }
    return false;
  };

  const validateEmail = (input) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(input).toLowerCase());
  };
  const validatePhoneNumber = (phoneNumber) => {
    const re = /^0\d{9}$/;
    return re.test(phoneNumber);
  };
  const getInitial = (name) => {
    const words = name.trim().split(" ");
    const lastName = words[words.length - 1];
    return lastName ? lastName.charAt(0).toUpperCase() : "";
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
    if (name === "") {
      Alert.alert("Cảnh báo", "Tên không được để trống");
      return false;
    }
    if (referral !== "" && !validatePhoneNumber(referral)) {
      Alert.alert("Cảnh báo", "Số điện thoại không đúng định dạng");
      return false;
    }
    return true;
  };
  const handleUpdate = async () => {
    console.log(user.presenter_phone)
    if (checkValidate() === true) {
      try {
        let response = await axios.put("/collaborator/update-collaborator", {
          name: name,
          email: email,
          emailData: user.email_collaborator,
          referral: referral,
        });
        if (response.data.message === "success") {
          Alert.alert(
            "Thành công",
            "Đã cập nhật thành công thông tin cộng tác viên",
            [
              {
                text: "OK",
                style: "cancel",
              },
            ]
          );
          const updatedUser = {
            ...user,
            name_collaborator: name,
            email_collaborator: email,
            presenter_phone: referral,
            status_collaborator: 2,
          };
          await DataStorage.SetDataStorage([
            {
              key: "@userInfo",
              value: JSON.stringify({ data: [updatedUser] }),
            },
          ]);
          setUser(updatedUser);
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
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon size={20} icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}>
          <Text style={styles.headerTitle}>Chỉnh sửa hồ sơ</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={styles.bioContainer}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: "black", borderRadius: 100 }}
        >
          {user.avatar ? (
            <Image style={styles.avt} source={{ uri: avt }} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.initial}>
                {getInitial(user.name_collaborator)}
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.bioName}>{name}</Text>
        <Text style={styles.bioPosition}>{position}</Text>
      </View>

      <View style={styles.formContainer}>
        <InputText
          label={"Tên"}
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
        <InputText
          label={"Số diện thoại"}
          data={phone}
          setData={setPhone}
          editable={false}
          typeKeyboard={"number-pad"}
        />
        <InputText
          label={"Chức vụ"}
          data={position}
          setData={setPosition}
          editable={false}
        />
        <InputText
          label={"Người giới thiệu"}
          data={referral}
          setData={setReferral}
          editable={(user.presenter_phone==="0"||user.presenter_phone===null) ? true : false}
          typeKeyboard={"number-pad"}

        />

        <View style={{ marginTop: 25 }}>
          <Button
            title={"Chỉnh sửa"}
            onPress={handleUpdate}
            disable={btnEditDisable}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", // Thay đổi màu nền phía dưới
    minHeight: Dimensions.get("screen").height,
  },
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  bioContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  avt: {
    height: 80,
    width: 80,
    borderRadius: 40, // Thay đổi thành 40 để phù hợp với kích thước hình tròn
    overflow: "hidden",
  },
  placeholder: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#3F8CFF", // Đổi màu nền khác trắng, ví dụ: màu xanh dương
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    fontSize: 32,
    color: "#fff",
  },
  bioName: {
    marginTop: 2,
    fontSize: 30,
    fontWeight: "bold",
  },
  bioPosition: {
    marginTop: 2,
    fontSize: 16,
    color: "grey",
  },
  formContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 46,
  },
});
