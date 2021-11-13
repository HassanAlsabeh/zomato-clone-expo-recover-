import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedLottieView from "lottie-react-native";
import MenuItems from "./MenuItems";
export default function OrderCompleted() {
  return (
    <SafeAreaView
      style={{
        flex: 1,

        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <AnimatedLottieView
          style={{ height: 100, alignSelf: "center", marginTop:0 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          loop={false}
        />
        <Text>Order Completed</Text>
        <MenuItems />
        <AnimatedLottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
}
