import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  faAdd,
  faArrowLeft,
  faBlackboard,
  faCalendar,
  faTag,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { InputPhone, InputText } from "../components/Input";
import { Button } from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Team } from "../components/Team";
import { AffiliateItem } from "../components/AffiliateItem";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";

export default function AffiliateDetails({ route, navigation }) {
  const { data } = route.params;
  const parseTime = (dateString) => {
    // Tạo đối tượng Date từ chuỗi thời gian
    const date = new Date(dateString);

    // Lấy ngày, tháng, và năm
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Thêm 1 vào tháng và định dạng thành chuỗi có độ dài 2 ký tự
    const day = date.getUTCDate().toString().padStart(2, "0"); // Định dạng ngày thành chuỗi có độ dài 2 ký tự

    // Tạo chuỗi định dạng "dd/mm/yyyy"
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon size={20} icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={{ flex: 10 }}></View>
        <View style={{ flex: 1 }}></View>
      </View>

      <ScrollView style={styles.campaignHeader}>
        <View style={styles.campaignImage}>
          <Image
            style={styles.image}
            source={{
              uri: "https://marketplace.canva.com/EAE54xVnIvo/1/0/1600w/canva-beige-green-simple-product-feature-instagram-posts-4DHnplrmIp0.jpg",
            }}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.name}</Text>

          <View style={styles.subTitleContainer}>
            <Text
              style={{
                color: "#FF5400",
                fontSize: 24,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              {data.tax}%/đơn
            </Text>

            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-end",
                alignSelf: "center",
              }}
            >
              <FontAwesomeIcon size={16} color="#9795A4" icon={faUserGroup} />
              <Text style={{ color: "#9795A4", fontSize: 12 }}> 80000</Text>
            </View>
          </View>

          <View style={styles.titleInfoContainer}>
            <FontAwesomeIcon size={16} icon={faTag} color="#9795A4" />
            <Text style={{ color: "#9795A4", fontSize: 14 }}>
              {" "}
              Đồ mỹ nghệ - Từ Organic
            </Text>
          </View>

          <View style={styles.titleInfoContainer}>
            <FontAwesomeIcon size={16} icon={faCalendar} color="#9795A4" />
            <Text style={{ color: "#9795A4", fontSize: 14 }}>
              {" "}
              Từ {parseTime(data.start)} đến {parseTime(data.end)}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.campaignInfo}>
          <Text>
            {data.description}
            <TouchableOpacity>
              <Text style={{ color: "blue" }}>Xem thêm</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title={"Kiếm tiền ngay"} />
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
  header: {
    marginTop: 60,
    marginBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  campaignHeader: {
    maxHeight: Dimensions.get("window").height - 168,
  },

  image: {
    height: 300,
    width: 300,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  campaignImage: {
    justifyContent: "center",
    alignItems: "center",
  },

  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  subTitleContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginRight: 20,
  },
  titleInfoContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  line: {
    marginTop: 10,
    alignSelf: "center",
    width: (Dimensions.get("window").width / 10) * 8,
    height: 1,
    backgroundColor: "grey",
  },
  campaignInfo: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
