import React, { useState, useEffect, useRef } from 'react';
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
  const initialRef = useRef(null);

  const finalRef = useRef(null);
  const [pergunta, setPergunta] = useState('');

  const fetchForumData = async () => {
    setIsLoading(true);
    try {
      const res = await Services.get('/forum');
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
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados!');
    } finally {
      setIsLoading(false);
    }
  };

  const postForum = async () => {
    setIsLoading(true);
    if (!pergunta.trim()) {
      Alert.alert('Erro', 'A pergunta não pode estar vazia!');
      setIsLoading(false);
      return;
    }

    try {
      const res = await Services.salvarRegistro('/forum', {
        nome: 'Paulo Lorenço',
        pergunta: pergunta,
      });
      if (res) {
        fetchForumData();
        setModalVisible(false);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a pergunta!');
    } finally {
      setIsLoading(false);
    }
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

          {isLoading ? (
            <View style={styles.estilo.activityIndicatorContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listaOne}
                renderItem={renderItemA}
                keyExtractor={item => item.id}
                style={{ marginBottom: 50, top: 25 }} // Adiciona uma margem inferior de 50 unidades
              />

              <Text style={styles.estilo.title}>Discussões mais comentadas</Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listaTwo}
                renderItem={renderItemB}
                keyExtractor={item => item.id}
                style={{ marginBottom: 10, top: 10 }} // Adiciona uma margem inferior de 10 unidades
              />
            </>
          )}
        </SafeAreaView>

        <Footer />
      </ScrollView>
      <Box style={styles.estilo.addButton}>
        <ButtonCircle onPress={() => setModalVisible(true)} icon={'add'} />
      </Box>
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
              <Button variant="ghost" colorScheme="blueGray" onPress={() => setModalVisible(false)}>
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
            <View style={styles.estilo.description}>
              <Text style={styles.estilo.descricao}>{titulo.pergunta}</Text>
            </View>
          </View>
          <View style={styles.estilo.footer}>
            <Ionicons name="chatbox-ellipses-outline" color={'#10b981'} size={18} />
            <Text style={styles.estilo.footerText}>
              {titulo.qtd_comentario > 1
                ? `${titulo.qtd_comentario} Comentários`
                : `${titulo.qtd_comentario} Comentário`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default App;
