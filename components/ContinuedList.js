import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ContinuedList = ({ item }) => {
  return (
    <View className="mt-5 mx-2">
      <TouchableOpacity>
        <Image
          source={item.image}
          style={{ height: hp(26), width: hp(18) }}
          className="rounded-xl"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ContinuedList;
