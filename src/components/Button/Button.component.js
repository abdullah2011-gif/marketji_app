import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Button.Styles';

const Component = ({ title, onPress,containerStyle,labelStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.container,containerStyle]}>
      <Text style={[styles.text,labelStyle]}>{title}</Text>
    </TouchableOpacity>);
};

export default Component;
