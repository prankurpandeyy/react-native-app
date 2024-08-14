import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Information from "../Components/Information";
import { Linking } from "react-native";

const Informationpage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Information navigation={navigation} />
        <Text
          style={styles.devInfo}
          onPress={() => {
            Linking.openURL("https://atdsoftwares.netlify.app/");
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#1D9BF0" }}>
            Designed & Developed by ATD Softwares Maihar
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },

  devInfo: {
    fontSize: 15,
    textAlign: "center",
    margin: 2,
  },
});

export default Informationpage;
