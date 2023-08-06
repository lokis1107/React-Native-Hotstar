import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const TopContainer = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Movie", { ...item })}>
        <Image
          source={item.image}
          style={{ height: hp(25), width: hp(40) }}
          className="mr-4 rounded-xl"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopContainer;
