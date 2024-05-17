import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Button,
  Box,
  Text,
  NativeBaseProvider,
  Modal,
  FormControl,
  TextArea,
  HStack,
  Spacer,
  Pressable,
  Menu,
  HamburgerIcon,
  FlatList,
  VStack,
  ScrollView,
  Divider,
  Heading,
} from 'native-base';
import moment from 'moment';
import HeaderAdmin from '../../components/HeaderAdmin';
import Services from '../../services/Services';
import styles from './styles';

export default ({ route }) => {
  const { dados } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await Services.getAllComment('/comentarios/forum', dados.id);
      setComments(response.data);
    } catch (error) {
      console.error('Erro ao buscar os comentários:', error);
    }
  };

  const addComment = async () => {
    if (!commentText.trim()) return;

    try {
      const response = await Services.salvarRegistro('comentarios', {
        nome: 'Usuário',
        comentario: commentText,
        forum: {
          id: dados.id,
        },
      });

      if (response) {
        fetchComments();
        setModalVisible(false);
        setCommentText('');
      }
    } catch (error) {
      console.error('Erro ao salvar o comentário:', error);
    }
  };

  const removeComment = async id => {
    try {
      await Services.deletarRegistro('comentarios', id);
      setComments(comments.filter(comment => comment.id !== id));
    } catch (error) {
      console.error('Erro ao excluir o comentário:', error);
    }
  };

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Comentários'} />
      <SafeAreaView style={styles.estilo.container}>
        <Box alignItems="center" mt={1}>
          <View style={styles.estilo.card}>
            <View style={styles.estilo.content}>
              <Box alignItems="flex-start">
                <Text style={{ fontSize: 18, fontFamily: 'sans-serif' }}>{dados.nome}</Text>
              </Box>
              <Divider />
              <Text style={{ fontSize: 14, fontFamily: 'sans-serif', top: 5 }}>
                {dados.pergunta}
              </Text>
            </View>
            <Box position="absolute" bottom={0} right={0} p={2}>
              <Button onPress={() => setModalVisible(true)}>Responder</Button>
            </Box>
          </View>
        </Box>

        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Faça seu comentário</Modal.Header>
            <Modal.Body>
              <FormControl>
                <FormControl.Label>Comentário</FormControl.Label>
                <TextArea
                  ref={initialRef}
                  h={20}
                  placeholder=""
                  value={commentText}
                  onChangeText={setCommentText}
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
                <Button onPress={addComment}>Salvar</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>

        <View style={styles.estilo.containerListagem}>
          <CommentList comments={comments} removeComment={removeComment} />
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const CommentList = ({ comments, removeComment }) => {
  return (
    <View style={styles.estilo.listagem}>
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} removeComment={removeComment} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const CommentItem = ({ comment, removeComment }) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{ borderColor: 'muted.50' }}
      borderColor="muted.800"
      pl={['0', '4']}
      pr={['0', '5']}
      py="2">
      <VStack space={3}>
        <HStack justifyContent="space-between">
          <Text _dark={{ color: 'warmGray.50' }} color="coolGray.800" bold>
            {comment.nome}
          </Text>
          <Menu
            w="190"
            trigger={triggerProps => (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
                style={{ alignSelf: 'flex-end' }}>
                <HamburgerIcon />
              </Pressable>
            )}>
            <Menu.Item onPress={() => removeComment(comment.id)}>Excluir</Menu.Item>
          </Menu>
        </HStack>
        <Text color="coolGray.600" _dark={{ color: 'warmGray.200' }}>
          {comment.comentario}
        </Text>
      </VStack>
      <Spacer />
      <Text
        fontSize="xs"
        _dark={{ color: 'warmGray.50' }}
        color="coolGray.800"
        alignSelf="flex-start">
        {moment(comment.created_at).locale('pt-br').format('LL')}
      </Text>
    </Box>
  );
};
