import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login.screen';
import {useDispatch} from 'react-redux'
import {logout} from '../Redux/Actions/Auth'
import Dashboard from '../screens/Dashboard/Dashboard.screen';
import Cart from '../screens/Cart/Cart.screen';
import Products from '../screens/Products/Products.screen';
import Orders from '../screens/Orders/Orders';
import Accounts from '../screens/Accounts/Accounts.screen';
import { connect, useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity,Text } from 'react-native';
import { width } from 'react-native-dimension';
const Stack = createStackNavigator();
export default function Routes() {
    const isLogin = useSelector(state=>state.Auth.isLogin)
        return (
            <NavigationContainer>
                {!isLogin ?
                    <Stack.Navigator initialRouteName="Login" headerMode="none">
                        <Stack.Screen name="Login" component={Login} />
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
    const dispatch = useDispatch()
  return (
  <Drawer.Navigator drawerPosition='right' drawerContent={(props)=>drawerContainer({...props,dispatch:dispatch})}>
         <Drawer.Screen name="Dashboard" component={Dashboard} />
                        <Drawer.Screen name="Cart" component={Cart} />
                        <Drawer.Screen name="Products" component={Products} />
                        <Drawer.Screen name="Orders" component={Orders} />
                        <Drawer.Screen name="Accounts" component={Accounts} />
    </Drawer.Navigator>
  );
}
function drawerContainer({state,navigation,dispatch}){
return(
<View style={{width:'100%',height:'100%'}} >
 <TouchableOpacity onPress={()=>navigation.closeDrawer()} style={{marginLeft:30,marginTop:30}}>
     <Image style={{width:25,height:25}} source={require('../assets/hide.png')} />
 </TouchableOpacity>
     {state.routes.map(item=>{
         if(item.name=='Dashboard'||item.name=='Products')
         return null
         else
         return(<TouchableOpacity onPress={()=>navigation.navigate(item.name)} style={{width:'90%',alignSelf:'center',alignItems:'center',borderRadius:10,paddingVertical:'4%',backgroundColor:'#ee8318',marginVertical:'5%'}}>
           <Text style={{color:'#ffffff',fontSize:width(4)}}>{item.name}</Text>
         </TouchableOpacity>)
     })}
    <TouchableOpacity onPress={()=>dispatch(logout())} style={{width:'90%',alignSelf:'center',alignItems:'center',borderRadius:10,paddingVertical:'4%',backgroundColor:'#ee8318',marginVertical:'5%'}}>
           <Text style={{color:'#ffffff',fontSize:width(4)}}>Logout</Text>
         </TouchableOpacity>
    </View>)
}