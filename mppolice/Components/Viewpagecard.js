import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const Viewpagecard = ({ navigation }) =>
  // { imageUrl, title, onPress }

  {
    const imageUrl = "https://picsum.photos/200/300";
    const title = "Hotel Example";

    return (
      <View>
        <StyledTouchableOpacity
          onPress={() => navigation.navigate("Details")}
          className="m-2 mb-0 p-1 bg-white rounded-lg shadow-md flex-row border-solid border-2 border-sky-500"
        >
          <StyledImage
            source={{ uri: imageUrl }}
            className="w-1/2 h-40 rounded-lg"
          />
          <StyledView className="w-1/2 pl-4 justify-center">
            <StyledText className="text-lg font-bold">{title}</StyledText>
            <StyledText className="text-gray-600 mt-2">
              View More Details
            </StyledText>
          </StyledView>
        </StyledTouchableOpacity>
      </View>
    );
  };

export default Viewpagecard;
