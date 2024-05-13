import { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from '../../components/HeaderAdmin';
import * as Notifications from 'expo-notifications';
import ButtonCircle from '../../components/Button/Circle';
import { NativeBaseProvider } from 'native-base';
import { database } from '../../databases/index';
import AddModal from './partials/AddModalAlert';

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

  const fetchAgendaData = async () => {
    try {
      const agendaData = await database.get('agenda').query().fetch();
      setProcessList(agendaData);
    } catch (error) {
      console.error('Erro ao buscar os dados da agenda:', error);
    }
  };

  const removeProcess = async (id) => {
    try {
      const processToDelete = await database.get('agenda').find(id);
      const notificationID = processToDelete.notificationID;

      if (notificationID) {
        await Notifications.cancelScheduledNotificationAsync(notificationID);
        console.log('Notification canceled:', notificationID);
      }

      await database.write(async () => {
        await processToDelete.destroyPermanently();
        setProcessList((prevList) => prevList.filter((process) => process.id !== id));
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
      <View style={styles.cardContent}>
        <Text>{`Title: ${item.eventTitle}, Color: ${item.calendarColor}, Notification Time: ${item.notificationTime}`}</Text>
        <Ionicons
          name="trash-outline"
          size={24}
          color="black"
          onPress={() => removeProcess(item.id)}
        />
      </View>
    </View>
  );

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Alertas'} />

      <FlatList
        data={processList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 5 }}
      />

      <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} style={styles.addButton} />

      {showModal && <AddModal showModal={showModal} setShowModal={setShowModal} refetch={fetchAgendaData} />}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
