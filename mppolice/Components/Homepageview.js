import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Homepageview({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/mppolicelogo3.png")}
      />

      <Text style={styles.path} onPress={() => navigation.navigate("View")}>
        HOTEL FINDER BY MAIHAR POLICE
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: 400,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  path: {
    color: "orange",
    fontSize: 28,
  },
});

export default Homepageview;
