import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { InputPhone, InputText } from "../components/Input";
import { Button } from "../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthContext from "../context/AuthProvider";
import axios from "../context/axios";
import DataStorage from "../utillity/DataStorage";
import { Team } from "../components/Team";

export default function SubCollaborator({ route,navigation }) {
  const { data } = route.params;
  const [collaborator,setCollaborator] = useState([]);
  const [load,setLoad] = useState(true)

  const getInitial = (name) => {
    const words = name.trim().split(" ");
    const lastName = words[words.length - 1];
    return lastName ? lastName.charAt(0).toUpperCase() : "";
  };

  const getCollaborator = async()=>{
    try {
      const response = await axios.get(`${axios.defaults.baseURL}/team/detail-collaborator/${data.id_collaborator}`);
      setCollaborator(response.data)
      setLoad(false)
    } catch (error) {
      console.error("Error fetching collaborator data:", error);
    }
  }

  useEffect(()=>{
    getCollaborator();
  },[load])
  
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
          <Text style={styles.headerTitle}>Thành viên của {data.name_collaborator}</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <View style={styles.bioContainer}>
        <View
          style={{ borderWidth: 1, borderColor: "black", borderRadius: 100 }}
        >
          {data.avatar ? (
            <Image style={styles.avt} source={{ uri: avt }} />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.initial}>
                {getInitial(data.name_collaborator)}
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.bioName}>{data.name_collaborator}</Text>
        <Text style={styles.bioPosition}>Cộng tác viên</Text>
      </View>
      <Text style={[styles.bioPosition,{marginTop:40,marginBottom:10,marginLeft:20,fontSize:20}]}>Thành viên trong nhóm:</Text>

      <ScrollView>
        {collaborator.length===0?(
            <Text style={{marginTop:50,textAlign:"center",fontSize:20,fontWeight:"600"}}>Chưa có thành viên</Text>
            ):(
              collaborator.map((item, index) => {
                return (
                  <Team
                    avt={
                      item.avatar
                    }
                    name={item.name_collaborator}
                    email={item.email_collaborator}
                    numMember={item.phone}
                  />
                );
              })
            )}
            <View style={{height:110}}></View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
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
