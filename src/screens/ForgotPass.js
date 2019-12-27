import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import TextInputField from '../components/TextInputField'
import {RedButton} from '../components/Buttons'
import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
export default class ForgotPass extends Component  {
    constructor(props) {
        super(props)
    }
    static navigationOptions = () => {
        return {
            title: 'Forgot password',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37'
              },
        }
    }
    render() {
        return (
            <BasePanel>
              <ActionPanel containerStyle={{paddingVertical:30}}>
                <Text style={styles.mainText}>Forgot Password</Text>
                <Text style={styles.subText}>Please enter your email address. You will receive a link to create a new password via email.</Text>
              </ActionPanel>
              <ActionPanel>
                <TextInputField text='Email'/>
              </ActionPanel>
              <ActionPanel containerStyle={{flex:4,paddingVertical:10}}>
                <RedButton text={'SEND'}/>
              </ActionPanel>
            </BasePanel>  
          );
    }
}


const styles = StyleSheet.create({
  mainText: {
    marginTop: '20%',
    fontSize: 42,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight:'bold',
  },
  subText: {
    fontSize: 17,
    fontFamily: FONT_PER_DIVICE,
    color: 'white'
  },
});



