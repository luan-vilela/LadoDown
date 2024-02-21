import React, {useState} from "react";
import { ScrollView, Animated, View} from "react-native";
import { NativeBaseProvider, StatusBar} from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

import Drawer from "./src/stacks/Drawer";

//Deixa status bar top com a cor verde
const BarTop = () => {
  return <StatusBar
      backgroundColor="#10b981"
  />;
};

export default function App() {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        < Drawer />
      </NavigationContainer>
      <BarTop />
    </NativeBaseProvider>
  );
}