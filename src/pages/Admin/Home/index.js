import React, { useEffect } from 'react';
import {
  Skeleton,
  VStack,
  HStack,
  Center,
  NativeBaseProvider,
  ScrollView,
  Button,
} from 'native-base';
import { BackHandler } from 'react-native';

import HeaderAdmin from '../../../components/HeaderAdmin';
import ReelsSlider from '../../../components/ReelsSlider';
import CircleMenu from '../../../components/CircleMenu';
import { getToken, logout, getAllKeys, isAuthenticated } from '../../../services/auth';

export default () => {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Fulano de tal'} />

      <ScrollView>
        <ReelsSlider />
        <CircleMenu />
      </ScrollView>

      <Button onPress={() => logout()}>Sair debug</Button>
    </NativeBaseProvider>
  );
};
