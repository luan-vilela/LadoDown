import React, {useState} from 'react';
import { View, Button, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { NativeBaseProvider, Box, Text, Center, useColorMode, useColorModeValue} from 'native-base';
import Constants from 'expo-constants';
import HeaderAdmin from '../../../components/HeaderAdmin';
import Crianca from './partials/Crianca'

const FirstRoute = () => <Center flex={1} my="4">
    Tab 1 aqui
  </Center>;

const ThirdRoute = () => <Center flex={1} my="4">
    Tab 3 aqui
  </Center>;

const FourthRoute = () => <Center flex={1} my="4">
    Tab 4 aqui
  </Center>;

const initialLayout = {
  width: Dimensions.get('window').width
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: Crianca,
  third: ThirdRoute,
  fourth: FourthRoute
});

function Profile() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([{
    key: 'first',
    title: 'Perfil'
  }, {
    key: 'second',
    title: 'Criança'
  }, {
    key: 'third',
    title: 'Configurações'
  }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
        const borderColor = index === i ? 'cyan.500' : useColorModeValue('coolGray.200', 'gray.400');
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
              <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
                <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>;
      })}
      </Box>;
  };

  return <TabView navigationState={{
    index,
    routes
  }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
    marginTop: StatusBar.currentHeight
  }} />;
}

export default () => {
    return (
        <View flex={1} px="1">
            <HeaderAdmin />
            <Profile />
            <Center>Salvar</Center>
        </View>
    );
};
    