import React from "react";
import { Center, Text, Box, View, NativeBaseProvider } from "native-base";
import { ScrollView } from "react-native-virtualized-view";
import { styles } from "./styles";
import HeaderAdmin from "../../components/HeaderAdmin"

export default () => {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Termo de uso'} />
      <ScrollView>

      <Center flex={1}>       
          <View style={styles.container}>
            <Box px={4}>
              <Text style={styles.descricao}>
                Bem-vindo aos Termos de Uso do aplicativo móvel Lado Down. Estes
                termos descrevem os direitos e responsabilidades de quem acessa
                ou usa nosso aplicativo.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Aceitação dos Termos de Uso
              </Text>
              <Text style={styles.descricao}>
                Ao acessar ou usar o aplicativo Lado Down, você concorda em
                cumprir estes Termos de Uso e todas as leis e regulamentos
                aplicáveis. Se você não concordar com algum destes termos, não
                poderá acessar o aplicativo.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Uso Permitido
              </Text>
              <Text style={styles.descricao}>
                O aplicativo Lado Down é destinado apenas para uso pessoal e não
                comercial. Você concorda em não usar o aplicativo para qualquer
                finalidade ilegal ou não autorizada.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Propriedade Intelectual
              </Text>
              <Text style={styles.descricao}>
                Todo o conteúdo do aplicativo, incluindo textos, gráficos,
                logotipos, ícones, imagens e software, é de propriedade
                exclusiva da equipe do Lado Down ou de seus licenciadores e está
                protegido pelas leis de direitos autorais.
              </Text>
              <Text fontWeight="bold" mt={4} mb={2}>
                Modificações nos Termos de Uso
              </Text>
              <Text style={styles.descricao}>
                Reservamos o direito de modificar estes Termos de Uso a qualquer
                momento, e é sua responsabilidade revisá-los regularmente. O uso
                contínuo do aplicativo após as modificações constitui sua
                aceitação dos termos revisados.
              </Text>
              <Text fontWeight="bold" mb={2}>
                Contate-Nos
              </Text>
              <Text style={styles.descricao}>
                Se você tiver alguma dúvida ou preocupação sobre estes Termos de
                Uso, entre em contato conosco pelo e-mail: suporte@ladodown.com.
              </Text>
            </Box>
          </View>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};
