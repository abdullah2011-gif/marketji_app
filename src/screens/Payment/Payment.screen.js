import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,TextInput
} from 'react-native';
import styles from './Payment.styles';
import Button from '../../components/Button/Button.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard() {
  // const user = useSelector(state => state.Auth.user);
  // const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
       <View style={{width:width(90),paddingHorizontal:'5%',marginTop:height(17),alignItems:'center',borderRadius:width(8),backgroundColor:color.white,alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/visa.png')} />
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/mastercard.png')} />
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/discover.png')} />
              <Image style={{width:width(20),marginTop:3,height:height(8),resizeMode:'contain'}} source={require('../../assets/paypal.png')} />
           </View>
           <Text style={{fontSize:width(3.3),fontWeight:'bold'}}>Adl Istalam</Text>
       </View>
       <View style={{height:height(38),width:width(90),alignSelf:'center',borderRadius:width(3),padding:width(2),marginTop:height(2),backgroundColor:'rgba(252,235,225,0.9)'}}>
         <View style={{borderBottomWidth:1,borderBottomColor:'#decec5'}}>
           <TextInput placeholder='aslkd' style={{color:color.darkBlue,fontWeight:'bold'}} />
         </View>
       </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
