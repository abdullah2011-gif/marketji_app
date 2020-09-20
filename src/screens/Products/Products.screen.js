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
import { Modal } from 'react-native';
export default function Dashboard({navigation,route}) {
  const [data, setData] = useState([]);
  const [imageModal, setImageModal] = useState(false);
  const [pImage, setpImage] = useState(null);
  const user = useSelector(state => state.Auth.user);
  const favorites = useSelector(state => state.App.favorites);
  const cart = useSelector(state => state.App.cart);
  var totalPrice = null;
  var totalQuantity = null;
  cart.map(item=>{
    totalQuantity=item.orderQuantity+totalQuantity
    totalPrice = totalPrice+(item?.orderQuantity*item?.product?.price)
  })
  useEffect(()=>{
    if(route.params&&route.params.products)
    setData(route.params.products.map(item=>({...item,orderQuantity:1})))
    else{
      navigation.goBack()
    }
  },[])
  const addToCart=async(item)=>{
        dispatch(setCart([...cart,{orderQuantity:item.orderQuantity,product:item}]))
  }
  const addAndDeleteToFav=async(item,fav)=>{
    // console.log(favorites)
    if(!fav){
             dispatch(setProducts([...favorites,{product:item}]))
    }
    else{
      // console.log(item.product?._id)
      dispatch(setProducts(favorites.filter(ite=>ite.product?._id!=item._id)))
    }
  }
  const dispatch = useDispatch();
  const renderItem = ({item,index}) => {
    // console.log(item)
   var cartValid = false
   var fav = false;
   var favId= null;
   favorites.map(ite=>{
     favId = ite._id
     if(ite.product?._id==item._id)
       fav=true
    })
   cart.map(ite=>{
     if(ite.product?._id==item._id)
     cartValid=true
    })
    return (
      <View
        style={{
          width: width(93),
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
          <TouchableOpacity   onPress={()=>addAndDeleteToFav(!fav?item:item,fav)}>
            {!fav?<Image
              source={require('../../assets/heart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />:
            <Image
              source={require('../../assets/fillheart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />}
          </TouchableOpacity>
         {!cartValid&& <TouchableOpacity
              disabled={item.orderQuantity < 2 ? true : false}
              onPress={() =>
                {
                  var arr = data
                  arr[index].orderQuantity = arr[index].orderQuantity -1
                 setData(data=>[...arr])
                }}
              style={{
                backgroundColor: color.orange,
                width: width(5.5),
                marginLeft:width(2),
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
            </TouchableOpacity>}
          {!cartValid&&  <Text style={{fontSize: width(4), 
              marginLeft:width(2),color: color.darkBlue}}>
              {item.orderQuantity?item.orderQuantity:1}
            </Text>}
           {!cartValid&& <TouchableOpacity
               onPress={() =>{
                 var arr = data
                 arr[index].orderQuantity = parseInt(arr[index].orderQuantity?arr[index].orderQuantity:1) + 1
                //  console.log(arr)
                setData([...arr])
               }}
              style={{
                backgroundColor: color.green,
                width: width(5.5),
                height: width(5.5),
                marginLeft:width(2),
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
            </TouchableOpacity>}
   {!cartValid&&<TouchableOpacity
         onPress={()=>addToCart(item)}
            style={{
              backgroundColor: color.orange,
              // width: width(5),
              // height: width(5),
              marginLeft:width(3),
              paddingHorizontal:width(2),
              paddingVertical:height(0.8),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: width(5),
            }}>
           <Text style={{fontSize:width(3),color:color.white,fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'}} >أضف إلى السلة</Text>
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
          
        <TouchableOpacity onPress={()=>{
          setImageModal(true);
          setpImage(`${config.url}public/images/${item.image}`)
        }}>
          <Image
          
              style={{width: width(15), height: width(13),borderRadius:width(15)}}
              source={{
                uri:`${config.url}public/images/${item.image}`}}
            />
            </TouchableOpacity>
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
          />:<Text style={{fontSize:width(4.5),textAlign:'center',fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'}}>
          لا يوجد منتج في هذه الفئة
        </Text>}
          <View style={{width:width(100),height:height(7),flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white}}>
                   <Text onPress={()=>navigation.navigate('Cart')} style={{color: color.white,
    fontSize: width(6),
    backgroundColor: color.orange,
    overflow: 'hidden',
    borderRadius: width(1),
    paddingHorizontal: width(3),
    paddingVertical: height(0.6),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>
                   استكمال الشراء
                 </Text>
                 <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:width(4),fontWeight:'bold',color:color.orange,marginRight:width(2)}}>
                     {totalPrice}{' '}
                    <Text style={{fontSize:width(3)}}>
                      JD
                    </Text>
                   </Text>
                 <TouchableOpacity  onPress={() => navigation.navigate('Cart')}>
                 <View style={{backgroundColor:color.orange,position:'absolute',zIndex:1,right:-width(2),overflow:'visible',top:-height(0.8),width:width(5),height:width(5),justifyContent:'center',alignItems:'center',borderRadius:width(5)}}>
          <Text style={{color:'white',fontSize:width(3)}}>{totalQuantity?totalQuantity:0}</Text>
              </View>
            <Image
              style={{width:width(6),height:height(4),paddingRight:30}}
              source={require('../../assets/shopping-cart.png')}
            />
            </TouchableOpacity>
                 </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
      <Modal transparent={true} visible={imageModal}>
        <View style={{width:width(100),height:height(100),justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.7)'}}>
          <Image source={{uri:pImage}} style={{width:width(80),height:height(40),borderRadius:30}} />
          <Button containerStyle={{marginTop:height(4)}} title='أغلق' onPress={()=>{
            setImageModal(false);
            setpImage('')
          }} />
        </View>
      </Modal>
    </React.Fragment>
  );
}
