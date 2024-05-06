import React from 'react';
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '../../routes/index';

function AppBar({ title }) {
  const navigation = useNavigation();
  return (
    <HStack py="2" justifyContent="space-between" alignItems="center" w="100%">
      <IconButton
        icon={<Icon as={MaterialIcons} name="chevron-left" size="lg" color="tertiary.600" />}
        variant="ghost"
        onPress={() => navigation.goBack()}
      />
      <Text color="primary.900" fontSize="20" fontWeight="light">
        {title}
      </Text>

      <HStack>
        {/* <IconButton p="0" icon={<Icon as={MaterialIcons} name="notifications" size="lg" color="tertiary.600" />} variant="ghost" /> */}
        <IconButton
          icon={<Icon as={MaterialIcons} name="person-pin" size="lg" color="tertiary.600" />}
          variant="ghost"
          onPress={() => navigation.navigate(ROUTES.PROFILE.NAME)}
        />
      </HStack>
    </HStack>
  );
}
export default ({ title }) => {
  return (
    <Center px="1">
      <AppBar title={title} />
    </Center>
  );
};
