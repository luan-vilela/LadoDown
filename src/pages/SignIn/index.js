import * as React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  Image,
  ScrollView
} from "native-base";
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <Center w="100%">
      <Image
        source={require('../../assets/logo220x112.png')}
        alt="Logo LadoDown"
        resizeMode="contain"

      />
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Bem Vindo
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Entre com seus dados!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "tertiary.600",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Recuperar Senha?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="tertiary"
            onPress={() => navigation.navigate('Dashboard')}
          >
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Ainda não tem conta?{" "}
            </Text>
            <Link
              _text={{
                color: "tertiary.600",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Cadastre-se
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <ScrollView>
      <Center flex={1} px="3">
        <SignIn />
      </Center>
    </ScrollView>
  );
};
