import React, { useEffect, useState } from 'react';
import { Box, Center, HStack } from 'native-base';
import SelectScroll from '../SelectScroll/SelectScroll';
import CustomModal from '../CustomModal';
import { format, getDaysInMonth, getYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const HourModalAlert = ({ showModal, setShowModal, setValue }) => {
  const [minute, setMinute] = useState(2);
  const [hour, setHour] = useState(3);

  useEffect(() => {
    // Obtém a hora atual
    const currentDateTime = new Date();
    const currentHour = currentDateTime.getHours();
    const currentMinute = currentDateTime.getMinutes();

    // Atualiza os estados de hora e minuto com a hora atual
    setHour(currentHour);
    setMinute(currentMinute);
  }, []);

  const hours = Array.from({ length: 24 }, (_, i) => {
    return {
      id: `hour_${i}`,
      value: i,
      label: i < 10 ? `0${i}` : i,
    };
  });

  const minutes = Array.from({ length: 60 }, (_, i) => {
    return {
      id: `minute_${i}`,
      value: i,
      label: i < 10 ? `0${i}` : i,
    };
  });

  const handleDateSelected = () => {
    setValue(`${hour}:${minute}`);
    setShowModal(false);
  };

  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={'Fechar'}
      showCloseButton={false}
      header={''}
      onPress={() => handleDateSelected()}
      footer={undefined}
      SuccessBtn={undefined}>
      <Box alignItems="center" px={4}>
        <HStack h={200} space={2} justifyContent="center">
          <Center w="50%">
            Hora
            <SelectScroll items={hours} selected={item => setHour(item.value)} value={hour} />
          </Center>

          <Center w="50%">
            Minutos
            <SelectScroll items={minutes} selected={item => setMinute(item.value)} value={minute} />
          </Center>
        </HStack>
      </Box>
    </CustomModal>
  );
};

export default HourModalAlert;
