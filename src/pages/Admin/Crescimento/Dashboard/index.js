import React, { useEffect, useState } from 'react';
import {
  Text,
  FormControl,
  Box,
  Input,
  NativeBaseProvider,
  ScrollView,
  Pressable,
  Icon,
  Button,
  View,
} from 'native-base';
import ButtonCircle from '../../../../components/Button/Circle';
import HeaderAdmin from '../../../../components/HeaderAdmin';
import CustomModal from '../../../../components/CustomModal';
import { Table, Row } from 'react-native-table-component';
import AlertConfirm from '../../../../components/Modal/AlertConfirm';
import {
  deleteFormData,
  loadFormData,
  saveFormData,
} from '../../../../services/curvaCrescimento.service';
import { loadFormData as loadCrianca } from '../../../../services/crianca.service';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addMonths, differenceInDays, differenceInMonths, differenceInWeeks } from 'date-fns';

import Chart from './chart';
import HeadCircumferenceChart from './grafico5';
import { DATA_CRESCIMENTO } from '../../../../mock/mock';

export default () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [showModalAlert, setShowModalAlert] = useState(false);
  const [addPeso, setAddPeso] = useState('');
  const [addAltura, setAddAltura] = useState('');
  const [addCabeca, setAddCabeca] = useState('');
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isTable, setIsTable] = useState(true);
  const [isLoadingDel, setIsLoadingDel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [crianca, setCrianca] = useState(null);

  const handleRemoveData = async () => {
    if (editIndex) {
      setIsLoadingDel(true);
      await deleteFormData(editIndex);
      loadingData();
    }
  };

  const handleEdit = index => {
    const rowData = data[index];
    setAddPeso(rowData.peso.toFixed(2));
    setAddAltura(rowData.altura.toFixed(2));
    setAddCabeca(rowData.cefalica.toFixed(2));
    setEditIndex(rowData.id);
    setShowModal(true);
  };

  const handleAddData = async () => {
    const alturaM = parseFloat(addAltura) / 100;
    const pesoKg = parseFloat(addPeso);
    const imc = pesoKg / (alturaM * alturaM);

    const post = {
      peso: pesoKg,
      altura: Number(addAltura),
      cefalica: Number(addCabeca),
      imc: imc,
    };

    if (editIndex) {
      post['id'] = editIndex;
    }
    setIsLoading(true);
    await saveFormData(post);
    loadingData();
  };

  const loadingData = async () => {
    if (!crianca) {
      const response = await loadCrianca();

      if (!response) {
        setShowModalAlert(true);
        return;
      }

      setCrianca(response);
    }

    const response = await loadFormData();
    // DEBUG
    // const response = DATA_CRESCIMENTO.map(item => {
    //   return { _raw: item };
    // });

    const birth = crianca.dateOfBirth;

    const responseFormated = response.map(crescimento => {
      const createdAt = new Date(crescimento._raw.created_at);

      const ageMonths = differenceInMonths(createdAt, birth); // Idade em meses
      const ageWeeks = differenceInWeeks(createdAt, birth); // Idade em semanas
      // Calcula o início do mês atual desde o nascimento
      const monthStart = addMonths(birth, ageMonths);
      const day = differenceInDays(createdAt, monthStart); // Dias no mês atual

      return { age: ageMonths, ageWeeks: ageWeeks, day: day, ...crescimento._raw };
    });

    setData(responseFormated);

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

  const handleNavigateSon = v => {
    navigation.navigate('Profile', { tab: 1 });
  };
  const rowStyle = index => ({
    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  });

  useEffect(() => {
    loadingData();
  }, [isTable, crianca]);

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Curva de Crescimento'} />

      <Button.Group
        isAttached
        colorScheme="emerald"
        my={2}
        mx={{
          base: 'auto',
          md: 0,
        }}
        size="md">
        <Button variant={isTable ? 'solid' : 'outline'} onPress={() => setIsTable(true)}>
          Tabela
        </Button>
        <Button variant={!isTable ? 'solid' : 'outline'} onPress={() => setIsTable(false)}>
          Grafícos
        </Button>
      </Button.Group>

      {isTable && (
        <>
          <ScrollView>
            <Box>
              <Table>
                <Row
                  data={[
                    'Idade (meses)',
                    'Peso (kg)',
                    'Altura (cm)',
                    'Cabeça (cm)',
                    'IMC',
                    'Editar',
                  ]}
                  style={{ height: 60, backgroundColor: '#10b981' }}
                  textStyle={{ margin: 6, color: '#ffffff', textAlign: 'center' }}
                />
                {data.map((rowItem, index) => (
                  <Row
                    key={index}
                    data={[
                      rowItem.age || '0',
                      rowItem.peso.toFixed(2) || '-',
                      rowItem.altura.toFixed(2) || '-',
                      rowItem.cefalica.toFixed(2) || '-',
                      rowItem.imc.toFixed(2) || '-',
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

          <Box position="absolute" bottom={0} right={0} p={'16px'}>
            <ButtonCircle onPress={() => setShowModal(true)} icon={'add'} />
          </Box>
        </>
      )}

      {!isTable && (
        <View style={{ flex: 1 }}>
          <Chart customPoints={data} menino={crianca.sex} />
          {/* <HeadCircumferenceChart /> */}
        </View>
      )}

      <AlertConfirm
        showModal={showModalAlert}
        setShowModal={setShowModalAlert}
        setValue={handleNavigateSon}
        title={undefined}
        cancel={undefined}
        successBtn={undefined}
        footer={undefined}
        showCloseButton={false}
        text={'Por favor, entre com os dados da criançã primeiro!'}
      />

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
