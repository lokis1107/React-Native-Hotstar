import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white justify-around items-center">
      <Animatable.View delay={300} animation={"slideInDown"}>
        <View>
          <Image
            source={require("../images/welcome.png")}
            style={{ height: hp(25), width: hp(25) }}
          />
          <Animatable.View delay={400} animation={'slideInLeft'}>
            <View>
              <TouchableOpacity
                className="p-5 mt-5 rounded-2xl"
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  className="text-center font-bold text-blue-900"
                  style={{ fontSize: wp(6) }}
                >
                  Let's get started
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Welcome;
