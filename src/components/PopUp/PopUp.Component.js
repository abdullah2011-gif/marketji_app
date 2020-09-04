import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,Modal
} from 'react-native';
import styles from './PopUp.styles';
import {setLoading} from '../../Redux/Actions/Auth'
import {useSelector,useDispatch} from 'react-redux'
// import Button from '../BlueButtonComponent/BlueButtonComponent.Component';
import { width } from 'react-native-dimension';
const Component = ({  onVisible }) => {
  const loading  = useSelector(state=>state.Auth.loading)
  const dispatch = useDispatch()
  // {console.log(alert)}
  return (
    <Modal
     
      visible={loading.visible}
      transparent={true}
      onBackdropPress={()=>dispatch(setLoading(false))}
      onBackButtonPress={()=>dispatch(setLoading(false))}>
        <View style={styles.modalContainer}>
     <ActivityIndicator color={'#ffffff'} size={width(18)} />
        </View>
    </Modal>
  );
};

export default Component;
