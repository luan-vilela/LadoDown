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
import HeaderDefault from "../../components/HeaderDefault";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";
import Services from "../../services/Services";
const Home = ({ titulo }) => {
  const navigation = useNavigation();
  return (
    <Center padding={3}>
      <HStack
        style={styles.estilo.card}
        width="100%"
        rounded="md"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.100",
        }}
      >
        <VStack w="100%">
          {titulo.tituloPrincipal !== undefined &&
          titulo.tituloPrincipal !== "" ? (
            <Text style={styles.estilo.titulo}>{titulo.tituloPrincipal}</Text>
          ) : null}

          {titulo.imagemGrande !== undefined && titulo.imagemGrande !== "" ? (
            <Image
              source={{ uri: titulo.imagemGrande }}
              resizeMode="cover"
              style={styles.estilo.imagemGrande}
            ></Image>
          ) : null}
        </VStack>
      </HStack>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Topicos", {
            itemId: titulo.id,
          })
        }
      >
        <HStack
          width="100%"
          borderWidth="1"
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
      
        >
          <HStack w="30%">
            <Image
              source={{ uri: titulo.imagemPequena }}
              resizeMode="cover"
              style={styles.estilo.imagemPequena}
            ></Image>
            {titulo.tag !== undefined && titulo.tag !== "" ? (
              <Text style={styles.estilo.tag}>{titulo.tag}</Text>
            ) : null}
          </HStack>

          <VStack w="70%" padding="5px">
            {titulo.title !== undefined && titulo.title !== "" ? (
              <Text style={styles.estilo.title}>
                {titulo.title}
                {"\n"}
              </Text>
            ) : null}
            <Text style={styles.estilo.descricao}>
              {titulo.descricao}
              {"\n"}
            </Text>
            <Text>Há 2 horas - {titulo.autor}</Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    </Center>
  );
};

const HomeBotton = ({ titulo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Topicos", {
          itemId: titulo.id,
        })
      }
    >
      <View style={styles.estilo.cardLateral}>
        <ImageBackground
          source={{ uri: titulo.imagemPequena }}
          resizeMode="cover"
          style={styles.estilo.imageLateral}
        ></ImageBackground>
        {titulo.tag !== undefined && titulo.tag !== "" ? (
          <Text style={styles.estilo.tagLateral}>{titulo.tag}</Text>
        ) : null}
        <Text style={styles.estilo.tituloImagemLateral}>
          {titulo.tituloPrincipal}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const NovoTopico = () => {
  const navigation = useNavigation();
  return (
    <Box alignItems="flex-start">
      <Button onPress={() => navigation.navigate("ListagemTopico")}>
        Listagem dos Tópicos
      </Button>
    </Box>
  );
};

const renderItem = ({ item }) => <Home titulo={item} />;
const renderBotton = ({ item }) => <HomeBotton titulo={item} />;

export default function FormValidation() {
  const [post, setPost] = useState();
  // const [atualizacao, setAtualizacao] = useState(false);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    Services.get("/conteudo")
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        Alert.alert(error, "Não foi possível carregar os dados!");
      });
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     Alert.alert("entrou na pagina");
  //     return () => {
  //       Alert.alert("saiu para página");
  //     };
  //   }, [])
  // );

  return (
    <SafeAreaView>
      <HeaderDefault scrollY={scrollY} />

      {/* <NovoTopico /> */}

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
        horizontal={false}
      >
        <Center flex={1}>
          <FlatList
            horizontal={false}
            data={post}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />

          <FlatList
            horizontal={true}
            data={post}
            renderItem={renderBotton}
            keyExtractor={(item) => item.id}
          />
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}
