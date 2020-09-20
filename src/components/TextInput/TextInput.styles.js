import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {totalSize, height, width} from 'react-native-dimension';

const styles = StyleSheet.create(
  {
  
  container: {
    alignItems: 'center',
    borderRadius: width(12),
    backgroundColor: color.white,
    width: '80%',
    alignSelf: 'center',
    marginVertical:1,
    height:height(6.0),
    paddingHorizontal:'5%',
    flexDirection:'row',
    justifyContent:'space-between',
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
  iconContainer: {
    padding:10,
    paddingRight:15,
    height:height(8.75),
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
  inputContainerStyle: {
    width:'10%',
    marginHorizontal:10,
    height:height(7.75),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
});
export default styles;
