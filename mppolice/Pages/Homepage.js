import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Homepageview from "../Components/Homepageview";

const Homepage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Homepageview navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homepage;
