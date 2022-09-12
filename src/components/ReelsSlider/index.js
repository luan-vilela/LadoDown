import React from "react";
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
} from "native-base";

const ReelsSlider = ({image, title, routeName}) => {
  return (
    <Box alignItems="center" >
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
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "#10b981",
        }}
      >

        <Image flex={1} source={image} alt="image" resizeMode="contain" w="100%"/>
        <Heading py="2" size="md" textAlign="center" color="primary.50">
          {title}
        </Heading>


      </Box>
    </Box>
  );
};

export default () => {
  return (
    <ScrollView horizontal={true}>
      <HStack ml="20" mr="20">

        <ReelsSlider image={require('../../assets/vacina.png')} title={'Carteira de Vacinação'}/>
        <ReelsSlider image={require('../../assets/crescimento.png')} title={'Curva de Crescimento'}/>
        <ReelsSlider image={require('../../assets/vacina.png')} title={'Agenda'}/>
        <ReelsSlider image={require('../../assets/vacina.png')} title={'Recomendações e Alergias'}/>
      </HStack>
    </ScrollView>
  );
};
