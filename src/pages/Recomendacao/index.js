import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from '../../components/HeaderAdmin';
import ButtonCircle from '../../components/Button/Circle';
import { Box, NativeBaseProvider } from 'native-base';
import { database } from '../../databases/index';
import AddModal from './partials/AddModalAlert';
import 'moment/locale/pt-br';
import AlertConfirm from '../../components/Modal/AlertConfirm';

export default function Recomendacao() {
  const [showModal, setShowModal] = useState(false);
  const [processList, setProcessList] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [id, setId] = useState(null);

  const removerAlerta = id => {
    setId(id);
    setShowConfirm(true);
  };

  const fetchAgendaData = async () => {
    try {
      const recomendacaoData = await database.get('recomendacao').query().fetch();
      setProcessList(recomendacaoData);
    } catch (error) {
      console.error('Erro ao buscar os dados da recomendações:', error);
    }
  };

  const removeProcess = async id => {
    try {
      const item = await database.get('recomendacao').find(id);
      await database.write(async () => {
        await item.markAsDeleted(); // Marcar como deletado
        await item.destroyPermanently(); // Remover permanentemente
      });
      fetchAgendaData(); // Atualizar a lista
    } catch (error) {
      console.error('Erro ao remover o processo do banco de dados:', error);
    }
  };

  useEffect(() => {
    fetchAgendaData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text>Nome:</Text>
        <Text style={styles.title}>{item.nome}</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text>Descrição:</Text>
        <Text style={styles.title}>{item.descricao}</Text>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.contentContainer}>
          <Text>Observação:</Text>
          <Text style={styles.title}>{item.observacao}</Text>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={() => removerAlerta(item.id)}>
          <Ionicons name="trash-outline" size={36} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Recomendações e Alergias'} />

      <View style={styles.container}>
        <FlatList
          data={processList}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id || index.toString()}
          contentContainerStyle={{ padding: 20 }}
        />

        <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} style={styles.addButton} />

        {showModal && (
          <AddModal showModal={showModal} setShowModal={setShowModal} refetch={fetchAgendaData} />
        )}
      </View>

      <Box>
        <AlertConfirm
          setShowModal={setShowConfirm}
          showModal={showConfirm}
          setValue={() => {
            removeProcess(id);
            setShowConfirm(false);
          }}
          text={'Deseja excluir esse item?'}
          cancel={() => setShowConfirm(false)}
          successBtn={'Excluir'}
        />
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10b981',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#10b981',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deleteButton: {
    left: 5,
    top: -40,
    width: 40,
    height: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
