import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { ColorlessButton } from './Buttons'
import LinearGradient from 'react-native-linear-gradient'
import {UserAvatarSmall} from './UserAvatar'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const AVATAR = 'https://d18f8z23nst80e.cloudfront.net/uploads/user/avatar/92/thumb_713c64fe60.jpeg'
const NAME = "Jenifer Lopez"
export default class Menu extends Component {
    constructor(props) {
        super(props)
        state = {
          loading: true
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
                 <LinearGradient style={{flex:1, flexDirection:'column',justifyContent:'flex-start'}} colors={['#F78361', '#F54B64']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>   
                 <View style={{height:"15%",justifyContent:'flex-end', alignItems:'center'}}>
                   <TouchableOpacity onPress={()=>{navigate('EditProfile')}}>
                    <UserAvatarSmall typeStyle={false} image={AVATAR} />
                   </TouchableOpacity>
                 </View>
                 <View style={{height:"5%",justifyContent:'center', alignItems:'center',}}>
                  <Text style={styles.secondaryText}>{NAME}</Text>
                 </View>
                 <View style={{ paddingHorizontal:10}}>
                        <ColorlessButton text={"Feed"} press={()=>{navigate('Home')}}  />
                  </View>
                  <View style={{ paddingHorizontal:10}}>
                        <ColorlessButton text={"Discover"} press={()=>{navigate('Discover')}}/>
                  </View>
                  <View style={{ paddingHorizontal:10}}>
                        <ColorlessButton text={"Activity"} press={()=>{navigate('Activity')}}/>
                  </View>
                 <View style={{ paddingHorizontal:10}}>
                        <ColorlessButton text={"Settings"} press={()=>{navigate('Settings')}}/>
                  </View>

                 <View style={{flex:1, justifyContent:'flex-end', padding:10}}>
                        <ColorlessButton text={"Exit"} press={()=>{navigate('Welcome')}}/>
                    </View>
                   
                </LinearGradient>
              
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryText: {
    fontSize: 28,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight: 'bold',
  },
});



