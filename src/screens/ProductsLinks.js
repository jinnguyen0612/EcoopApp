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
import axios from "../context/axios";
import { ProductItem } from "../components/ProductItem";

export default function ProductsLinks({ route,navigation }) {
  const { data } = route.params;

  const colors = ["red", "green", "blue", "yellow", "pink"];
  let colorIndex = 0;
  

  function runColor() {
    const color = colors[colorIndex];
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else colorIndex++;
    return color;
  }

  
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
          <Text style={styles.headerTitle}>Danh sách sản phẩm</Text>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      <ScrollView>

        {data.map((item, index) => {
            return (
              <ProductItem
              color={runColor()}
              product={item.name_product}
              link={item.alias}
              image={
                item.image_product
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
