import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { Button } from "../components/Button";
import axios from "../context/axios";
import DataStorage from "../utillity/DataStorage";

const CELL_COUNT = 6;

export default function VerifyCode({ navigation }) {
  const [value, setValue] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleVerify = async () => {
    if (value == "") {
      Alert.alert("Cảnh báo", "Mã xác nhận không được để trống");
      return;
    }
    try {
      const response = await axios.post(
        `${axios.defaults.baseURL}/collaborator/verify`,
        {
          code: value,
        }
      );

      if (response && response.data.message === "success") {
        const storedData = await DataStorage.GetDataStorage(["@userInfo"]);
        let userInfo = storedData[0] ? JSON.parse(storedData[0]) : null;

        if (userInfo && userInfo.data && userInfo.data.length > 0) {
          userInfo.data[0].status_verify = 1;
          await DataStorage.SetDataStorage([
            { key: "@userInfo", value: JSON.stringify(userInfo) },
          ]);
          Alert.alert("Thành công", "Xác minh thành công", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Referral"),
              style: "cancel",
            },
          ]);
        }
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
  };

  useEffect(() => {
    if (countdown > 0) {
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setIsButtonEnabled(true);
    }
  }, [countdown]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.titleForm}>Nhập mã xác nhận</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View style={{ marginVertical: 24 }}>
          <Button title={"Xác nhận"} onPress={handleVerify} />
        </View>
        <TouchableOpacity disabled={!isButtonEnabled}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              color: isButtonEnabled ? "#3F8CFF" : "#9795A4",
              fontWeight: "400",
            }}
          >
            {countdown != 0 ? countdown : ""} Resend
          </Text>
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
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 42,
    height: 42,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "400",
  },
  focusCell: {
    borderColor: "#000",
  },
});
