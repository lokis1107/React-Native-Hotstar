import { View, Text } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel-fg";
import { cList } from "../data";
import FirstAnimation from "../components/FirstAnimation";

const Continue = () => {
  return (
    <View className="py-2">
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={cList}
        loop={true}
        renderItem={({ item }) => <FirstAnimation item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        sliderWidth={400}
        itemWidth={230}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

export default Continue;
