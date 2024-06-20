import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from '../../components/HeaderAdmin';
import * as Notifications from 'expo-notifications';
import ButtonCircle from '../../components/Button/Circle';
import { Box, Button, NativeBaseProvider } from 'native-base';
import { database } from '../../databases/index';
import AddModal from './partials/AddModalAlert';
import moment from 'moment';
import 'moment/locale/pt-br';
import AlertConfirm from '../../components/Modal/AlertConfirm';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function AlertaScreen() {
  const [showModal, setShowModal] = useState(false);
  const [processList, setProcessList] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [id, setId] = useState();
  const [isEmpty, setIsEmpty] = useState(false); // Estado para controlar se a lista está vazia

  const requestNotificationPermission = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Notification permission denied', status);
        return;
      }
      console.log('Notification permission granted');
    } catch (err) {
      console.error('Error requesting notification permission:', err);
    }
  };

  const removerAlerta = async id => {
    setId(id);
    setShowConfirm(true);
  };

  const fetchAgendaData = async () => {
    try {
      const agendaData = await database.get('agenda').query().fetch();
      setProcessList(agendaData);
      setIsEmpty(agendaData.length === 0); // Verifica se a lista está vazia
    } catch (error) {
      console.error('Erro ao buscar os dados da agenda:', error);
    }
  };

  const removeProcess = async id => {
    try {
      const processToDelete = await database.get('agenda').find(id);
      const notificationID = processToDelete.notificationID;

      if (notificationID) {
        await Notifications.cancelScheduledNotificationAsync(notificationID);
        console.log('Notification canceled:', notificationID);
      }

      await database.write(async () => {
        await processToDelete.destroyPermanently();
        setProcessList(prevList => prevList.filter(process => process.id !== id));
      });

      fetchAgendaData();
    } catch (error) {
      console.error('Erro ao remover o processo do banco de dados:', error);
    }
  };

  useEffect(() => {
    fetchAgendaData();
    requestNotificationPermission();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.eventTitle}</Text>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.dateTimeText}>
          {moment(item.notificationTime).locale('pt-br').format('LLLL')}
        </Text>
        <TouchableOpacity style={styles.deleteButton} onPress={() => removerAlerta(item.id)}>
          <Ionicons name="trash-outline" size={26} color="#E34049" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Alertas'} />

      <View style={styles.container}>
        {isEmpty ? ( // Renderiza a mensagem quando a lista estiver vazia
          <Text style={styles.emptyMessage}>Nenhum alerta encontrado.</Text>
        ) : (
          <FlatList
            data={processList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ padding: 20 }}
          />
        )}

        <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} style={styles.addButton} />

        {showModal && (
          <AddModal showModal={showModal} setShowModal={setShowModal} refetch={fetchAgendaData} />
        )}
      </View>

      <Box>
        <AlertConfirm
          setShowModal={setShowConfirm}
          showModal={showConfirm}
          setValue={item => removeProcess(id)}
          text={'Deseja excluir esse item?'}
          title={undefined}
          cancel={undefined}
          successBtn={'Excluir'}
          footer={undefined}
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
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  contentContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#10b981',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateTimeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8A8A8A',
  },
  deleteButton: {
    left: 0,
    top: -12,
    width: 36,
    height: 36,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  emptyMessage: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
});
