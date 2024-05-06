import React, { useEffect } from 'react';
import {
  Text,
  FormControl,
  Box,
  Input,
  NativeBaseProvider,
  ScrollView,
  WarningOutlineIcon,
  IconButton,
  Icon,
} from 'native-base';
import ButtonCircle from '../../../../components/Button/Circle';
import { useState } from 'react';

import HeaderAdmin from '../../../../components/HeaderAdmin';
import ChartExample from './charts/ChartExample';
import CustomModal from '../../../../components/CustomModal';

export default () => {
  const [showModal, setShowModal] = useState(false);
  const [addPeso, setAddPeso] = useState('');

  const handleSubmit = () => {};

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Curva de Crescimento'} />

      <ScrollView>
        <ChartExample />
      </ScrollView>

      <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} />

      {/* Modal inserir dado */}
      <CustomModal
        isOpen={showModal}
        onClose={setShowModal}
        CancelBtn={'fechar'}
        header={'Adicionar ponto na curva asdf asdf asdf asdf asdf'}
        onPress={() => setShowModal(false)}>
        <Box alignItems="center" py="26px">
          <FormControl isInvalid={false} w="90%" maxW="300px">
            <FormControl.Label>Peso</FormControl.Label>
            <Input
              placeholder="Digite o peso"
              keyboardType="numeric"
              value={addPeso}
              onChangeText={peso => setAddPeso(peso)}
            />
            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Necessário entrar com um peso.
          </FormControl.ErrorMessage> */}
          </FormControl>
        </Box>
      </CustomModal>
    </NativeBaseProvider>
  );
};
