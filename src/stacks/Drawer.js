import React from 'react';
import { 
    createDrawerNavigator,
    DrawerItemList,
    DrawerContentScrollView,
 } from '@react-navigation/drawer';

import ROUTES from '../routes';

const Drawer = createDrawerNavigator();
export default () => (
    <Drawer.Navigator
        useLegacyImplementation
        initialRouteName={ROUTES.HOME.NAME}
        screenOptions={{
            headerShown: false
        }}
        >
        
        <Drawer.Screen name={ROUTES.HOME.NAME} component={ROUTES.HOME.ROUTE} options={{ drawerLabel: ROUTES.HOME.TITLE }} />
        <Drawer.Screen name={ROUTES.SIGNIN.NAME} component={ROUTES.SIGNIN.ROUTE} options={{ drawerLabel: ROUTES.SIGNIN.TITLE }} />
        <Drawer.Screen name={ROUTES.FORUM.NAME} component={ROUTES.FORUM.ROUTE} options={{ drawerLabel: ROUTES.FORUM.TITLE }} />


        {/* ########### ABAS DESATIVAS NO MENU ###########*/}
        <Drawer.Screen name={ROUTES.SIGNUP.NAME} component={ROUTES.SIGNUP.ROUTE} options={{drawerItemStyle: { display: 'none' }}}/>
        <Drawer.Screen name={ROUTES.DASHBOARD.NAME} component={ROUTES.DASHBOARD.ROUTE} options={{drawerItemStyle: { display: 'none' }}}/>
        <Drawer.Screen name={ROUTES.TOPICO.NAME} component={ROUTES.TOPICO.ROUTE} options={{drawerItemStyle: { display: 'none' }}}/>

    </Drawer.Navigator>
    
);