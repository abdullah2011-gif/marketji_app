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
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="stretch"
          source={require('../../assets/loginbackground.png')}>
          <ImageBackground
            style={styles.imagebackground}
            source={require('../../assets/back_header.png')}>
            <View style={styles.mainContainer}>
              <Image
                style={styles.person}
                source={require('../../assets/person.png')}
              />
              <TouchableOpacity style={styles.whiteBack}>
                <Image
                  style={styles.person}
                  source={require('../../assets/plus.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.titleContainer}>
            <Text style={{textAlign: 'center', color: color.orange}}>
              Al-Esah
            </Text>
          </View>
          <View style={styles.touchableview}>
            <TouchableOpacity style={styles.touchable}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cart}>
            <Text style={styles.textcart}>Cart</Text>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <Text style={styles.payment}>Payment</Text>
          </View>
          <View style={styles.inputtext}>
            <TextInput placeholder="اسم" />
            <TextInput placeholder="هاتف" />
            <TextInput placeholder="جنس" />
            <TextInput placeholder="عنوان" />
          </View>
        </ImageBackground>
      </SafeAreaView>

      <SafeAreaView />
    </React.Fragment>
  );
}
