import React from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  Button,
} from 'native-base';
import HeaderAdmin from '../../../components/HeaderAdmin';
import ReelsSlider from '../../../components/ReelsSlider';
import CircleMenu from '../../../components/CircleMenu';
import { logout } from '../../../services/auth';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
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
