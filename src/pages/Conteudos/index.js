import React, { useState, useEffect } from 'react';
import {
  Center,
  Text,
  HStack,
  VStack,
  FlatList,
  Spacer,
  View,
  NativeBaseProvider,
} from 'native-base';
import { Animated, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-virtualized-view';
import Services from '../../services/Services';
import Footer from '../../components/Footer';
import HeaderAdmin from '../../components/HeaderAdmin';

const Conteudo = ({ post }) => {
  const navigation = useNavigation();
  const lengthDescription = 135;
  return (
    <Center padding={2}>
      <HStack
        style={[styles.estilo.card, { backgroundColor: 'transparent', marginBottom: 5 }]}
        width="100%"
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.100',
        }}>
        <VStack w="100%">
          {post.tituloPrincipal !== undefined && post.tituloPrincipal !== '' ? (
            <Text style={styles.estilo.titulo}>{post.tituloPrincipal}</Text>
          ) : null}

          {post.imagemGrande !== undefined && post.imagemGrande !== '' ? (
            <Image
              source={{ uri: post.imagemGrande }}
              resizeMode="cover"
              style={styles.estilo.imagemGrande}></Image>
          ) : null}
        </VStack>
      </HStack>

      {post.imagemPequena && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Topicos', {
              itemId: post.id,
            })
          }>
          <HStack
            width="100%"
            height={150}
            borderWidth="1"
            rounded="md"
            _dark={{
              borderColor: 'coolGray.500',
            }}>
            <HStack w="30%">
              <Image
                source={{ uri: post.imagemPequena }}
                resizeMode="cover"
                style={styles.estilo.imagemPequena}></Image>
              {post.tag !== undefined && post.tag !== '' ? (
                <Text style={styles.estilo.tag}>{post.tag}</Text>
              ) : null}
            </HStack>
            <VStack w="70%" padding="5px">
              <Text marginBottom={1}>{post.subTitulo}</Text>
              <Text style={styles.estilo.descricao}>
                {post.descricao.slice(0, lengthDescription)}
                {post.descricao.length > lengthDescription && '...'}
              </Text>
              <Spacer />
              <Text textAlign={'right'}>Há 2 horas - {post.autor}</Text>
            </VStack>
          </HStack>
        </TouchableOpacity>
      )}
    </Center>
  );
};

const renderItem = ({ item }) => <Conteudo post={item} />;

export default function FormValidation() {
  const [post, setPost] = useState();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    Services.get('/conteudo')
      .then(res => {
        setPost(res.data);
      })
      .catch(error => {
        Alert.alert(error, 'Não foi possível carregar os dados!');
      });
  }, []);

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Conteúdos'} />

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
        horizontal={false}>
        <Center flex={1}>
          <FlatList
            horizontal={false}
            data={post}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Center>
        <View flex={1}>
          <Footer />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
