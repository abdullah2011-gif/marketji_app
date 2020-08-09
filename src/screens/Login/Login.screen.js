import React, { Component, useState } from 'react';
import { View, Text, ImageBackground,TouchableOpacity,SafeAreaView, StatusBar } from 'react-native';
import styles from './Login.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import { useDispatch,useSelector } from 'react-redux';
import { login, logout } from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import { width } from 'react-native-dimension';
export default function Login() {
    const [isLogin,setIsLogin] = useState(true)
    const dispatch = useDispatch()
        return (
            <React.Fragment>
            <SafeAreaView backgroundColor={color.background} />
            <StatusBar barStyle={'dark-content'} backgroundColor={color.background} />
            <SafeAreaView style={{flex:1}}>
            <ImageBackground source={require('../../assets/loginbackground.png')} style={styles.container}>
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
                     <Text style={styles.label}>Phone Number</Text>
                <TextInput/>
                     <Text style={styles.label}>Password</Text>
                <TextInput secureTextEntry/>
                <View style={styles.line} />
                <Button title="Login" onPress={() => dispatch(login({ userName: 'John Doe' }))} />
                <Text style={styles.forgot}>Forgot Your Password</Text>
                <Text onPress={()=>setIsLogin(false)} style={styles.signup}>Sign Up</Text>
                     </View>}
            </ImageBackground>
            </SafeAreaView>
            <SafeAreaView backgroundColor={color.background} />
            </React.Fragment>
        )
}