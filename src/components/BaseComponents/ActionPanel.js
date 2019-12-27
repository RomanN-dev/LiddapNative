import { StyleSheet } from 'react-native'
import BasePanel from './BasePanel'


export default class ActionPanel extends BasePanel {
    constructor(props) {
        super(props)
        this.containerStyle = {...styles.baseStyle , ...(props.containerStyle || {})}
    }
}

const styles = StyleSheet.create({
    baseStyle:{
        width: '80%',
    }
})