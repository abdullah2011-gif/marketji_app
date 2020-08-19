import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,ScrollView
} from 'react-native';
import styles from './Dashboard.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
export default function Dashboard({navigation}) {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);
  const [data, setData] = useState([
    {key: 1, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 2, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1519638051208-f73939d9a63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 3, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1582029310909-21b059f91e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 4, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1582029310975-4cbc6e1334b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 4, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1506395308321-904a71783d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
    {key: 4, quantity: 1,title:'Strawbery',image:'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'},
  ]);
  const user = useSelector(state => state.Auth.user);
  const [search,setSearch] = useState(false)
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1,backgroundColor:color.orange}}>
        <ScrollView style={{height: height(89)}}>
       <View style={{width:width(100),height:height(6),flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white}}>
       {!search&&<><TouchableOpacity onPress={()=>setSearch(true)}>
        <Image resizeMode='contain' style={{width:width(5),height:height(4)}} source={require('../../assets/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Image resizeMode='contain' style={{width:width(5),height:height(4)}} source={require('../../assets/menu.png')} />
        </TouchableOpacity></>}
        {search&&<View style={{flexDirection:'row',alignItems:'center'}}><TouchableOpacity onPress={()=>setSearch(false)}><Image source={require('../../assets/back.png')} style={{width:width(3.5),marginRight:width(2.5),height:height(2),resizeMode:'contain'}} /></TouchableOpacity><TextInput placeholder='Search'/></View>}
        
</View>
        <SliderBox
        
          images={images}
          autoplay={true}
          sliderBoxHeight={height(25)}
          circleLoop={true}
        />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: width(5),
              marginTop: height(2),
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View
                style={{
                  width: width(7),
                  height: height(1.5),
                  marginRight: width(1),
                  borderTopColor: color.white,
                  borderTopWidth: 2,
                  borderRightColor: color.white,
                  borderRightWidth: 2,
                }}
              />
              <View
                style={{
                  width: width(7),
                  height: height(1.5),
                  marginLeft: width(1),
                  borderTopColor: color.white,
                  borderTopWidth: 2,
                  borderLeftColor: color.white,
                  borderLeftWidth: 2,
                }}
              />

              <View style={styles.dot} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
          {/* <View style={{height: height(55)}}> */}
            <FlatList
              numColumns={2}
              data={data}
              columnWrapperStyle={{
                marginBottom: height(2),
                justifyContent: 'space-between',
                width: width(100),
              }}
              contentContainerStyle={{marginTop: height(1)}}
              renderItem={({item, index}) => {
                return (
                  <View style={{width: width(47.5), height: height(19.8)}}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate('Products')}
                    style={{
                      width: '100%',
                      height: '75%',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderTopRightRadius: index % 2 == 0 ? width(5) : 0,
                        borderBottomRightRadius: index % 2 == 0 ? width(5) : 0,
                        borderTopLeftRadius: index % 2 != 0 ? width(5) : 0,
                        borderBottomLeftRadius: index % 2 != 0 ? width(5) : 0,
                      }}
                      source={{
                        uri:item.image}}
                    />
                    </TouchableOpacity>
                    <Text
                      style={{
                        paddingTop: height(1.5),
                        textAlign: 'center',
                        color: color.white,
                        fontSize: width(4.2),
                      }}>
                      Title
                    </Text>
                  </View>
                );
              }}
            />
        
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: width(5),
              PaddingVertical: height(2),
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <View style={styles.dot} />
              <View
                style={{
                  width: width(7),
                  height: height(1.5),
                  marginRight: width(1),
                  borderBottomColor: color.white,
                  borderBottomWidth: 2,
                  borderRightColor: color.white,
                  borderRightWidth: 2,
                }}
              />
              <View
                style={{
                  width: width(7),
                  height: height(1.5),
                  marginLeft: width(1),
                  borderBottomColor: color.white,
                  borderBottomWidth: 2,
                  borderLeftColor: color.white,
                  borderLeftWidth: 2,
                }}
              />

              <View style={styles.dot} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        {/* </View> */}
        <View style={{width:width(100),height:height(6),marginTop:height(2),flexDirection:'row',justifyContent:'space-between',paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white}}>
                   <Text onPress={()=>navigation.navigate('Cart')} style={{color:color.white,fontSize:width(4.4),backgroundColor:color.darkBlue,overflow:'hidden',borderRadius:width(1),paddingHorizontal:width(3),paddingVertical:height(0.6)}}>
                 استكمال الشر
                 </Text>
                 <View style={{flexDirection:'row'}}>
                   <Text style={{fontSize:width(4),fontWeight:'bold',color:color.orange,marginRight:width(2)}}>
                     100{' '}
                    <Text style={{fontSize:width(3)}}>
                      JD
                    </Text>
                   </Text>
                   <Image style={{width:width(5),resizeMode:'contain',height:height(4)}} source={require('../../assets/shopping-cart.png')} />
                 </View>
          </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
