import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home'

const Drawer = createDrawerNavigator();

export default () => (
    <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="Fórum" component={SignIn} />
    </Drawer.Navigator>
);