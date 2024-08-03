import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, useTheme, Provider as PaperProvider } from "react-native-paper";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const BusRoute = () => (
  <View style={[styles.container, { backgroundColor: "#673ab7" }]}>
    <MaterialCommunityIcons name="bus" style={styles.icon} />
    <Text style={styles.label}>Bus</Text>
    <Text style={styles.detailText}>
      You can easily get regular buses to Maihar from other major cities of the
      country. Bus Station(s): Maihar
    </Text>
  </View>
);

const FlightRoute = () => (
  <View style={[styles.container, { backgroundColor: "#3f51b5" }]}>
    <MaterialCommunityIcons name="airplane" style={styles.icon} />
    <Text style={styles.label}>Flight</Text>
    <Text style={styles.detailText}>
      There are no regular flights from other major cities of the country to
      Maihar. Nearest airport is Khajuraho Airport. Maihar 106 km away Khajuraho
      Airport (HJR), Khajuraho, Madhya Pradesh Maihar 145 km away Jabalpur
      Airport (JLR), Jabalpur, Madhya Pradesh
    </Text>
  </View>
);

const TrainRoute = () => (
  <View style={[styles.container, { backgroundColor: "#2196f3" }]}>
    <MaterialCommunityIcons name="train" style={styles.icon} />
    <Text style={styles.label}>Train</Text>
    <Text style={styles.detailText}>
      Maihar is well connected to other major cities of the country via regular
      trains. Railway Station(s): Maihar (MYR) .
    </Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

function Bottomnavigation() {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "bus", title: "Bus" },
    { key: "flight", title: "Flight" },
    { key: "train", title: "Train" },
  ]);

  const renderScene = SceneMap({
    bus: BusRoute,
    flight: FlightRoute,
    train: TrainRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: "#a983eb" }}
      renderIcon={({ route, focused, color }) => {
        let iconName;
        if (route.key === "bus") {
          iconName = "bus";
        } else if (route.key === "flight") {
          iconName = "airplane";
        } else if (route.key === "train") {
          iconName = "train";
        }

        return (
          <MaterialCommunityIcons name={iconName} size={24} color={color} />
        );
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>{route.title}</Text>
      )}
    />
  );

  return (
    <View>
      <PaperProvider theme={theme}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
      </PaperProvider>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Note :</Text>
          <Text style={styles.italicText}>
            In addition to the ropeway, you can either climb 1,063 stairs or
            drive directly to the temple via the in-route road.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    fontSize: 50,
    color: "#ffffff",
    marginBottom: 10,
  },
  label: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 10,
  },
  detailText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
  textContainer: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  italicText: {
    fontStyle: "italic",
    marginBottom: 0,
    fontSize: 15,
    textAlign: "center",
  },
});

export default Bottomnavigation;
