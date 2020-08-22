import React, {Component, useState} from 'react';
import {
  View,
  
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
import Text from '../../components/Text/Text.component';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard({navigation}) {
  const [data, setData] = useState([
    {key: 1, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 2, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1562347810-18a0d370ba36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 3, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1577041249022-26cc744ddda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 4, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  ]);
  const user = useSelector(state => state.Auth.user);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    return (
      <View
        style={styles.mainView}>
        <View
          style={styles.parentView}>
          <TouchableOpacity onPress={()=>setData(data.map(ite=>ite==item?({...ite,selected:!ite.selected}):ite))}>
            {!item.selected?<Image
              source={require('../../assets/heart.png')}
              style={styles.heart}
            />:
            <Image
              source={require('../../assets/fillheart.png')}
              style={styles.fillheart}
            />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addTocartView}>
           <Text style={styles.addtocart} >Add to cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',alignItems:'flex-end'}}>
          <View style={{marginRight:width(2)}}>
            <View style={{flexDirection: 'row',alignItems:'flex-end'}}>
              <Text style={styles.quantity}>(5kg)</Text>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            <Text style={styles.quantityView}>
              5.99<Text style={styles.unitText}>  JD</Text>
            </Text>
          </View>
          
        <View>
          <Image
          
              style={styles.itemimage}
              source={{
                uri:item.image}}
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
          <View style={styles.bottomView}>
                   <Text onPress={()=>navigation.navigate('Cart')} style={styles.bottomText}>
                 استكمال الشر
                 </Text>
                 <View style={{flexDirection:'row'}}>
                   <Text style={styles.bottomright}>
                     100{' '}
                    <Text style={{fontSize:width(3)}}>
                      JD
                    </Text>
                   </Text>
                   <Image style={styles.shoppingCart} resizeMode='stretch' source={require('../../assets/shopping-cart.png')} />
                 </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
