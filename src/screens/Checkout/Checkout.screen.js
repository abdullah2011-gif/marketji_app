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
import styles from './Checkout.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard() {
  const user = useSelector(state => state.Auth.user);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: width(85),
          alignSelf: 'center',
          alignItems: 'flex-end',
          paddingVertical: height(1),
          paddingHorizontal: width(2),
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: color.white,
          borderRadius: width(4),
        }}>
        <View
          style={{
            width: width(25),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/heart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: color.orange,
              width: width(5),
              height: width(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width(5),
            }}>
            <Image
              source={require('../../assets/minus.png')}
              style={{
                height: width(0.2),
                height: width(0.32),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: width(4), color: color.darkBlue}}>1</Text>
          <TouchableOpacity
            style={{
              backgroundColor: color.green,
              width: width(5),
              height: width(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width(5),
            }}>
            <Image
              source={require('../../assets/plus.png')}
              style={{
                height: width(3),
                height: width(3),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <View style={{marginRight:width(2)}}>
            <View style={{flexDirection: 'row',alignItems:'flex-end'}}>
              <Text style={{fontSize:width(3),color:color.orange}}>(5kg)</Text>
              <Text style={{fontSize:width(3.7),color:color.darkBlue}}>Banana</Text>
            </View>
            <Text style={{fontSize:width(4.2),fontWeight:'bold',color:color.darkBlue,textAlign:'center'}}>
              5.99<Text style={{fontSize:width(2.5),color:color.darkBlue}}>  JD</Text>
            </Text>
          </View>
          
        <View>
          <Image
          
              style={{width: width(15), height: width(15),borderRadius:width(15)}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1560522361-23b37e4ad4a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
              }}
            />
            </View>
        </View>
      </View>
    );
  };
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/upper_.png')}
          style={{flex: 1}}>
          <FlatList
            data={[{}, {}, {}, {}]}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: height(18)}}
            ItemSeparatorComponent={() => (
              <View style={{height: height(2.5)}} />
            )}
          />
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
