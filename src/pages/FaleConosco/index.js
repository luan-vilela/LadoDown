import React, { useState } from "react";
import { Center, Text, Box, View, Input, Button } from "native-base";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../components/HeaderDefault";
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone necessário

export default function Sobre() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email enviado para:", email);
    setEmail("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderDefault scrollY={scrollY} />

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
        style={{ flex: 1 }}
      >
        <Center flex={1}>
          <View style={styles.container}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Fale conosco
            </Text>
            <Box px={9}>
              <Text style={styles.descricao}>
                Entre em contato conosco fornecendo seu endereço de e-mail
                abaixo.
              </Text>
              <Input
                placeholder="Seu endereço de e-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
                mb={4}
              />
              <Button onPress={handleSubmit}>Enviar</Button>
            </Box>
          </View>
        </Center>
      </ScrollView>

      {/* <View style={styles.footer}>
        <Icon name="university" size={20} color="white" style={styles.icon} />
        <Text style={styles.rodape}>
          Trabalho de conclusão de curso de Ciências da Computação da
          Universidade Federal de Mato Grosso do Sul.
        </Text>
      </View> */}
    </SafeAreaView>
  );
}
