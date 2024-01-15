import React, { useState, useEffect, useCallback } from "react";
import {
  Center,
  Text,
  HStack,
  VStack,
  FlatList,
  Button,
  Box,
} from "native-base";
import { Animated, ImageBackground, Image, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../../components/HeaderDefault";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";
import Services from "../../../services/Services";

const NovoTopico = () => {
  const navigation = useNavigation();
  return (
    <Box alignItems="flex-start">
      <Button onPress={() => navigation.navigate("SalvarTopico")}>
        Novo Tópico
      </Button>
    </Box>
  );
};

export default function FormValidation() {
  const [post, setPost] = useState();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    Services.get("/conteudo")
      .then((res) => {
        console.log(res)
        Alert.alert(res, "Carregou!");

        setPost(res.data);
      })
      .catch((error) => {
        Alert.alert(error, "Não foi possível carregar os dados!");
      });
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     // Alert.alert("entrou na pagina");
  //     return () => {
  //       // Alert.alert("saiu para página");
  //     };
  //   }, [])
  // );

  return (
    <SafeAreaView>
      <HeaderDefault scrollY={scrollY} />

      <NovoTopico />

      <ScrollView
        nestedScrollEnabled={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          {
            useNativeDriver: false,
          }
        )}
      >
        <FlatList
          data={post}
          renderItem={({ item }) => (
            <Box px={5} py={2} rounded="md" my={2} bg="primary.300">
              <HStack w="70%">
                <Text>{item.autor}</Text>
              </HStack>
              <HStack w="30%">
                <View>
                  <Text>{item.autor}</Text>
                  <Button title="hello" />
                </View>
              </HStack>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
