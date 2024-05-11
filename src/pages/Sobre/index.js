import React from "react";
import { Center, Text, Box, View, NativeBaseProvider, Image } from "native-base";
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin"

export default () => {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Sobre o Lado Down'} />
      <ScrollView>

        <Center flex={1}>       
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              O aplicativo "Lado Down" foi desenvolvido para atender às necessidades de pais de
              crianças com Síndrome de Down (SD) ou Síndrome do Cromossomo 21. Ele oferece um espaço
              interativo e informativo onde os pais podem compartilhar conhecimentos e experiências.
              O objetivo principal do aplicativo é fornecer suporte e orientação aos pais, ajudando-os
              a enfrentar os desafios únicos associados ao desenvolvimento de seus filhos. Além disso,
              o "Lado Down" permite que os pais registrem informações individuais para cada criança,
              incluindo lembretes importantes, como vacinas e consultas médicas. Uma característica
              distintiva é a ênfase na privacidade e acessibilidade, tornando-o um recurso inclusivo
              para qualquer pessoa interessada em aprender mais sobre a síndrome. Em resumo, o "Lado
              Down" não é apenas um aplicativo, mas uma plataforma destinada a capacitar, conectar e
              apoiar a comunidade de pais de crianças com a Síndrome de Down.
            </Text>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};
