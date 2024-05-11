import React, { useState } from "react";
import { Center, Text, Box, View, Input, Button, NativeBaseProvider } from "native-base";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDefault from "../../components/HeaderDefault";
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone necessário
import HeaderAdmin from "../../components/HeaderAdmin"

export default () => {

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email enviado para:", email);
    setEmail("");
  };

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Fale conosco'} />
      <ScrollView>

      <Center flex={1}>
          <View style={styles.container}>            
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
    </NativeBaseProvider>
  );
};
