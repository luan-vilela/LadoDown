import React, { useState } from "react";
import { Image, Animated } from "react-native";
import { Button } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, DrawerActions } from '@react-navigation/native';

import { styles } from "./styles";


const Btn = ({ screen, icon}) => {
  const navigation = useNavigation();
  return (
    <Button
      leftIcon={<Ionicons name={icon} size={32} color="white" />}
      variant="link"
      onPress={()=>navigation.navigate(screen)}
    >
    </Button>
  );
};

const Btn2 = ({ icon}) => {
  const navigation = useNavigation();
  return (
    <Button
      leftIcon={<Ionicons name={icon} size={32} color="white" />}
      variant="link"
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
    </Button>
  );
};



export default ({ scrollY }) => {
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: scrollY.interpolate({
            inputRange: [10, 140, 160],
            outputRange: [90, 10, 0],
            extrapolate: "clamp",
          }),
          opacity: scrollY.interpolate({
            inputRange: [1, 75, 170],
            outputRange: [1, 1, 0],
            extrapolate: "clamp",
          }),
        },
      ]}
    >
    <Btn2 icon="menu" />

    <Animated.Image
      style={{
        width: scrollY.interpolate({
          inputRange: [0, 120],
          outputRange: [160, 80],
          extrapolate: "clamp",
        }),
        height: 60,
        }}
        resizeMode="contain"
        source={require("../../assets/logo220x112-branco.png")}
      />

      <Btn screen="SignIn" icon="person" />
    </Animated.View>
  );
};
