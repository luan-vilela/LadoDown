import React, { useEffect } from "react";
import {
  Box,
  Heading,
  HStack,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Text,
  Link,
  Image,
  ScrollView,
  AlertDialog,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import useApi from "../../services/Api";

const SignUp = (props) => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.passwordRepeat) {
      setError("passwordRepeat", {
        type: "required",
        message: "Senhas diferentes",
      });
    } else {
      props.handleCreate(data);
    }
  };

  return (
    <Center w="100%">
      <Box>
        <Image
          mt="12"
          source={require("../../assets/logo220x112.png")}
          alt="Logo LadoDown"
          resizeMode="contain"
        />
      </Box>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Bem Vindo
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Entre com seus dados para se cadastrar!
        </Heading>
        <VStack space={3} mt="5">
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email obrigatório",
              pattern: {
                message: "Email inválido",
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
                {"email" in errors ? (
                  <Text color="error.500">{errors?.email.message}</Text>
                ) : (
                  <></>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Senha deve ter no mínimo 3 caracteres.",
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
                {"password" in errors ? (
                  <Text color="error.500">{errors?.password.message}</Text>
                ) : (
                  <></>
                )}
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="passwordRepeat"
            rules={{
              required: "Senha deve ter no mínimo 3 caracteres.",
              minLength: 3,
            }}
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <FormControl.Label>Repita a senha</FormControl.Label>
                <Input
                  placeholder="Senha"
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                  autoCapitalize="none"
                />
                {"passwordRepeat" in errors ? (
                  <Text color="error.500">
                    {errors?.passwordRepeat.message}
                  </Text>
                ) : (
                  <></>
                )}
              </FormControl>
            )}
          />

          <Button
            mt="2"
            colorScheme="tertiary"
            onPress={handleSubmit(onSubmit)}
          >
            Cadastrar-se
          </Button>
        </VStack>
      </Box>
      <Box>
        <VStack mt="6" justifyContent="center">
          <Link
            _text={{
              color: "coolGray.600",
              fontWeight: "medium",
              fontSize: "sm",
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            Entrar com minha Conta
          </Link>
        </VStack>
      </Box>
    </Center>
  );
};

const Mensagem = ({ isOpen, setIsOpen, messages }) => {
  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Aviso</AlertDialog.Header>
        <AlertDialog.Body>
          {messages.map((msg) =>
            <Text>
              {msg}
            </Text>
          )}
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <Button colorScheme="success" onPress={onClose}>
            OK
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const navigation = useNavigation();

  const handleCreate = (data) => {
    const pai = {
      nome: "user" + (parseInt(Math.random() * 20000) + 1),
    };

    let user = {};
    user["pai"] = pai;
    user["permissions"] = [];
    user["email"] = data.email;
    user["password"] = data.password;

    useApi
      .post("usuario", user)
      .then((resp) => {
        if (resp.message) {
          setIsOpen(true);
          setMessages(resp.message)
          return;
        }
        navigation.navigate('SignIn')
      })
      .catch((e) => {
        setIsOpen(true);
        setMessages([['Erro ao carregar a página, tente mais tarde!']])
        console.log(e)
      })
  };

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Mensagem isOpen={isOpen} setIsOpen={setIsOpen} messages={messages} />
        <SignUp handleCreate={handleCreate} />
      </Center>
    </ScrollView>
  );
};
