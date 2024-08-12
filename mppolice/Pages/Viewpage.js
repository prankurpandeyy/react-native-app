import { React, SafeAreaView, ScrollView } from "../Constant/Libraryconstant";
import Viewpagesearchbar from "../Components/Viewpagesearchbar";
import Viewpagecard from "../Components/Viewpagecard";
import Viewpagefilters from "../Components/Viewpagefilters";
import { useEffect, useState } from "react";

const Viewpage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Viewpagesearchbar />
        <Viewpagefilters />
        <Viewpagecard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Viewpage;
