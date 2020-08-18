import React, {Component, useState} from 'react';
import {
  View,
  Text,
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
