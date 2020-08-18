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
  line:{
    width:width(90),
    alignSelf:'center',
    borderBottomColor:color.white,
    borderBottomWidth:0.7,
    marginVertical:height(5)
  },
});
export default styles;
