// PriceFilter.js
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Chip, Title, Button } from "react-native-paper";

const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "Above $200", min: 200, max: Infinity },
];

const PriceFilter = ({ onFilter }) => {
  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);

  const applyFilter = () => {
    Alert.alert("Filter Applied", `Selected Range: ${selectedRange.label}`);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Filter by Price</Title>
      <View style={styles.chipsContainer}>
        {priceRanges.map((range) => (
          <Chip
            key={range.label}
            mode={
              selectedRange.label === range.label ? "contained" : "outlined"
            }
            selected={selectedRange.label === range.label}
            onPress={() => setSelectedRange(range)}
            style={styles.chip}
          >
            {range.label}
          </Chip>
        ))}
      </View>
      <Button mode="contained" onPress={applyFilter} style={styles.button}>
        Apply Filter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 3,
    marginTop: 16,
  },
  title: {
    marginBottom: 16,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  chip: {
    margin: 4,
  },
  button: {
    alignSelf: "center",
  },
});

export default PriceFilter;
