import React, {Component} from 'react';
import { StyleSheet,Image } from 'react-native';

export class UserAvatarSmall extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {image, typeStyle = true} = this.props
        return (
               <Image style={typeStyle ? styles.images : styles.imagesBig } source={{uri:image}}/>    
        )
    }
}

export class UserAvatarBig extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {image, typeStyle = true} = this.props
        return (
               <Image style={typeStyle ? styles.images : styles.bigImage } source={{uri:image}}/>    
        )
    }
}
       


const styles = StyleSheet.create({
    images: {
        margin: 2,
        height:58,
        width: 58,
        borderRadius: 29, 
        borderWidth:3,
        borderColor: '#242A37'
    },
    imagesBig: {
        margin: 2,
        height:90,
        width: 90,
        borderRadius: 45, 
        borderColor: '#242A37'
    },
    bigImage:{
        margin: 2,
        height:200,
        width: 200,
        borderRadius: 100, 
        resizeMode:'stretch'
    }
  });

