import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, ScrollView, Button } from 'native-base';
import HeaderAdmin from '../../../components/HeaderAdmin';
import ReelsSlider from '../../../components/ReelsSlider';
import CircleMenu from '../../../components/CircleMenu';
import { logout } from '../../../services/auth';
import { LogBox } from 'react-native';
import { loadFormData } from '../../../services/crianca.service';

LogBox.ignoreLogs(['EventEmitter.removeListener']);
export default () => {
  const [crianca, setCrianca] = useState(null);

  const loadingData = async () => {
    if (!crianca) {
      const response = await loadFormData();

      setCrianca(response);
    }
  };

  useEffect(() => {
    loadingData();
  }, []);

  return (
    <NativeBaseProvider>
      <HeaderAdmin title={crianca?.name || ''} />

      <ScrollView>
        <ReelsSlider />
        <CircleMenu />
      </ScrollView>
    </NativeBaseProvider>
  );
};
