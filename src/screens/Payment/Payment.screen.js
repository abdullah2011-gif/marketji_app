import React, {Component, useState} from 'react';
import Text from '../../components/Text/Text.component';
import {
  View,

  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,TextInput
} from 'react-native';
import styles from './Payment.styles';
// import ModalDropdown from 'react-native-modal-dropdown';
import Button from '../../components/Button/Button.component';
import arrowdownImage from '../../assets/back.png';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setUser, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import stripe from 'tipsi-stripe';
import Apimanager from '../../ApiFunctions/ApiFunctions';

stripe.setOptions({
  publishableKey: 'pk_test_51HJaYLGOCFGuuf2kA5DJQXhGccfi0vQ9zZZrTgK0PmMBkIzOUZyM9TmjQd8UnAQShK5cCIxOh1nSR3bdwmradYO400nnAralVl',
});

export default function Payment({navigation}) { 
  const [selectedValue, setSelectedValue] = useState('عمان');
  const [check, setCheck] = useState(false);
  const user = useSelector(state => state.Auth.user);
  const dispatch = useDispatch();
  const [cardNumber,setCardNumber] = useState('')
  const [cardCvv,setCardCvv] = useState('')
  const [cardExpDate,setCardExpDate] = useState('')
  const [cardName,setCardName] = useState('')
  const [cardAddress,setCardAddress] = useState('')
  const [warning, setWarning] = useState('');
 const requestPayment = async() => {
  dispatch(setLoading(true))
   if(cardExpDate.match('/')){
     console.log(cardExpDate.split('/'))
   }
  try {
    // this.setState({ loading: true, token: null, error: null })
     var cardNum =cardExpDate.split('/')
    // const params = shouldPass ? this.state.params : this.state.errorParams
    const token = await stripe.createTokenWithCard({
      number: cardNumber,
      expMonth: parseInt(cardNum[0]),
      expYear: parseInt(cardNum[1]),
      cvc: cardCvv,
      name: cardName,
      currency: 'usd',
      addressCity: cardAddress,
      addressState: selectedValue
    })
    console.log(token)
    if((token.card.brand.match('Visa')||token.card.brand.match('MasterCard')||token.card.brand.match('Discover'))&&token.tokenId){
   await  new Apimanager().addCards({phone:user.contact,name:user.fullName,customerId:user.customerId,token:token.tokenId,title:cardName,brand:token.card.brand})
     .then(res=>{
       if(res){
        dispatch(setUser(res))
         navigation.goBack()
       }else{
         setWarning('Only test card will be acceptable in test mode')
       }
     })
    }
    // this.setState({ loading: false, error: undefined, token })
  } catch (error) {
    setWarning('network error')
    // this.setState({ loading: false, error })
  }
  dispatch(setLoading(false))
  };

  // const user = useSelector(state => state.Auth.user);
  // const dispatch = useDispatch();
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.white} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
      <ImageBackground
          resizeMode="stretch"
          source={require('../../assets/upper_.png')}
          style={{flex: 1}}>
       <View style={{width:width(90),paddingHorizontal:'5%',marginTop:height(17),alignItems:'center',borderRadius:width(8),backgroundColor:color.white,alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/visa.png')} />
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/mastercard.png')} />
              <Image style={{width:width(7),height:height(4),resizeMode:'contain'}} source={require('../../assets/discover.png')} />
              <Image style={{width:width(20),marginTop:3,height:height(8),resizeMode:'contain'}} source={require('../../assets/paypal.png')} />
           </View>
           <Text style={{fontSize:width(3.3),fontWeight:'bold'}}>علدالاستلام</Text>
       </View>
       <View style={{height:height(47),width:width(90),alignSelf:'center',borderRadius:width(3),padding:width(2),marginTop:height(2),backgroundColor:'rgba(252,235,225,0.9)'}}>
         <View style={{borderBottomWidth:1,borderBottomColor:'#decec5',marginTop:height(2)}}>
           <TextInput value={cardName} onChangeText={setCardName} placeholder='name' style={{color:color.darkBlue,textAlign:'right',fontWeight:'bold',height:height(6),width:'90%',alignSelf:'center'}} />
         </View>
         <View style={{borderBottomWidth:1,borderBottomColor:'#decec5',marginTop:height(2)}}>
           <TextInput value={cardNumber} onChangeText={setCardNumber} placeholder='رقم البطاقه' style={{color:color.darkBlue,textAlign:'right',fontWeight:'bold',height:height(6),width:'90%',alignSelf:'center'}} />
         </View>
         <View style={{width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:height(2)}}>
         <View style={{borderBottomWidth:1,width:'40%',borderBottomColor:'#decec5'}}>
           <TextInput value={cardCvv} onChangeText={setCardCvv} placeholder='CVV' style={{color:color.darkBlue,textAlign:'left',fontWeight:'bold',height:height(6),width:'100%',alignSelf:'center'}} />
           </View>
           <View style={{borderBottomWidth:1,width:'40%',borderBottomColor:'#decec5'}}>
           <TextInput value={cardExpDate} onChangeText={setCardExpDate} placeholder='تاريخ الانتهاء' style={{color:color.darkBlue,textAlign:'right',fontWeight:'bold',height:height(6),width:'100%',alignSelf:'center'}} />
           </View>
         </View>
         <View style={{borderBottomWidth:1,borderBottomColor:'#decec5',marginTop:height(2)}}>
           <TextInput value={cardAddress} onChangeText={setCardAddress} placeholder='العنوان' style={{color:color.darkBlue,textAlign:'right',fontWeight:'bold',height:height(6),width:'90%',alignSelf:'center'}} />
         </View>
         <View style={{width:'90%',flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'space-between',marginTop:height(3)}}>
         {/* <ModalDropdown
                  options={['عمان', 'زرقاء ','اربد ','مادبا','عجلون','البقعه']}
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
                </ModalDropdown> */}
         {/* <Button title={'اختر موقعا'} labelStyle={{fontSize:width(4)}} containerStyle={{width:'50%',borderRadius:4,height:height(5)}} /> */}
         </View>
       </View>
       <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',justifyContent:'space-between',marginTop:height(3)}}>
         <Text style={styles.genderDropDownItemText}>حفظ البطاقه</Text>
         <TouchableOpacity onPress={()=>setCheck(!check)} style={{width:width(4.5),height:height(2.5),borderWidth:1.2,borderColor:color.darkBlue,marginLeft:width(5),justifyContent:'center',alignItems:'center'}}>
        {check&& <Image style={{width:width(3.7),height:height(1.7),resizeMode:'contain'}} source={require('../../assets/tick.png')} />}
         </TouchableOpacity>
        
</View>
<Button title={'التحقق والدفع'} disabled={!check} onPress={requestPayment} containerStyle={{width:'50%',height:height(6.5),marginTop:height(3)}} />
<Text style={styles.warning}>
                  {warning}
                </Text>
</ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.white} />
    </React.Fragment>
  );
}
