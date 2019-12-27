import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity,FlatList, Image, Platform } from 'react-native';
import {WhiteButton, RedButton} from '../components/Buttons'
import {UserAvatarBig} from '../components/UserAvatar'
import ShevronIcon from '../assets/shevron.png'
import ImageUploader from '../logic/ImageUploader'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const TITLE = "Edit Profile"
const AVATAR = 'https://d18f8z23nst80e.cloudfront.net/uploads/user/avatar/51/medium_a881eea0a1.jpg'

const NAME = "Roman Nepomnashi"
const EMAIL = "Roman@liddap.com"
const PHONE = "0542347710"
const ADDRESS = "Hatavor street Bat-yam"


export default class EditProfile extends Component {
    constructor(props) {
        super(props)
        state = {
          loading: true,
        }
    }
    
    static navigationOptions = () => {
        return {
            title: 'Edit Profile',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37'
              },
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
           <View style={styles.container}>
             <View style={styles.mainTitleContainer}>
              <Text style={styles.mainText}>{TITLE} </Text>
             </View>
          <View style={{flex:7}}>
              <View style={styles.avatarContainer}>
                <UserAvatarBig typeStyle={false} image={AVATAR} />
                <ImageUploader/>
              </View>

              <View style={{flex:2}}>
                  <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between' ,alignItems:'center', borderBottomWidth:1}}>
                    <Text style={styles.keyTextStyle}>Name</Text>
                    <Text style={styles.valueTextStyle}>{NAME}</Text>
                  </View>
                  <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between' ,alignItems:'center', borderBottomWidth:1}}>
                    <Text style={styles.keyTextStyle}>Phone</Text>
                    <Text style={styles.valueTextStyle}>{PHONE}</Text>
                  </View>
                  <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between' ,alignItems:'center', borderBottomWidth:1}}>
                    <Text style={styles.keyTextStyle}>Email</Text>
                    <Text style={styles.valueTextStyle}>{EMAIL}</Text>
                  </View>
                  <View style={{flex:1 ,flexDirection:'row', justifyContent:'space-between' ,alignItems:'center', borderBottomWidth:1}}>
                    <Text style={styles.keyTextStyle}>Address</Text>
                    <Text style={styles.valueTextStyle}>{ADDRESS}</Text>
                  </View>
                </View>
          </View>
             
                

            </View> 
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#242A37',
    paddingHorizontal:10,
  },
  mainTitleContainer: {
    flex:1,
    marginTop:30,
    flexDirection:'row'
  },
  avatarContainer:{ 
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
  },
  mainText: {
    fontSize: 42,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight:'bold',
    lineHeight: 45,
    paddingVertical:5
  },
  
  changeProfilePictureButton: {
    fontFamily: FONT_PER_DIVICE,
    fontSize: 19,
    color: '#F54B64',
  },
  keyTextStyle: {
    fontFamily: FONT_PER_DIVICE,
    fontSize: 16,
    color: 'grey',
  },
  valueTextStyle: {
    fontFamily: FONT_PER_DIVICE,
    fontSize: 16,
    color: 'white',
  },

});



