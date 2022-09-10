import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, StatusBar} from 'native-base';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home'
import Drawer from './Drawer';

const Stack = createStackNavigator();

const BarTop = () => {
    return <StatusBar
        backgroundColor="#10b981"
    />;
  };


export default () => (
    <NativeBaseProvider>
        <Stack.Navigator
            initialRouteName="Drawer"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />


        </Stack.Navigator>
        < BarTop />
    </NativeBaseProvider>
);