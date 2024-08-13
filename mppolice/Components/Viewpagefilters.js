// Viewpagefilters.js
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Chip, Title, Button } from "react-native-paper";

const Viewpagefilters = ({ hotelData, setHotelData }) => {
  const priceRanges = [
    { label: "All", min: 0, max: Infinity },
    { label: "Below ₹500", min: 0, max: 500 },
    { label: "₹500 - ₹1000", min: 500, max: 1000 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "Above ₹2000", min: 2000, max: Infinity },
  ];

  const [selectedRange, setSelectedRange] = useState(priceRanges[0]);
  const [filteredHotelData, setFilteredHotelData] = useState();

  const applyFilter = () => {
    const filteredHotels = hotelData.filter((hotel) => {
      const hotelRent = parseInt(hotel.HotelRent, 10);
      return hotelRent >= selectedRange.min && hotelRent <= selectedRange.max;
    });

    setHotelData(filteredHotels.length > 0 ? filteredHotels : []);
  };

  {
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
        <Button mode="contained" style={styles.button} onPress={applyFilter}>
          Apply
        </Button>
      </View>
    );
  }
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

export default Viewpagefilters;
// import React, { useState, useEffect } from "react";
// import { View, StyleSheet } from "react-native";
// import { Title, Chip } from "react-native-paper";

// const Viewpagefilters = ({ hotelData, setFilteredHotelData }) => {
//   const priceRanges = [
//     { label: "All", min: 0, max: Infinity }, // "All" option to show all hotels
//     { label: "Below ₹500", min: 0, max: 500 },
//     { label: "₹500 - ₹1000", min: 500, max: 1000 },
//     { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
//     { label: "Above ₹2000", min: 2000, max: Infinity },
//   ];

//   const [selectedRange, setSelectedRange] = useState(priceRanges[0]);

//   // Filter function to filter the hotel cards based on the selected price range
//   useEffect(() => {
//     if (selectedRange.label === "All") {
//       setFilteredHotelData(hotelData); // Show all hotels if "All" is selected
//     } else {
//       const filteredHotels = hotelData.filter((hotel) => {
//         const hotelRent = parseInt(hotel.HotelRent, 10);
//         return hotelRent >= selectedRange.min && hotelRent <= selectedRange.max;
//       });

//       setFilteredHotelData(filteredHotels.length > 0 ? filteredHotels : []);
//     }
//   }, [selectedRange, hotelData]);

//   return (
//     <View style={styles.container}>
//       <Title style={styles.title}>Filter by Price</Title>
//       <View style={styles.chipsContainer}>
//         {priceRanges.map((range) => (
//           <Chip
//             key={range.label}
//             mode={
//               selectedRange.label === range.label ? "contained" : "outlined"
//             }
//             selected={selectedRange.label === range.label}
//             onPress={() => setSelectedRange(range)}
//             style={styles.chip}
//           >
//             {range.label}
//           </Chip>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   chipsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   chip: {
//     marginRight: 10,
//     marginBottom: 10,
//   },
// });

// export default Viewpagefilters;
