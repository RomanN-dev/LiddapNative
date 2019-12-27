import React ,{Component} from 'react'
import { StyleSheet , TouchableOpacity, Image } from 'react-native'


export default class BaseTouch extends Component {
    constructor(props) {
        super(props)
        this.containerStyle = {...styles.baseStyle , ...(props.containerStyle || {})}
        this.press = this.props.press
        this.source = this.props.source
    }

    render() {
        return(
            <TouchableOpacity onPress={this.press} style={this.containerStyle}>
                <Image source={this.source}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    baseStyle:{
        height:40, 
        width:40 ,
    }
})