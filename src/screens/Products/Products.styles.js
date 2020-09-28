import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot:
  {
  width:3,
  height:3,
  borderRadius:3,
  backgroundColor:color.white,
  marginHorizontal:height(0.3)
  },
  mainView:{
    width: width(85),
    alignSelf: 'center',
    alignItems: 'flex-end',
    paddingVertical: height(1),
    paddingHorizontal: width(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderRadius: width(4),
  },
  parentView:{
    width: width(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart:
  {width: width(5), height: width(5), resizeMode: 'contain'},
  fillheart:
  {width: width(5), height: width(5), resizeMode: 'contain'},
  addTocartView:{
    backgroundColor: color.orange,
    // width: width(5),
    // height: width(5),
    marginLeft:width(1),
    paddingHorizontal:width(1.5),
    paddingVertical:height(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
  },
  addtocart:{fontSize:width(2.5),color:color.white},
  quantityView:{fontSize:width(4.2),fontWeight:'bold',color:color.darkBlue,textAlign:'center'},
unitText:
{fontSize:width(2.5),color:color.darkBlue},
itemimage:
{width: width(15), height: width(13),borderRadius:width(15)},
itemTitle:
{fontSize:width(3.7),color:color.darkBlue},
quantity:
{fontSize:width(3),color:color.orange,marginRight:4},
bottomView:
{width:width(100),height:height(6),flexDirection:'row',justifyContent:'space-between',
paddingHorizontal:width(5),alignItems:'center',backgroundColor:color.white},
bottomText:
{color:color.white,fontSize:width(4.4),backgroundColor:color.orange,overflow:'hidden'
,borderRadius:width(3),paddingHorizontal:width(3),paddingVertical:height(0.6)},
bottomright:{fontSize:width(4),fontWeight:'bold',color:color.orange,marginRight:width(2)},
shoppingCart:{width:width(5),height:height(3.5)},
});
export default styles;
