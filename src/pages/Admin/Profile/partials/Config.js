import { useNavigation } from '@react-navigation/native';
import AlertConfirm from '../../../../components/Modal/AlertConfirm';
import {
  Center,
  ScrollView,
  Box,
  FormControl,
  Input,
  Button,
  WarningOutlineIcon,
} from 'native-base';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

function ChangePassword() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleSave = async data => {
    // Adicione aqui a lógica para salvar a nova senha
    console.log(data);
    setShowSuccessModal(true);
  };

  return (
    <Box alignItems="center" flex={1}>
      <Controller
        control={control}
        name="currentPassword"
        rules={{
          required: 'Senha antiga é obrigatória!',
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'currentPassword' in errors} w="90%" maxW="300px">
            <FormControl.Label>Senha antiga</FormControl.Label>
            <Input
              placeholder="Senha antiga"
              value={value}
              onChangeText={onChange}
              w="100%"
              type="password"
            />
            {'currentPassword' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.currentPassword.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="newPassword"
        rules={{
          required: 'Nova senha é obrigatória!',
          minLength: {
            value: 8,
            message: 'A nova senha deve ter pelo menos 8 caracteres!',
          },
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'newPassword' in errors} w="90%" maxW="300px">
            <FormControl.Label>Nova senha</FormControl.Label>
            <Input
              placeholder="Nova senha"
              value={value}
              onChangeText={onChange}
              w="100%"
              type="password"
            />
            {'newPassword' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.newPassword.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        rules={{
          required: 'Confirmação de senha é obrigatória!',
          validate: value => value === getValues('newPassword') || 'As senhas não conferem!',
        }}
        render={({ field: { value, onChange } }) => (
          <FormControl isInvalid={'confirmPassword' in errors} w="90%" maxW="300px">
            <FormControl.Label>Repita a senha</FormControl.Label>
            <Input
              placeholder="Repita a senha"
              value={value}
              onChangeText={onChange}
              w="100%"
              type="password"
            />
            {'confirmPassword' in errors && (
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errors?.confirmPassword.message}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
        )}
      />

      <Box flex={1}>
        <Button mt="4" mb={1} colorScheme="tertiary" onPress={handleSubmit(handleSave)}>
          Salvar
        </Button>
      </Box>

      {/* Modal de sucesso */}
      {showSuccessModal && (
        <AlertConfirm
          showModal={showSuccessModal}
          setShowModal={() => setShowSuccessModal(false)}
          title="Sucesso"
          text="A senha foi alterada com sucesso!"
          setValue={() => {
            setShowSuccessModal(false);
            navigation.navigate('SignIn');
          }}
          successBtn={'OK'}
        />
      )}
    </Box>
  );
}

export default () => {
  return (
    <ScrollView flex={1}>
      <Center flex={1} my="4">
        <ChangePassword />
      </Center>
    </ScrollView>
  );
};
