import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      {/* <View style={styles.socialMediaContainer}>
        <Text style={styles.socialMediaText}>Redes Sociais</Text>
      </View> */}

      {/* <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => console.log("Facebook pressed")}>
          <Ionicons name="logo-facebook" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Instagram pressed")}>
          <Ionicons name="logo-instagram" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Twitter pressed")}>
          <Ionicons name="logo-twitter" size={24} color="white" />
        </TouchableOpacity>
      </View> */}

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("FaleConosco")}>
          <Text style={styles.socialMediaText}>Fale conosco</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("TermoUso")}>
          <Text style={styles.socialMediaText}>Termo de uso</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("PoliticaPrivacidade")}
        >
          <Text style={styles.socialMediaText}>Política de privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
          <Text style={styles.socialMediaText}>Sobre o Lado Down</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.direitos}>
          {" "}
          @ 2022 Lado Down. Todos os direitos reservados
        </Text>
      </View>
    </View>
  );
};
