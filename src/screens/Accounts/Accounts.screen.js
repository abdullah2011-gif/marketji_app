import React, {Component, useState} from 'react';
import Text from '../../components/Text/Text.component';
import {
  View,

  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Accounts.styles';
import Button from '../../components/Button/Button.component';
import TextInput from '../../components/TextInput/TextInput.component';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, setLoading, setUser} from '../../Redux/Actions/Auth';
import color from '../../utills/Colors';
import {width, height} from 'react-native-dimension';
import {SliderBox} from 'react-native-image-slider-box';
import Axios from 'axios';
import ImagePicker from 'react-native-image-picker'
import config from '../../../config';
export default function Dashboard() {
  const user = useSelector(state => state.Auth.user);
  const [name,setName]=useState(user.fullName)
  const [phone,setPhone]=useState(user.contact)
  const [image,setImage]=useState(null)
  const [gender,setGender]=useState(user.gender)
  const [title,setTtitle]=useState(user.title)
  const dispatch = useDispatch();
 const pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "pick an Image" }, res => {
        if (res.didCancel) {
            console.log("User Canceled");
        }
        else if (res.error) {
            console.log("Error" + res.error)
        }
        else {
           setImage({ uri: res.uri,name:res.fileName,type:res.type })
        }

    })
}
  const saveUser=()=>{
  dispatch(setLoading(true))
    var form = new FormData();
    form.append('fullName',name)
    form.append('gender',gender)
    form.append('contact',phone)
    form.append('title',title)
    form.append('image',image)
   Axios.put(`${config.url}customer/customerDetail/${user.customerId}`,form).then(res=>{
        if(res.status==200){
          dispatch(setUser({...user,...res.data}))
          dispatch(setLoading(false))
        }else{
            alert(res.data.message)
            dispatch(setLoading(false))
        }
   }).catch(e=>{
     console.log(e)
    dispatch(setLoading(false))
   })
  }
  return (
    <React.Fragment>
      <SafeAreaView />
      <StatusBar barStyle={'dark-content'} backgroundColor={color.white} />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          resizeMode="stretch"
          source={require('../../assets/loginbackground.png')}>
             <KeyboardAvoidingView behavior='position'>
          <ImageBackground
            style={styles.imagebackground}
            source={require('../../assets/back_header.png')}>
            <View style={styles.mainContainer}>
              <Image
                style={styles.person}
                source={image?{uri:image.uri}:user.image?{uri:`${config.url}public/images/${user.image}`}:require('../../assets/person.png')}
              />
              <TouchableOpacity onPress={pickImageHandler} style={styles.whiteBack}>
                <Image
                  style={{width:'50%',resizeMode:'contain'}}
                  source={require('../../assets/plus.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
         
          <View style={styles.titleContainer}>
            <Text style={{textAlign: 'center' ,  color: color.orange}}>
            العيسى
            </Text>
          </View>
          {/* <View style={styles.touchableview}>
            <TouchableOpacity style={styles.touchable}>
              <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
              <Text>1</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.cart}>
            <Text style={styles.textcart}>Cart</Text>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <Text style={styles.payment}>Payment</Text>
          </View> */}
          
          <View style={styles.inputtext}>
            <TextInput value={name} onChangeText={setName} defaultValue={user.fullName} placeholder="اسم" />
            <TextInput value={phone} onChangeText={setPhone} defaultValue={user.contact}placeholder="هاتف" />
            <TextInput value={gender} onChangeText={setGender} defaultValue={user.gender} placeholder="جنس" />
            <TextInput value={title} onChangeText={setTtitle} defaultValue={user.title} placeholder="عنوان" />
          </View>
          </KeyboardAvoidingView>
          <Button onPress={saveUser} title='حفظ' />
        </ImageBackground>
      </SafeAreaView>

      <SafeAreaView />
    </React.Fragment>
  );
}
