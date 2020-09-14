import React from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import {width} from 'react-native-dimension';
const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
      navigation.replace('Dashboard')
  },3000)
  return <ImageBackground source={require('../assets/splash.jpg')} style={styles.container} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SplashScreen;
