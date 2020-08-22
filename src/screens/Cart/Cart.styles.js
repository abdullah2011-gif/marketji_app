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
  line: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginVertical: height(5)
  },
  mainView: {
    width: width(83),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view1: {
    width: width(75),
    alignSelf: 'center',
    alignItems: 'flex-end',
    paddingVertical: height(1),
    paddingHorizontal: width(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderRadius: width(4),
  },
  view2: {
    width: width(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unFillHeart:
  {
    width: width(5), height: width(5), resizeMode: 'contain'
  },
  FilledHeart:
  {
    width: width(5), height: width(5), resizeMode: 'contain'
  },
  minusView:
  {
    backgroundColor: color.orange,
    width: width(5),
    height: width(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
  },
  minus:
  {
    height: width(0.01),
    height: width(0.3),
    resizeMode: 'contain',
  },
  quantity:
    { fontSize: width(4), color: color.darkBlue },
  plusview:
  {
    backgroundColor: color.green,
    width: width(5),
    height: width(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
  },
  plus:
  {
    height: width(2.5),
    height: width(2.5),
    resizeMode: 'contain',
  },
  itemNameView:
    { flexDirection: 'row', alignItems: 'flex-end' },
  itemNameview1:
    { marginRight: width(2) },
  ItemFlex:
    { flexDirection: 'row', alignItems: 'flex-end' },
  ItemFont: {
     fontSize: width(3), color: color.orange, marginRight: 4
     },
  itemTitle: { 
    fontSize: width(3.7), color: color.darkBlue
   },
  Itemquantity: { 
    fontSize: width(4.2), fontWeight: 'bold', color: color.darkBlue, textAlign: 'center'
   },
   unit:{
      fontSize: width(2.5), color: color.darkBlue 
    },
    Itemimage: {
       width: width(15), height: width(15), borderRadius: width(15)
       },
    close:{
       width: width(4), height: height(3.4), resizeMode: 'contain' 
      },
      cart:
      { color: color.white, fontSize: width(4.4), 
        width: width(32), backgroundColor: color.orange,
         overflow: 'hidden', borderRadius: width(1), 
         alignSelf: 'flex-end', marginRight: width(15),
          textAlign: 'center', paddingVertical: height(1.5) 
    },
bottomtextView:{
   width: width(80), alignSelf: 'center', 
alignItems: 'center', marginTop: height(1), flexDirection: 'row', 
justifyContent: 'space-between' 
},
bottomText:{
   fontSize: width(5), fontWeight: 'bold', color: color.darkBlue, textAlign: 'center'
 },
 unitText:{ fontSize: width(3.5), color: color.darkBlue },
 AlmajText:{ fontSize: width(4), color: color.darkBlue },
 proceed:{ backgroundColor: 'transparent', borderColor: color.darkBlue, borderWidth: 1 },
  });
export default styles;
