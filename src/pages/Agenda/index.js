import React from 'react';
import HeaderAdmin from '../../components/HeaderAdmin';
import {NativeBaseProvider } from 'native-base';

export default function AgendaScreen() { 
  
  return (
    <NativeBaseProvider>
      <HeaderAdmin title={'Agenda'} />     
    </NativeBaseProvider>
  );
}
