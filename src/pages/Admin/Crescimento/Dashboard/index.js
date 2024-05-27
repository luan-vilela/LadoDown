import React, { useEffect, useState } from 'react';
import {
  Text,
  FormControl,
  Box,
  Input,
  NativeBaseProvider,
  ScrollView,
  Pressable,
  IconButton,
  Icon,
} from 'native-base';
import ButtonCircle from '../../../../components/Button/Circle';
import HeaderAdmin from '../../../../components/HeaderAdmin';
import CustomModal from '../../../../components/CustomModal';
import { Table, Row, Rows } from 'react-native-table-component';
import {
  deleteFormData,
  loadFormData,
  saveFormData,
} from '../../../../services/curvaCrescimento.service';
import { MaterialIcons } from '@expo/vector-icons';

export default () => {
  const [showModal, setShowModal] = useState(false);
  const [addPeso, setAddPeso] = useState('');
  const [addAltura, setAddAltura] = useState('');
  const [addCabeca, setAddCabeca] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveData = async () => {
    if (editIndex) {
      setIsLoadingDel(true);
      const id = data[editIndex]._raw.id;
      const response = await deleteFormData(id);
      loadingData();
    }
  };

  const handleEdit = index => {
    const rowData = data[index]._raw;
    setAddPeso(rowData.peso.toFixed(2));
    setAddAltura(rowData.altura.toFixed(2));
    setAddCabeca(rowData.tamanho_cabeca.toFixed(2));
    setEditIndex(index);
    setShowModal(true);
  };

  const handleAddData = async () => {
    const alturaM = parseFloat(addAltura) / 100;
    const pesoKg = parseFloat(addPeso);
    const imc = pesoKg / (alturaM * alturaM);

    const post = {
      peso: pesoKg,
      altura: Number(addAltura),
      tamanhoCabeca: Number(addCabeca),
      imc: imc,
    };

    if (editIndex) {
      post['id'] = data[editIndex]._raw.id;
    }
    setIsLoading(true);
    await saveFormData(post);
    loadingData();
  };

  const loadingData = async () => {
    const response = await loadFormData();
    setData(response);
    resetState();
  };

  const resetState = () => {
    setEditIndex(null);
    setAddPeso('');
    setAddAltura('');
    setAddCabeca('');
    setShowModal(false);
    setIsLoading(false);
    setIsLoadingDel(false);
  };

  const rowStyle = index => ({
    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  });

  useEffect(() => {
    loadingData();
  }, []);

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Curva de Crescimento'} />

      <ScrollView>
        <Box>
          <Table>
            <Row
              data={['Peso (kg)', 'Altura (cm)', 'Cabeça (cm)', 'IMC', 'Editar']}
              style={{ height: 60, backgroundColor: '#10b981' }}
              textStyle={{ margin: 6, color: '#ffffff', textAlign: 'center' }}
            />
            {data.map((rowItem, index) => (
              <Row
                key={index}
                data={[
                  rowItem._raw.peso.toFixed(2) || '-',
                  rowItem._raw.altura.toFixed(2) || '-',
                  rowItem._raw.tamanho_cabeca.toFixed(2) || '-',
                  rowItem._raw.imc.toFixed(2) || '-',
                  <Box justifyContent="center" alignItems="center">
                    <Pressable onPress={() => handleEdit(index)}>
                      <Icon as={MaterialIcons} name="edit" size="md" color="tertiary.600" />
                    </Pressable>
                  </Box>,
                ]}
                style={[{ height: 40 }, rowStyle(index)]}
                textStyle={{ margin: 6, textAlign: 'center' }}
              />
            ))}
          </Table>
        </Box>
      </ScrollView>

      <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} />

      {/* Modal inserir dado */}
      <CustomModal
        isOpen={showModal}
        onClose={() => resetState()}
        CancelBtn={'fechar'}
        header={'Curva de crescimento'}
        onPress={handleAddData}
        onPressDel={editIndex !== null ? handleRemoveData : undefined}
        size="xl"
        isLoading={isLoading}
        isLoadingDel={isLoadingDel}>
        <Box alignItems="center" py="26px">
          <Box
            mb={4}
            px={2}
            _text={{
              color: '#c4c4c4',
              textAlign: 'center',
            }}>
            Aqui você pode adicionar um novo ponto à curva de crescimento. Este ponto será
            registrado com base nos dados cadastrados no perfil da criança.
          </Box>

          <FormControl isInvalid={false} w="90%" maxW="300px">
            <FormControl.Label>Peso</FormControl.Label>
            <Input
              placeholder="Digite o peso"
              keyboardType="numeric"
              value={addPeso}
              onChangeText={peso => setAddPeso(peso)}
              InputRightElement={
                <Text ml={2} mr={2}>
                  kg
                </Text>
              }
            />
          </FormControl>
          <FormControl isInvalid={false} w="90%" maxW="300px" mt="4">
            <FormControl.Label>Altura</FormControl.Label>
            <Input
              placeholder="Digite a altura"
              keyboardType="numeric"
              value={addAltura}
              onChangeText={altura => setAddAltura(altura)}
              InputRightElement={
                <Text ml={2} mr={2}>
                  cm
                </Text>
              }
            />
          </FormControl>
          <FormControl isInvalid={false} w="90%" maxW="300px" mt="4">
            <FormControl.Label>Tamanho da Cabeça</FormControl.Label>
            <Input
              placeholder="Digite o tamanho da cabeça"
              keyboardType="numeric"
              value={addCabeca}
              onChangeText={cabeca => setAddCabeca(cabeca)}
              InputRightElement={
                <Text ml={2} mr={2}>
                  cm
                </Text>
              }
            />
          </FormControl>
        </Box>
      </CustomModal>
    </NativeBaseProvider>
  );
};
