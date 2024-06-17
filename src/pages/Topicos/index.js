import React, { useEffect, useState } from 'react';
import { Text, NativeBaseProvider, Center } from 'native-base';
import { ScrollView, ImageBackground, View, Animated } from 'react-native';
import styles from './styles';
import HeaderAdmin from '../../components/HeaderAdmin';
import Services from '../../services/Services';
import Footer from '../../components/Footer';

export default ({ route }) => {
  const { itemId } = route.params;
  const [comments, setComments] = useState({ subTitulo: '', descricao: '', imagemPequena: '' });
  const scrollY = useState(new Animated.Value(0))[0];

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
        <Home comments={comments} scrollY={scrollY} />
      </Center>
    </NativeBaseProvider>
  );
};

const Home = ({ comments, scrollY }) => {
  return (
    <View style={styles.estilo.container}>
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
          { useNativeDriver: false }
        )}>
        <Text style={styles.estilo.titulo}>{comments.subTitulo}</Text>
        {comments.imagemPequena ? (
          <ImageBackground
            source={{ uri: comments.imagemPequena }}
            resizeMode="cover"
            style={styles.estilo.image}
          />
        ) : null}
        <Text style={styles.estilo.author}>Por {comments.autor} - Campo Grande/MS</Text>
        <Text style={styles.estilo.date}>{comments.updated_at} Atualizado</Text>

        {comments.subDescricao ? (
          <>
            <Text style={styles.estilo.subTitulo}>{comments.subDescricao}</Text>
            <Text style={styles.estilo.descricao}>{comments.descricao}</Text>
          </>
        ) : null}

        {comments.imagemPequena ? (
          <ImageBackground
            source={{ uri: comments.referencia }}
            resizeMode="cover"
            style={styles.estilo.image}
          />
        ) : null}

        {/* <Footer /> */}
      </ScrollView>
    </View>
  );
};
