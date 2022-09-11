import * as React from "react";
import { Box, Heading, HStack, VStack, FormControl, Input, Button, Center, Text, Link, Image, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();
    return <Center w="100%">
        <Box>
        <Image
            source={require('../../assets/logo220x112.png')}
            alt="Logo LadoDown"
            resizeMode="contain"
        />
        </Box>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading size="lg" color="coolGray.800" _dark={{
            color: "warmGray.50"
            }} 
            fontWeight="semibold">
                Bem Vindo
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
            color: "warmGray.200"
            }} 
            fontWeight="medium" size="xs">
                Entre com seus dados, para se cadastrar!
            </Heading>
            <VStack space={3} mt="5">
            <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input  />
            </FormControl>
            <FormControl>
                <FormControl.Label>Senha</FormControl.Label>
                <Input type="password" />
            </FormControl>
            <FormControl>
                <FormControl.Label>Confirmar Senha</FormControl.Label>
                <Input type="password" />
            </FormControl>
            <Button mt="2" colorScheme="tertiary">
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
                onPress={()=>navigation.navigate('SignIn')}>
                Entrar com minha Conta
            </Link>
        </VStack>
        </Box>
    </Center>;
};

    export default () => {
        return (
        <ScrollView>
            <Center flex={1} px="3">
                <SignUp />
            </Center>
        </ScrollView>
        );
    };
    