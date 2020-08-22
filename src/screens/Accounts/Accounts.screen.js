import React, {Component, useState} from 'react';
import Text from '../../components/Text/Text.component';
import {
  View,

  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import styles from './Accounts.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
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
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex:1}} >
      <ImageBackground style={{flex:1}} resizeMode='stretch' source={require('../../assets/loginbackground.png')}>
        <ImageBackground style={{alignSelf:'center',width:width(80),height:height(37),alignItems:'center',justifyContent:'center'}} source={require('../../assets/back_header.png')} >
              <View style={{width:width(28),height:width(28),borderRadius:width(20),alignItems:'center',justifyContent:'center',backgroundColor:color.white,borderWidth:1,borderColor:color.white}}>
                  <Image style={{tintColor:'black',width:width(20),height:height(20),resizeMode:'contain'}} source={require('../../assets/person.png')} />
             <TouchableOpacity style={{width:width(7),position:'absolute',bottom:0,right:0,alignItems:'center',justifyContent:'center',height:width(7),borderRadius:width(7),backgroundColor:color.orange}}>
             <Image style={{tintColor:'white',width:width(4),height:width(4),resizeMode:'contain'}} source={require('../../assets/plus.png')} />
             </TouchableOpacity>
              </View>
        </ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={{textAlign:'center',color:color.orange}}>Al-Esah</Text>
        </View> 
<View style={styles.touchableview}>
  <TouchableOpacity style={styles.touchable} >
  <Text >1</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.touchable}>
<Text >1</Text>
</TouchableOpacity>
</View>
<View style={styles.cart}> 
<Text style={styles.textcart}>Cart</Text>
 <View style={{flexDirection:'column'}}>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                           </View>
<Text style={styles.payment}>Payment</Text>
</View>
<View style={styles.inputtext}>
<TextInput placeholder='Name'/>
<TextInput placeholder='Phone No'/>
<TextInput placeholder='Gender'/>
<TextInput placeholder='Title'/>
</View>

</ImageBackground>
      </SafeAreaView>
     
      <SafeAreaView />
    </React.Fragment>
  );
}
