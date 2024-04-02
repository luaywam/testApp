import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import  { stylesB }  from './styles.js';

const MyButton = () => {
  return (
    <TouchableOpacity
      style={stylesB.button}
      onPress={() => {
        // Handle button press action here
        console.log('Button pressed!');
      }}
    >
      <Text style={stylesB.buttonText}>Press me </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
