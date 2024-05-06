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

function Crianca() {
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
    <Box alignItems="center">
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
          <FormControl isInvalid={'name' in errors} w="75%" maxW="300px">
            <FormControl.Label>Nome da Criança</FormControl.Label>
            <Input placeholder="Nome" value={value} onChangeText={onChange} />
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
        name="sex"
        rules={{
          required: 'Sexo da Criançã é obrigatório',
          pattern: {
            message: 'Selecione um sexo!',
            value: /^(M|F)$/i,
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'sex' in errors} w="75%" maxW="300px">
            <FormControl.Label>Sexo</FormControl.Label>
            <Select
              selectedValue={value}
              minWidth="200"
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

      <Button mt="4" mb={1} colorScheme="tertiary" onPress={handleSubmit(handleLogin)}>
        Salvar
      </Button>
    </Box>
  );
}

export default () => {
  return (
    <View flex={1}>
      <Center flex={1} my="4">
        <Crianca />
      </Center>
    </View>
  );
};
