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
import DataSpinner from "./DataSpinner";
import { color } from "@rneui/base";

const Detailsview = () => {
  const [hotelData, setHotelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { hotelId } = route.params; // Access hotelId here
  // const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
  // console.log("🚀 ~ Detailsview ~ databaseId:", databaseId);
  // const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
  // console.log("🚀 ~ Detailsview ~ collectionId:", collectionId);

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

      setIsLoading(true);
      const resData = await response.json();
      setHotelData(resData);
      setIsLoading(false);
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
      {isLoading ? (
        <DataSpinner />
      ) : (
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
              <Title style={styles.title}>{hotelData.HotelName}</Title>
              <Paragraph style={styles.paragraph}>
                Location: {hotelData.HotelAddress}
              </Paragraph>

              <View style={styles.row}>
                <IconButton icon="food" size={24} />
                <Text style={styles.text}>Type: {hotelData.HotelType}</Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="currency-usd" size={24} />
                <Text style={styles.text}>
                  Rent: ₹{hotelData.HotelRent} per night
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="phone" size={24} />
                <Text style={styles.text}>
                  Contact: {hotelData.HotelContact}
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="google-maps" size={24} />
                <Text
                  style={styles.text}
                  onPress={() => Linking.openURL(hotelData.HotelLocation)}
                > Location:
                  <Text style={{ color: "blue" }}>
                    {hotelData.HotelLocation}
                  </Text>
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="bed" size={24} />
                <Text style={styles.text}>
                  Rooms: {hotelData.HotelRoomType}
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="check-circle" size={24} />
                <Text style={styles.text}>
                  Facilities:{" "}
                  {Array.isArray(hotelData.HotelFacilties)
                    ? hotelData.HotelFacilties.join(", ")
                    : "N/A"}
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="car" size={24} />
                <Text style={styles.text}>
                  Features:{" "}
                  {Array.isArray(hotelData.HotelFeatures)
                    ? hotelData.HotelFeatures.join(", ")
                    : "N/A"}
                </Text>
              </View>
              <Divider style={styles.divider} />

              <View style={styles.row}>
                <IconButton icon="details" size={24} />
                <Text style={styles.text}>
                  Details: {hotelData.HotelDetails}
                </Text>
              </View>
            </Card.Content>
            <View style={styles.bottomtextbar}>
              <Text style={styles.bottomtext}>
                If you feel unsafe, please contact Dial 100
              </Text>
              <IconButton
                icon="phone-dial"
                size={30}
                iconColor="red"
                onPress={() => {
                  Linking.openURL("tel:100");
                }}
              />
            </View>
          </Card>
        </ScrollView>
      )}
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
    marginTop: 18,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
  divider: {
    marginVertical: 8,
  },
  bottomtextbar: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  bottomtext: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Detailsview;
