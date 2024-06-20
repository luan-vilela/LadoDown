import React, { useEffect, useState } from 'react';

import { FormControl, Input, Center, Box } from 'native-base';
import { database } from '../../../databases/index';
import { schedulePushNotification } from '../../../utils/schedule';
import CustomModal from '../../../components/CustomModal';
import { addMinutes, format } from 'date-fns';
import DateModal from '../../../components/Modal/DateModal';
import HourModal from '../../../components/Modal/HourModalAlert';

export default function AddModalAlert({ showModal, setShowModal, refetch }) {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDateTime, setEventDateTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [eventDate, setEventDate] = useState(new Date());
  const [showHour, setShowHour] = useState(false);

  const createSchedulePush = async () => {
    const payloadNotification = {
      title: eventTitle ? eventTitle : `Notificação `,
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

  const onChangeDate = selectedDate => {
    setShowDate(false);
    setEventDate(selectedDate);

    const newDateTime = new Date(selectedDate);

    const currentHour = eventDateTime.getHours();
    const currentMinute = eventDateTime.getMinutes();

    newDateTime.setHours(currentHour);
    newDateTime.setMinutes(currentMinute);

    setEventDateTime(newDateTime);
  };

  const onChangeHour = selectedHourString => {
    setShowHour(false);

    const [hour, minute] = selectedHourString.split(':');

    const newDateTime = new Date();
    newDateTime.setHours(parseInt(hour, 10));
    newDateTime.setMinutes(parseInt(minute, 10));

    setEventDateTime(newDateTime);
  };

  const saveData = async idNotification => {
    console.log('Notificação', eventDateTime);
    try {
      await database.write(async () => {
        await database.get('agenda').create(event => {
          event.eventTitle = eventTitle || `Notificação ${format(eventDate, 'dd/MM')}`;
          event.notificationTime = eventDateTime;
          event.notificationID = idNotification;
        });
      });
    } catch (error) {
      console.error('Erro ao salvar o evento:', error);
    }
  };

  useEffect(() => {
    const newDate = addMinutes(new Date(), 20);
    setEventDateTime(newDate);
  }, []);

  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={'fechar'}
      header={'Notificação'}
      onPress={handleSave}>
      <Center>
        <Box alignItems="center">
          <FormControl isRequired>
            <FormControl.Label>Descrição</FormControl.Label>
            <Input placeholder="Título" value={eventTitle} w="95%" onChangeText={setEventTitle} />
            <FormControl.Label>Data </FormControl.Label>
            <Input
              placeholder="__/__/____"
              value={eventDate ? format(eventDate, 'dd/MM/yyyy') : '__/__/____'}
              w="95%"
              onTouchStart={() => setShowDate(true)}
            />
            <FormControl.Label>Hora </FormControl.Label>
            <Input
              placeholder="00:00"
              value={eventDateTime ? format(eventDateTime, 'HH:mm') : '00:00'}
              w="95%"
              onTouchStart={() => setShowHour(true)}
            />
          </FormControl>
        </Box>
      </Center>

      <DateModal setShowModal={setShowDate} showModal={showDate} setValue={onChangeDate} />

      <HourModal setShowModal={setShowHour} showModal={showHour} setValue={onChangeHour} />
    </CustomModal>
  );
}
