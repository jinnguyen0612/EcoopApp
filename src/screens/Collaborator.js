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
import AuthContext from "../context/AuthProvider";
import axios from "../context/axios";

export default function Collaborator({ navigation }) {
  const { user } = useContext(AuthContext);
  const [collaborators,setCollaborators] = useState([])
  const [load,setLoad] = useState(true)
  const getCollaborator = async () => {
    try {
      const response = await axios.get(`${axios.defaults.baseURL}/team/all-collaborator/${user.phone}`);
      setCollaborators(response.data);
      setLoad(false);
    } catch (error) {
      console.error("Error fetching collaborator data:", error);
    }
  }
  
  const handlePress = (data) =>{
    navigation.navigate("SubCollaborator", { data: data })
  }

  useEffect(() => {
    getCollaborator();
  }, [load]);


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
          <Text style={styles.headerTitle}>Đội của tôi</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
      <ScrollView style={styles.listTeam}>
        {
          collaborators.length===0?(
            <Text style={{marginTop:50,textAlign:"center",fontSize:20,fontWeight:"600"}}>Chưa có thành viên</Text>
          ):(
            collaborators.map((item, index) => {
              return (
                <Team
                  onPress={()=>handlePress(item)}
                  avt={
                    item.avatar
                  }
                  name={item.name_collaborator}
                  numMember={item.count}
                />
              );
            })
          )
        }

        

        <View style={{ height: 140 }}></View>
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
  listTeam: {
    marginTop: 10,
  },
});
