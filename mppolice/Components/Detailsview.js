// import {
//   View,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Linking,
// } from "react-native";
// import {
//   Text,
//   Card,
//   Title,
//   Paragraph,
//   IconButton,
//   Divider,
//   MD3Colors,
// } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Linking,
  Text,
  Card,
  Title,
  Paragraph,
  IconButton,
  Divider,
  MD3Colors,
  React,
} from "../Constant/Libraryconstant";

const Detailsview = () => {
  const [hotelData, setHotelData] = useState([]);
  console.log("🚀 ~ Detailsview ~ hotelData:", hotelData);
  const route = useRoute();
  const { hotelId } = route.params; // Access hotelId here
  console.log("Hotel ID:", hotelId);

  // const hotelId = "84bed869-95ef-4d44-acb9-dcd8872e7dd4";
  const fetchHotelById = async (hotelId) => {
    try {
      const response = await fetch(
        `https://cloud.appwrite.io/v1/databases/66b259c60016ac264278/collections/66b2e5f30005a3f43af5/documents/${hotelId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Project": "66b258b500353050426f",
            // Use your API key if required
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hotel data");
      }

      const resData = await response.json();
      setHotelData(resData);
      return hotelData;
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };
  useEffect(() => {
    fetchHotelById(hotelId);
  }, []);
  // Usage

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          width: "100%",
          height: "auto",
        }}
      >
        <Text style={styles.headertext}>VIEW HOTEL DETAILS</Text>
        <Card>
          <Card.Content>
            <Title>{hotelData.DhotelDataName}</Title>
            <Paragraph>Location: {hotelData.HotelAddress}</Paragraph>
            <View style={styles.row}>
              <IconButton icon="food" size={20} />
              <Text>Type: {hotelData.HotelType}</Text>
            </View>
            <Divider />
            <View style={styles.row}>
              <IconButton icon="currency-usd" size={20} />
              <Text>Rent: ₹{hotelData.HotelRent} per night</Text>
            </View>
            <Divider />
            <View style={styles.row}>
              <IconButton icon="phone" size={20} />
              <Text>Contact: {hotelData.HotelContact}</Text>
            </View>
            <View style={styles.row}>
              <IconButton icon="google-maps" size={20} />
              <Text>Location: {hotelData.HotelLocation}</Text>
            </View>
            <Divider />
            <View style={styles.row}>
              <IconButton icon="bed" size={20} />
              <Text>Rooms: {hotelData.HotelRoomType}</Text>
            </View>
            <Divider />
            {/* <View style={styles.row}>
              <IconButton icon="check-circle" size={20} />
              <Text>Facilities: {hotelData.HotelFacilties.join(", ")}</Text>
            </View>
            <Divider />
            <View style={styles.row}>
              <IconButton icon="car" size={20} />
              <Text>Features: {hotelData.HotelFeatures.join(", ")}</Text>
            </View> */}
            <View style={styles.row}>
              <IconButton icon="details" size={20} />
              <Text>Details: {hotelData.HotelDetails}</Text>
            </View>
          </Card.Content>
        </Card>
        <View style={styles.bottomtextbar}>
          <Text style={styles.bottomtext}>
            If you feel unsafe, please contact Dial 100
          </Text>
          <IconButton
            icon="phone-dial"
            size={30}
            iconColor="red" // Change to your desired color
            onPress={() => {
              Linking.openURL("tel:100");
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headertext: {
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },
  bottomtextbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirectionr: "row",
    marginTop: 20,
  },
  bottomtext: {
    color: "red",
    fontSize: 20,
  },
});

export default Detailsview;
