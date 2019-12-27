import React, {Component} from 'react';
import { StyleSheet,Dimensions, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import TextInputField from '../components/TextInputField'
import {RedButton} from '../components/Buttons'
import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'
import TouchableText from '../components/BaseComponents/TouchableText'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const AGREEMENT = 'By clicking Sign up you agree to the following Terms and Conditions without reservation'

export default class SignUp extends Component  {
    constructor(props) {
        super(props)
    }

    static navigationOptions = () => {
        return {
            title: 'Sign up',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37',
              },
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <BasePanel>  
            <ActionPanel containerStyle={{paddingVertical:30}}>
              <Text style={styles.mainText}>Create an account</Text>
            </ActionPanel>  
            <ActionPanel>
                <TextInputField text='Username'/>
                <TextInputField text='Email'/>
                <TextInputField text='Phone'/>
                <TextInputField text='Date of birth'/>
                <TextInputField text='Password'/> 
            </ActionPanel> 
            <ActionPanel containerStyle={{flex:4,paddingVertical:10}}>
              <RedButton press={()=>{navigate('Home')}} text={'SIGNUP'}/>
            </ActionPanel>
            <ActionPanel containerStyle={{flex:1, paddingVertical:10}}>
              <TouchableText text={AGREEMENT} press={()=>{}}/>  
            </ActionPanel>
            </BasePanel>  
          );
    }
}


const styles = StyleSheet.create({
  mainText: {
    fontSize: 38,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight:'bold',
    lineHeight: 45,
  },
  subText: {
    fontSize: 13,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    textAlign: 'center',
  },
});



