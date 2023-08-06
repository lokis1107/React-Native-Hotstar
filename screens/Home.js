import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { Bars3CenterLeftIcon } from "react-native-heroicons/solid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Icon from "react-native-feather";
import { cList, recommended, topContainer } from "../data";
import TopContainer from "../components/TopContainer";
import Recommended from "../components/Recommended";
import ContinuedList from "../components/ContinuedList";
import BottomSheet from "react-native-simple-bottom-sheet";
import { signOut } from "firebase/auth";
import { auth } from "../database/firebase";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const panelRef = useRef(null);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center justify-between -mt-3 mx-4">
        <TouchableOpacity onPress={() => panelRef.current.togglePanel()}>
          <View className=" p-3">
            <Bars3CenterLeftIcon size={35} color={"black"} />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={require("../images/logo.png")}
            style={{ height: wp(28), width: wp(28) }}
          />
        </View>
        <View className="flex-row">
          <TouchableOpacity>
            <Icon.Cast height={30} width={30} stroke="#0E0E97" />
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="mx-2">
              <Icon.Search height={30} width={30} stroke="#0E0E97" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1">
        <ScrollView showsVerticalScrollIndicator={false} className="mb-14">
          <View className="mt-5 mx-5 mr-3">
            <FlatList
              data={topContainer}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TopContainer item={item} />}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
            <View className="mt-5 mx-4">
              <Text
                style={{ fontSize: wp(4.4) }}
                className="font-bold text-blue-900"
              >
                Recommended for you
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <FlatList
              data={recommended}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Recommended item={item} />}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Continue")}>
            <View className="mt-5 mx-4">
              <Text
                style={{ fontSize: wp(4.4) }}
                className="font-bold text-blue-900"
              >
                Continued Watching
              </Text>
            </View>
          </TouchableOpacity>

          <View>
            <FlatList
              data={cList}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ContinuedList item={item} />}
            />
          </View>
        </ScrollView>
        <View>
          <BottomSheet ref={(ref) => (panelRef.current = ref)}>
            <View>
              <Text className="text-center font-bold text-xl">
                Welcome Back!
              </Text>
            </View>
            <View className="mx-4 mt-3">
              <Text className="text-lg font-bold">
                Disney+ Hotstar is leading the way as the largest and smartest
                video platform in the country, reaching over 300 million users
                today. We have set a number of world records along the way -
                including for the highest concurrent viewership at 25.3 million
                during the ICC Cricket World Cup 2019.
              </Text>
              <View className="mx-4 p-5 items-center">
                <TouchableOpacity className="flex-row" onPress={handleSignOut}>
                  <Icon.LogOut height={30} width={30} stroke="#0E0E97" />
                  <Text className="text-lg font-bold text-blue-900 ml-3">
                    LogOut
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>
        </View>
      </View>
    </View>
  );
};

export default Home;
