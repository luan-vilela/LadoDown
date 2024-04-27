import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Animated, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../components/HeaderDefault";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styleCard";
import Services from "../../services/Services";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [one, setListaOne] = useState([]);
  const [two, setListaTwo] = useState([]);

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

  return (
    <SafeAreaView style={styles.estilo.container}>
      <HeaderDefault scrollY={scrollY} />
      <Text style={styles.estilo.title}>Últimas discussões</Text>
      <FlatList
        horizontal
        data={one}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Divider />
      <Text style={styles.estilo.title}>Discussões mais comentadas</Text>
      <FlatList
        horizontal
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
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Responder", {
          dados: titulo,
        })
      }
    >
      <View style={styles.estilo.card}>
        <View style={styles.estilo.cardContainer}>
          <View style={styles.estilo.header}>
            <View style={styles.estilo.imagemContainer}>
              <Ionicons name="person" size={25} color="#666" />
            </View>
          </View>
          <View style={styles.estilo.content}>
            <Text style={styles.estilo.nome}>{titulo.nome}</Text>

            <Text style={styles.estilo.descricao}>{titulo.comentario}</Text>
          </View>
          <View style={styles.estilo.footer}>
            <Ionicons
              name="chatbox-ellipses-outline"
              color={"white"}
              size={18}
            />
            <Text style={styles.estilo.footerText}>
              {titulo.curtida} Comentários
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default App;
