import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: color.white,
    marginHorizontal: height(0.3),
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginVertical: height(5),
  },
  flatListCont: {
    width: width(83),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistMain: {
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
  heartCont: {
    width: width(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heart: {
    width: width(5),
    height: width(5),
    resizeMode: 'contain',
  },
});
export default styles;
