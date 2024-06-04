import React, { useEffect, useState } from 'react';
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
  ScrollView,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import Mensagem from '../../components/Mensagem';
import Api from '../../services/Api';

import { getToken } from '../../services/auth';

const SignIn = props => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  return (
    <Center w="100%">
      <Image
        mt="12"
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
            color: 'warmGray.50',
          }}>
          Bem Vindo
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Entre com seus dados!
        </Heading>

        <VStack space={3} mt="5">
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email obrigatório',
              pattern: {
                message: 'Email inválido',
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              },
            }}
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="none"
                />
                {'email' in errors ? <Text color="error.500">{errors?.email.message}</Text> : <></>}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Senha deve ter no mínimo 3 caracteres.',
              minLength: 3,
            }}
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <FormControl.Label>Senha</FormControl.Label>
                <Input
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  autoCapitalize="none"
                />
                {'password' in errors ? (
                  <Text color="error.500">{errors?.password.message}</Text>
                ) : (
                  <></>
                )}
                <Link
                  _text={{
                    fontSize: 'xs',
                    fontWeight: '500',
                    color: 'tertiary.600',
                  }}
                  alignSelf="flex-end"
                  mt="1">
                  Recuperar Senha?
                </Link>
              </FormControl>
            )}
          />

          <Button
            mt="2"
            colorScheme="tertiary"
            onPress={handleSubmit(props.handleLogin)}
            isLoading={props.loading}>
            Entrar
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Ainda não tem conta?{' '}
            </Text>
            <Link
              _text={{
                color: 'tertiary.600',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              onPress={() => navigation.navigate('SignUp')}>
              Cadastre-se
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDate() {
      const isActive = await getToken();
      if (isActive) {
        navigation.navigate('Dashboard');
      }
    }
    fetchDate();
  }, [isAuth]);

  const handleLogin = async data => {
    if (data.email && data.password) {
      setLoading(true);
      try {
        const isLogged = await Api.signIn(data.email, data.password);
        if (isLogged) {
          setLoading(false);
          if (isLogged.token) {
            setIsAuth(!isAuth);
            return;
          }
          setIsOpen(true);
          setMessages([isLogged.message]);
        }
      } catch (e) {
        setIsOpen(true);
        setMessages([['Erro ao carregar a página, tente mais tarde!']]);
        console.log(e);
      }
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Mensagem isOpen={isOpen} setIsOpen={setIsOpen} messages={messages} />
        <SignIn handleLogin={handleLogin} loading={loading} />
      </Center>
    </ScrollView>
  );
};
