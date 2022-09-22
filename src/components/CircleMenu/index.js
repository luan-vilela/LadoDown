import React from "react";
import { HStack, VStack, Button, IconButton, Icon, Text, Center, Box, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../routes";

const Btn = ({icon, name, routeName}) => {
    const navigation = useNavigation()
    return(
        <VStack alignItems="center" justifyContent="flex-start" maxW="150px" flex={1} onclick>
            <IconButton 
                onPress={()=> navigation.navigate(routeName)}
                icon={<
                    Icon as={MaterialIcons} 
                    name={icon}
                    size="2xl" 
                    color="tertiary.600"
                />}
                p="4"
                variant="solid"
                borderRadius="full"
                backgroundColor="#ECECEC"
                shadow={3}
                _pressed={{
                    backgroundColor: "tertiary.300"
                  }}
            />
        <Text
            color="#636363"
            fontWeight="bold"
            my="1"
            >{name}</Text>
        </VStack>
    );
}

export default () => {
    return(
        <Center>
            <HStack  justifyContent="space-between" my="23px" mx="23px" maxW="500px">
                <Btn icon={"language"} name={"Conteúdo"} routeName={ROUTES.HOME.NAME} />
                <Btn icon={"forum"} name={"Fórum"} routeName={ROUTES.HOME.NAME} />
                <Btn icon={"campaign"} name={"Alertas"} routeName={ROUTES.HOME.NAME} />
                <Btn icon={"medical-services"} name={"Histórico Paciente"} routeName={ROUTES.HOME.NAME} />
            </HStack>
        </Center>

      );
  };
  