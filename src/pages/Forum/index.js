import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Animated, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Modal,
  NativeBaseProvider,
  ScrollView,
  TextArea,
} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styleCard';
import Services from '../../services/Services';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from '../../components/HeaderAdmin';
import Footer from '../../components/Footer';
import ButtonCircle from '../../components/Button/Circle';

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [listaOne, setListaOne] = useState([]);
  const [listaTwo, setListaTwo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [pergunta, setPergunta] = useState('');

  const fetchForumData = () => {
    setIsLoading(true);
    Services.get('/forum')
      .then(res => {
        const listaA = [...res.data];
        const listaB = [...res.data];

        const sortedByCreatedAt = listaA.sort((a, b) => {
          const dateA = new Date(a.created_at).toISOString();
          const dateB = new Date(b.created_at).toISOString();
          return dateB.localeCompare(dateA);
        });
        setListaOne(sortedByCreatedAt);

        const sortedByQtdComentario = listaB.sort((a, b) => b.qtd_comentario - a.qtd_comentario);
        setListaTwo(sortedByQtdComentario);
        setIsLoading(false);
      })
      .catch(error => {
        Alert.alert('Erro', 'Não foi possível carregar os dados!', error);
        setIsLoading(false);
      });
  };

  const postForum = () => {
    setIsLoading(true);
    if (!pergunta.trim()) return;

    Services.salvarRegistro('/forum', {
      nome: 'Paulo Lorenço',
      pergunta: pergunta,
    })
      .then(res => {
        if (res) {
          fetchForumData();
          setModalVisible(false);
          setIsLoading(false);
        }
      })
      .catch(error => {
        Alert.alert('Erro', 'Não foi possível carregar os dados!', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchForumData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchForumData();
    }, [])
  );

  return (
    <NativeBaseProvider>
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
        <HeaderAdmin title={'Fórum'} />
        <SafeAreaView style={styles.estilo.container}>
          <Text style={styles.estilo.title}>Últimas discussões</Text>
          <Box position="absolute" top={0} right={0} p={2}>
            <ButtonCircle onPress={() => setModalVisible(true)} icon={'add'} />
          </Box>
          {isLoading ? (
            <View style={styles.estilo.activityIndicatorContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <>
              <FlatList
                horizontal
                data={listaOne}
                renderItem={renderItemA}
                keyExtractor={item => item.id}
                style={{ marginBottom: 10, top: 25 }} // Adiciona uma margem inferior de 10 unidades
              />

              <Divider bottom={-20} />

              <Text style={styles.estilo.title2}>Discussões mais comentadas</Text>
              <FlatList
                horizontal
                data={listaTwo}
                renderItem={renderItemB}
                keyExtractor={item => item.id}
                style={{ marginBottom: 10, top: 10 }} // Adiciona uma margem inferior de 10 unidades
              />
            </>
          )}
        </SafeAreaView>
        <View>
          <Footer />
        </View>
      </ScrollView>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Faça uma pergunta?</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Pergunta</FormControl.Label>
              <TextArea
                ref={initialRef}
                h={20}
                placeholder=""
                value={pergunta}
                onChangeText={setPergunta}
                autoCompleteType={undefined}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}>
                Voltar
              </Button>
              <Button onPress={postForum}>Salvar</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

const renderItemA = ({ item }) => <Card titulo={item} />;

const renderItemB = ({ item }) => <Card titulo={item} />;

const Card = ({ titulo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Responder', {
          dados: titulo,
        })
      }>
      <View style={styles.estilo.card}>
        <View style={styles.estilo.cardContainer}>
          <View style={styles.estilo.content}>
            <Text style={styles.estilo.nome}>{titulo.nome}</Text>
            <Divider />
            <Text style={styles.estilo.descricao}>{titulo.pergunta}</Text>
          </View>
          <View style={styles.estilo.footer}>
            <Ionicons name="chatbox-ellipses-outline" color={'white'} size={18} />
            <Text style={styles.estilo.footerText}>{titulo.qtd_comentario} Comentários</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default App;
