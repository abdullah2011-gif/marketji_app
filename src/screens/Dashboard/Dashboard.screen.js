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
  ScrollView,
} from 'react-native';
import styles from './Dashboard.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import config from '../../../config';
export default function Dashboard({navigation}) {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);
  const categoriesAndProduct = useSelector(state => state.App.categoriesAndProduct);
  const user = useSelector(state => state.Auth.user);
  const [data, setData] = useState(categoriesAndProduct);
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1, backgroundColor: color.orange}}>
        <ScrollView style={{height: height(89)}}>
          <View
            style={styles.header}>
            {!search && (
              <>
                <TouchableOpacity onPress={() => setSearch(true)}>
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
                <TouchableOpacity onPress={() => setSearch(false)}>
                  <Image
                    source={require('../../assets/back.png')}
                    style={styles.backImage}
                  />
                </TouchableOpacity>
                <TextInput placeholder="Search" />
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
          <FlatList
            numColumns={2}
            data={data}
            columnWrapperStyle={styles.flatlistContainer}
            contentContainerStyle={{marginTop: height(1)}}
            renderItem={({item, index}) => {
              return (
                <View style={styles.flatlistMain}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Products',{products:item.products})}
                    style={{
                      width: '100%',
                      height: '75%',
                    }}>
                    <Image
                      style={styles.image}
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
          />
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
            استكمال الشر
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={styles.payment}>
              100 <Text style={{fontSize: width(3)}}>JD</Text>
            </Text>
            <Image
              style={styles.cartImage}
              source={require('../../assets/shopping-cart.png')}
            />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
