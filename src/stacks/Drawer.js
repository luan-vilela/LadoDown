import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '../routes';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    useLegacyImplementation
    initialRouteName={ROUTES.SPLASH.NAME}
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={ROUTES.CONTEUDO.NAME} component={ROUTES.CONTEUDO.ROUTE} />
    <Stack.Screen name={ROUTES.SIGNIN.NAME} component={ROUTES.SIGNIN.ROUTE} />
    <Stack.Screen name={ROUTES.FORUM.NAME} component={ROUTES.FORUM.ROUTE} />

    {/* ########### ABAS DESATIVAS NO MENU ###########*/}
    <Stack.Screen name={ROUTES.SIGNUP.NAME} component={ROUTES.SIGNUP.ROUTE} />
    <Stack.Screen name={ROUTES.DASHBOARD.NAME} component={ROUTES.DASHBOARD.ROUTE} />
    <Stack.Screen name={ROUTES.TOPICO.NAME} component={ROUTES.TOPICO.ROUTE} />
    <Stack.Screen name={ROUTES.SPLASH.NAME} component={ROUTES.SPLASH.ROUTE} />
    <Stack.Screen name={ROUTES.PROFILE.NAME} component={ROUTES.PROFILE.ROUTE} />
    <Stack.Screen name={ROUTES.CARTEIRINHA.NAME} component={ROUTES.CARTEIRINHA.ROUTE} />
    <Stack.Screen name={ROUTES.CRESCIMENTO.NAME} component={ROUTES.CRESCIMENTO.ROUTE} />
    <Stack.Screen name={ROUTES.RESPONDER.NAME} component={ROUTES.RESPONDER.ROUTE} />
    <Stack.Screen name={ROUTES.FALECONOSCO.NAME} component={ROUTES.FALECONOSCO.ROUTE} />
    <Stack.Screen name={ROUTES.TERMOUSO.NAME} component={ROUTES.TERMOUSO.ROUTE} />
    <Stack.Screen name={ROUTES.TERMOPRIVACIDADE.NAME} component={ROUTES.TERMOPRIVACIDADE.ROUTE} />
    <Stack.Screen name={ROUTES.SOBRE.NAME} component={ROUTES.SOBRE.ROUTE} />
    <Stack.Screen name={ROUTES.AGENDA.NAME} component={ROUTES.AGENDA.ROUTE} />
    <Stack.Screen name={ROUTES.ALERTA.NAME} component={ROUTES.ALERTA.ROUTE} />
    <Stack.Screen name={ROUTES.HISTORICO.NAME} component={ROUTES.HISTORICO.ROUTE} />
    <Stack.Screen name={ROUTES.RECOMENDACAO.NAME} component={ROUTES.RECOMENDACAO.ROUTE} />
  </Stack.Navigator>
);
