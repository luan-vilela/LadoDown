import React from 'react';
import { HStack, VStack, Text, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ButtonCircle from '../../components/Button/Circle';
import ROUTES from '../../routes';

const Btn = ({ icon, name, routeName }) => {
  const navigation = useNavigation();
  return (
    <VStack alignItems="center" justifyContent="flex-start" maxW="150px" flex={1}>
      <ButtonCircle onPress={() => navigation.navigate(routeName)} icon={icon} />

      <Text color="#636363" fontWeight="bold" my="1">
        {name}
      </Text>
    </VStack>
  );
};

export default () => {
  return (
    <Center>
      <HStack justifyContent="space-between" my="23px" mx="23px" maxW="500px">
        <Btn icon="language" name="Conteúdo" routeName={ROUTES.CONTEUDO.NAME} />
        <Btn icon="forum" name="Fórum" routeName={ROUTES.FORUM.NAME} />
        <Btn icon="campaign" name="Alertas" routeName={ROUTES.ALERTA.NAME} />
        <Btn icon="medical-services" name="Histórico Paciente" routeName={ROUTES.CONTEUDO.NAME} />
      </HStack>
    </Center>
  );
};
