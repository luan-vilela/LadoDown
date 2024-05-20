import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import {NativeBaseProvider } from 'native-base';

export default function Historico() { 
  
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Histórico Paciente'} />     
    </NativeBaseProvider>
  );
}
