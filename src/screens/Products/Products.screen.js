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
import styles from './Products.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard({navigation}) {
  const [data,setData] = useState([{key:1,quantity:1}, {key:2,quantity:1}, {key:6,quantity:1}, {key:4,quantity:1}])
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
          <TouchableOpacity onPress={()=>setData(data.map(ite=>ite==item?({...ite,selected:!ite.selected}):ite))}>
            {!item.selected?<Image
              source={require('../../assets/heart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />:
            <Image
              source={require('../../assets/fillheart.png')}
              style={{width: width(5), height: width(5), resizeMode: 'contain'}}
            />}
          </TouchableOpacity>
          <TouchableOpacity
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
          
              style={{width: width(15), height: width(13),borderRadius:width(15)}}
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
          style={{flex: 1,justifyContent:'space-between'}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            contentContainerStyle={{marginTop: height(18)}}
            ItemSeparatorComponent={() => (
              <View style={{height: height(2.5)}} />
            )}
          />
          <View style={{width:width(100),height:height(6),flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white}}>
                   <Text onPress={()=>navigation.navigate('Cart')} style={{color:color.white,fontSize:width(4.4),backgroundColor:color.orange,overflow:'hidden',borderRadius:width(3),paddingHorizontal:width(3),paddingVertical:height(0.6)}}>
                 استكمال الشر
                 </Text>
                 <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:width(4),fontWeight:'bold',color:color.orange,marginRight:width(2)}}>
                     100{' '}
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
