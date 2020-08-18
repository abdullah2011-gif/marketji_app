import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,ScrollView,
  Image,
} from 'react-native';
import styles from './Cart.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard({navigation}) {
  
  const user = useSelector(state => state.Auth.user);
  const [data,setData] = useState([{key:1,quantity:1}, {key:2,quantity:1}, {key:3,quantity:1}, {key:4,quantity:1}])
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View  style={{
        width: width(83),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: width(75),
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
          disabled={item.quantity<2?true:false}
          onPress={()=>setData(data.map(ite=>ite==item?({...ite,quantity:ite.quantity-1}):ite))}
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
                height: width(0.01),
                height: width(0.3),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: width(4), color: color.darkBlue}}>{item.quantity}</Text>
          <TouchableOpacity
           onPress={()=>setData(data.map(ite=>ite==item?({...ite,quantity:ite.quantity+1}):ite))}
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
                height: width(2.5),
                height: width(2.5),
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
      <TouchableOpacity onPress={()=>setData(data.filter(ite=>ite!=item))}>
      <Image style={{width:width(4),height:height(3.4),resizeMode:'contain'}} source={require('../../assets/close.png')} />
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
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: height(10)}}>
          <FlatList
            data={data}
            renderItem={renderItem}
          contentContainerStyle={{marginTop:height(6)}}
            ItemSeparatorComponent={() => (
              <View style={{height: height(2.5)}} />
            )}
          />
          <View style={styles.line} />
                   <Text onPress={()=>navigation.navigate('Cart')} style={{color:color.white,fontSize:width(4.4),width:width(32),backgroundColor:color.orange,overflow:'hidden',borderRadius:width(1),alignSelf:'flex-end',marginRight:width(15),textAlign:'center',paddingVertical:height(1.5)}}>
                 AlTabah (6)
                 </Text>
                 <View style={{width:width(80),alignSelf:'center',alignItems:'center',marginTop:height(1),flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={{fontSize:width(5),fontWeight:'bold',color:color.darkBlue,textAlign:'center'}}>
              5.99<Text style={{fontSize:width(3.5),color:color.darkBlue}}>  JD</Text>
            </Text>
            <Text style={{fontSize:width(4),color:color.darkBlue}}>Almajmuah</Text>
                 </View>
                 <View style={styles.line} />
                 <Button title='Proceed' labelStyle={{color:color.darkBlue}} containerStyle={{backgroundColor:'transparent',borderColor:color.darkBlue,borderWidth:1}} />
                 </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
