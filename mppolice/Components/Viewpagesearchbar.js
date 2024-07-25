import * as React from "react";
import { Searchbar, Text } from "react-native-paper";
import { StyleSheet, View } from "react-native";

const Viewpagesearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headertext} variant="titleLarge">
        MAIHAR POLICE HOTEL SEARCH{" "}
      </Text>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchquerytext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  headertext: {
    margin: 10,
  },
  searchquerytext: {
    marginLeft: 10,
    marginRight: 10,
  },
});
export default Viewpagesearchbar;
