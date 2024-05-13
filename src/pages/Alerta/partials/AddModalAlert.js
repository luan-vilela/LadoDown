import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { FormControl, Input, Box, Stack, HStack, Button } from 'native-base';
import { database } from '../../../databases/index';
import { schedulePushNotification } from '../../../utils/schedule';
import CustomModal from '../../../components/CustomModal';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddModalAlert({ showModal, setShowModal, refetch }) {
  const [eventTitle, setEventTitle] = useState('');
  const [calendarColor, setCalendarColor] = useState('blue');
  const [eventDateTime, setEventDateTime] = useState(new Date());

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const savaData = async (idNotification) => {
    try {
      await database.write(async () => {
        const newEvent = await database.get('agenda').create(event => {
          event.eventTitle = eventTitle;
          event.calendarColor = calendarColor;
          event.notificationTime = eventDateTime;
          event.notificationID = idNotification;
        });
      });
    } catch (error) {
      console.error('Erro ao salvar o evento:', error);
    }
  };

  const createSchedulePush = async () => {
    const payloadNotification = {
      title: eventTitle,
      trigger: eventDateTime
    }
    return await schedulePushNotification(payloadNotification);
  };

  const handleSave = async () => {
    const idNotification = await createSchedulePush();
    if (idNotification) {
      await savaData(idNotification);
      await refetch();
      setShowModal(false);
      return;
    }
    console.log("Erro na criação do agendamento");
  };

  const showDatePicker = () => {
    setShow(true);
    setMode('date');
  };

  const showTimePicker = () => {
    setShow(true);
    setMode('time');
  };

  const onChange = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || eventDateTime;
    setEventDateTime(currentDate);
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
          <FormControl.Label>Data e Hora do Evento</FormControl.Label>
          <Button onPress={showDatePicker}>Data Picker</Button>
          <Button onPress={showTimePicker}>Timer Picker</Button>
          <Text style={styles.dateTimeText}>{eventDateTime.toLocaleString()}</Text>
        </FormControl>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={eventDateTime}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </CustomModal>
  );
}

const styles = StyleSheet.create({
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
  dateTimeText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
