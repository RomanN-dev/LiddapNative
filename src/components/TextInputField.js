import React, { Component } from 'react';
import { TextInput, StyleSheet, Keyboard } from 'react-native';

export default class TextInputField extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder= {this.props.text}
        placeholderTextColor = {'white'}
      />
    );
  }
}

const styles = StyleSheet.create({
  input:  { 
    backgroundColor: 'rgba(79,83,94,1)', 
    height: 45, 
    borderRadius: 22, 
    color:'white' ,
    paddingHorizontal: '5%',
    marginVertical: '1%'
  }
})