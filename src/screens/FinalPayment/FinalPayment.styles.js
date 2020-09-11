import { StyleSheet } from 'react-native';
import color from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginVertical: height(5),
  },
  genderDropDown:{
    height: height(15),
    width:width(60),
  },
  genderDropDownItemContainer:{
    paddingVertical: height(2),
    paddingHorizontal: width(2)
  },
  genderDropDownItemText:{
    fontSize: width(4),
    color: color.darkBlue,
  },
  genderConainer: {
    justifyContent: "space-between",
    backgroundColor: color.white,
    borderRadius: width(1),
    flexDirection: 'row',
    alignItems: 'center',
    width: width(60),
    paddingHorizontal:width(2),
    paddingVertical: height(1),
    marginTop: height(3),
  },
genderText:{
    color:color.darkBlue,
    fontSize:totalSize(2),
    marginLeft:width(2)
},
arrowdownImage: {
  height: height(2),
  width: width(4.5),
  resizeMode: 'contain'
},
inputCont:{
  padding: 0,
  backgroundColor: color.white,
  borderColor: color.white,
  borderRadius: width(14),
  width: width(60),
  alignSelf:'center',
  // position:'absolute',
  // zIndex:1,
  // right:0
},
listView:{
  backgroundColor: color.white,
  width: width(60),
  // position:'absolute',
  // zIndex:1,
  // right:0
},
warning: {
  alignSelf: 'center',
  fontSize: width(3.5),
  color: color.darkBlue,
  paddingTop: 10,
  paddingVertical: height(2.5),
  fontWeight: 'bold',
},
});
export default styles;
