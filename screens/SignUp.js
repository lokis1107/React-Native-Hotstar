import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/firebase";
import { Alert } from "react-native";

const SignUp = () => {
  const navigation = useNavigation();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async () => {
    if (mail && password) {
      try {
        await createUserWithEmailAndPassword(auth, mail, password);
      } catch (err) {
        Alert.alert("Error", "Please Enter the valid mail and password");
      }
    } else {
      Alert.alert("Error", "Please enter some valid data");
    }
  };
  return (
    <View className="flex-1 items-center h-full w-full">
      <Animatable.View duration={500} animation={"slideInDown"}>
        <View>
          <Image
            source={require("../images/welcome.png")}
            style={{ height: hp(25), width: hp(25) }}
          />
        </View>
      </Animatable.View>
      <View
        style={{ borderTopLeftRadius: 55, borderTopRightRadius: 55 }}
        className="flex-1 bg-white w-full mt-8  shadow-xl"
      >
        <Animatable.View duration={900} animation={"slideInUp"}>
          <View>
            <View>
              <Text
                style={{ fontSize: wp(7) }}
                className="text-center font-bold mt-5"
              >
                Let's get started
              </Text>
            </View>
            <View>
              <TextInput
                placeholder="Name"
                className="border p-5 mt-8 mx-5 rounded-xl text-lg border-blue-950"
              />
              <TextInput
                placeholder="Email"
                className="border p-5 mt-5 mx-5 rounded-xl text-lg border-blue-950"
                value={mail}
                onChangeText={(v) => setMail(v)}
              />
              <TextInput
                placeholder="Password"
                className="border p-5 mt-5 mx-5 rounded-xl text-lg border-blue-950"
                value={password}
                onChangeText={(v) => setPassword(v)}
                secureTextEntry
              />
              <TouchableOpacity
                className="mt-8 items-center p-5 mx-16 rounded-3xl"
                onPress={handleCreate}
              >
                <Text className="text-2xl font-bold text-blue-900">
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-5"
                onPress={() => navigation.navigate("Login")}
              >
                <View className="items-end">
                  <Text className="font-bold text-lg">
                    Already have an account?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

export default SignUp;
