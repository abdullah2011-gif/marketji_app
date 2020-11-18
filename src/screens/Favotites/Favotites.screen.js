import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import styles from './Favotites.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {width, height} from 'react-native-dimension';
import Apimanager from '../../ApiFunctions/ApiFunctions';
export default function Dashboard({navigation}) {
  
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/giga.png')}
          style={{flex: 1}}>
         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:10,marginRight:20,marginLeft:20}}>
<TouchableOpacity   >
  <Image resizeMode="contain" style={{height:height(5),width:width(5),tintColor:'#000000'}} source={require('../../assets/back.png')}/>
</TouchableOpacity>
<Text style={{fontSize:25,fontWeight:'bold'}}>Friends</Text>
<TouchableOpacity>
  <Image source={require('../../assets/close.png')}  resizeMode="contain" style={{height:height(5),width:width(5) ,tintColor:'#000000'}}  ></Image>
</TouchableOpacity>
         </View>
           <Text style={{fontSize:25,fontWeight:'bold'}}>Search Bar Here</Text>
           
        
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
