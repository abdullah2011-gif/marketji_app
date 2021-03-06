import React, {Component, useState} from 'react';
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
import styles from './Login.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {LoginManager} from 'react-native-fbsdk';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import axios from 'axios';
import Apimanager from '../../ApiFunctions/ApiFunctions';
import { setProducts, setCart, setPendingOrders, setCompletedOrders } from '../../Redux/Actions/App';
import config from '../../../config';
GoogleSignin.configure({
  offlineAccess: false,
  androidClientId:'350261003171-nuv576fq3sgvk5bd0dpcklco6or2l0lb.apps.googleusercontent.com',
  webClientId:'350261003171-marocch5lta2id8bohbp0n78473vv1j8.apps.googleusercontent.com',
});
export default function Login({navigation}) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginPhoen, setLoginPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [warning, setWarning] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('abc' + JSON.stringify(userInfo.user));
      dispatch(setLoading(true))
     await axios
      .post(`${config.url}google`,userInfo.user)
      .then(async(res) => {
           if(res.status==200){
              await new Apimanager().getFavorites(res.data.user.customerId).then(res=>{
                 dispatch(setProducts(res))
               })
              await new Apimanager().getcart(res.data.user.customerId).then(res=>{
                 dispatch(setCart(res))
               })
              await new Apimanager().getOrders(res.data.user._id).then(res=>{
                 dispatch(setPendingOrders(res.pendingOrder))
                 dispatch(setCompletedOrders(res.orders))
               })
                dispatch(login({...res.data.user, token: res.data.token}));
               
           }else{
             setWarning('Unable to authenticate your account please try again')
           }
      })
      .catch(e =>console.log(e.response))
    } catch (error) {
      console.log(JSON.stringify(error))
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        // some other error happened
      }
    }
    dispatch(setLoading(false))
  };
  const facebookLogin = async() => {
   await LoginManager.logInWithPermissions(['public_profile']).then(
     async function(result) {
        if (result.isCancelled) {
          // console.log('Login cancelled');
        } else {
         await AccessToken.getCurrentAccessToken().then(async(data) => {
            console.log(`Bearer ${data.accessToken.toString()}`);
            dispatch(setLoading(true))
           await axios
              .post(`${config.url}facebook`,null, {
                headers: {
                  "Authorization": `Bearer ${data.accessToken.toString()}`,
                },
              })
              .then(async(res) => {
                   if(res.status==200){
                      await new Apimanager().getFavorites(res.data.user.customerId).then(res=>{
                         dispatch(setProducts(res))
                       })
                      await new Apimanager().getcart(res.data.user.customerId).then(res=>{
                         dispatch(setCart(res))
                       })
                      await new Apimanager().getOrders(res.data.user._id).then(res=>{
                         dispatch(setPendingOrders(res.pendingOrder))
                         dispatch(setCompletedOrders(res.orders))
                       })
                        dispatch(login({...res.data.user, token: res.data.token}));
                       
                   }else{
                     setWarning('Unable to authenticate your account please try again')
                   }
              })
              .catch(e =>console.log(e.response))//setWarning('Unable to authenticate your account please try again'));
          });
          // console.log(
          //   'Login success with permissions: ' + JSON.stringify(result),
          // );
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
    dispatch(setLoading(false))
  };
  const signUp = async() => {
    dispatch(setLoading(true))
   const otp = Math.floor(100000 + Math.random() * 900000);
  //  console.log(otp)
  await new Apimanager().sentOtp({username:phone,otp}).then(res=>{
     if(res.status==201){
       setWarning('Please try again')
     }else if(res.status==202){
       setWarning('A user with this phone number already exist!')
     }else if(res.status==200){
      navigation.navigate('PhoneVerify',{
        username: phone,
        contact: phone,
        fullName: name,
        password: password,
        otp
      })
     }else{
      //  console.log(res)
     }
   })
   dispatch(setLoading(false))
  };
  const loginUser=async()=>{
    dispatch(setLoading(true))
  await  new Apimanager().Login({username:loginPhoen,password:loginPassword}).then(async(res)=>{
     if(res.status==200){
     await new Apimanager().getFavorites(res.data.user.customerId).then(res=>{
        dispatch(setProducts(res))
      })
     await new Apimanager().getcart(res.data.user.customerId).then(res=>{
        dispatch(setCart(res))
      })
     await new Apimanager().getOrders(res.data.user._id).then(res=>{
        dispatch(setPendingOrders(res.pendingOrder))
        dispatch(setCompletedOrders(res.orders))
      })
       dispatch(login({...res.data.user, token: res.data.token}));
      }else{
        if(res=='Unauthorized')
        setWarning('Invalid phone or password!')
        else
        setWarning(res)
      }
    })
    dispatch(setLoading(false))
  }
  return (
    <React.Fragment>
      <SafeAreaView backgroundColor={color.background} />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/loginbackground.png')}
          resizeMode="stretch"
          style={styles.container}>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-height(20)}>
            <View
              style={{
                width: width(100),
                alignItems: 'center',
                marginTop: !isLogin ? height(0.5) : height(1.5),
              }}>
              <Image
                source={require('../../assets/login-logo.png')}
                style={{
                  height: !isLogin ? height(15) : height(20),
                  width: width(50),
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsLogin(false)}
                style={!isLogin ? styles.activeView : styles.inactiveView}>
                <Text
                  style={!isLogin ? styles.activeText : styles.inactiveText}>
                  Sign Up
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsLogin(true)}
                style={isLogin ? styles.activeView : styles.inactiveView}>
                <Text style={isLogin ? styles.activeText : styles.inactiveText}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            {/* ------------------------------------------login-------------------------------------------------- */}
            {isLogin && (
              <View>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  value={loginPhoen}
                  placeholder={'Confirm password'}
                  onChangeText={setLoginPhone}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                  value={loginPassword}
                  placeholder={'Confirm password'}
                  onChangeText={setLoginPassword}
                  secureTextEntry
                />
                <View style={styles.line} />
                <Text style={styles.warning}>
                  {warning}
                </Text>
                <Button
                  title="Login"
                  onPress={loginUser}
                />
                <Text style={styles.forgot}>Forgot Your Password?</Text>
                
                <Text onPress={() => setIsLogin(false)} style={styles.signup}>
                  Sign Up
                </Text>
              </View>
            )}
            {/* --------------------------------------------signup----------------------------------------------------------- */}
            {!isLogin && (
              <View>
                <View style={styles.signupHeading}>
                  <View style={{flexDirection: 'column'}}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                  </View>
                  <Text style={styles.signupHeadingText}>Some Dummy Text</Text>
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                  <View style={styles.dot} />
                </View>
                <Text style={styles.signupLabel}>Name</Text>
                <TextInput
                  value={name}
                  placeholder={'Name'}
                  onChangeText={setName}
                />
                <Text style={styles.signupLabel}>Password</Text>
                <TextInput
                  value={password}
                  placeholder={'Password'}
                  onChangeText={setPassword}
                  secureTextEntry
                />
                <Text style={styles.signupLabel}>Confirm password</Text>
                <TextInput
                  value={cpassword}
                  placeholder={'Confirm password'}
                  onChangeText={setCPassword}
                  secureTextEntry
                />
                <Text style={styles.signupLabel}>Phone number</Text>
                <TextInput
                  value={phone}
                  placeholder={'Phone number'}
                  onChangeText={setPhone}
                />
                 <Text style={styles.warning}>
                  {warning}
                </Text>
                <View style={styles.signupLine} />
                <Text style={styles.signupWith}>Sign Up with</Text>
                <View style={styles.logoContainer}>
                  <TouchableOpacity onPress={googleSignIn}>
                    <Image
                      source={require('../../assets/Google-Plus-Logo.png')}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      height: height(3.5),
                      borderRightColor: color.darkBlue,
                      borderRightWidth: 2,
                    }}
                  />
                  <TouchableOpacity onPress={facebookLogin}>
                    <Image
                      source={require('../../assets/fbLogo.png')}
                      style={styles.logo}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{width: width(50), alignSelf: 'center'}}>
                  <Button title="Signup" onPress={signUp} />
                </View>
              </View>
            )}
          </KeyboardAvoidingView>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView backgroundColor={color.background} />
    </React.Fragment>
  );
}
