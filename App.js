import React, {useState} from "react";
import { ScrollView, Animated, View, Text} from "react-native";
import { SafeAreaView  } from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native';

import HeaderDefault from "./src/components/header-default";


function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)) // Controla valor do scrollY

  return (
    <SafeAreaView >
      <HeaderDefault scrollY={scrollY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { y: scrollY}
          },
        }],
        {
          useNativeDriver: false,
        }
        )}
      >
        {/* ######### CAIXA ########## */}
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          <View style={styles.box}><Text style={{ fontSize: 22 }}>Conteúdo</Text></View>
          {/* ######### CAIXA ########## */}
      </ScrollView>

    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
  box: {
    height: 180,
    backgroundColor:  '#DDD',
    margin: 5,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default App;
