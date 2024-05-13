import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  VStack,
  Stack,
  ScrollView,
  Pressable,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../routes';

const ReelsSlider = ({ image, title, routeName }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routeName)}>
      {({ isPressed }) => {
        return (
          <Box
            alignItems="center"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}>
            <Box
              w="164"
              h="300"
              maxW="164"
              m="2"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: '#10b981',
              }}>
              <Image flex={1} source={image} alt={title} resizeMode="contain" w="100%" />
              <Heading py="2" size="md" textAlign="center" color="primary.50">
                {title}
              </Heading>
            </Box>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default () => {
  return (
    <ScrollView horizontal={true} flex={1}>
      <HStack ml="20" mr="20">
        <ReelsSlider
          image={require('../../assets/vacina.png')}
          title={'Carteira de Vacinação'}
          routeName={ROUTES.CARTEIRINHA.NAME}
        />
        <ReelsSlider
          image={require('../../assets/crescimento.png')}
          title={'Curva de Crescimento'}
          routeName={ROUTES.CRESCIMENTO.NAME}
        />
        <ReelsSlider
          image={require('../../assets/vacina.png')}
          title={'Agenda'}
          routeName={ROUTES.DASHBOARD.NAME}
        />
        <ReelsSlider
          image={require('../../assets/vacina.png')}
          title={'Recomendações e Alergias'}
          routeName={ROUTES.DASHBOARD.NAME}
        />
      </HStack>
    </ScrollView>
  );
};
