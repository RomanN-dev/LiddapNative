import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import ProfileModal from '../components/ProfileModal'

import MapView from "react-native-maps";
const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class Map extends Component {
      constructor(props) {
      super(props)
      this.state = {
        modalPressed: false,
        loaded: false,
        dataModal: {},
        rubric: this.props.navigation.getParam('itemId', 'NO-ID'),
        location: this.props.navigation.getParam('location', 'NO-LOC'),
        markers: this.props.navigation.getParam('markers', 'NO-MARK'),
        region: {
          latitude: this.props.navigation.getParam('latitude', 'NO-LAT'),
          longitude: this.props.navigation.getParam('longitude', 'NO-LOT'),
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }
      }
    }
  static navigationOptions = {
    title: 'map',
  };

  componentDidUpdate() {
    if(this.state.markers !== this.props.navigation.getParam('markers', 'NO-MARK')){
      this.setState({
        markers: this.props.navigation.getParam('markers', 'NO-MARK'),
        rubric: this.props.navigation.getParam('itemId', 'NO-ID'),
        location: this.props.navigation.getParam('location', 'NO-LOC'),
        region: {
          latitude: 34.8186 || this.props.navigation.getParam('latitude', 'NO-LAT'),
          longitude: 31.8969 || this.props.navigation.getParam('longitude', 'NO-LOT'),
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        }
      })
    }
  }

  modalPressedByUser() {
    this.setState({
      modalPressed: !this.state.modalPressed
    })
  }

  loadDataForModal(features) {
    this.setState({
      dataModal: features
    })
  }

  async getCoordinate() {
    this.setState({
      loaded: true,
      region: {
        latitude: this.state.location.latitude || 34.8186,
        longitude: this.state.location.longitude || 31.8969,
        latitudeDelta: 0.54864195044303443,
        longitudeDelta: 0.540142817690068,
      }
    }) 
  }

  loadAnimation() {
    this.getCoordinate()
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.2); // animate 30% away from landing on the next item
      if (index >= this.state.markers.features.length) {
        index = this.state.markers.features.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinates } = this.state.markers.features[index].geometry;
          this.map.animateToRegion(
            {
              latitude: coordinates[1],
              longitude: coordinates[0],
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            500
          );
        }
      }, 10);
    });
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }
  componentWillUnmount() {
    console.log('here')
  }
  componentWillReceiveProps() {
    this.setState({
      markers: this.props.navigation.getParam('markers', 'NO-ID')
    })
    // this.loadAnimation()
  }

  componentDidMount() {
    this.state.markers.features
    this.loadAnimation()
  }

  render() {
      const interpolations = this.state.markers.features.map((features, index) => {
        const inputRange = [
          (index - 1) * CARD_WIDTH,
          index * CARD_WIDTH,
          ((index + 1) * CARD_WIDTH),
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 2.5, 1],
          extrapolate: "clamp",
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.35, 1, 0.35],
          extrapolate: "clamp",
        });
        return { scale, opacity };
      });
    
    return (
      
      <View style={styles.container}>
       {this.state.markers && <MapView
          ref={map => this.map = map}
          initialRegion={this.state.region}
          style={styles.container}
        >
          {this.state.markers.features.map((features, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale,
                },
              ],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            
            return (
              
              <MapView.Marker key={index} coordinate={
                {
                latitude: parseFloat(features.geometry.coordinates[1]),
                longitude: parseFloat(features.geometry.coordinates[0]),
                }}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            );
          })}
        </MapView>}
        {this.state.markers && <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.features.map((features, index) => (
            <TouchableOpacity onPress={()=> {this.modalPressedByUser(); this.loadDataForModal(features)}} style={styles.card} key={index}>
              <Image
                source={{uri:features.properties.avatar_medium}}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{features.properties.name}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {features.properties.phone}
                </Text>
              </View>
              <ProfileModal features={this.state.dataModal} position={this.state.modalPressed} close={()=> this.modalPressedByUser()}/>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    borderRadius:10,
    borderColor:'white',
    elevation: 2,
    backgroundColor: "#242A37",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius:10
  },
  textContent: {
    flex:1
  },
  cardtitle: {
    fontSize: 15,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 13,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    textAlign: 'center',
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});


