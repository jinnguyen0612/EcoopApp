import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Order } from "../components/Order";
import { Button } from "../components/Button";
import { LineChartWithAverage } from "../components/Char";
import { SideBar } from "../components/SideBar";
import AuthContext from "../context/AuthProvider";
import axios from "../context/axios";
import Loading from "../components/Loading";

export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [ordersShow, setOrdersShow] = useState(true);
  const [hide, setHide] = useState(true);
  const [idCollaborator, setIdCollaborator] = useState("");

  useEffect(() => {
    // Fetch initial data for collaborator and orders
    fetchData();
    fetchMoney();

    // Set interval for fetching orders every 10 seconds
    const ordersInterval = setInterval(fetchData, 10000);

    // Clean up intervals on component unmount
    return () => {
      clearInterval(ordersInterval);
    };
  }, []);

  const fetchData = async () => {
    try {
      // Fetch orders data
      const response = await axios.get(
        `${axios.defaults.baseURL}/orders/get-order-by/${user.id_collaborator}`
      );
      if (response) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const fetchMoney = async () => {
    try {
      // Fetch collaborator's money data
      const response = await axios.get(
        `${axios.defaults.baseURL}/collaborator/get-by-id/${user.id_collaborator}`
      );
      if (response) {
        setIdCollaborator(response.data.data[0].total_recived);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching money:", error);
    }
  };

  const formatCurrency = (number) => {
    // Format number to currency format
    const numberString = Number(number).toFixed(0);
    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatDate = (dateString) => {
    // Format date string to Vietnamese datetime format
    const date = new Date(dateString);
    const options = {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return date.toLocaleString("vi-VN", options);
  };

  return (
    <View style={styles.container}>
      {modalShow && (
        <SideBar navigation={navigation} onClose={() => setModalShow(false)} />
      )}

      {loading ? (
        <View style={{backgroundColor:"#FF5400",flex:1,alignItems:"center",justifyContent: 'center'}}>
          <Image source={require("../assets/logo.png")} />
        </View>
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => setModalShow(true)}
            >
              <FontAwesomeIcon size={20} icon={faBars} />
            </TouchableOpacity>
            <View style={{ flex: 10 }}>
              <Text style={styles.headerTitle}>Tài khoản của tôi</Text>
            </View>
            <TouchableOpacity
              style={{ flex: 1, position: "relative" }}
              onPress={() => navigation.navigate("Events")}
            >
              <FontAwesomeIcon size={20} icon={faBell} />
              {!hide && (
                <View
                  style={{
                    height: 7,
                    width: 7,
                    borderRadius: 5,
                    backgroundColor: "red",
                    position: "absolute",
                    left: 12,
                  }}
                ></View>
              )}
            </TouchableOpacity>
          </View>

          <View style={[styles.commissionContainer]}>
            <Text style={styles.commissionTitle}>Tổng hoa hồng nhận được</Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.commissionLeft}>
                <Text style={styles.commissionMoney}>
                  {formatCurrency(idCollaborator)}
                  <Text style={styles.moneyUnit}>đ</Text>
                </Text>
                <Text style={styles.commissionPercent}>Tăng 10%</Text>
                <Text style={styles.subInfo}>so với hôm qua</Text>
              </View>
              <View style={styles.commissionRight}>
                <LineChartWithAverage data={[10, 56, 0, 32, 19, 40]} />
                <Button title={"Rút Ngay"} onPress={fetchMoney} />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{ marginTop: 40, marginLeft: 20, marginBottom: 10 }}
            onPress={() => setOrdersShow(!ordersShow)}
          >
            <Text style={styles.listTitle}>
              <FontAwesomeIcon
                color="#3F8CFF"
                icon={ordersShow ? faChevronUp : faChevronDown}
              />{" "}
              Danh sách đơn hàng
            </Text>
          </TouchableOpacity>

          {ordersShow && (
            <ScrollView style={styles.listOrder}>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <Order
                    key={index}
                    avt={
                      "https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"
                    }
                    code={item.id_orders_sapo}
                    money={item.total_price}
                    description={`${item.customer_phone} đã mua hàng lúc ${formatDate(
                      item.created_on
                    )}`}
                    status={"2"}
                  />
                ))
              ) : (
                <Text>Không có dữ liệu</Text>
              )}
              <View style={{ height: 520 }}></View>
            </ScrollView>
          )}
        </>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
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
  commissionContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    borderRadius: 2,
    padding: 20,
  },
  commissionTitle: {
    color: "#9795A4",
    fontSize: 18,
    marginBottom: 8,
  },
  commissionLeft: {
    flex: 1,
  },
  commissionMoney: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 80,
    marginTop: 20,
  },
  moneyUnit: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#9795A4",
  },
  commissionPercent: {
    color: "#06B752",
    fontSize: 18,
  },
  subInfo: {
    color: "#9795A4",
  },
  commissionRight: {
    flex: 1,
  },
  listTitle: {
    color: "#3F8CFF",
    fontSize: 18,
  },
  listOrder: {
    marginTop: 5,
  },
});
