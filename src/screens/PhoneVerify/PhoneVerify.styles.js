import {StyleSheet} from 'react-native';
import color from '../../utills/Colors';
import {width, height, totalSize} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    width: width(80),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height(4),
    marginBottom: height(3),
  },
  activeView: {
    width: '50%',
    borderBottomColor: color.orange,
    borderBottomWidth: 5,
  },
  activeText: {
    paddingVertical: 1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: color.white,
    marginBottom: 4,
    color: color.orange,
    fontSize: width(4.5),
  },
  inactiveView: {
    width: '50%',
    borderBottomColor: color.white,
    borderBottomWidth: 5,
  },
  inactiveText: {
    paddingVertical: 1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'transparent',
    marginBottom: 4,
    color: color.darkBlue,
    fontSize: width(4.5),
  },
  label: {
    paddingLeft: width(10),
    fontSize: width(3.5),
    color: color.darkBlue,
    paddingVertical: height(1),
    fontWeight: 'bold',
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginVertical: height(5),
  },
  forgot: {
    paddingLeft: width(10),
    fontSize: width(3.7),
    color: color.darkBlue,
    paddingTop: height(1),
    fontWeight: 'bold',
  },
  signup: {
    alignSelf: 'center',
    fontSize: width(4.3),
    color: color.darkBlue,
    paddingTop: height(4.5),
    fontWeight: 'bold',
  },
  signupHeading: {
    flexDirection: 'row-reverse',
    width: width(80),
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginTop: -height(2),
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: color.orange,
    margin: height(0.3),
  },

  signupHeadingText: {
    paddingRight: width(1),
    fontSize: width(4.2),
    color: color.darkBlue,
  },
  signupLabel: {
    paddingLeft: width(10),
    fontSize: width(3.5),
    color: color.darkBlue,
    paddingBottom: height(1),
    fontWeight: 'bold',
  },
  signupLine: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginTop: height(2),
    marginBottom: height(3),
  },
  signupWith: {
    alignSelf: 'center',
    fontSize: width(4.3),
    color: color.darkBlue,
    fontWeight: 'bold',
    marginTop:height(15),
    textAlign:'center',
    width:width(75)
  },
  logoContainer: {
    width: width(30),
    alignSelf: 'center',
    marginTop: height(1),
    height: height(6),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {width: width(15), height: height(5), resizeMode: 'contain'},
  otpContainer: {
    width: width(90),
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: height(5),
},
otpViewContainer: {
    width: width(75),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    textAlign:'left'
},
underlineStyleBase: {
  borderColor: '#ffffff',
  padding: 2,
  borderRadius: 5,
  width: width(10),
  height: height(7.5),
  fontSize: totalSize(2.25),
  fontWeight: 'bold',
  color: color.darkBlue,
  backgroundColor:'#ffffff'
},
underlineStyleHighLighted: {
  borderColor: 'transparent',
  color: 'transparent',
  fontSize: totalSize(2.5),
},
warning: {
  alignSelf: 'center',
  fontSize: width(3.5),
  color: color.darkBlue,
  paddingTop: 10,
  paddingBottom: -height(2.5),
  fontWeight: 'bold',
},
});
export default styles;
