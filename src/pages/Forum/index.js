import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Animated,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../components/HeaderDefault";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  IconButton,
  Icon,
  VStack,
  Stack,
  Center,
  Pressable,
  Box,
  Heading,
  Button,
  Divider,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const data = {
  listas: [
    {
      lista: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 40,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          nome: "Luan Vilela",
          title:
            "asdasd asdasd asdasd Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 35,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d79",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 20,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d77",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 20,
        },
      ],
      api: "UltimosComentarios",
    },
    {
      lista: [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 99,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 122,
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          nome: "Giovanni Pratto",
          title:
            "Vou fazer um exame e não posso tomar nenhum medicamento que contém cafeína e estou sentindo dor de cabeça, posso tomar dipirona?",
          comentarios: 87,
        },
      ],
      api: "MaisComentados",
    },
  ],
};

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));

  const [one, setListaOne] = useState();
  const [two, setListaTwo] = useState();

  // const [atualizacao, setAtualizacao] = useState(false);
  //useEffect só para teste
  useEffect(() => {
    let listaOne = data.listas.find((x) => x.api == "UltimosComentarios").lista;
    let pegaListaOne = listaOne.map((x) => {
      return x;
    });
    setListaOne(pegaListaOne);

    let listaTwo = data.listas.find((x) => x.api == "MaisComentados").lista;
    let pegaListaTwo = listaTwo.map((x) => {
      return x;
    });
    setListaTwo(pegaListaTwo);
  }, []);

  // useEffect(() => {
  //   Services.get("/forum/UltimosComentarios")
  //     .then((res) => {
  //       setListaOne(res.data.lista);
  //     })
  //     .catch((error) => {
  //       Alert.alert(error, "Não foi possível carregar os dados!");
  //     });

  //   Services.get("/forum/MaisComentarios")
  //     .then((res) => {
  //       setListaTwo(res.data.lista);
  //     })
  //     .catch((error) => {
  //       Alert.alert(error, "Não foi possível carregar os dados!");
  //     });
  // }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     // Alert.alert("entrou na pagina");
  //     return () => {
  //       // Alert.alert("saiu para página");
  //     };
  //   }, [])
  // );
  return (
    <SafeAreaView style={styles.estilo.container}>
      <HeaderDefault scrollY={scrollY} />
      <Text style={styles.estilo.title}>Últimos discussões</Text>
      <FlatList
        horizontal={true}
        data={one}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Divider />
      <Text style={styles.estilo.title}>Discussões mais comentadas</Text>
      <FlatList
        horizontal={true}
        data={two}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const renderItem = ({ item }) => <Card titulo={item} />;

const Card = ({ titulo }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.estilo.box1}>
      <View style={styles.estilo.box2}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Responder", {
              dados: titulo,
            })
          }
        >
          <Box alignItems="center" mt={3}>
            <Entypo name="user" size={30} color="black" />
          </Box>
          <Box alignItems="flex-start" style={styles.estilo.nome}>
            <Text>{titulo.nome} </Text>
          </Box>
          <Text style={styles.estilo.texto}>{titulo.title} </Text>
          <Box alignItems="center" mt={10}>
            <Button variant={"unstyled"}>{titulo.comentarios}</Button>
          </Box>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
