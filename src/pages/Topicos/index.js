import React, { useEffect, useState } from 'react';
import { Text, NativeBaseProvider, Center } from 'native-base';
import { ScrollView, ImageBackground, View, Animated, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';
import HeaderAdmin from '../../components/HeaderAdmin';
import Services from '../../services/Services';
import Footer from '../../components/Footer';

const App = ({ route }) => {
  const { itemId } = route.params;
  const [comments, setComments] = useState({
    subTitulo: '',
    descricao: '',
    imagemPequena: '',
    autor: '',
    updated_at: '',
    subDescricao: '',
    referencia: '',
    tituloPrincipal: '', // Adicionando campo para o link do vídeo
  });
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
  // Split the description text into paragraphs
  const paragraphs = comments.descricao.split('. ').map((paragraph, index, arr) => {
    // Add the period back to the end of each paragraph except the last one
    return paragraph + (index < arr.length - 1 ? '. ' : '');
  });

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
            {paragraphs.map((paragraph, index) => (
              <Text key={index} style={styles.estilo.descricao}>
                {paragraph}
              </Text>
            ))}
          </>
        ) : null}

        {/* Renderização do vídeo */}
        {comments.tituloPrincipal && (
          <>
            <Text style={styles.estilo.subTitulo}>Saiba mais no vídeo abaixo:</Text>
            <View style={{ height: 200, width: '100%', marginBottom: 20 }}>
              <WebView
                source={{ uri: comments.tituloPrincipal }}
                style={{ flex: 1 }}
              />
            </View>
          </>
        )}

        {/* Renderização do link de referência */}
        {comments.referencia && (
          <Text style={styles.estilo.referencia}>
            Para mais informações, visite{' '}
            <Text
              style={styles.estilo.link}
              onPress={() => Linking.openURL(comments.referencia)}>
              Movimento Down
            </Text>.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default App;
