import {
  Center,
  View,
  Box,
  Select,
  CheckIcon,
  FormControl,
  Input,
  Button,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { database } from '../../../../databases/index';
import { Q } from '@nozbe/watermelondb';

function Tutor() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const loadingDate = async () => {
    const kidsCollection = database.get('criancas');
    const response = await kidsCollection.query().fetch(1);
    console.log('response', response[0].id);
  };

  loadingDate();

  const handleLogin = async data => {
    const post = await database.write(async () => {
      const post = await database.get('criancas').create(post => {
        post.name = data.name;
        post.sex = data.sex;
        post.dateOfBirth = new Date();
      });
    });
  };

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
            <FormControl.Label>Nome do responsável</FormControl.Label>
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
        name="Data Nascimento"
        rules={{
          pattern: {
            message: 'Nome inválido!',
            value: /^(?:\s*.{2,})?$/,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'dtNascimento' in errors} w="90%" maxW="300px">
            <FormControl.Label>Data Nascimento</FormControl.Label>
            <Input placeholder="__/__/____" value={value} onChangeText={onChange} w="100%" />
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
          required: 'Sexo da Criançã é obrigatório',
          pattern: {
            message: 'Selecione um sexo!',
            value: /^(M|F)$/i,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'sex' in errors} w="90%" maxW="300px">
            <FormControl.Label>Parentesco</FormControl.Label>
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
              <Select.Item label="Pai" value="M" />
              <Select.Item label="Mãe" value="F" />
              <Select.Item label="Outro" value="F" />
            </Select>
            {'sex' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.sex.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Box flex={1}>
        <Button mt="4" mb={1} colorScheme="tertiary" onPress={handleSubmit(handleLogin)}>
          Salvar
        </Button>
      </Box>
    </Box>
  );
}

export default () => {
  return (
    <View flex={1}>
      <Center flex={1} my="4">
        <Tutor />
      </Center>
    </View>
  );
};
