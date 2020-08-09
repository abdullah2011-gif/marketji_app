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
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  ]);
  const user = useSelector(state => state.Auth.user);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
        <SliderBox
          images={images}
          autoplay={true}
          sliderBoxHeight={height(25)}
          circleLoop={true}
        />
        <View style={{height: height(75), backgroundColor: color.orange}}>
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
          <View style={{height: height(64)}}>
            <FlatList
              numColumns={2}
              data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
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
                    onPress={()=>navigation.navigate('Checkout')}
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
                        uri:
                          'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      }}
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: width(5),
              marginTop: height(2),
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
        </View>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
