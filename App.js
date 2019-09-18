import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardScene from "./scene/CardScene";

export default function App() {
  return <CardScene />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
