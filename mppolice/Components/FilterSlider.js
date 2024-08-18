import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const FilterSlider = ({ hotelData, setHotelData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filter by Price Range</Text>

      <Slider />
      <View style={styles.marksContainer}>
        <Text style={styles.mark}>₹0</Text>
        <Text style={styles.mark}>₹500</Text>
        <Text style={styles.mark}>₹1000</Text>
        <Text style={styles.mark}>₹1500</Text>
        <Text style={styles.mark}>₹2000+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  priceLabel: {
    marginBottom: 8,
    fontSize: 14,
    textAlign: "center",
  },
  marksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mark: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default FilterSlider;
