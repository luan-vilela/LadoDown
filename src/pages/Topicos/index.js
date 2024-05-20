import React, { useEffect, useState } from 'react';
import { Text, Button, VStack, Stack, HStack, NativeBaseProvider, Center } from 'native-base';
import { ScrollView, ImageBackground, View } from 'react-native';
import styles from './styles';
import HeaderAdmin from '../../components/HeaderAdmin';
import Services from '../../services/Services';
import Footer from '../../components/Footer';

export default ({ route }) => {
  const { itemId } = route.params;
  const [comments, setComments] = useState({ subTitulo: '', descricao: '', imagemPequena: '' });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    console.log(itemId);

    try {
      const response = await Services.getAllComment('/conteudo', itemId);
      console.log(response.data);
      setComments(response.data);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
    }
  };

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Tópicos'} />
      <Center flex={1} top={5}>
        <Home comments={comments} />
      </Center>
    </NativeBaseProvider>
  );
};

const Home = ({ comments }) => {
  return (
    <View style={styles.estilo.container}>
      <ScrollView>
        <Text style={styles.estilo.titulo}>{comments.subTitulo}</Text>
        <ImageBackground
          source={comments.imagemPequena ? { uri: comments.imagemPequena } : null}
          resizeMode="cover"
          style={styles.estilo.image}></ImageBackground>
        <Text>Por {comments.autor} - Campo Grande/MS</Text>
        <Text>{comments.updated_at} Atualizado </Text>

        <Text style={styles.estilo.subTitulo}>{comments.subDescricao}</Text>
        <Text>{comments.descricao}</Text>

        <Text style={styles.estilo.subTitulo}>{comments.subDescricao}</Text>
        <Text>{comments.descricao}</Text>

        {/* <HStack width="100%">
          <Stack
            mb="2.5"
            mt="1.5"
            direction={{
              base: 'row',
              md: 'row',
            }}
            space={2}
            mx={{
              base: 'auto',
              md: '0',
            }}>
            <Button size="sm" colorScheme="green">
              Cultura
            </Button>
            <Button size="sm" colorScheme="green">
              Saber
            </Button>
            <Button size="sm" colorScheme="green">
              Saúde
            </Button>
          </Stack>
        </HStack> */}
        <View>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
};
