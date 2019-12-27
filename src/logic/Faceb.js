import * as Facebook from 'expo-facebook';
import {Alert} from 'react-native'

const FACEBOOK_APP_ID = '385460408705599'

export class FaceB {

    async logIn() {
        try {
          const {type, token} = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
            permissions: ['public_profile','email'],
          });
          if (type === 'success') {
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,name,picture.type(large)`);
            return await (response.json())
          }
          if(type === 'cancel') {
            Alert.alert(`Facebook Login Canceled`);
            return 'cancel'
          }
        } catch ({ message }) {
          Alert.alert(`Facebook Login Error: ${message}`);
        }
      }
} 

