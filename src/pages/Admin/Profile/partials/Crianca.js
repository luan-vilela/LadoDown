import React, { useEffect, useState } from 'react';
import {
  Box,
  Select,
  CheckIcon,
  FormControl,
  Input,
  Button,
  WarningOutlineIcon,
  ScrollView,
  Center,
  Text,
} from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateModal from '../../../../components/Modal/DateModal';
import AlertConfirm from '../../../../components/Modal/AlertConfirm'; // Importe o componente de confirmação de alerta
import { loadFormData, saveFormData } from '../../../../services/crianca.service';
import { format } from 'date-fns';

function Crianca() {
  const [recordId, setRecordId] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [dtNascimento, setDtNascimento] = useState();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const now = new Date();

  const {
    control,
    handleSubmit,
    setError,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm();

  const getDate = () => {
    if (dtNascimento) {
      const dateFormat = format(dtNascimento, 'dd/MM/yyyy');
      return dateFormat;
    }
    return '';
  };

  const loadingData = async () => {
    const response = await loadFormData();
    reset(response);
    setRecordId(response.id);
    setDtNascimento(response.dateOfBirth);
  };

  const handleSave = async data => {
    const payload = {
      name: data.name,
      sex: data.sex,
      dateOfBirth: dtNascimento,
      birthWeight: data.birthWeight,
      birthLength: data.birthLength,
      headCircumferenceAtBirth: data.headCircumferenceAtBirth,
      gestationalAge: data.gestationalAge,
    };

    if (recordId) {
      payload['id'] = recordId;
    }

    const response = await saveFormData(payload); // Espera pela resposta do serviço de salvar

    // Mostra o modal de sucesso após salvar os dados
    setShowSuccessModal(true);
  };

  useEffect(() => {
    loadingData();
  }, []);

  return (
    <Box alignItems="center" flex={1}>
      <Controller
        control={control}
        name="name"
        rules={{
          pattern: {
            message: 'Nome inválido!',
            value: /^(?:\s*.{2,})?$/,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'name' in errors} w="90%" maxW="300px">
            <FormControl.Label>Nome da Criança</FormControl.Label>
            <Input placeholder="Nome" value={value} onChangeText={onChange} w="100%" />
            {'name' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.name.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="dtNascimento"
        rules={{
          // required: 'Data de nascimento é obrigatória',
          pattern: {
            value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            message: 'Data Nascimento inválida!',
          },
        }}
        render={() => (
          <FormControl isInvalid={'dtNascimento' in errors} w="90%" maxW="300px">
            <FormControl.Label>Data de nascimento</FormControl.Label>
            <Input
              placeholder="__/__/____"
              value={getDate()}
              w="100%"
              onTouchStart={() => setShowDate(true)}
              onBlur={() => setValue('dtNascimento', getDate())}
            />
            {'dtNascimento' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.dtNascimento.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="sex"
        rules={{
          required: 'Sexo da Criança é obrigatório',
          pattern: {
            message: 'Selecione um sexo!',
            value: /^(M|F)$/i,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'sex' in errors} w="90%" maxW="300px">
            <FormControl.Label>Sexo</FormControl.Label>
            <Select
              selectedValue={value}
              minWidth="300px"
              width="100%"
              accessibilityLabel="sexo"
              placeholder="Selecione o sexo"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={onChange}>
              <Select.Item label="Masculino" value="M" />
              <Select.Item label="Feminino" value="F" />
            </Select>
            {'sex' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.sex.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="birthWeight"
        render={({ field: { value, onChange } }) => (
          <FormControl w="90%" maxW="300px">
            <FormControl.Label>Peso ao nascer</FormControl.Label>
            <Input
              placeholder="Peso"
              value={value}
              onChangeText={onChange}
              w="100%"
              keyboardType="numeric"
            />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="birthLength"
        render={({ field: { value, onChange } }) => (
          <FormControl w="90%" maxW="300px">
            <FormControl.Label>Comprimento ao nascer</FormControl.Label>
            <Input placeholder="Medida" value={value} onChangeText={onChange} w="100%" />
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="headCircumferenceAtBirth"
        render={({ field: { value, onChange } }) => (
          <FormControl w="90%" maxW="300px">
            <FormControl.Label>Perímetro cefálico</FormControl.Label>
            <Input placeholder="Medida" value={value} onChangeText={onChange} w="100%" />
          </FormControl>
        )}
      />

      <DateModal
        setShowModal={setShowDate}
        showModal={showDate}
        setValue={item => setDtNascimento(item)}
        _day={dtNascimento?.getDate() || now.getDate()}
        _month={dtNascimento?.getMonth() || now.getMonth()}
        _year={dtNascimento?.getFullYear() || now.getFullYear()}
      />

      {/* Modal de sucesso */}
      <AlertConfirm
        showModal={showSuccessModal}
        setShowModal={() => setShowSuccessModal(false)}
        title="Sucesso"
        text="Os dados foram salvos com sucesso!"
        setValue={() => setShowSuccessModal(false)}
        cancel={undefined}
        successBtn={'OK'}
        footer={undefined}
        showCloseButton={undefined}
      />

      <Box flex={1}>
        <Button mt="4" mb={1} colorScheme="tertiary" onPress={handleSubmit(handleSave)}>
          Salvar
        </Button>
      </Box>
    </Box>
  );
}

const CriancaScreen = () => {
  return (
    <ScrollView flex={1}>
      <Center flex={1} my="4">
        <Crianca />
      </Center>
    </ScrollView>
  );
};

export default CriancaScreen;
