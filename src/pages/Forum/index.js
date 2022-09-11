import React, {useState} from "react";
import { Center, Text} from "native-base";
import { ScrollView, Animated} from "react-native";
import { SafeAreaView  } from 'react-native-safe-area-context'
import HeaderDefault from "../../components/HeaderDefault";

const Forum = () => {
    return (
        <Center w={"100%"}>
            <Text>Fórum</Text>
        </Center>
    );
};

{/* ######### Página padrão ########## */}
export default () => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0)) // Controla valor do scrollY
    return (
        <SafeAreaView>
          {/* ######### HEADER ########## */}
          <HeaderDefault scrollY={scrollY}/>
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
          {/* ######### CONTEÜDO ########## */}
          <Center flex={1} px="3">
            <Forum />
          </Center>
          {/* ######### CONTEÜDO ########## */}
          </ScrollView>
        </SafeAreaView>
    );
  };
  