import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  faAdd,
  faArrowLeft,
  faBlackboard,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { InputPhone, InputText } from "../components/Input";
import { Button } from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Team } from "../components/Team";
import { Notify } from "../components/Notify";
import ListAvt, { Avatar } from "../components/ListAvt";
import AuthContext from "../context/AuthProvider";
import QRCode from "react-native-qrcode-svg";
import axios from "../context/axios";
import Loading from "../components/Loading";

export default function EventDetails({ navigation }) {
  const { user } = useContext(AuthContext);
  const [ListCollaborator, setListCollaborator] = useState([]);
  const [link, setLink] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [nameLeader, setNameLeader] = useState("");
  const [avatarLeader, setAvatarLeader] = useState("");
  const [quantity, setQuantity] = useState("");
  const formatVietnamTime = (isoString) => {
    // Chuyển đổi chuỗi ISO 8601 sang đối tượng Date
    const date = new Date(isoString);

    // Lấy múi giờ địa phương (Việt Nam)
    const vietnamOffset = 7 * 60; // GMT+7
    const localTime = new Date(date.getTime() + vietnamOffset * 60 * 1000);

    // Lấy các thành phần của ngày và giờ
    const day = localTime.getDate();
    const month = localTime.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    const year = localTime.getFullYear();

    let hours = localTime.getHours();
    const minutes = localTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // Chuyển đổi giờ 0 thành 12

    const minutesStr = minutes < 10 ? "0" + minutes : minutes;

    // Định dạng ngày
    const today = new Date();
    const isToday =
      today.getDate() === day &&
      today.getMonth() + 1 === month &&
      today.getFullYear() === year;
    const dateString = isToday
      ? "Hôm nay"
      : `${day < 10 ? "0" + day : day}-${
          month < 10 ? "0" + month : month
        }-${year}`;

    // Định dạng giờ
    const timeString = `${hours}:${minutesStr} ${ampm}`;

    return { dateString, timeString };
  };
  const fetchTeamBy = () => {
    axios
      .get(`${axios.defaults.baseURL}/team/all-team/${user.email_collaborator}`)
      .then((res) => {
        if (res) {
          if (res.data.link_team) {
            setLink(
              res.data.link_team +
                user.id_collaborator +
                "-" +
                res.data.id_leader
            );
          }
          setQuantity(res.data.quantity);
          const { dateString, timeString } = formatVietnamTime(
            res.data.time_create
          );
          setDate(dateString);
          setTime(timeString);
          setNameLeader(res.data.name_leader);
          setAvatarLeader(res.data.avatar_leader);
          setListCollaborator(res.data.data);
          console.log(res.data.data);
        }
      });
  };
  useEffect(() => {
    fetchTeamBy();
  }, []);
  const openExternalLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL: ", err)
    );
  };

  const handlePressLink = (url) => {
    openExternalLink(url);
  };

  const avtLink = [
    "https://1.bp.blogspot.com/-suPoIp0q7J8/YQP2BoeKQDI/AAAAAAAACEY/5yzEtTUsRpMggIHvBBPAxSmZ79nZKBCVgCLcBGAsYHQ/s750/7.jpg",
    "https://1.bp.blogspot.com/-WRVMxXn7gJg/YQP2AJK2zOI/AAAAAAAACD0/0MVArLtw9_89z_yBD6k8PCm9SGHd-cQYwCLcBGAsYHQ/s750/1.jpg",
    "https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg",
    "https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg",
    "https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg",
  ];
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
          <Text style={styles.headerTitle}>Kết nối QR</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <Text style={styles.notifyTitle}>Hướng dẫn sử dụng cho người mới</Text>
      {link && ListCollaborator ? (
        <View>
          <View style={styles.flexRow}>
            <View style={{ flex: 8, paddingRight: 20 }}>
              <Text style={styles.notifySubTitle}>
                {date} | {time}
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <View style={styles.notifyTime}>
                <Text style={styles.notifyTimeContent}>
                  <FontAwesomeIcon color="#7D8592" icon={faClock} /> 3p
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.flexRow}>
            <View style={{ flex: 1, justifyContent: "flex-start" }}>
              <Text style={styles.notifySubTitle}>Trưởng nhóm</Text>
              <View style={[styles.flexRow, styles.leader]}>
                <Avatar link={avatarLeader} />
                <Text style={styles.leaderName}>{nameLeader}</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={styles.notifySubTitle}>Người được mời</Text>
              <ListAvt links={ListCollaborator} />
            </View>
          </View>
        </View>
      ) : (
        ""
      )}
      {link && ListCollaborator ? (
        <View style={styles.groupContainer}>
          <View>
            <View style={styles.group}>
              <Text style={styles.notifySubTitle}>Liên kết bán hàng</Text>
              <TouchableOpacity onPress={() => handlePressLink(link)}>
                <Text style={styles.link}>{link}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.qrContainer}>
              {/* <Image
                    width={200}
                    height={200}  
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/moviestreaming-a0fc2.appspot.com/o/pictures%2F2400def636789726ce69.jpg?alt=media&token=3704644f-39c4-481b-a7c2-1fbcf594e169' }}/> */}

              <QRCode
                value={link}
                size={200}
                logo={{
                  uri: "https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png",
                }}
                logoSize={30}
                logoBackgroundColor="transparent"
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.groupContainer}>
          {!link && !ListCollaborator ? (
            <View>
              <View style={styles.group}>
                <Text style={styles.notifySubTitle}>Liên kết bán hàng</Text>
                <TouchableOpacity onPress={() => handlePressLink(link)}>
                  <Text style={styles.link}>
                    {"https://ecoop.vn/?bwaf=" + user.id_collaborator}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.qrContainer}>
                {/* <Image
                    width={200}
                    height={200}  
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/moviestreaming-a0fc2.appspot.com/o/pictures%2F2400def636789726ce69.jpg?alt=media&token=3704644f-39c4-481b-a7c2-1fbcf594e169' }}/> */}

                <QRCode
                  value={"https://ecoop.vn/?bwaf=" + user.id_collaborator}
                  size={200}
                  logo={{
                    uri: "https://xeluudong.apecglobal.net/wp-content/uploads/2022/09/ECOOP-LOGO.png",
                  }}
                  logoSize={30}
                  logoBackgroundColor="transparent"
                />
              </View>
            </View>
          ) : (
            <Loading />
          )}
        </View>
      )}

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

  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 24,
    marginTop: 20,
  },
  notifyTitle: {
    paddingTop: 4,
    paddingHorizontal: 20,
    paddingRight: 120,
    fontSize: 24,
    fontWeight: "500",
  },
  notifySubTitle: {
    fontSize: 16,
    color: "#9795A4",
    alignItems: "flex-end",
  },
  notifyTime: {
    backgroundColor: "#F4F9FD",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 10,
  },
  notifyTimeContent: {
    color: "#7D8592",
    fontSize: 14,
  },
  leader: {
    marginTop: 0,
    marginBottom: 0,
    paddingHorizontal: 0,
    justifyContent: "flex-start",
  },
  leaderName: {
    paddingLeft: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  groupContainer: {
    padding: 20,
  },
  group: {
    marginBottom: 20,
  },
  link: {
    color: "#3F8CFF",
    fontSize: 18,
    marginTop: 5,
  },
  qrContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 30,
  },
});
