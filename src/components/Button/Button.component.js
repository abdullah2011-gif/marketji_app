import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.Styles';

const Component = ({ title, onPress,disabled,containerStyle,labelStyle }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7} style={[styles.container,containerStyle]}>
      <Text style={[styles.text,labelStyle]}>{title}</Text>
    </TouchableOpacity>);
};

export default Component;
