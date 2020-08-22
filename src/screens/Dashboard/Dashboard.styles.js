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
  upperview:{
    width: width(7),
    height: height(1.5),
    marginRight: width(1),
    borderTopColor: color.white,
    borderTopWidth: 2,
    borderRightColor: color.white,
    borderRightWidth: 2,
  },
  view:
  {
    width: width(7),
    height: height(1.5),
    marginLeft: width(1),
    borderBottomColor: color.white,
    borderBottomWidth: 2,
    borderLeftColor: color.white,
    borderLeftWidth: 2,
  },
  image:{
    width: '100%',
    height: '100%',
    // borderTopRightRadius: index % 2 == 0 ? width(5) : 0,
    // borderBottomRightRadius: index % 2 == 0 ? width(5) : 0,
    // borderTopLeftRadius: index % 2 != 0 ? width(5) : 0,
    // borderBottomLeftRadius: index % 2 != 0 ? width(5) : 0,
  },
});
export default styles;
