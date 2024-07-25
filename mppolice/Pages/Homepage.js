import { View, Text, Image } from "react-native";
import React from "react";
import Homepageview from "../Components/Homepageview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Homepage = ({ navigation }) => {
  return (
    <View>
      <Homepageview navigation={navigation} />
    </View>
  );
};

export default Homepage;
