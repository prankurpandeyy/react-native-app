import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { ScrollView } from "react-native-gesture-handler";
import DataSpinner from "./DataSpinner";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const Viewpagecard = ({ navigation, filteredHotelsByName, isLoading }) => {
  console.log("🚀 ~ Viewpagecard ~ hotelData:", filteredHotelsByName);
  const imageUrl = "https://picsum.photos/200/300";
  return (
    <View>
      {isLoading ? (
        <DataSpinner />
      ) : filteredHotelsByName.length > 0 ? (
        filteredHotelsByName.map((hotel) => (
          <StyledTouchableOpacity
            key={hotel.$id}
            onPress={() =>
              navigation.navigate("Details", { hotelId: hotel.$id })
            }
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
        ))
      ) : (
        <StyledText className="text-center text-red-500 mt-4">
          No hotels found
        </StyledText>
      )}
    </View>
  );
};
export default Viewpagecard;
