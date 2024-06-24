import {
  Center,
  ScrollView,
  Box,
  Select,
  CheckIcon,
  FormControl,
  Input,
  Button,
  WarningOutlineIcon,
  Stack,
  HStack,
  Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { database } from '../../../../databases/index';
import { Q } from '@nozbe/watermelondb';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateModal from '../../../../components/Modal/DateModal';
import HourModal from '../../../../components/Modal/HourModal';
import AlertConfirm from '../../../../components/Modal/AlertConfirm';
import { format } from 'date-fns';

function Tutor() {
  const [recordId, setRecordId] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [dtNascimento, setDtNascimento] = useState(null);
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
      console.log(dateFormat);
      return dateFormat;
    }
    return '';
  };

  const loadFormData = async () => {
    const tutorCollection = database.get('tutor');
    const response = await tutorCollection.query().fetch();

    const data = response[0] || {};
    reset({
      name: data.name || '',
      parentesco: data.parentesco || '',
      dateOfBirth: data.dateOfBirth,
    });

    setRecordId(data.id);
    setDtNascimento(data.dateOfBirth);
  };

  const handleSave = async data => {
    try {
      await database.write(async () => {
        if (recordId) {
          const record = await database.get('tutor').find(recordId);
          await record.update(post => {
            post.name = data.name;
            post.parentesco = data.parentesco;
            post.dateOfBirth = dtNascimento;
          });
        } else {
          await database.get('tutor').create(post => {
            post.name = data.name;
            post.parentesco = data.parentesco;
            post.dateOfBirth = dtNascimento;
          });
        }
        setShowSuccessModal(true);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadFormData();
  }, [reset]);

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
            <FormControl.Label>Nome do Responsável</FormControl.Label>
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
        name="parentesco"
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'parentesco' in errors} w="90%" maxW="300px">
            <FormControl.Label>Parentesco</FormControl.Label>
            <Select
              selectedValue={value}
              minWidth="300px"
              width="100%"
              accessibilityLabel="parentesco"
              placeholder="Selecione o parentesco"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={onChange}>
              <Select.Item label="Mãe" value="mae" />
              <Select.Item label="Pai" value="pai" />
              <Select.Item label="Outro" value="outro" />
            </Select>
            {'parentesco' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.parentesco.message}
              </FormControl.ErrorMessage>
            )}
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

      <Box flex={1}>
        <Button mt="4" mb={1} colorScheme="tertiary" onPress={handleSubmit(handleSave)}>
          Salvar
        </Button>
      </Box>

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
    </Box>
  );
}

export default () => {
  return (
    <ScrollView flex={1}>
      <Center flex={1} my="4">
        <Tutor />
      </Center>
    </ScrollView>
  );
};
