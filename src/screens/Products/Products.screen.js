import React, {Component, useState, useEffect} from 'react';
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
import styles from './Products.styles';
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
export default function Dashboard({navigation,route}) {
  const [data, setData] = useState([]);
  const user = useSelector(state => state.Auth.user);
  const favorites = useSelector(state => state.App.favorites);
  const cart = useSelector(state => state.App.cart);
  var totalPrice = null;
  cart.map(item=>{
    totalPrice = totalPrice+(item.orderQuantity*item.product.price)
  })
  useEffect(()=>{
    if(route.params&&route.params.products)
    setData(route.params.products)
    else{
      navigation.goBack()
    }
  })
  const addToCart=async(itemId)=>{
    dispatch(setLoading(true))
   await new Apimanager().addingCart(itemId,user.customerId).then(async(res)=>{
      // console.log(res)
    await  new Apimanager().getcart(user.customerId).then(res=>{
        dispatch(setCart(res))
      })
      dispatch(setLoading(false))
})
  }
  const addAndDeleteToFav=async(itemId,fav)=>{
    if(!fav){
   await new Apimanager().addingFavorites(itemId,user.customerId).then(async(res)=>{
          //  console.log(res)
         await  new Apimanager().getFavorites(user.customerId).then(res=>{
             dispatch(setProducts(res))
           })
    })}
    else{
     await new Apimanager().deleteFavorite(itemId,user.customerId).then(async(res)=>{
      await  new Apimanager().getFavorites(user.customerId).then(res=>{
          dispatch(setProducts(res))
        })
      })
    }
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
     if(ite.product._id==item._id)
     cartValid=true
    })
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
          <TouchableOpacity   onPress={()=>addAndDeleteToFav(!fav?item.productId:favId,fav)}>
            {!fav?<Image
              source={require('../../assets/heart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />:
            <Image
              source={require('../../assets/fillheart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />}
          </TouchableOpacity>
   {!cartValid&&<TouchableOpacity
         onPress={()=>addToCart(item.productId)}
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
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <View style={{marginRight:width(2)}}>
            <View style={{flexDirection: 'row',alignItems:'flex-end'}}>
              <Text style={{fontSize:width(3),color:color.orange,marginRight:4}}>({item.quantity}kg)</Text>
              <Text style={{fontSize:width(3.7),color:color.darkBlue}}>{item.name}</Text>
            </View>
            <Text style={{fontSize:width(4.2),fontWeight:'bold',color:color.darkBlue,textAlign:'center'}}>
              {item.price}<Text style={{fontSize:width(2.5),color:color.darkBlue}}>  JD</Text>
            </Text>
          </View>
          
        <View>
          <Image
          
              style={{width: width(15), height: width(13),borderRadius:width(15)}}
              source={{
                uri:`${config.url}public/images/${item.image}`}}
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
          style={{flex: 1,justifyContent:'space-between'}}>
       {data.length>0?<FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: height(18)}}
            ItemSeparatorComponent={() => (
              <View style={{height: height(2.5)}} />
            )}
          />:<Text style={{fontSize:width(3),textAlign:'center'}}>
          No product in this category
        </Text>}
          <View style={{width:width(100),height:height(6),flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white}}>
                   <Text onPress={()=>navigation.navigate('Cart')} style={{color:color.white,fontSize:width(4.4),backgroundColor:color.orange,overflow:'hidden',borderRadius:width(3),paddingHorizontal:width(3),paddingVertical:height(0.6)}}>
                 استكمال الشر
                 </Text>
                 <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:width(4),fontWeight:'bold',color:color.orange,marginRight:width(2)}}>
                     {totalPrice}{' '}
                    <Text style={{fontSize:width(3)}}>
                      JD
                    </Text>
                   </Text>
                   <Image style={{width:width(5),height:height(3.5)}} resizeMode='stretch' source={require('../../assets/shopping-cart.png')} />
                 </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
