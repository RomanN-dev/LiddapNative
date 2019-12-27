import React ,{Component} from 'react'
import { StyleSheet ,View, Text, TouchableOpacity, Platform } from 'react-native'
const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

export default class TouchableText extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...props.containerStyle || {}, ...styles.baseStyle}
        this.press = this.props.press
        this.text = this.props.text
    }

    render() {
        return(
            <View style={this.containerStyle}>
                <TouchableOpacity onPress={this.press}>
                    <Text style={styles.subText}>{this.text}</Text>
                </TouchableOpacity>
            </View>
           
        )
    }
}


const styles = StyleSheet.create({
    baseStyle:{
        
    },
    subText: {
        fontSize: 13,
        fontFamily: FONT_PER_DIVICE,
        color: 'white',
        textAlign: 'center',
        padding:10,
      },
})