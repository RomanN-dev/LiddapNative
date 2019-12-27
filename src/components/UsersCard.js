import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Platform, 
} from 'react-native';

import ActionPanel from './BaseComponents/ActionPanel'
import ListOfImages from './ListOfImages'
import {UserAvatarSmall} from './UserAvatar'

const ABOUT_ME = "If you are an infrequent traveler you may need some tips to keep the wife happy while you are jet setting around the globe."
const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

export default class UserCard extends Component  {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <ActionPanel containerStyle={styles.mainContainer}>
            <ActionPanel containerStyle={{paddingVertical:20, alignSelf:'flex-start'}}>
                <View style={{flexDirection: 'row', justifyContent:'flex-start'}}>
                 <UserAvatarSmall image={'https://d18f8z23nst80e.cloudfront.net/uploads/user/avatar/92/thumb_713c64fe60.jpeg'} />
                 <ActionPanel containerStyle={{justifyContent:'center', alignItems:'center'}} >
                  <Text style={styles.userNameText}>{this.props.name}</Text>
                  <Text style={styles.aboutMeText}>{ABOUT_ME}</Text>
                </ActionPanel>
                </View>
            </ActionPanel>
            <ActionPanel containerStyle={{ paddingHorizontal:'5%'}}>
                <Text style={styles.secondaryText}>Photos</Text>
            </ActionPanel>
            <ActionPanel containerStyle={{width:'100%'}}>
                <ListOfImages />
            </ActionPanel> 
        </ActionPanel>
          );
    }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    width:'100%',
    marginVertical:20,
    borderBottomWidth:10, 
    borderTopWidth:10, 
    borderLeftWidth:5,
    borderRightWidth:5,
    borderColor:'rgba(79,83,94,1)', 
    borderRadius:10,
  },
  userNameText: {
    paddingLeft: '5%',
    paddingTop: '2%',
    fontSize: 17,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
  },
  secondaryText: {
    fontSize: 28,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight: 'bold',
  },
  aboutMeText: {
    paddingHorizontal: '2%',
    fontSize: 13,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    textAlign: 'left',
  },
});



