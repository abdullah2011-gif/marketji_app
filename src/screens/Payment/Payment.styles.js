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
  genderDropDown:{
    height: height(25),
    width:'20%'
  },
  genderDropDownItemContainer:{
    paddingVertical: height(2),
    paddingHorizontal: width(2)
  },
  genderDropDownItemText:{
    fontSize: width(6),
    color: color.darkBlue,
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
  genderConainer: {
    justifyContent: "space-between",
    backgroundColor: color.white,
    borderRadius: width(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(2),
    paddingVertical: height(1)
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
warning: {
  alignSelf: 'center',
  fontSize: width(3.5),
  color: color.darkBlue,
  paddingTop: 3,
  fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
}
});
export default styles;
