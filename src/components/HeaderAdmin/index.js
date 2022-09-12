import React from "react";
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function AppBar() {
  return(
      <HStack py="2" justifyContent="space-between" alignItems="center" w="100%"  >
        <IconButton icon={<Icon as={MaterialIcons} name="chevron-left" size="lg" color="tertiary.600" />} />
        <Text color="primary.900" fontSize="20" fontWeight="light">
            Nome Do Fulano
        </Text>

        <HStack>
          <IconButton p="0" icon={<Icon as={MaterialIcons} name="notifications" size="lg" color="tertiary.600" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="person-pin" size="lg" color="tertiary.600" />} />
        </HStack>
      </HStack>
  );
  
}
export default () => {
    return (
        <Center px="1">
          <AppBar />
        </Center>
    );
  };
  