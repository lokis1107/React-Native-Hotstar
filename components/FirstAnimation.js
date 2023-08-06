import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const FirstAnimation = ({ item }) => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            borderRadius: 40,
            backgroundColor: "#ffffff",
            height: 350,
            width: 240,
          }}
          className="items-center justify-center mt-56"
        >
          <View>
            <Image source={item.image} className="h-full w-60 rounded-2xl" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FirstAnimation;
