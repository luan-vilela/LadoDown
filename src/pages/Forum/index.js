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
import { Entypo, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import Services from "../../services/Services";

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [one, setListaOne] = useState();
  const [two, setListaTwo] = useState();

  useEffect(() => {
    Services.get("/forum")
      .then((res) => {
        setListaOne(res.data);
        setListaTwo(res.data);
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
    <SafeAreaView style={styles.estilo.container}>
      <HeaderDefault scrollY={scrollY} />
      <Text style={styles.estilo.title}>Últimas discussões</Text>
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
    <View style={styles.estilo.card}>
      <View style={styles.estilo.header}>
        <Text style={styles.estilo.nome}>{titulo.nome}</Text>
      </View>

      <View style={styles.estilo.content}>
        <Text style={styles.estilo.p}>{titulo.comentario}</Text>
      </View>
      <View style={styles.estilo.footer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Responder", {
              dados: titulo,
            })
          }
        >
          <View style={styles.estilo.cardFooter}>
            <Text style={styles.estilo.p}>Footer Content</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;