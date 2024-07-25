import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import {
  Text,
  Card,
  Title,
  Paragraph,
  IconButton,
  Divider,
  MD3Colors,
} from "react-native-paper";
import React from "react";

const Detailsview = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          width: "100%",
          height: "auto",
          marginTop: 50,
        }}
      >
        <Text style={styles.headertext} variant="titleLarge">
          VIEW HOTEL DETAILS
        </Text>
        <Card>
          <Card.Content>
            <Title>Hotel Sunshine</Title>
            <Paragraph>Location: 123 Beach Avenue, Miami</Paragraph>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="food" size={20} />
              <Text>Type: Veg</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="currency-usd" size={20} />
              <Text>Rent: $150 per night</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="phone" size={20} />
              <Text>Contact: +1 234 567 890</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="google-maps" size={20} />
              <Text>Location: +1 234 567 890</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="bed" size={20} />
              <Text>Rooms: AC and Non-AC</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="check-circle" size={20} />
              <Text>Other: Free Wi-Fi, Breakfast Included</Text>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="car" size={20} />
              <Text>Features: Parking, Swimming Pool</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <IconButton icon="details" size={20} />
              <Text>Details: If any</Text>
            </View>
          </Card.Content>
        </Card>
        <View style={styles.bottomtextbar}>
          <Text style={styles.bottomtext}>
            If you feel unsafe, please contact Dial 100
          </Text>
          <Text>
            <IconButton
              icon="phone-dial"
              size={30}
              iconColor={MD3Colors.error50}
              onPress={() => {
                Linking.openURL("tel:100");
              }}
            />
          </Text>
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
