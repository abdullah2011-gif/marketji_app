import { StyleSheet } from 'react-native';
// import Colors from '../../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';

const styles = StyleSheet.create({
  modal: { justifyContent: 'center', alignItems: 'center' },
  modalContainer: {
    width: width(100),
    height: height(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  swcondaryContainer: {
    width: width(70),
    paddingVertical: height(1.5),
    maxHeight: height(50),
    borderRadius: 15,
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
  },
  text: { maxWidth: '90%', alignSelf: 'center', fontSize: totalSize(2), paddingVertical: height(3) },
  button: { width: '60%', height: height(5) },
});
export default styles;
