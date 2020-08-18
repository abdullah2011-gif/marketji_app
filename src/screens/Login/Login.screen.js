import React, { Component, useState } from 'react';
import { View, Text, ImageBackground,TouchableOpacity,SafeAreaView, StatusBar, Image } from 'react-native';
import styles from './Login.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import { useDispatch,useSelector } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import { width,height } from 'react-native-dimension';
import { LoginManager } from "react-native-fbsdk";
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes, } from '@react-native-community/google-signin';
import axios from 'axios'
GoogleSignin.configure({
  //It is mandatory to call this method before attempting to call signIn()
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  offlineAccess:false,
  // Repleace with your webClientId generated from Firebase console
  webClientId: "350261003171-marocch5lta2id8bohbp0n78473vv1j8.apps.googleusercontent.com",
});
export default function Login() {
    const [isLogin,setIsLogin] = useState(true)
    const dispatch = useDispatch();
  const  googleSignIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log('abc'+JSON.stringify(userInfo.user))
        // this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };
    const facebookLogin=()=>{
        LoginManager.logInWithPermissions(["public_profile"]).then(
           function(result) {
             if (result.isCancelled) {
               console.log("Login cancelled");
             } else {
               AccessToken.getCurrentAccessToken().then(
                   (data) => {
                     console.log(data.accessToken.toString()+'access token')
                     axios.post(`http://192.168.43.43:3000/facebook`,{
                         headers:{
                             'access_token':data.accessToken.toString()
                         }
                     }).then(res=>{
                         console.log(res)
                     }).catch(e=>console.log(e))
                   }
                 )
               console.log(
                 "Login success with permissions: " +
                   JSON.stringify(result)
               );
             }
           },
           function(error) {
             console.log("Login fail with error: " + error);
           }
         );
    }
        return (
            <React.Fragment>
            <SafeAreaView backgroundColor={color.background} />
            <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
            <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../assets/loginbackground.png')} resizeMode='stretch' style={styles.container}>
                <View style={{width:width(100),alignItems:'center',marginTop:!isLogin?height(0.5):height(1.5)}}>
                <Image source={require('../../assets/login-logo.png')} style={{height:!isLogin?height(15):height(20),width:width(50),resizeMode:'contain'}} />
                </View>
                <View style={styles.flexRow}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>setIsLogin(false)} style={!isLogin?styles.activeView:styles.inactiveView}>
                           <Text style={!isLogin?styles.activeText:styles.inactiveText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} onPress={()=>setIsLogin(true)} style={isLogin?styles.activeView:styles.inactiveView}>
                           <Text style={isLogin?styles.activeText:styles.inactiveText}>Login</Text>
                    </TouchableOpacity>
                </View>
    {/* ------------------------------------------login-------------------------------------------------- */}
                 {isLogin&&<View>
                     <Text style={styles.label}>Phone Number</Text>
                <TextInput/>
                     <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry/>
                <View style={styles.line} />
                <Button title="Login" onPress={() => dispatch(login({ userName: 'John Doe' }))} />
                <Text style={styles.forgot}>Forgot Your Password?</Text>
                <Text onPress={()=>setIsLogin(false)} style={styles.signup}>Sign Up</Text>
                     </View>}
    {/* --------------------------------------------signup----------------------------------------------------------- */}
                     {!isLogin&&<View>
                         <View style={styles.signupHeading}>
                           <View style={{flexDirection:'column'}}>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                           </View>
                           <Text style={styles.signupHeadingText}>Some Dummy Text</Text>
                           <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                               <View style={styles.dot}/>
                         </View>
                     <Text style={styles.signupLabel}>Phone Number</Text>
                <TextInput/>
                     <Text style={styles.signupLabel}>Password</Text>
                <TextInput secureTextEntry/>
                <Text style={styles.signupLabel}>Phone Number</Text>
                <TextInput/>
                     <Text style={styles.signupLabel}>Password</Text>
                <TextInput secureTextEntry/>
                <View style={styles.signupLine} />
                <Text style={styles.signupWith}>Sign Up with</Text>
                <View style={{width:width(30),alignSelf:'center',marginTop:height(1),height:height(6),alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={googleSignIn}>
                  <Image source={require('../../assets/Google-Plus-Logo.png')}style={{width:width(15),height:height(5),resizeMode:'contain'}} />
                  </TouchableOpacity>
                <View style={{height:height(3.5),borderRightColor:color.darkBlue,borderRightWidth:2}} />
                 <TouchableOpacity onPress={facebookLogin}>
                  <Image source={require('../../assets/fbLogo.png')}style={{width:width(15),height:height(5),resizeMode:'contain'}} />
               </TouchableOpacity>
                </View>
                <View style={{width:width(50),alignSelf:'center'}}>
                <Button title="Signup" onPress={() => dispatch(login({ userName: 'John Doe' }))} />
                </View>
                     </View>}
            </ImageBackground>
            </SafeAreaView>
            <SafeAreaView backgroundColor={color.background} />
            </React.Fragment>
        )
}