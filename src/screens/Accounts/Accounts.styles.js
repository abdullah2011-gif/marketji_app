import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot:
  {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: color.white,
    marginHorizontal: height(0.3)
  },
  dot:
  {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: color.orange,
    margin: height(0.3)
  },
  cart: { marginTop: height(1.5), flexDirection: 'row', alignSelf: 'center', width: width(55) },
 touchable:
 {
  width:width(10),height:height(5),borderColor:'black',borderWidth:1.3,justifyContent:'center',alignItems:'center'
 },
 payment:{ fontSize:width(5),textAlign:'center',width:'50%',marginLeft:'3%'
},
inputtext:{height:height(30),justifyContent:'space-between',marginTop:height(5)},
textcart:{ fontSize:width(5),textAlign:'center',width:'45%'},
titleContainer:{backgroundColor:color.white,height:height(5),width:width(45),borderRadius:width(1),alignSelf:'center',marginBottom:height(2),justifyContent:'center'},
 touchableview:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:'center',width:width(40)}
});
export default styles;
