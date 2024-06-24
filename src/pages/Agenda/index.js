import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import { NativeBaseProvider } from 'native-base';
import DownSyndromeCare from './DownSyndromeCare';

export default function AgendaScreen() {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Primeiros Passos'} />

      <DownSyndromeCare />
    </NativeBaseProvider>
  );
}
