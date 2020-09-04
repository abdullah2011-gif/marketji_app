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
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import config from '../../../config';
import Apimanager from '../../ApiFunctions/ApiFunctions';
import { setProducts, setCart } from '../../Redux/Actions/App';
export default function Dashboard({navigation}) {
  const user = useSelector(state => state.Auth.user);
  const cart = useSelector(state => state.App.cart);
  const favorites = useSelector(state => state.App.favorites);
  const [data, setData] = useState([
    {
      key: 1,
      quantity: 1,
      title: 'Strawbery',
      image:
        'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 2,
      quantity: 1,
      title: 'Strawbery',
      image:
        'https://images.unsplash.com/photo-1562347810-18a0d370ba36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 3,
      quantity: 1,
      title: 'Strawbery',
      image:
        'https://images.unsplash.com/photo-1577041249022-26cc744ddda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: 4,
      quantity: 1,
      title: 'Strawbery',
      image:
        'https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ]);
  const addAndDeleteToFav=async(itemId,fav)=>{
    dispatch(setLoading(true))
    await  new Apimanager().deleteFavorite(itemId,user.customerId).then(async(res)=>{
     await   new Apimanager().getFavorites(user.customerId).then(res=>{
          dispatch(setProducts(res))
        })
      })
      dispatch(setLoading(false))
  }
  const addToCart=async(itemId)=>{
    dispatch(setLoading(true))
  await  new Apimanager().addingCart(itemId,user.customerId).then(async(res)=>{
      // console.log(res)
    await  new Apimanager().getcart(user.customerId).then(res=>{
        dispatch(setCart(res))
      })
})
dispatch(setLoading(false))
  }
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    var cartValid = false
   var fav = false;
   var favId= null;
   favorites.map(ite=>{
     favId = ite._id
     if(ite.product._id==item._id)
       fav=true
    })
   cart.map(ite=>{
     if(ite.product._id==item.product._id)
     cartValid=true
    })
    return (
      <View
        style={styles.flatListCont}>
        <View
          style={styles.flatlistMain}>
          <View
            style={styles.heartCont}>
            {!cartValid&&<TouchableOpacity
         onPress={()=>addToCart(item.product.productId)}
            style={{
              backgroundColor: color.orange,
              // width: width(5),
              // height: width(5),
              marginLeft:width(1),
              paddingHorizontal:width(1.5),
              paddingVertical:height(0.5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width(5),
            }}>
           <Text style={{fontSize:width(2.5),color:color.white}} >Add to cart</Text>
          </TouchableOpacity>}
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={{marginRight: width(2)}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontSize: width(3),
                    color: color.orange,
                    marginRight: 4,
                  }}>
                  ({item.product.quantity}kg)
                </Text>
                <Text style={{fontSize: width(3.7), color: color.darkBlue}}>
                  {item.title}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: width(4.2),
                  fontWeight: 'bold',
                  color: color.darkBlue,
                  textAlign: 'center',
                }}>
                {item.product.price}
                <Text style={{fontSize: width(2.5), color: color.darkBlue}}>
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
                source={{uri: `${config.url}public/images/${item.product.image}`}}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
            onPress={()=>addAndDeleteToFav(favId,fav)}>
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
            <FlatList
              data={favorites}
              renderItem={renderItem}
              contentContainerStyle={{marginTop: height(6)}}
              ItemSeparatorComponent={() => (
                <View style={{height: height(2.5)}} />
              )}
            />
           
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
