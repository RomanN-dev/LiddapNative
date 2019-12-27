import React, {Component} from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default class Animation extends Component {
  componentDidMount(){
    this.animation.play()
  }
  
  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/animation/data.json")}
        />
        <Button title={"run"} onPress={()=>{this.animation.play()}}>

        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
