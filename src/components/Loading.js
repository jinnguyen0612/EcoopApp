import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.loadingOverlay}>
      <ActivityIndicator size="large" color="#F05B2A" />
    </View>
  );
}
const styles = StyleSheet.create({
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.01)", // Màu nền có độ trong suốt
  },
});
