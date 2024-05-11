import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  FlatList,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderAdmin from '../../components/HeaderAdmin';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import ButtonCircle from '../../components/Button/Circle';
import {NativeBaseProvider } from 'native-base';
import { database } from '../../databases/index';
import AddModal from './partials/AddModal';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function AgendaScreen() {
  const [showModal, setShowModal] = useState(false);
  const [processList, setProcessList] = useState([]);


  const requestNotificationPermission = async () => {
    try {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        console.log('Notification permission denied', finalStatus);
        return;
      }
      console.log('Notification permission granted');
    } catch (err) {
      console.warn(err);
    }
  };


  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  const fetchAgendaData = async () => {
    const now = new Date();
    try {
      const agendaData = await database.get('agenda').query().fetch();
      setProcessList(agendaData);
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

  const renderItem = (item) => {
    return <View style={styles.card}>
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
  }
  
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Agenda'} />
      
      <FlatList
        data={processList}
        renderItem={({ item }) => (
          item.notificationTime > new Date() && renderItem(item)
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 5 }}
      />
      
      <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} style={styles.addButton} />      

      {showModal && <AddModal  showModal={showModal} setShowModal={setShowModal} refetch={fetchAgendaData}  />}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBloco: {
    padding: 15,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
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
