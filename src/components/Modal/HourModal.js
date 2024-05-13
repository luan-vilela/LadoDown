import React, { useEffect, useState } from 'react';
import { Box, Center, HStack } from 'native-base';
import SelectScroll from '../SelectScroll/SelectScroll';
import CustomModal from '../CustomModal';
import { format, getDaysInMonth, getYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const HourModal = ({ showModal, setShowModal, setValue }) => {
  const [minute, setMinute] = useState(5);
  const [hour, setHour] = useState(0);

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

export default HourModal;
