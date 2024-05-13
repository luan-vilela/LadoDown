import React from 'react';
import {
  VStack,
  HStack,
  Badge,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Heading,
  ScrollView,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import ROUTES from '../../routes';
import { useNavigation } from '@react-navigation/native';
import Badge_Custom from '../Badge_Custom';

function Table() {
  const navigation = useNavigation();
  return (
    <HStack>
      <VStack h={'100%'} mr="3">
        <Text flex={1}> </Text>
        <Text flex={1}>1ª Dose</Text>
        <Text flex={1}>2ª Dose</Text>
        <Text flex={1}>3ª Dose</Text>
        <Text flex={1}>Reforço</Text>
        <Text flex={1}>Outras</Text>
      </VStack>

      {/* Table */}
      <ScrollView>
        <VStack>
          <Text>1 Semana</Text>
          <Badge_Custom text={'100%'} percentage={100} />
          <Badge_Custom text={'50%'} percentage={50} />
          <Badge_Custom text={'0%'} percentage={0} />
          <Badge_Custom text={'85%'} percentage={85} />
          <Badge_Custom text={'9%'} percentage={9} />
        </VStack>
        <VStack>
          <Text>1 Semana</Text>
          <Badge_Custom text={'100%'} percentage={100} />
          <Badge_Custom text={'50%'} percentage={50} />
          <Badge_Custom text={'0%'} percentage={0} />
          <Badge_Custom text={'85%'} percentage={85} />
          <Badge_Custom text={'9%'} percentage={9} />
        </VStack>
      </ScrollView>
    </HStack>
  );
}
export default () => {
  return (
    <HStack px="1" flex={1}>
      <Table />
    </HStack>
  );
};
