import { StyleSheet } from 'react-native';
import Colors from '../../utills/Colors';
import { width } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(12),
    backgroundColor: Colors.darkBlue,
    width: '80%',
    alignSelf: 'center',
    paddingVertical: 10,
    margin: 8,
  },
  text: {
    color: "white",
    fontSize: width(7),
    textShadowRadius: 0.1,
    textShadowColor: Colors.darkGreen,
    textShadowOffset: { width: 1.2, height: 1.2 },
    fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'
  }
});
export default styles;
