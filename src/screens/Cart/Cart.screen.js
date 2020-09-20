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
import styles from './Cart.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import config from '../../../config';
import Apimanager from '../../ApiFunctions/ApiFunctions';
import { setProducts, setCart, setOrderQuantity, resetOrderQuantity } from '../../Redux/Actions/App';
export default function Dashboard({navigation}) {
  const user = useSelector(state => state.Auth.user);
  const cart = useSelector(state => state.App.cart);
  var totalQuantity = null;
  var totalPrice = null;
  cart.map(item=>{
    totalPrice = totalPrice+(item.orderQuantity*item.product.price)
    totalQuantity=item.orderQuantity+totalQuantity
  })
  const favorites = useSelector(state => state.App.favorites);
  const [data, setData] = useState([
    {
      key: 1,
      quantity: 1,
      title: 'الفراولة',
      image:
        'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 2,
      quantity: 1,
      title: 'الفراولة',
      image:
        'https://images.unsplash.com/photo-1562347810-18a0d370ba36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 3,
      quantity: 1,
      title: 'الفراولة',
      image:
        'https://images.unsplash.com/photo-1577041249022-26cc744ddda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 4,
      quantity: 1,
      title: 'الفراولة',
      image:
        'https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ]);
  const addAndDeleteToFav=async(item,fav)=>{
    console.log(favorites)
    if(!fav){
             dispatch(setProducts([...favorites,{product:item.product}]))
    }
    else{
      console.log(item.product?._id)
      dispatch(setProducts(favorites.filter(ite=>ite.product?._id!=item.product._id)))
    }
  }
 const deleteCart=async(item)=>{
  dispatch(setCart(cart.filter(ite=>ite.product?._id!=item.product._id)))
  }
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    var fav = false;
    var favId= null;
    favorites.map(ite=>{
      favId = ite._id
      if(ite.product._id==item.product._id)
        fav=true
     })
    return (
      <View
        style={styles.flatListCont}>
        <View
          style={styles.flatlistMain}>
          <View
            style={styles.heartCont}>
            <TouchableOpacity
             onPress={()=>addAndDeleteToFav(!fav?item:item,fav)}>
             {!fav?<Image
              source={require('../../assets/heart.png')}
              style={styles.heart}
            />:
            <Image
              source={require('../../assets/fillheart.png')}
              style={styles.heart}
            />}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={item.orderQuantity < 2 ? true : false}
              onPress={() =>
               dispatch(resetOrderQuantity(item.product?._id))
              }
              style={{
                backgroundColor: color.orange,
                width: width(5.5),
                height: width(5.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: width(5),
              }}>
              <Image
                source={require('../../assets/minus.png')}
                style={{
                  height: width(0.02),
                  height: width(0.4),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
            <Text style={{fontSize: width(4), color: color.darkBlue,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'}}>
              {item.orderQuantity}
            </Text>
            <TouchableOpacity
               onPress={() =>
                dispatch(setOrderQuantity(item.product?._id))
               }
              style={{
                backgroundColor: color.green,
                width: width(5.5),
                height: width(5.5),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: width(5),
              }}>
              <Image
                source={require('../../assets/plus.png')}
                style={{
                  height: width(2.5),
                  height: width(2.5),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={{marginRight: width(2)}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
                    fontSize: width(3),
                    color: color.orange,
                    marginRight: 4,
                  }}>
                  ({item.product.quantity}kg)
                </Text>
                <Text style={{fontSize: width(3.7), color: color.darkBlue,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>
                  {item.product?.name}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: width(4.2),
                  fontWeight: 'bold',
                  color: color.darkBlue,
                  textAlign: 'center',
                  fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
                }}>
                {item.product?.price}
                <Text style={{fontSize: width(2.5), color: color.darkBlue,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>
                  {' '}
                  JD
                </Text>
              </Text>
            </View>

            <View>
              <Image
                style={{
                  width: width(15),
                  height: width(15),
                  borderRadius: width(15),
                }}
                source={{uri: `${config.url}public/images/${item.product?.image}`}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => deleteCart(item)}>
          <Image
            style={{
              width: width(4),
              height: height(3.4),
              resizeMode: 'contain',
            }}
            source={require('../../assets/close.png')}
          />
        </TouchableOpacity>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: height(10)}}>
         {cart.length>0?<FlatList
              data={cart}
              renderItem={renderItem}
              contentContainerStyle={{marginTop: height(6)}}
              ItemSeparatorComponent={() => (
                <View style={{height: height(2.5)}} />
              )}
            />:
            <Text style={{fontSize: width(8),marginTop:100, color: color.darkBlue,textAlign:'center',fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>
            لا توجد عناصر في سلة التسوق
          </Text> }
          {totalPrice&&  <View>
            <View style={styles.line} />
            <Text
              onPress={() => navigation.navigate('Cart')}
              style={{
                color: color.white,
                fontSize: width(6),
                width: width(32),
                backgroundColor: color.orange,
                overflow: 'hidden',
                borderRadius: width(1),
                alignSelf: 'flex-end',
                marginRight: width(15),
                textAlign: 'center',
                paddingVertical: height(1.5),
                fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
              }}>
              المجموع ({totalQuantity})
            </Text>
            <View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: height(1),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
                  fontSize: width(5),
                  fontWeight: 'bold',
                  color: color.darkBlue,
                  textAlign: 'center',
                }}>
                {totalPrice}
                <Text style={{fontSize: width(3.5), color: color.darkBlue,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>
                  {' '}
                  JD
                </Text>
              </Text>
              <Text style={{fontSize: width(6),color: color.darkBlue,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',paddingRight:width(6)}}>
              مجموع
              </Text>
            </View>
            <View style={styles.line} />
            <Button
            onPress={()=>navigation.navigate('FinalPayment')}
            title="تقدم"
              labelStyle={{color: color.darkBlue}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: color.darkBlue,
                borderWidth: 1,
              }}
            />
            </View>}
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
