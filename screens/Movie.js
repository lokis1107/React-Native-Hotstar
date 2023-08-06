import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { recommended } from "../data";
import Recommended from "../components/Recommended";

const Movie = (props) => {
  const item = props.route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex">
      <ScrollView showsVerticalScrollIndicator={false} className="mb-1">
        <View>
          <View className="ml-1 mt-1 relative">
            <Image
              source={item.image}
              style={{ height: hp(30), width: hp(46.5) }}
              className="rounded-xl absolute"
            />
            <TouchableOpacity
              className="p-3 rounded-full w-14 items-center"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              onPress={() => navigation.goBack()}
            >
              <Icon.ArrowLeft color={"white"} height={30} width={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-52 ml-3">
          <Text className="font-bold" style={{ fontSize: wp(6) }}>
            {item.name}
          </Text>
          <Text className="mt-3 text-xl font-bold mx-1">Description :</Text>
          <View className="mt-5 mx-1">
            <Text className="font-bold" style={{ fontSize: wp(4) }}>
              {item.desc}
            </Text>
          </View>
        </View>
        <View className=" flex-row justify-between">
          <TouchableOpacity className="p-5 border mt-4 w-52 rounded-2xl items-center mx-3 flex-row">
            <Icon.Play height={25} width={25} stroke="#0E0E97" />
            <Text className="font-bold text-xl ml-4">Watch Online</Text>
          </TouchableOpacity>
          <TouchableOpacity className="p-4 mt-5 mr-8 border rounded-2xl">
            <Icon.Download height={28} width={28} stroke="#0E0E97" />
          </TouchableOpacity>
        </View>
        <View className="mx-3 mt-5">
          <Text className="font-bold text-xl">Recommended Movie</Text>
        </View>
        <View>
            <FlatList
              data={recommended}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Recommended item={item} />}
            />
          </View>
      </ScrollView>
    </View>
  );
};

export default Movie;
