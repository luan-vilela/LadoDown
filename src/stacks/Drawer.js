import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "../routes";

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator
    useLegacyImplementation
    initialRouteName={ROUTES.SPLASH.NAME}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={ROUTES.HOME.NAME} component={ROUTES.HOME.ROUTE} />
    <Stack.Screen name={ROUTES.SIGNIN.NAME} component={ROUTES.SIGNIN.ROUTE} />
    <Stack.Screen name={ROUTES.FORUM.NAME} component={ROUTES.FORUM.ROUTE} />

    {/* ########### ABAS DESATIVAS NO MENU ###########*/}
    <Stack.Screen name={ROUTES.SIGNUP.NAME} component={ROUTES.SIGNUP.ROUTE} />
    <Stack.Screen
      name={ROUTES.DASHBOARD.NAME}
      component={ROUTES.DASHBOARD.ROUTE}
    />
    <Stack.Screen name={ROUTES.TOPICO.NAME} component={ROUTES.TOPICO.ROUTE} />
    <Stack.Screen name={ROUTES.SPLASH.NAME} component={ROUTES.SPLASH.ROUTE} />
    <Stack.Screen name={ROUTES.PROFILE.NAME} component={ROUTES.PROFILE.ROUTE} />
    <Stack.Screen
      name={ROUTES.CARTEIRINHA.NAME}
      component={ROUTES.CARTEIRINHA.ROUTE}
    />
    <Stack.Screen
      name={ROUTES.LISTAGEMTOPICO.NAME}
      component={ROUTES.LISTAGEMTOPICO.ROUTE}
    />
    <Stack.Screen
      name={ROUTES.SALVARTOPICO.NAME}
      component={ROUTES.SALVARTOPICO.ROUTE}
    />
     <Stack.Screen
      name={ROUTES.RESPONDER.NAME}
      component={ROUTES.RESPONDER.ROUTE}
    />
  </Stack.Navigator>
);
