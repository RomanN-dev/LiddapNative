import React, { Component } from 'react';
import { View, Modal,
} from 'react-native';
import Profile from './Profile'

export default class ModalTest extends Component {
    constructor(props) {
        super(props)
    }
 

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.position}
          onRequestClose={() => {
            this.props.close()
          }}>
            <Profile features={this.props.features} close={()=>this.props.close()}/>
        </Modal>
      </View>
    );
  }
}
