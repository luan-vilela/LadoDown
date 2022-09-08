import React, {useState} from "react";
import { Image, Animated  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'

export default ({scrollY}) => {

  return (
      <Animated.View 
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [10, 140, 160],
              outputRange: [90, 20, 0],
              extrapolate: 'clamp'
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: 'clamp'
            })
          }
        ]}
      >
        <Ionicons name='menu' size={32} color='white' />
        {/* <Image
          style={{width:36, height: 36}}
          resizeMode= "contain"
          source={{
            uri: 'https://raw.githubusercontent.com/sujeitoprogramador/youtube-header-animado/master/src/assets/cam.png'
          }}
        /> */}
        <Animated.Image
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [160, 80],
              extrapolate: 'clamp'
            }),
            height: 60}}
          resizeMode= "contain"
          source={ require('../../assets/logo220x112-branco.png')}
        />
        <Ionicons name='person' size={32} color='white' />
      </Animated.View>





  );
}