import React, { useEffect, useState } from 'react';
import { Box, Center, HStack } from 'native-base';
import SelectScroll from '../SelectScroll/SelectScroll';
import CustomModal from '../CustomModal/';
import { format, getDaysInMonth, getYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DateModal = ({ showModal, setShowModal, setValue }) => {
  const [day, setDay] = useState(13);
  const [month, setMonth] = useState(4);
  const [year, setYear] = useState(2024);
  const [days, setDays] = useState([]);

  const generateDays = () => {
    const daysArray = Array.from({ length: getDaysInMonth(new Date(year, month)) }, (_, i) => ({
      id: `day_${i}`,
      value: i + 1,
      label: `${i + 1}`,
    }));
    return daysArray;
  };
  const meses = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2000, i, 1);
    return {
      id: `month_${i}`,
      value: i,
      label: format(date, 'MMMM', { locale: ptBR }),
    };
  });

  const anos = Array.from({ length: 25 }, (_, i) => {
    const year = new Date().getFullYear() - 24 + i;
    return {
      id: `year_${i}`,
      value: year,
      label: `${year}`,
    };
  });

  const handleDateSelected = () => {
    const selectedDate = new Date(year, month, day);
    setValue(selectedDate);
    setShowModal(false);
  };

  useEffect(() => {
    setDays(generateDays());
    if (day > getDaysInMonth(new Date(year, month))) {
      setDay(getDaysInMonth(new Date(year, month)));
    }
  }, [month, year]);

  return (
    <CustomModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      CancelBtn={'Fechar'}
      showCloseButton={false}
      header={'Seleciona uma data'}
      onPress={() => handleDateSelected()}
      footer={undefined}
      SuccessBtn={undefined}>
      <Box alignItems="center" px={4}>
        <HStack h={200} space={2} justifyContent="center">
          <Center w="20%">
            Dia
            <SelectScroll items={days} selected={item => setDay(item.value)} value={day} />
          </Center>

          <Center w="50%">
            Mês
            <SelectScroll items={meses} selected={item => setMonth(item.value)} value={month} />
          </Center>

          <Center w="30%">
            Ano
            <SelectScroll items={anos} selected={item => setYear(item.value)} value={year} />
          </Center>
        </HStack>
      </Box>
    </CustomModal>
  );
};

export default DateModal;
