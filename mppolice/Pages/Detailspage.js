import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import Detailsview from "../Components/Detailsview";

const Detailspage = ({ navigation }) => {

  
  return (
    <SafeAreaView>
      <ScrollView>
        <Detailsview />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailspage;
