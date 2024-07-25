import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Viewpagefilters = ({ label, onClear }) => {
  return (
    <View style={styles.chipContainer}>
      <Text style={styles.chipText}>{label}</Text>
      <TouchableOpacity onPress={onClear}>
        <Icon name="close" size={22} color="#fff" style={styles.chipIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6200ea",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 2,
  },
  chipText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 3,
  },
  chipIcon: {
    padding: 1,
  },
});

export default Viewpagefilters;
