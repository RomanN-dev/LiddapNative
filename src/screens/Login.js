import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import TextInputField from '../components/TextInputField'
import {RedButton} from '../components/Buttons'
import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'
import TouchableText from '../components/BaseComponents/TouchableText'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const FORGOT_PASS = "Forgot your password?"

export default class Login extends Component  {
    constructor(props) {
        super(props)
    }

    static navigationOptions = () => {
        return {
            title: 'Log In',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37'
              },
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <BasePanel>
              <ActionPanel containerStyle={{paddingVertical:30}}>
                <Text style={styles.mainText}>Welcome back</Text>
                <Text style={styles.subText}>Login to your account</Text>
              </ActionPanel>
              <ActionPanel >
                    <TextInputField text='Email'/>
                    <TextInputField text='Password'/>
              </ActionPanel>
              <ActionPanel containerStyle={{flex:4,paddingVertical:10}}>
                <RedButton text={'LOGIN'}/>
                <TouchableText press={()=>{navigate('ForgotPass')}} containerStyel={styles.forgotText} text={FORGOT_PASS}/>
              </ActionPanel>
            </BasePanel>  
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A37',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mainTextContainer: {
    width: '80%',
  },
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
  forgotText: {
    fontSize: 17,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    
  },
  formField: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: '20%'
  },
  buttonContainer:{
    marginVertical:40,
    flexDirection: 'row',
    justifyContent:'center',
  },
});



