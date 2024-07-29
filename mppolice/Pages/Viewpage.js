import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import Viewpagesearchbar from "../Components/Viewpagesearchbar";
import Viewpagecard from "../Components/Viewpagecard";
import Viewpagefilters from "../Components/Viewpagefilters";

const Viewpage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Viewpagesearchbar />
        <Viewpagefilters />
        <Viewpagecard navigation={navigation} />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
        <Viewpagecard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Viewpage;
