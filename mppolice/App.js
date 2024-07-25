import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Homepage from "./Pages/Homepage";
import Viewpage from "./Pages/Viewpage";
import Detailspage from "./Pages/Detailspage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="View" component={Viewpage} />
        <Stack.Screen name="Details" component={Detailspage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
