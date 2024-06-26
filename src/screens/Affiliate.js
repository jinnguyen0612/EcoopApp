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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  faAdd,
  faArrowLeft,
  faBlackboard,
} from "@fortawesome/free-solid-svg-icons";
import { InputPhone, InputText } from "../components/Input";
import { Button } from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Team } from "../components/Team";
import { AffiliateItem } from "../components/AffiliateItem";
import axios from "../context/axios";

export default function Affiliate({ navigation }) {
  const colors = ["red", "green", "blue", "yellow", "pink"];
  let colorIndex = 0;
  const [listCampaign, setListCampaign] = useState([]);
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

  function runColor() {
    const color = colors[colorIndex];
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else colorIndex++;
    return color;
  }

  const fetchListCampaign = async () => {
    try {
      let response = await axios.get(
        `${axios.defaults.baseURL}/campaign/all-campaign`
      );
      if (response) {
        setListCampaign(response.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchListCampaign();
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
        <View style={{ flex: 10 }}>
          <Text style={styles.headerTitle}>Danh sách chiến dịch</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <ScrollView>
        {listCampaign.map((item, index) => {
          return (
            <AffiliateItem
              key={index}
              onPress={() =>
                navigation.navigate("AffiliateDetails", { data: item })
              }
              color={runColor()}
              title={item.name}
              money={item.tax + "%"}
              dateFrom={parseTime(item.start)}
              dateTo={parseTime(item.end)}
              user={"2000"}
              image={
                item.image ==null?
                "https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png":
                item.image
              }
            />
          );
        })}
        <View style={{ height: 160 }}></View>
      </ScrollView>

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
});
