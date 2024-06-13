import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export function Order({ avt, code, money, description, status }) {
  return (
    <View style={styles.flexRow}>
      <View style={{ flex: 2, justifyContent: "center" }}>
        <View
          style={{
            width: 42,
            height: 42,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 100,
          }}
        >
          <Image style={styles.avt} source={{ uri: avt }} />
        </View>
      </View>
      <View style={{ flex: 8 }}>
        <Text style={styles.orderTitle}>#MĐH:{code}</Text>
        <Text style={styles.orderMoney}>{money} đ</Text>
        <Text style={styles.orderDescription}>{description}</Text>
      </View>
      <View
        style={{ flex: 2, alignItems: "flex-end", justifyContent: "center" }}
      >
        <View
          style={{
            height: 25,
            width: 25,
            borderRadius: 100,
            backgroundColor:
              status == "1" ? "#FF5400" : status == "2" ? "#06B752" : "#3F8CFF",
          }}
        ></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  avt: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 0.1,
    borderColor: "white",
    overflow: "hidden",
  },
  orderTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  orderMoney: {
    fontSize: 18,
    color: "#22e639",
  },
  orderDescription: {
    fontSize: 14,
    color: "grey",
  },
});
