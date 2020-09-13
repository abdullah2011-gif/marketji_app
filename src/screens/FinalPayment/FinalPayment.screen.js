import React, {Component, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import styles from './FinalPayment.styles';
import ModalDropdown from 'react-native-modal-dropdown';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import PlacesInput from 'react-native-places-input';
import Button from '../../components/Button/Button.component';
import arrowdownImage from '../../assets/back.png';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import stripe from 'tipsi-stripe';
import Apimanager from '../../ApiFunctions/ApiFunctions';
import { setCart, setPendingOrders, setCompletedOrders } from '../../Redux/Actions/App';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

stripe.setOptions({
  publishableKey: 'pk_test_51HJaYLGOCFGuuf2kA5DJQXhGccfi0vQ9zZZrTgK0PmMBkIzOUZyM9TmjQd8UnAQShK5cCIxOh1nSR3bdwmradYO400nnAralVl',
});

export default function Payment({navigation}) { 
  const [selectedValue, setSelectedValue] = useState('عند التسليم');
  const [selectedCard, setSelectedCard] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState('');
  const [warning, setWarning] = useState('');
  const dispatch = useDispatch()
  const user = useSelector(state => state.Auth.user);
  const cart = useSelector(state => state.App.cart);
  var totalQuantity = null;
  var totalPrice = null;
  cart.map(item=>{
    totalPrice = totalPrice+(item.orderQuantity*item.product.price)
    totalQuantity=item.orderQuantity+totalQuantity
  })
  dispatch(setLoading(false))
  const requestOrder=async()=>{
    if(address == ''){
      setWarning('PLease enter address')
      return

    }else if(!user.contact&&(phone==null&&phone?.length<6)){
      setWarning('please enter phone')
      return
    }
    dispatch(setLoading(true))
   await new Apimanager().requestOrder({products:cart.map(item=>({quantity:item.orderQuantity,product:item.product._id,address:address})),paymentMethod:selectedValue,
    card:selectedCard,customer:user._id
  }).then(async(res)=>{
    dispatch(setCart([]))
   await new Apimanager().getOrders(user._id).then(res=>{

      dispatch(setPendingOrders(res.pendingOrder))
      dispatch(setCompletedOrders(res.orders))
      navigation.navigate('Orders')
    })
  })
  dispatch(setLoading(false))
  }
  const getAddress = data => {
    console.log(data)
    setAddress(data.description)
  }
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
      <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/upper_.png')}
          style={{flex: 1}}>
            {/* <KeyboardAvoidingView> */}
            <ScrollView keyboardShouldPersistTaps='always'>
     <View style={{marginTop:height(10)}}>
            <View style={styles.line} />
            <Text style={styles.warning}>
                  {warning}
                </Text>
            <Text
              onPress={() => navigation.navigate('Cart')}
              style={{
                color: color.white,
                fontSize: width(4.4),
                width: width(32),
                backgroundColor: color.orange,
                overflow: 'hidden',
                borderRadius: width(1),
                alignSelf: 'flex-end',
                marginRight: width(15),
                textAlign: 'center',
                paddingVertical: height(1.5),
              }}>
           عدد العناصر ({totalQuantity})
            </Text>
            <View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: height(1),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: width(5),
                  fontWeight: 'bold',
                  color: color.darkBlue,
                  textAlign: 'center',
                }}>
                {totalPrice}
                <Text style={{fontSize: width(3.5), color: color.darkBlue}}>
                  {' '}
                  JD
                </Text>
              </Text>
              <Text style={{fontSize: width(4), color: color.darkBlue}}>
              المجموع
              </Text>
            </View>
            
            <View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'flex-end',
                marginTop: height(3),
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: width(4), color: color.darkBlue}}>
              العنوان
           </Text>
                 <GooglePlacesAutocomplete
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    keyboardAppearance={'light'}
                    keyboardShouldPersistTaps = {'handled'}
                    // onBlur
                    fetchDetails={true}
                    value={address}
                    onPress={getAddress}
                    listViewDisplayed={false}
                    getDefaultValue={() => `${address}`}
                    query={{
                      key: 'AIzaSyCOu6VAoXIymLoI-5U5CWh3LFOAoVGXvIQ',
                      language: 'en',
                      types: 'address',
                    }}
                    styles={{
                      container:{marginTop:height(3)},
                      textInputContainer: styles.inputCont,
                      description: {
                        fontWeight: 'bold',
                      },
                      textInput: {backgroundColor: color.white, borderColor: color.white},
                      listView: styles.listView,
                    }}
                    // enablePoweredByContainer={false}
                    placeholder="اختر موقعا"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={1}
                  />
            </View>
            <View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'flex-end',
                marginTop: height(3),
                flexDirection: 'column-reverse',
                justifyContent: 'space-between',
              }}>
             <ModalDropdown
                  options={['بطاقة','عند التسليم']}
                  dropdownStyle={styles.genderDropDown}
                  showsVerticalScrollIndicator={false}
                  onSelect={(index, value) => setSelectedValue(value)}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.genderDropDownItemContainer}>
                      <Text style={styles.genderDropDownItemText}>
                        {option}
                      </Text>
                    </View>
                  )}>
                  <View style={styles.genderConainer}>
                  <Image
                      source={require('../../assets/downarrow.png')}
                      resizeMode="contain"
                      style={styles.arrowdownImage}
                    />
                    <Text style={styles.genderText}>{selectedValue}</Text>
                   
                  </View>
                </ModalDropdown>
              <Text style={{fontSize: width(4), color: color.darkBlue}}>
              اختار طريقة الدفع
              </Text>
            </View>
           {!user.contact&&<View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'flex-end',
                marginTop: height(3),
                flexDirection: 'column-reverse',
                justifyContent: 'space-between',
              }}>
            <CustomTextInput containerStyle={{alignSelf:'flex-end',width:width(60),marginTop: height(3),}} keyboardType={'numeric'} type= 'phone' value= {phone} onChangeText={setPhone} />
              <Text style={{fontSize: width(4), color: color.darkBlue}}>
              الرجاء إدخال رقم الهاتف
              </Text>
            </View>}
            {selectedValue=='Card'&&<><View
              style={{
                width: width(80),
                alignSelf: 'center',
                alignItems: 'flex-end',
                marginTop: height(4),
                flexDirection: 'column-reverse',
                justifyContent: 'space-between',
              }}>
             <ModalDropdown
                  options={user.cards}
                  dropdownStyle={styles.genderDropDown}
                  showsVerticalScrollIndicator={false}
                  onSelect={(index, value) => setSelectedCard(value)}
                  renderRow={(option, index, isSelected) => (
                    <View style={styles.genderDropDownItemContainer,{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                      <Image style={{width:19,height:19,resizeMode:'contain'}} source={option.brand=='Visa'? require('../../assets/visa.png'):option.brand=='MasterCard'? require('../../assets/mastercard.png'): require('../../assets/discover.png')} />
                   {console.log(option)}
                      <Text numberOfLines={1} style={styles.genderDropDownItemText}>
                        {option.title}
                      </Text>
                    </View>
                  )}>
                  <View style={styles.genderConainer}>
                  <Image
                      source={require('../../assets/downarrow.png')}
                      resizeMode="contain"
                      style={styles.arrowdownImage}
                    />
                   {selectedCard?  <View style={styles.genderDropDownItemContainer,{flexDirection:'row',justifyContent:'space-around',alignItems:'center',width:'80%'}}>
                      {/* <Image style={{width:19,height:19,resizeMode:'contain'}} source={require('../../assets/visa.png')} /> */}
                      <Text numberOfLines={1} style={styles.genderDropDownItemText}>
                        {selectedCard.title}
                      </Text>
                    </View>:<Text style={styles.genderText}>اختر البطاقة</Text>}
                  </View>
                </ModalDropdown>
              <Text style={{fontSize: width(4), color: color.darkBlue}}>
               اختر البطاقة
              </Text>
            </View>
            <Button containerStyle={{width:width(45),marginTop:height(4)}} onPress={()=>navigation.navigate('Payment')} title='Add new card'/>
            </>}
            <View style={[styles.line]} />
            <Button
            disabled={totalQuantity>0?false:true}
            onPress={requestOrder}
              title="تأكيد طلبي"
              labelStyle={{color: color.darkBlue}}
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: color.darkBlue,
                borderWidth: 1,
              }}
            />
            </View>
            </ScrollView>
            {/* </KeyboardAvoidingView> */}
</ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
