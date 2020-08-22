import React, { Component, useState } from 'react';
import {
  View,
 
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList, ScrollView,
  Image,
} from 'react-native';
import styles from './Cart.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import { width, height } from 'react-native-dimension';
import { SliderBox } from 'react-native-image-slider-box';
import Text from '../../components/Text/Text.component';
export default function Dashboard({ navigation }) {

  const user = useSelector(state => state.Auth.user);
  const [data, setData] = useState([
    { key: 1, quantity: 1, title: 'Strawbery', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { key: 2, quantity: 1, title: 'Strawbery', image: 'https://images.unsplash.com/photo-1562347810-18a0d370ba36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { key: 3, quantity: 1, title: 'Strawbery', image: 'https://images.unsplash.com/photo-1577041249022-26cc744ddda3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { key: 4, quantity: 1, title: 'Strawbery', image: 'https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  ]);
  const dispatch = useDispatch();
  const renderItem = ({ item }) => {
    return (
      <View style={styles.mainView}>
        <View
          style={styles.view1}>
          <View
            style={styles.view2}>
            <TouchableOpacity onPress={() => setData(data.map(ite => ite == item ? ({ ...ite, selected: !ite.selected }) : ite))}>
              {!item.selected ? <Image
                source={require('../../assets/heart.png')}
                style={styles.unFillHeart}
              /> :
                <Image
                  source={require('../../assets/fillheart.png')}
                  style={styles.FilledHeart}
                />}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={item.quantity < 2 ? true : false}
              onPress={() => setData(data.map(ite => ite == item ? ({ ...ite, quantity: ite.quantity - 1 }) : ite))}
              style={styles.minusView}>
              <Image
                source={require('../../assets/minus.png')}
                style={styles.minus}
              />
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => setData(data.map(ite => ite == item ? ({ ...ite, quantity: ite.quantity + 1 }) : ite))}
              style={styles.plusview}>
              <Image
                source={require('../../assets/plus.png')}
                style={styles.plus}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemNameView}>
            <View style={styles.itemNameview1}>
              <View style={styles.ItemFlex}>
                <Text style={styles.ItemFont}>(5kg)</Text>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
              <Text style={styles.Itemquantity}>
                5.99<Text style={styles.unit}>  JD</Text>
              </Text>
            </View>

            <View>
              <Image

                style={styles.Itemimage}
                source={{ uri: item.image }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => setData(data.filter(ite => ite != item))}>
          <Image style={styles.close} source={require('../../assets/close.png')} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/upper_.png')}
          style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: height(10) }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              contentContainerStyle={{ marginTop: height(6) }}
              ItemSeparatorComponent={() => (
                <View style={{ height: height(2.5) }} />
              )}
            />
            <View style={styles.line} />
            <Text onPress={() => navigation.navigate('Cart')} style={styles.cart}>
              AlTabah (6)
                 </Text>
            <View style={styles.bottomtextView}>
              <Text style={styles.bottomText}>
                5.99<Text style={styles.unitText}>  JD</Text>
              </Text>
              <Text style={styles.AlmajText}>Almajmuah</Text>
            </View>
            <View style={styles.line} />
            <Button title='Proceed' labelStyle={{ color: color.darkBlue }} containerStyle={styles.proceed} />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
