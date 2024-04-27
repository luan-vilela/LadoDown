// import React, { useState } from "react";
// import { Center, Text, Box, View } from "native-base";
// import { Animated } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import HeaderDefault from "../../components/HeaderDefault";
// import { ScrollView } from "react-native-virtualized-view";
// import { styles } from "./styles";
// import Icon from "react-native-vector-icons/FontAwesome"; // Importe o ícone necessário
// export default function Sobre() {
//   const [scrollY, setScrollY] = useState(new Animated.Value(0));

//   return (
//     <SafeAreaView>
//       <HeaderDefault scrollY={scrollY} />

//       <ScrollView
//         nestedScrollEnabled={false}
//         scrollEventThrottle={16}
//         onScroll={Animated.event(
//           [
//             {
//               nativeEvent: {
//                 contentOffset: { y: scrollY },
//               },
//             },
//           ],
//           {
//             useNativeDriver: false,
//           }
//         )}
//         horizontal={false}
//       >
//         <Center flex={1}>
//           <Text fontSize="xl" fontWeight="bold" mb={4} top={2}>
//             Sobre o Lado Down
//           </Text>
//           <Box px={9}>
//             <Text style={styles.descricao}>
//               O aplicativo "Lado Down" foi desenvolvido para atender às
//               necessidades de pais de crianças com Síndrome de Down (SD) ou
//               Síndrome do Cromossomo 21. Ele oferece um espaço interativo e
//               informativo onde os pais podem compartilhar conhecimentos e
//               experiências. O objetivo principal do aplicativo é fornecer
//               suporte e orientação aos pais, ajudando-os a enfrentar os desafios
//               únicos associados ao desenvolvimento de seus filhos. Além disso, o
//               "Lado Down" permite que os pais registrem informações individuais
//               para cada criança, incluindo lembretes importantes, como vacinas e
//               consultas médicas. Uma característica distintiva é a ênfase na
//               privacidade e acessibilidade, tornando-o um recurso inclusivo para
//               qualquer pessoa interessada em aprender mais sobre a síndrome. Em
//               resumo, o "Lado Down" não é apenas um aplicativo, mas uma
//               plataforma destinada a capacitar, conectar e apoiar a comunidade
//               de pais de crianças com a Síndrome de Down.
//             </Text>
//           </Box>
//         </Center>
//       </ScrollView>

//       <View style={styles.footer}>
//         <Text style={styles.rodape}>
//           <Icon name="university" size={20} color="white" />
//           Trabalho de conclusão de curso de Ciências da Computação da
//           Universidade Federal de Mato Grosso do Sul.
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

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
          <Text fontSize="xl" fontWeight="bold" mb={4} top={2}>
            Sobre o Lado Down
          </Text>
          <View style={styles.container}>
            <Box px={9}>
              <Text style={styles.descricao}>
                O aplicativo "Lado Down" foi desenvolvido para atender às
                necessidades de pais de crianças com Síndrome de Down (SD) ou
                Síndrome do Cromossomo 21. Ele oferece um espaço interativo e
                informativo onde os pais podem compartilhar conhecimentos e
                experiências. O objetivo principal do aplicativo é fornecer
                suporte e orientação aos pais, ajudando-os a enfrentar os
                desafios únicos associados ao desenvolvimento de seus filhos.
                Além disso, o "Lado Down" permite que os pais registrem
                informações individuais para cada criança, incluindo lembretes
                importantes, como vacinas e consultas médicas. Uma
                característica distintiva é a ênfase na privacidade e
                acessibilidade, tornando-o um recurso inclusivo para qualquer
                pessoa interessada em aprender mais sobre a síndrome. Em resumo,
                o "Lado Down" não é apenas um aplicativo, mas uma plataforma
                destinada a capacitar, conectar e apoiar a comunidade de pais de
                crianças com a Síndrome de Down.
              </Text>
            </Box>
          </View>
        </Center>
      </ScrollView>

      <View style={styles.footer}>
        <Icon name="university" size={20} color="white" style={styles.icon} />
        <Text style={styles.rodape}>
          Trabalho de conclusão de curso de Ciências da Computação da
          Universidade Federal de Mato Grosso do Sul.
        </Text>
      </View>
    </SafeAreaView>
  );
}
