import React from 'react';
import {  Text} from 'react-native';

const Component = (props) => {
  return (
      <Text style={[{fontFamily:'Ara-Hamah-Sahet-AlAssi-Regular'},props.styles]} {...props} >{props.children}</Text>
  )};

export default Component;
