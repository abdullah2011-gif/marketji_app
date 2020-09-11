import React, {Component, useState, useEffect, createRef, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import styles from './Dashboard.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import  { createFilter } from 'react-native-search-filter';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import {setCAtegoriesAndProduct} from '../../Redux/Actions/App'

import config from '../../../config';
import Apimanager from '../../ApiFunctions/ApiFunctions';
const KEYS_TO_FILTERS = ['category.name','products.name'];
export default function Dashboard({navigation}) {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);
  const categoriesAndProduct = useSelector(state => state.App.categoriesAndProduct);
  const user = useSelector(state => state.Auth.user);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [search, setSearch] = useState(false);
  const searchTextInput =useRef(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const cart = useSelector(state => state.App.cart);
  var totalPrice = null;
  cart.map(item=>{
    totalPrice = totalPrice+(item.orderQuantity*item.product?.price)
  })
  const dispatch = useDispatch()
    useEffect(()=>{
      setLoading(true)
        new Apimanager().getCatAndProducts().then(res=>{
          setLoading(false)
            dispatch(setCAtegoriesAndProduct(res))
            setData(res)
            setData1(res)

        })
    },[])

    const dataProfiles = data1.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1, backgroundColor: color.orange}}>
        <ScrollView style={{height: height(89)}}>
          {/* {console.log(user)} */}
          <View
            style={styles.header}>
            {!search && (
              <>
                <TouchableOpacity onPress={() => {
                  setSearch(true)
                  setTimeout(() => {
                    searchTextInput.current?.focus()
                  }, 600);
                  }}>
                  <Image
                    resizeMode="contain"
                    style={styles.headerImage}
                    source={require('../../assets/search.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image
                    resizeMode="contain"
                    style={styles.headerImage}
                    source={require('../../assets/menu.png')}
                  />
                </TouchableOpacity>
              </>
            )}
            {search && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() =>{ setSearchTerm('');setSearch(false)}}>
                  <Image
                    source={require('../../assets/back.png')}
                    style={styles.backImage}
                  />
                </TouchableOpacity>
             <TextInput ref={searchTextInput} value={searchTerm} onChangeText={setSearchTerm} placeholder="بحث" />
              </View>
            )}
          </View>
          <SliderBox
            images={images}
            autoplay={true}
            sliderBoxHeight={height(25)}
            circleLoop={true}
          />
          <View
            style={styles.dotsContainer}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.dot} />
              <View
                style={styles.whiteLines}
              />
              <View
                style={styles.whiteLineLeft}
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
        {loading? <ActivityIndicator size={width(10)} style={{marginTop:height(15)}} color={'#ffffff'} />:<FlatList
            numColumns={2}
            data={search?dataProfiles:data}
            columnWrapperStyle={styles.flatlistContainer}
            contentContainerStyle={{marginTop: height(1)}}
            renderItem={({item, index}) => {
              // console.log(item)
              return (
                <View style={styles.flatlistMain}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Products',{products:item.products})}
                    style={{
                      width: '100%',
                      height: '80%',
                    }}>
                      {/* {console.log(item.category.image)} */}
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
                        uri: `${config.url}public/images/${item.category&&item.category.image}`,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={styles.title}>
                    {item.category&&item.category.name}
                  </Text>
                </View>
              );
            }}
          />}
        </ScrollView>
        <View
          style={styles.horizintalDotContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <View style={styles.dot} />
            <View
              style={styles.whiteLinesMain}
            />
            <View
              style={styles.whiteLineLeftMain}
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
        <View
          style={styles.bottom}>
          <Text
            onPress={() => navigation.navigate('Cart')}
            style={styles.cart}>
         استكمال الشراء
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.payment}>
              {totalPrice} <Text style={{fontSize: width(3)}}>JD</Text>
            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Cart')}>
            <Image
              style={styles.cartImage}
              source={require('../../assets/shopping-cart.png')}
            />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
