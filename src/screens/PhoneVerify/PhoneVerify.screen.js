import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './PhoneVerify.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {LoginManager} from 'react-native-fbsdk';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import axios from 'axios';
import Apimanager from '../../ApiFunctions/ApiFunctions';
GoogleSignin.configure({
  offlineAccess: false,
  webClientId:
    '350261003171-marocch5lta2id8bohbp0n78473vv1j8.apps.googleusercontent.com',
});
export default function Login({route}) {
  const [isLogin, setIsLogin] = useState(true);
  const [code, setCode] = useState(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [otpVer, setOtpVer] = useState(null)
  const [cpassword, setCPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  useEffect(()=>{
    //  console.log(route.params)
     setOtpVer(route.params.otp)
     setPhone(route.params.contact)
     setName(route.params.fullName)
     setPassword(route.params.password)
  },[])
  const signUp = async() => {
    dispatch(setLoading(true))
    if(code!=otpVer){
      setWarning('Wrong otp')
      return
    }
   await new Apimanager()
      .signUp({
        type: 'customer',
        username: phone.toString(),
        contact: phone,
        fullName: name,
        password: password,
      })
      .then(res => {
        if (res.status == 202) {
          setWarning('User already exist');
        } else if (res.status == 200) {
          dispatch(login({...res.data.user, token: res.data.token}));
        } else {
          setWarning(res);
        }
      });
      dispatch(setLoading(false))
  };
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.background} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/loginbackground.png')}
          resizeMode="stretch"
          style={styles.container}>
                <Text style={styles.signupWith}>Verification code has been sent to your phone number.{'\n\n\n\n'}Please verify your number to continue signup!</Text>
                <View style={styles.otpContainer}>
                        <OTPInputView
                            style={styles.otpViewContainer}
                            pinCount={6}
                            onCodeChanged={code => {
                                setCode(code);
                            }}
                            
                            placeholderCharacter='*'
                            placeholderTextColor={'#ffffff'}
                            autoFocusOnLoad={false}
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={
                                styles.underlineStyleHighLighted
                            }
                        />
                    </View>
                    <Button onPress={signUp} containerStyle={{marginTop:height(10)}} title='Verify' />
                    <Text style={styles.warning}>
                  {warning}
                </Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.background} />
    </React.Fragment>
  );
}
