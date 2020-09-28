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
    marginTop: height(2.5),
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
    fontSize: width(5.5),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
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
    fontSize: width(5.5),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
  label: {
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
    paddingRight: width(10),
    fontSize: width(6),
    color: color.darkBlue,
    paddingVertical: height(1),
    
  },
  line: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginVertical: height(4),
    
  },
  forgot: {
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
    paddingRight: width(10),
    fontSize: width(5),
    color: color.darkBlue,
    paddingTop: height(1),
    
  },
  signup: {
    alignSelf: 'center',
    fontSize: width(7),
    color: color.darkBlue,
    paddingTop: height(4.5),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
  },
  warning: {
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
    alignSelf: 'center',
    fontSize: width(3.5),
    color: color.darkBlue,
    paddingTop: 10,
    paddingBottom: -height(2.5),
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
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
    paddingRight: width(1),
    fontSize: width(5.5),
    color: color.darkBlue,
  },
  signupLabel: {
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
    paddingRight: width(13),
    fontSize: width(6),
    color: color.darkBlue,
    paddingVertical:height(0.2),
    paddingBottom: height(1),
    
  },
  signupLine: {
    width: width(90),
    alignSelf: 'center',
    borderBottomColor: color.white,
    borderBottomWidth: 0.7,
    marginTop: height(1),
    marginBottom: height(1),
  },
  signupWith: {
    alignSelf: 'center',
    fontSize: width(5),
    color: color.darkBlue,
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular',
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
  logoGoogle: {width: width(15), height: height(7), resizeMode: 'contain'},
  logo: {width: width(15), height: height(5), resizeMode: 'contain'},
  
});
export default styles;
