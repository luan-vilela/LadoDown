import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import {NativeBaseProvider } from 'native-base';

export default function Recomendacao() { 
  
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Recomendações e alergias'} />     
    </NativeBaseProvider>
  );
}
