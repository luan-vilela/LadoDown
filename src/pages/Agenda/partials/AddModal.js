import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native';
import { FormControl, Input, Box } from 'native-base';
import { database } from '../../../databases/index';
import { schedulePushNotification } from '../../../utils/schedule';
import CustomModal from '../../../components/CustomModal';

export default function AddModal({showModal, setShowModal, refetch}) {
  const [eventTitle, setEventTitle] = useState('');
  const [calendarColor, setCalendarColor] = useState('blue');
  const [notificationTime, setNotificationTime] = useState('');

  const savaData = async (idNotification) => {
    try {
      const now = new Date();
      const triggerTime = new Date(now.getTime() + (Number(notificationTime) * 1000));
      await database.write(async () => {
        const newEvent = await database.get('agenda').create(event => {
          event.eventTitle = eventTitle;
          event.calendarColor = calendarColor;
          event.notificationTime = triggerTime;
          event.notificationID = idNotification;
        });

      });
    } catch (error) {
      console.error('Erro ao salvar o evento:', error);
    }
  };

  const createSchedulePush = async () => {
    const now = new Date();
    const triggerTime = new Date(now.getTime() + (Number(notificationTime) * 1000));

    const payloadNotification = {
        title: eventTitle,
        trigger: triggerTime
    }

     return await schedulePushNotification(payloadNotification);
  };


  const handleSave = async () => {
    const idNotification = await createSchedulePush();

    if(idNotification){
      await savaData(idNotification);
       await refetch();
       setShowModal(false);
       return;
    }


    
    console.log("error na criação schedule");
  };
  
  return (
    <CustomModal
          isOpen={showModal}
          onClose={setShowModal}
          CancelBtn={'fechar'}
          header={'Adicionar ponto na curva'}
          onPress={() => handleSave()}                           
        >
            <View style={styles.containerBloco}>
              <FormControl isRequired>
                  <TextInput
                      style={styles.input}
                      placeholder="Event Title"
                      value={eventTitle}
                      onChangeText={setEventTitle} />
                  <FormControl.Label>Notification Time (seconds)</FormControl.Label>
                  <Input
                      style={styles.input}
                      value={notificationTime}
                      onChangeText={setNotificationTime}
                      keyboardType="numeric" />
              </FormControl>
          </View>
        </CustomModal>
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
