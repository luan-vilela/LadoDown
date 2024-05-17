import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { FormControl, Input } from 'native-base';
import { database } from '../../../databases/index';
import { schedulePushNotification } from '../../../utils/schedule';
import CustomModal from '../../../components/CustomModal';
import { format } from 'date-fns';
import DateModal from '../../../components/Modal/DateModal';
import HourModal from '../../../components/Modal/HourModalAlert';

export default function AddModalAlert({ showModal, setShowModal, refetch }) {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDateTime, setEventDateTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [aniversario, setAniversario] = useState(null);
  const [showHour, setShowHour] = useState(false);

  const createSchedulePush = async () => {
    const payloadNotification = {
      title: eventTitle,
      trigger: eventDateTime,
    };
    return await schedulePushNotification(payloadNotification);
  };

  const handleSave = async () => {
    const idNotification = await createSchedulePush();
    if (idNotification) {
      await saveData(idNotification);
      await refetch();
      setShowModal(false);
    } else {
      console.log('Erro na criação do agendamento');
    }
  };

  const onChangeDate = (selectedDate) => {
    setShowDate(false);
    setAniversario(selectedDate);

    const newDateTime = new Date(selectedDate);

    const currentHour = eventDateTime.getHours();
    const currentMinute = eventDateTime.getMinutes();

    newDateTime.setHours(currentHour);
    newDateTime.setMinutes(currentMinute);

    setEventDateTime(newDateTime);
  };

  const onChangeHour = (selectedHourString) => {
    setShowHour(false);

    const [hour, minute] = selectedHourString.split(':');

    const newDateTime = new Date();
    newDateTime.setHours(parseInt(hour, 10));
    newDateTime.setMinutes(parseInt(minute, 10));

    setEventDateTime(newDateTime);
  };

  const saveData = async (idNotification) => {
    try {
      await database.write(async () => {
        await database.get('agenda').create((event) => {
          event.eventTitle = eventTitle;
          event.notificationTime = eventDateTime;
          event.notificationID = idNotification;
        });
      });
    } catch (error) {
      console.error('Erro ao salvar o evento:', error);
    }
  };

  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={'fechar'}
      header={'Adicionar Notificação'}
      onPress={handleSave}>
      <View style={styles.containerBloco}>
        <FormControl isRequired>
          <FormControl.Label>Título </FormControl.Label>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={eventTitle}
            onChangeText={setEventTitle}
          />
          <FormControl.Label>Data </FormControl.Label>
          <Input
            placeholder="__/__/____"
            value={aniversario ? format(aniversario, 'dd/MM/yyyy') : '__/__/____'}
            w="100%"
            onTouchStart={() => setShowDate(true)}
          />
          <FormControl.Label>Hora </FormControl.Label>
          <Input
            placeholder="00:00"
            value={eventDateTime ? format(eventDateTime, 'HH:mm') : '00:00'}
            w="100%"
            onTouchStart={() => setShowHour(true)}
          />
        </FormControl>
      </View>

      <DateModal
        setShowModal={setShowDate}
        showModal={showDate}
        setValue={onChangeDate}
      />

      <HourModal
        setShowModal={setShowHour}
        showModal={showHour}
        setValue={onChangeHour}
      />
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
});
