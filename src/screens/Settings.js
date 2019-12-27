import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity,FlatList, Image, Platform } from 'react-native';
import {WhiteButton, RedButton, ChevronButton} from '../components/Buttons'
import ShevronIcon from '../assets/shevron.png'
import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const TITLE = "Settings"

export default class Settings extends Component {
    constructor(props) {
        super(props)
        state = {
          loading: true,
        }
    }
    
    static navigationOptions = () => {
        return {
            title: 'Settings',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#242A37'
              },
        }
    }
    render() {

      const { navigate } = this.props.navigation;
        return (
           <BasePanel containerStyle={{justifyContent:'flex-start'}} >
             <ActionPanel containerStyle={{paddingVertical:10}}>
              <Text style={styles.mainText}>{TITLE}</Text>
             </ActionPanel>
             <ActionPanel>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Edit Profile"}/>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Language"}/>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Link Account"}/>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Block Account"}/>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Search History"}/>
              <ChevronButton press={()=>{navigate('EditProfile')}} Title={"Report A Problem"}/>
             </ActionPanel>  
            </BasePanel> 
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#242A37',

  },
  mainTitleContainer: {
    flex:1,
    margin:20,
    marginTop:30,
    marginBottom:300
  },
  buttons:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between' ,
    borderBottomWidth:1,
    paddingVertical:10
  },

  mainText: {
    fontSize: 42,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight:'bold',
    lineHeight: 45,
    paddingVertical:5
  },
  subText: {
    fontSize: 17,
    fontFamily: FONT_PER_DIVICE,
    color: 'white'
  },

});



