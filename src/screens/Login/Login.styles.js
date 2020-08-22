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
    marginBottom:height(3)
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
    fontSize:width(4.5),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'
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
    fontSize:width(4.5),
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'
  },
  label:{
    paddingLeft:width(10),
    fontSize:width(3.5),
    color:color.darkBlue,
    paddingVertical:height(1),
    fontWeight:'bold'
  },
  line:{
    width:width(90),
    alignSelf:'center',
    borderBottomColor:color.white,
    borderBottomWidth:0.7,
    marginVertical:height(5)
  },
  forgot:{
    paddingLeft:width(10),
    fontSize:width(3.7),
    color:color.darkBlue,
    paddingTop:height(1),
    fontWeight:'bold'
  },
  signup:{
    alignSelf:'center',
    fontSize:width(4.3),
    color:color.darkBlue,
    paddingTop:height(4.5),
    fontWeight:'bold'
  },
  signupHeading:{flexDirection:'row-reverse',width:width(80),alignSelf:'center',alignItems:'flex-end',marginTop:-height(2)},
  dot:
  {
  width:3,
  height:3,
  borderRadius:3,
  backgroundColor:color.orange,
  margin:height(0.3)
  },
  
  signupHeadingText:{
    paddingRight:width(1),
    fontSize:width(4.2),
    color:color.darkBlue,
  },
  signupLabel:{
    paddingLeft:width(10),
    fontSize:width(3.5),
    color:color.darkBlue,
    paddingBottom:height(1),
    fontWeight:'bold'    
  },
  signupLine:{
    width:width(90),
    alignSelf:'center',
    borderBottomColor:color.white,
    borderBottomWidth:0.7,
    marginTop:height(2),
    marginBottom:height(3)
  },
  signupWith:{
    alignSelf:'center',
    fontSize:width(4.3),
    color:color.darkBlue,
    fontWeight:'bold'    
  }
});
export default styles;
