import React, {  useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import {useDispatch} from 'react-redux'
import {logout} from '../Redux/Actions/Auth'
import {setCAtegoriesAndProduct} from '../Redux/Actions/App'
import Dashboard from '../screens/Dashboard/Dashboard.screen';
import Cart from '../screens/Cart/Cart.screen';
import Products from '../screens/Products/Products.screen';
import Orders from '../screens/Orders/Orders';
import Accounts from '../screens/Accounts/Accounts.screen';
import Payment from '../screens/Payment/Payment.screen';
import PhoneVerify from '../screens/PhoneVerify/PhoneVerify.screen';
import { connect, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import { width, height } from 'react-native-dimension';
import Apimanager from '../ApiFunctions/ApiFunctions';
const Stack = createStackNavigator();
export default function Routes() {
    const dispatch = useDispatch()
    useEffect(()=>{
        new Apimanager().getCatAndProducts().then(res=>{
            dispatch(setCAtegoriesAndProduct(res))
        })
    },[])
    const isLogin = useSelector(state=>state.Auth.isLogin)
        return (
            <NavigationContainer>
                {!isLogin ?
                    <Stack.Navigator initialRouteName="Login" headerMode="none">
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="PhoneVerify" component={PhoneVerify} />
                    </Stack.Navigator>
                    :
                    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
                        <Stack.Screen name="Dashboard" component={MyDrawer} />
                    </Stack.Navigator>
                }
            </NavigationContainer>
        )
};
const Drawer = createDrawerNavigator();

function MyDrawer() {
    const [time,setTime] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
           setInterval(()=>{
                 setTime(false)
           },5000)
    },[])
  return (
  <Drawer.Navigator drawerPosition='right' drawerStyle={{backgroundColor:time?'transparent':'#ffffff'}} drawerContent={(props)=>(time?null: drawerContainer({...props,dispatch:dispatch}))}>
         <Drawer.Screen name="Dashboard" component={Dashboard} />
                        <Drawer.Screen name="Cart" component={Cart} />
                        <Drawer.Screen name="Products" component={Products} />
                        <Drawer.Screen name="Orders" component={Orders} />
                        <Drawer.Screen name="Accounts" component={Accounts} />
                        <Drawer.Screen name="Payment" component={Payment} />
    </Drawer.Navigator>
  );
}
function drawerContainer({state,navigation,dispatch}){
return(
<View style={{width:'100%',height:'100%'}} >
 <TouchableOpacity onPress={()=>navigation.closeDrawer()} style={{marginLeft:height(2),marginBottom:height(1),marginTop:30}}>
     <Image style={{width:25,height:25}} source={require('../assets/menu.png')} />
 </TouchableOpacity>
     {state.routes.map(item=>{
         if(item.name=='Dashboard'||item.name=='Products')
         return null
         else
         return(<TouchableOpacity onPress={()=>navigation.navigate(item.name)} style={{width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between',height:height(8),alignItems:'center',paddingHorizontal:'5%',borderRadius:10,backgroundColor:'#ee8318',marginTop:height(2)}}>
           <Image style={{width:width(6),height:height(5),resizeMode:'center',tintColor:'#FFFFFF'}} source={item.name=='Cart'?require('../assets/shopping-cart.png'):item.name=='Orders'?require('../assets/diagram.png'):item.name=='Accounts'?require('../assets/person.png'):require('../assets/pay.png')} />
           <Text style={{color:'#ffffff',fontSize:width(4)}}>{item.name=='Payment'?'Add Card':item.name}</Text>
           <View />
         </TouchableOpacity>)
     })}
   <TouchableOpacity onPress={()=>dispatch(logout())} style={{width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between',height:height(8),alignItems:'center',paddingHorizontal:'5%',borderRadius:10,backgroundColor:'#ee8318',marginTop:height(2)}}>
           <Image style={{width:width(6),height:height(5),resizeMode:'center',tintColor:'#FFFFFF'}} source={require('../assets/logout.png')} />
           <Text style={{color:'#ffffff',fontSize:width(4)}}>Logout</Text>
           <View />
         </TouchableOpacity>
    </View>)
}