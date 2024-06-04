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
} from "react-native";
import { Order } from "../components/Order";
import { Button } from "../components/Button";
import { LineChartWithAverage } from "../components/Char";
import { SideBar } from "../components/SideBar";
import AuthContext from "../context/AuthProvider";

export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);

  const [modalShow, setModalShow] = useState(false);
  const [ordersShow, setOrdersShow] = useState(true);
  const [hide, setHide] = useState(true);

  // useEffect(() => {
  //   console.log(user)
  // }, []);

  return (
    <View style={styles.container}>
      {modalShow ? (
        <SideBar navigation={navigation} onClose={() => setModalShow(false)} />
      ) : (
        <></>
      )}
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
          {!hide ? (
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
          ) : (
            <></>
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.commissionContainer]}>
        <Text style={styles.commissionTitle}>Hoa hồng nhận được hôm nay</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.commissionLeft}>
            <Text style={styles.commissionMoney}>
              {user.total_withdrawn ? user.total_withdrawn : 0}
              <Text style={styles.moneyUnit}>đ</Text>
            </Text>
            <Text style={styles.commissionPercent}>Tăng 10%</Text>
            <Text style={styles.subInfo}>so với hôm qua</Text>
          </View>
          <View style={styles.commissionRight}>
            <View>
              <LineChartWithAverage data={[10, 56, 0, 32, 19, 40]} />
            </View>
            <View>
              <Button title={"Rút Ngay"} />
            </View>
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

      {ordersShow ? (
        <ScrollView style={styles.listOrder}>
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <Order
            avt={
              "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/175607/Originals/avt-cho-cute%20(22).jpg"
            }
            code={"MHD123"}
            money={"10000"}
            description={"092xxxxx29 đã mua hàng lúc 10:10"}
            status={"3"}
          />
          <View style={{ height: 480 }}></View>
        </ScrollView>
      ) : (
        <></>
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
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 2, // Thêm thuộc tính elevation để áp dụng shadow trên Android
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
