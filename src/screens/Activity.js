import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, TouchableOpacity,FlatList, Image, Platform } from 'react-native';
import {WhiteButton, RedButton} from '../components/Buttons'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null


export default class Activity extends Component {
    constructor(props) {
        super(props)
        state = {
          loading: true,
        }
    }
    
    static navigationOptions = () => {
        return {
            title: 'Activity',
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
             
            </View> 
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#242A37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainWellcomContainer: {
    width: '80%',
  },
  mainText: {
    fontSize: 42,
    fontFamily: FONT_PER_DIVICE,
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
    flex:1, 
    alignItems:'center', 
    justifyContent:'center', 
    position:'absolute', 
    bottom:0
  },

  otherLoginText: {
    fontSize: 13,
    fontFamily: FONT_PER_DIVICE,
    color: "#4E586E",
  },
  otherLoginIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20%',
    height:40,
    width: 100,
    
  },
});



