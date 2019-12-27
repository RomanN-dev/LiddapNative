import React, {Component} from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    Image, 
    Platform ,
    ScrollView,
    TouchableOpacity
} from 'react-native';
// import {Linking} from 'expo'
import {RedButton} from '../components/Buttons'
import tempImage from '../constants/tempAssets'
import {UserAvatarSmall} from '../components/UserAvatar'
import ListOfImages from '../components/ListOfImages'

import NavApps from '../components/NavApps'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

const AVATAR = "https://www.google.com/maps/place/31%C2%B047'24.3%22N+34%C2%B039'12.8%22E/@31.790073,34.653552,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d31.790073!4d34.653552"

const LOREM = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

export default class Profile extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            name : this.props.features,
            phone: this.props.features.properties.phone,
            navButton : true
        }
        console.log(this.props.features.geometry.coordinates)
    }

    makeCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${this.state.phone}`;
        } else {
          phoneNumber = `telprompt:${this.state.phone}`;
        }
    
        // Linking.openURL(phoneNumber);
      };

    navButtonPressed() {
      this.setState({
        navButton: !this.state.navButton
      })
    }

    render() {
        return (
                <View style={styles.container}>
                  <TouchableOpacity style={{position:'absolute',top:50, right:30,zIndex:5}} onPress={()=>{this.props.close(); this.navButtonPressed()}}>
                            <Image style={{ width: 50,height: 50}} source={require('../assets/closeImage.png')}/>
                        </TouchableOpacity>
                    <View style={styles.headerView}>
                        <Image source={{uri:tempImage}} style={styles.mapImage} />
                        <View style={styles.avatarContainer}>
                            <UserAvatarSmall typeStyle={false} image={this.props.features.properties.avatar_medium} />
                        </View>
                        <View style={styles.userNameContainer}>
                           <Text style={styles.nameText}> {this.props.features.properties.name} </Text>
                        </View>
                    </View>
                    <View style={styles.callButtonContainer}>
                        <RedButton press={this.makeCall} customStyle={styles.callButton} text={'Call'} />
                    </View>
                    <View style={styles.orderButtonContainer}>
                        {this.state.navButton ? <RedButton press={()=>{this.navButtonPressed()}} customStyle={styles.orderButton} text={'Navigate'} />: 
                      <View style={{flexDirection:'row',alignItems:'center', }}>
                          <NavApps coordinates = {this.props.features.geometry.coordinates}/>
                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center', }} onPress={()=>{this.navButtonPressed()}}>
                            <Text style={{fontSize:18, fontWeight:'bold'}}>Close</Text>
                            <Image style={{ width: 20,height: 20}} source={require('../assets/closeImage.png')}/>
                          </TouchableOpacity>
                          
                      </View>
                      }
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
    opacity:0.5, 
    position:'absolute', 
    top:0, 
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
    paddingLeft:20,
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
  nameText: {
    fontSize: 22,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight:'bold',
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



