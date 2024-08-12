import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const Viewpagecard = ({ navigation }) => {
  const imageUrl = "https://picsum.photos/200/300";
  const title = "example hotel name";
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = async () => {
    try {
      const response = await fetch(
        "https://cloud.appwrite.io/v1/databases/66b259c60016ac264278/collections/66b2e5f30005a3f43af5/documents",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-Appwrite-Project": "66b258b500353050426f", // Your Project ID
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      setDocuments(data.documents);
      return data.documents; // Assuming the response has a 'documents' field
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchDocuments();
  });
  return (
    <View>
      {documents.map((hotel) => (
        <StyledTouchableOpacity
          key={hotel.$id}
          onPress={() => navigation.navigate("Details", { hotelId: hotel.$id })}
          className="m-2 mb-1 p-1 bg-white rounded-lg shadow-md flex-row border-solid border-2 border-sky-500"
        >
          <StyledImage
            source={{ uri: imageUrl }}
            className="w-1/2 h-40 rounded-lg"
          />
          <StyledView className="w-1/2 pl-4 justify-center">
            <StyledText className="text-lg font-bold">
              {hotel.HotelName}
            </StyledText>
            <StyledText className="text-gray-600 mt-2">
              View More Details
            </StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      ))}
    </View>
  );
};
export default Viewpagecard;
