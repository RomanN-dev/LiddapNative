import React, {Component} from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard,
    Image, 
    Platform ,
    ScrollView
} from 'react-native';
import {RedButton} from '../components/Buttons'
import tempImage from '../constants/tempAssets'
import {UserAvatarSmall} from '../components/UserAvatar'
import ListOfImages from '../components/ListOfImages'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

const AVATAR = 'https://d18f8z23nst80e.cloudfront.net/uploads/user/avatar/51/medium_a881eea0a1.jpg'

const USER_NAME = 'Hello World'

const LOREM = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

export default class Profile extends Component  {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.headerView}>
                        <Image source={{uri:tempImage}} style={styles.mapImage} />
                        <View style={styles.avatarContainer}>
                            <UserAvatarSmall typeStyle={false} image={AVATAR} />
                        </View>
                        <View style={styles.userNameContainer}>
                           <Text style={styles.subText}> {USER_NAME} </Text>
                        </View>
                    </View>
                    <View style={styles.callButtonContainer}>
                        <RedButton customStyle={styles.callButton} text={'Call'} />
                    </View>
                    <View style={styles.orderButtonContainer}>
                        <RedButton customStyle={styles.orderButton} text={'Navigate'} />
                    </View>
                    <ScrollView >
                      <View style={{paddingHorizontal:20}}>
                          <Text style={styles.mainText}>About Me</Text>
                        <View >
                          <Text style={styles.subText}>{LOREM} </Text>
                        </View>
                        <Text style={styles.mainText}>Services</Text>
                      </View>
                        <ListOfImages />
                    </ScrollView>
                </View>
            
          );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A37',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerView: {
    position:'absolute',
    flexDirection:'row',
    height:'40%',
    width:'100%'
  },
  mapImage: {
    width: '100%', 
    height: '100%', 
    opacity:1, 
    position:'absolute', 
    top:0, 
    borderRadius:50,
    borderWidth:3,
    borderColor:'white'
  },
  avatarContainer:{
    height:'80%', 
    width:'25%', 
    justifyContent:'flex-end',
    paddingLeft:20
  },
  userNameContainer:{
    height:'70%', 
    width:'40%', 
    justifyContent:'flex-end', 
    paddingLeft:20
  },
  mainTextContainer: {
    width: '80%',
  },
  mainText: {
    paddingTop:20,
    fontSize: 32,
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

  callButton:{
    justifyContent: 'center',
    height: "70%",
    width: '80%',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 5,
    position:'absolute',
    left:20,
  },
  orderButton: {
    justifyContent: 'center',
    height: "70%",
    width: '40%',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 5,
    position:'absolute',
    left:0
  },
  callButtonContainer:{
    height:'40%', 
    width:'40%', 
    position:'absolute', 
    left:0, 
    justifyContent:'flex-end'
  },
  orderButtonContainer:{
    height:'40%', 
    width:'80%', 
    left:"30%", 
    justifyContent:'flex-end'
  },

});



