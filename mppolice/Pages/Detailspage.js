import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Detailsview from "../Components/Detailsview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Detailspage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Detailsview />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailspage;
