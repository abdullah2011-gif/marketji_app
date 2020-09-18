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
  header: {
    width: width(100),
    height: height(6),
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    alignItems: 'center',
    backgroundColor: color.white,
  },
  headerImage: {width: width(5), height: height(4)},
  backImage: {
    width: width(3.5),
    marginRight: width(2.5),
    height: height(2),
    resizeMode: 'contain',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    marginTop: height(2),
  },
  whiteLines: {
    width: width(7),
    height: height(1.5),
    marginRight: width(1),
    borderTopColor: color.white,
    borderTopWidth: 2,
    borderRightColor: color.white,
    borderRightWidth: 2,
  },
  whiteLineLeft: {
    width: width(7),
    height: height(1.5),
    marginLeft: width(1),
    borderTopColor: color.white,
    borderTopWidth: 2,
    borderLeftColor: color.white,
    borderLeftWidth: 2,
  },
  flatlistContainer: {
    marginBottom: height(2),
    justifyContent: 'space-between',
    width: width(100),
  },
  flatlistMain: {width: width(47.5), height: height(19.8)},
  title: {
    paddingTop: height(1.5),
    textAlign: 'center',
    color: color.white,
    fontSize: width(4.2),
  },
  horizintalDotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    paddingVertical: height(2),
    alignItems: 'flex-end',
  },
  whiteLinesMain: {
    width: width(7),
    height: height(1.5),
    marginRight: width(1),
    borderBottomColor: color.white,
    borderBottomWidth: 2,
    borderRightColor: color.white,
    borderRightWidth: 2,
  },
  whiteLineLeftMain: {
    width: width(7),
    height: height(1.5),
    marginLeft: width(1),
    borderBottomColor: color.white,
    borderBottomWidth: 2,
    borderLeftColor: color.white,
    borderLeftWidth: 2,
  },
  bottom: {
    width: width(100),
    height: height(7),
    marginTop: height(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width(5),
    alignItems: 'center',
    backgroundColor: color.white,
  },
  cart: {
    color: color.white,
    fontSize: width(4.4),
    backgroundColor: color.darkBlue,
    overflow: 'hidden',
    borderRadius: width(1),
    paddingHorizontal: width(3),
    paddingVertical: height(0.6),
  },
  payment: {
    fontSize: width(4),
    fontWeight: 'bold',
    color: color.orange,
    marginRight: width(2),
  },
  cartImage: {
    width: width(6),
    resizeMode: 'contain',
    height: height(4.5),
  },
  image:{
    width:'100%',
    height:'100%',
  }
});
export default styles;
