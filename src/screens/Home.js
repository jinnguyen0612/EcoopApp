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
import axios from "../context/axios";
import Loading from "../components/Loading";

export default function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [ordersShow, setOrdersShow] = useState(true);
  const [hide, setHide] = useState(true);
  const [status, setStatus] = useState(false);
  const [idCollaborator, setIdCollaborator] = useState("");
  const fetchMoney = async () => {
    let res = await axios.get(
      `${axios.defaults.baseURL}/collaborator/get-by-id/${user.id_collaborator}`
    );
    if (res) {
      setIdCollaborator(res.data.data[0].total_withdrawn);
    }
  };
  useEffect(() => {
    setInterval(() => {
      fetchMoney();
    }, 5000);
  }, []);
  // useEffect(() => {
  //   console.log(user)
  // }, []);
  const formatCurrency = (number) => {
    // Chuyển số sang chuỗi và đảm bảo rằng nó có định dạng là số thập phân
    const numberString = Number(number).toFixed(0);

    // Thêm dấu phẩy ngăn cách hàng nghìn
    const parts = numberString.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Trả về chuỗi đã định dạng
    return parts.join(".");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoopglobal.mysapo.net/admin/orders.json",
          {
            auth: {
              username: "9059b72869d54094aae39f7c7800ac33", // API Key
              password: "09a67961520b42af90723498e5e512fe", // API Secret
            },
          }
        );
        if (response) {
          setData(response.data.orders);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Gọi hàm fetchData để lấy dữ liệu khi component được render
    fetchData();

    // Thiết lập interval để cập nhật dữ liệu mỗi 1 giây (hoặc tần suất mong muốn)
    const interval = setInterval(fetchData, 10000);

    // Cleanup function để dừng interval khi component unmount
    return () => clearInterval(interval);
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Định dạng ngày tháng năm giờ theo múi giờ Việt Nam (GMT+7)
    const options = {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDate = date.toLocaleString("vi-VN", options);
    return formattedDate;
  };
  return (
    <View style={styles.container}>
      {loading === true ? <Loading /> : ""}
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
            <View>
              <LineChartWithAverage data={[10, 56, 0, 32, 19, 40]} />
            </View>
            <View>
              <Button title={"Rút Ngay"} onPress={fetchMoney} />
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
          {data
            ? data.map((item, index) => {
                const formattedPhoneNumber = item.phone.replace(/^\+84/, "");

                // Chuyển chuỗi thành mảng ký tự để thay đổi phần tử
                const phoneNumberArray = formattedPhoneNumber.split("");

                // Thay đổi phần tử từ vị trí 3 đến vị trí 5 thành 'x'
                for (let i = 2; i <= 4; i++) {
                  phoneNumberArray[i] = "x";
                }

                // Chuyển mảng ký tự trở lại thành chuỗi
                const maskedPhoneNumber = phoneNumberArray.join("");
                if (
                  item.financial_status === "paid" &&
                  item.fulfillment_status === "fulfilled" &&
                  item.status === "open" &&
                  (item.landing_site !== "" || !item.landing_site)
                ) {
                  return (
                    <Order
                      key={index}
                      avt={
                        "https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png"
                      }
                      code={item.id}
                      money={formatCurrency(item.total_price)}
                      description={`0${maskedPhoneNumber} đã mua hàng lúc ${formatDate(
                        item.created_on
                      )}`}
                      status={"3"}
                    />
                  );
                }
              })
            : "loading"}
          {/* <Order
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
          /> */}
          <View style={{ height: 520 }}></View>
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
