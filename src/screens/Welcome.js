import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,  
  Platform,
  I18nManager,
} from 'react-native';
import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'
import BaseTouch from '../components/BaseComponents/BaseTouch'
import {WhiteButton, RedButton} from '../components/Buttons'
// import {FaceB} from '../logic/Faceb'
import {Storage} from '../logic/Storage'
// import * as Font from 'expo-font';

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const TITLE = 'Find specialists nearby'
const WITH_MILIONS = 'With milions of specialists all over the world, we gives you the ability to connect with people no matter where you are.'
const fbIcon = require('../assets/fb.png')
const twIcon = require('../assets/tw.png')
const ggIcon = require('../assets/gg.png')
I18nManager.allowRTL(false);

export default class Welcome extends Component {
  constructor() {
    super()
    state = {
      storage: null,
      face: null
    }
  }


  componentDidMount() {
    this.setState({
      storage: new Storage(),
      // face: new FaceB()
    })
  }

  

    static navigationOptions = () => {
        return {
            title: 'Welcome',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37'
              },
        }
    }

  //  async loginViaFacebook() {
  //     let response = await this.state.face.logIn()
  //     if(response !== 'cancel')
  //     this.state.storage._storeData('email', JSON.stringify(response.email))
  //   }

    async getItem() {
      await this.state.storage._retrieveData('email')
    }

    async removeItem() {
      await this.state.storage._removeData('email')
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
           <BasePanel>
              <ActionPanel>
                  <Text style={styles.mainText}>{TITLE}</Text>
                  <Text style={styles.subText}>{WITH_MILIONS}</Text>
              </ActionPanel>
              <ActionPanel containerStyle={styles.buttonContainer}>
                <WhiteButton press={()=>{navigate('Login')}} text='Log In'/>
                <RedButton press={()=>{navigate('Signup')}} text='Sign Up'/>  
              </ActionPanel>
              <ActionPanel containerStyle={styles.otherLoginContainer}>
                  <Text style={styles.otherLoginText}>Or login with</Text>
                  <ActionPanel containerStyle={styles.otherLoginIconsContainer}>
                    <BaseTouch source={fbIcon} press={()=> this.loginViaFacebook()}/>
                    <BaseTouch source={twIcon} press={()=> this.getItem() }/>
                    <BaseTouch source={ggIcon} press={()=> this.removeItem()}/>
                  </ActionPanel>
              </ActionPanel>
            </BasePanel> 
          );
    }
}


const styles = StyleSheet.create({
  mainText: {
    fontSize: 42,
    fontFamily: 'Avenir',
    color: 'white',
    fontWeight:'bold',
    lineHeight: 45,
  },
  subText: {
    fontSize: 17,
    fontFamily: FONT_PER_DIVICE,
    color: 'white'
  },
  buttonContainer:{
    paddingVertical: 20,
    flexDirection: 'column',
    width: '80%',
    alignItems: 'center'
  },
  otherLoginContainer:{
    display:'flex',
    alignItems:'center', 
    position:"absolute",
    bottom: 30
  },
  otherLoginText: {
    fontSize: 13,
    fontFamily: FONT_PER_DIVICE,
    color: "#4E586E",
  },
  otherLoginIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    height:40,
    width: 100,
  },
});



