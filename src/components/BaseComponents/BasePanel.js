import React ,{Component} from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'


export default class BasePanel extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...styles.baseStyle , ...(props.containerStyle || {})}
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={this.containerStyle}>
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}


const styles = StyleSheet.create({
    baseStyle:{
        flex:1,
        backgroundColor: '#242A37',
        alignItems: 'center',
        justifyContent: 'center',
    }
})