import React from 'react';
import { NativeBaseProvider, ScrollView } from 'native-base';

import HeaderAdmin from '../../../components/HeaderAdmin';
import TabelaVacina from '../../../components/TabelaVacina';

export default () => {
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Carteira de vacinação'} />

      <ScrollView>
        <TabelaVacina />
      </ScrollView>
    </NativeBaseProvider>
  );
};
