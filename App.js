import React, {useState} from "react";
import { ScrollView, Animated, View} from "react-native";
import { NativeBaseProvider} from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

import MainStack from './src/stacks/MainStack';


export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)) // Controla valor do scrollY

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        < MainStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}