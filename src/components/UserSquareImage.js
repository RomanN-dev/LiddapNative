import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity,Image, Platform, Dimensions } from 'react-native';

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

export default class UserSquareImage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {image, name} = this.props
        return (
            <TouchableOpacity style={{marginHorizontal: 5}}  title={"square"}> 
                <Image style={styles.images} source={{uri:image}}/>
                <Text style={styles.nameText}>{name}</Text>
            </TouchableOpacity>
        )
    }
}
       


const styles = StyleSheet.create({
  
    nameText: {
        fontSize: 14,
        fontFamily: FONT_PER_DIVICE,
        color: "white",
        paddingTop: 5, 
        alignSelf:'flex-start',
        lineHeight: Dimensions.get('screen').width / 20,
    },
    images: {
        height: 120,
        width: 120,
        borderRadius: 10
    },
    
  });

