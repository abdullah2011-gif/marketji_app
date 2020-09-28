import React, {  useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import {useDispatch} from 'react-redux'
import {logout} from '../Redux/Actions/Auth'
import SplashScreen from '../screens/SplashScreen'
import Dashboard from '../screens/Dashboard/Dashboard.screen';
import Cart from '../screens/Cart/Cart.screen';
import Products from '../screens/Products/Products.screen';
import Orders from '../screens/Orders/Orders';
import Accounts from '../screens/Accounts/Accounts.screen';
import Favorites from '../screens/Favotites/Favotites.screen';
import Payment from '../screens/Payment/Payment.screen';
import FinalPayment from '../screens/FinalPayment/FinalPayment.screen';
import PhoneVerify from '../screens/PhoneVerify/PhoneVerify.screen';
import { connect, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity,Text,Keyboard,Platform } from 'react-native';
import { width, height } from 'react-native-dimension';
import Apimanager from '../ApiFunctions/ApiFunctions';
import Alert from '../components/PopUp/PopUp.Component'
import config from '../../config';
import Colors from '../utills/Colors';
const Stack = createStackNavigator();
export default function Routes() {
        return (<>
            <Alert/>
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
                        <Stack.Screen name="SplashScreen" component={SplashScreen} />
                        <Stack.Screen name="Dashboard" component={MyDrawer} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
                    </Stack.Navigator>
            </NavigationContainer></>
        )
};
const Drawer = createDrawerNavigator();

function MyDrawer({navigation}) {
    const isLogin = useSelector(state=>state.Auth.isLogin)
    const user = useSelector(state=>state.Auth.user)
    const [time,setTime] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
           setInterval(()=>{
                 setTime(false)
           },5000)
    },[])
  return (
  <Drawer.Navigator drawerPosition='left' drawerStyle={{backgroundColor:time?'transparent':'#ffffff'}} drawerContent={(props)=>(time?null: drawerContainer({...props,dispatch:dispatch,isLogin,user}))}>
         <Drawer.Screen name="Dashboard" component={Dashboard} />
                        <Drawer.Screen name="Cart" component={Cart} />
                        <Drawer.Screen name="Products" component={Products} />
                     {isLogin?<Drawer.Screen name="Orders" component={Orders} />: <Stack.Screen name="Orders" component={Login} />}
                      { isLogin? <Drawer.Screen name="Accounts" component={Accounts} />: <Stack.Screen name="Accounts" component={Login} />}
                      {isLogin?  <Drawer.Screen name="Payment" component={Payment} />: <Stack.Screen name="Payment" component={Login} />}
                        <Drawer.Screen name="Favorites" component={Favorites} />
                      {isLogin?  <Drawer.Screen name="FinalPayment" component={FinalPayment} />: <Stack.Screen name="FinalPayment" component={Login} />}
    </Drawer.Navigator>
  );
}
function drawerContainer({state,navigation,dispatch,isLogin,user}){
return(
<View style={{width:'100%',height:'100%'}} >
  <View style={{justifyContent:'space-between',flexDirection:'row-reverse',alignItems:'center'}}>
 <TouchableOpacity onPress={()=>navigation.closeDrawer()} style={{paddingRight:height(2),marginBottom:height(12)}}>
     <Image style={{width:25,height:25}} source={require('../assets/menu.png')} />
 </TouchableOpacity>
          {isLogin&&
            <View style={{justifyContent:'center',alignItems:'center',marginTop:height(1)}}>
            <Image style={{width:width(17),height:width(17),borderRadius:width(8.5),borderColor:Colors.orange,borderWidth:1}} 
              source={user.image?{uri:`${config.url}public/images/${user.image}`}:require('../assets/person.png')}
            />
             <Text style={{marginTop:height(1),paddingBottom:20}}>{user.fullName}</Text>
             
            </View>
          }
          <View  style={{marginLeft:height(2),marginBottom:height(1),marginTop:30}}/>
 </View>
 {isLogin&&<View style={{backgroundColor:'#000000',height:height(1),width:width(60),alignSelf:'center'}}></View>}
     {state.routes.map(item=>{
         if(item.name=='FinalPayment'||item.name=='Products'||item.name=='Payment')
         return null
         else
         return(<TouchableOpacity onPress={()=>navigation.navigate(item.name)} style={{width:'90%',flexDirection:'row-reverse',alignSelf:'center',justifyContent:'space-between',height:height(7),alignItems:'center',paddingHorizontal:'5%',borderRadius:10,backgroundColor:'#ffffff',marginTop:height(2)}}>
           <Image style={{width:width(6),height:height(5),resizeMode:'center',tintColor:'#000000'}} source={item.name=='Cart'?require('../assets/shopping-cart.png'):item.name=='Accounts'?require('../assets/person.png'):item.name=='Orders'?require('../assets/diagram.png'):item.name=='Favorites'?require('../assets/fillheart.png'):item.name=='Dashboard'?require('../assets/home.png'):''} />
           <Text style={{fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',color:'#000000',fontSize:width(6)}}>{item.name=='Cart'?'عربة التسوق':item.name=='Orders'?'الطلبات':item.name=='Accounts'?'حسابي':item.name=='Favorites'?'المفضلة':item.name=='Dashboard'?'الرئيسيه':''}</Text>
           <View />
         </TouchableOpacity>)
     })}
   <TouchableOpacity onPress={()=>{dispatch(logout());navigation.navigate('Login')}} style={{width:'90%',flexDirection:'row-reverse',alignSelf:'center',justifyContent:'space-between',height:height(7),alignItems:'center',paddingHorizontal:'5%',borderRadius:10,backgroundColor:'#ffffff',marginTop:height(2)}}>
           <Image style={{width:width(6),height:height(5),resizeMode:'center',tintColor:'#000000'}} source={require('../assets/logout.png')} />
           <Text style={{color:'#000000',fontSize:width(6),fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',}}>تسجيل خروج</Text>
           <View />
         </TouchableOpacity>
    </View>)
}