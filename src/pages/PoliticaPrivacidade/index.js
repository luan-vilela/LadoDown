import React from "react";
import { Center, Text, Box, View, NativeBaseProvider } from "native-base";
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin"
import Hyperlink from "react-native-hyperlink"; // Importe o Hyperlink

export default () => {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Política de Privacidade'} />
      <ScrollView>

      <Center flex={1}>         
          <View style={styles.container}>
            <Box px={4}>
              <Text fontWeight="bold" mb={2}>
                Última atualização: 10/05/2024
              </Text>
              <Text style={styles.descricao}>
                Esta Política de Privacidade descreve como as informações
                pessoais são coletadas, usadas e compartilhadas quando você usa
                o aplicativo Lado Down.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Informações Pessoais que Coletamos
              </Text>
              <Text style={styles.descricao}>
                Quando você utiliza o Aplicativo, podemos coletar
                automaticamente algumas informações sobre o seu dispositivo,
                incluindo informações sobre o seu navegador, endereço de IP,
                fuso horário e alguns dos cookies que estão instalados em seu
                dispositivo. Além disso, à medida que você navega no Aplicativo,
                podemos coletar informações sobre as páginas web ou produtos
                individuais que você visualiza, quais sites ou termos de
                pesquisa o encaminharam ao Aplicativo e informações sobre como
                você interage com o Aplicativo. Essas informações são coletadas
                usando tecnologias de rastreamento, como cookies, arquivos de
                log e tags de pixel.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Compartilhamento de Informações Pessoais
              </Text>
              <Hyperlink linkDefault={true}>
                <Text style={styles.descricao}>
                  Nós podemos compartilhar suas informações pessoais com
                  terceiros para nos ajudar a usar suas informações pessoais,
                  conforme descrito acima. Por exemplo, nós usamos o Google
                  Analytics para nos ajudar a entender como nossos clientes usam
                  o Aplicativo - você pode saber mais sobre como o Google usa
                  suas informações pessoais aqui:{" "}
                  <Text
                    style={styles.link}
                    href="https://www.google.com/intl/pt-BR/policies/privacy"
                  >
                    https://www.google.com/intl/pt-BR/policies/privacy
                  </Text>
                  . Você também pode optar por não participar do Google
                  Analytics aqui:{" "}
                  <Text
                    style={styles.link}
                    href="https://tools.google.com/dlpage/gaoptout"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </Text>
                  Finalmente, nós também podemos compartilhar suas informações
                  pessoais para cumprir as leis e regulamentos aplicáveis, para
                  responder a uma intimação, mandado de busca ou outra
                  solicitação legal de informações que recebemos, ou para
                  proteger nossos direitos de outra forma.
                </Text>
              </Hyperlink>
              <Text fontWeight="bold" mt={4} mb={2}>
                Seus Direitos
              </Text>
              <Text style={styles.descricao}>
                Se você é um residente europeu, você tem o direito de acessar as
                informações pessoais que mantemos sobre você e de solicitar que
                suas informações pessoais sejam corrigidas, atualizadas ou
                excluídas. Se você gostaria de exercer esse direito, por favor,
                entre em contato conosco através das informações de contato
                abaixo.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Alterações
              </Text>
              <Text style={styles.descricao}>
                Nós podemos atualizar esta política de privacidade de tempos em
                tempos para refletir, por exemplo, mudanças em nossas práticas
                ou por outras razões operacionais, legais ou regulatórias.
                abaixo.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Contate-Nos
              </Text>
              <Text style={styles.descricao}>
                Para mais informações sobre nossas práticas de privacidade, se
                você tiver dúvidas ou se gostaria de fazer uma reclamação, por
                favor, entre em contato conosco por e-mail em
                suporte@ladodown.com.
              </Text>
            </Box>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};
