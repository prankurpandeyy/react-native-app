import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Chip, Title, Text } from "react-native-paper";

const Viewpagefilters = ({ hotelData, setHotelData,fetchHotelData }) => {
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Below ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "Above ₹2000", min: 2000, max: Infinity },
  ];

  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);

  useEffect(() => {
    applyFilter();
  }, [selectedRange]);

  const applyFilter = () => {
    if (selectedRange.label === "All") {
      setHotelData(hotelData);
      fetchHotelData()

    } else {
      const filteredHotels = hotelData.filter((hotel) => {
        const hotelRent = parseInt(hotel.HotelRent, 10);
        console.log("🚀 ~ filteredHotels ~ hotelRent:", hotelRent);

        return hotelRent >= selectedRange.min && hotelRent <= selectedRange.max;
      });

      setHotelData(filteredHotels.length > 0 ? filteredHotels : []);
    }
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
  },
  title: {
    marginBottom: 8,
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  chip: {
    margin: 2,
  },
});

export default Viewpagefilters;
