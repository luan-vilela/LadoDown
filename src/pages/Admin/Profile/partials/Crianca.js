import React from "react";
import { Center, View,Badge, Text, Box, Select, CheckIcon, FormControl, Input, Label, ErrorMessage, WarningOutlineIcon} from 'native-base';


function Crianca() {
  const [service, setService] = React.useState("");

  return <Box alignItems="center">
      <FormControl isInvalid w="75%" maxW="300px">
        <FormControl.Label>Password</FormControl.Label>
        <Input placeholder="Enter password" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Try different from previous passwords.
        </FormControl.ErrorMessage>

        <FormControl.Label>Sexo</FormControl.Label>
        <Select 
          selectedValue={service} 
          minWidth="200" 
          accessibilityLabel="sexo" 
          placeholder="Selecione o sexo" 
          _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Masculino" value="m" />
          <Select.Item label="Feminino" value="f" />
        </Select>

        <Badge  colorScheme="success">
  <Text>Success</Text>
</Badge>

      </FormControl>
    </Box>
    }
  
export default () => {
    return (
        <View flex={1}>
            <Center flex={1} my="4">
            <Crianca />
  </Center>
            
          </View>
    );
};
      