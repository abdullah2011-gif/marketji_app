import React, {useState} from 'react';
import {View, TextInput,Image, TouchableOpacity} from 'react-native';
import styles from './TextInput.styles';
import color from '../../utills/Colors';
import {totalSize} from 'react-native-dimension';

const Component = (
  {
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    editable,
    formatText,
    onSubmit,
    returnKeyType,defaultValue
  },
  ref,
) => {
  const [pass, setPass] = useState(true);
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType ? keyboardType : 'default'}
        fontSize={totalSize(1.95)}
        placeholderTextColor={color.black}
        style={{color: color.black, fontSize: totalSize(1.9), width: '90%'}}
        formatText={formatText}
        secureTextEntry={!pass ? false : secureTextEntry}
        autoCapitalize="none"
        value={value}
        // disabled={onIconPress?true:false}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        defaultValue={defaultValue}
        ref={ref}
        returnKeyType={returnKeyType ? returnKeyType : 'done'}
        editable={editable}
        activeLineWidth={0}
        lineType={'none'}
        tintColor={color.lightBrown}
        inputContainerStyle={styles.inputContainerStyle}
      />
      {secureTextEntry ? (
        <TouchableOpacity activeOpacity={0.8} onPress={() => setPass(!pass)}>
        <Image
          source={pass ? require('../../assets/show.png') : require('../../assets/hide.png')}
          color={color.black}
          style={{width:20,height:20}}
          />
          </TouchableOpacity>
      ):<View style={{width:20}} />}
    </View>
  );
};

export default React.forwardRef(Component);
