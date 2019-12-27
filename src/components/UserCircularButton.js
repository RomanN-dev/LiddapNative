import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity,Image, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import ApiRequests from '../enteties/apiRequests'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

export default class UserCircularImageButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {image, name, rubric} = this.props
        return (
            <TouchableOpacity data={data} onPress={()=>this.props.press(rubric)} text='Log In' style={{margin: 5}}  title={"circular"}> 
            <LinearGradient
                colors={['#F78361', '#F54B64']}
                style={styles.insideCircular}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                <Image style={styles.images} source={{uri:image}}/>
                </LinearGradient>
                <Text style={styles.nameText}>
                    {name}
                </Text>
            </TouchableOpacity>
        )
    }
}
       


const styles = StyleSheet.create({
  
    nameText: {
        fontSize: 11,
        fontFamily: FONT_PER_DIVICE,
        color: "white",
        paddingTop: 5, 
        alignSelf:'center',
    },
    images: {
        margin: 2,
        height:58,
        width: 58,
        borderRadius: 29, 
        borderWidth:3,
        borderColor: '#242A37'
    },
    insideCircular: {
        height: 62,
        width: 62,  
        borderRadius: 30, 
    }
  });

