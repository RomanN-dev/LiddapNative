import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity,
    Image, 
    Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import ShevronIcon from '../assets/shevron.png'

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
export class WhiteButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <TouchableOpacity onPress={this.props.press} style={styles.whiteButton} title={"button1"}> 
                <Text style={styles.redText} >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export class ColorlessButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <TouchableOpacity onPress={this.props.press} style={styles.colorLessButton} title={"button2"}> 
                <Text style={styles.whiteText} >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export class RedButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {customStyle} = this.props
        return(
            <TouchableOpacity onPress={this.props.press} style={styles.redButton}  title={"button3"}> 
                <LinearGradient
                    colors={['#F78361', '#F54B64']}
                    style={customStyle ? customStyle : styles.redButton}
                    start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                    <Text style={styles.whiteText}>{this.props.text}</Text>
                    </LinearGradient>
            </TouchableOpacity>
        )
    }
}

export class ChevronButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {Title, press} = this.props
        return(
            <TouchableOpacity style={styles.chevron} onPress={press}>
                <Text style={styles.subText}>{Title}</Text>
                <Image source={ShevronIcon} style={{tintColor:'white'}}/>
              </TouchableOpacity>
        )
    }

}


export class CircularButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.press} title={"circular"}> 
            <LinearGradient
            
                colors={['#F78361', '#F54B64']}
                style={styles.insideCircular}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                <Image style={styles.images} source={require('../assets/plus.png')}/>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  
    whiteButton: {
      justifyContent: 'center',
      marginTop: 10,
      height: 45,
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      marginVertical: 5
    },
    redText: {
      fontSize: 15,
      fontFamily: FONT_PER_DIVICE,
      color: "red",
      fontWeight: 'bold'
    },
    redButton: {
        justifyContent: 'center',
        height: 45,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        marginVertical: 5
    },
    whiteText: {
        fontSize: 15,
        fontFamily: FONT_PER_DIVICE,
        color: "white",
        fontWeight: 'bold'
    },
    colorLessButton: {
        justifyContent: 'center',
        marginTop: 10,
        height: 45,
        width: '100%',
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth:1,
        alignItems: 'center',
        marginVertical: 5
      },
    images: {
        marginTop: '25%',
        marginLeft: '25%',
        height:20,
        width: 20,
        alignItems:'center'
    },
    insideCircular: {
        height: 42,
        width: 42,  
        borderRadius: 21, 
    },
    chevron:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between' ,
        borderBottomWidth:1,
        paddingVertical:10
      },
      subText: {
        fontSize: 17,
        fontFamily: FONT_PER_DIVICE,
        color: 'white'
      },
  });

