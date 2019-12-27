import React, { Component } from 'react';
import Location from 'react-native-location';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import Constants from 'expo-constants';

import { 
  StyleSheet, 
  Text,
  Platform,
  BackHandler,
  RefreshControl,
  View,
  TouchableOpacity
} from 'react-native';

import BasePanel from '../components/BaseComponents/BasePanel'
import ActionPanel from '../components/BaseComponents/ActionPanel'
import LinearGradient from 'react-native-linear-gradient'
import TextInputField from '../components/TextInputField'
import ListImageButton from '../components/ListImageButton'
import ApiRequests from '../enteties/apiRequests'
import UsersCard from '../components/UsersCard'
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views';

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      errorMessage: null,
      data: null,
      pervRubrics: undefined,
      refreshing: false
    };
  }
  

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getLatestLocation();
    console.log(location)
    this.setState({ location });
  };

  async getDataByRubrics(rubric) {
    let api = new ApiRequests(rubric, this.state.location)
    this.setState({
      data: await api.getMapPositions()
    })
    console.log(this.state.data)
  }

  async getDataAndNavigate(rubric, wasPressed = false) {
    if(wasPressed) {
      await this.getDataByRubrics(rubric)
    }
    
    this.props.navigation.navigate('Map', {
      itemId: rubric,
      location: this.state.location,
      markers: this.state.data,
      latitude: this.state.location.latitude,
      longitude: this.state.location.longitude,
    })
  }

  onPress = async (rubric) => {
    if(this.state.pervRubrics) {
      if(this.state.pervRubrics === rubric){
        this.getDataAndNavigate(rubric)
      }else {
        this.setState({
          pervRubrics: rubric
        })
       await this.getDataAndNavigate(rubric, true)
      }
    
    }
    else {
      this.getDataAndNavigate(rubric, true)
      this.setState({
        pervRubrics: rubric
      })
    }
  }

  _refreshControl(){
    return (
      <RefreshControl
        tintColor={'white'}
        refreshing={this.state.refreshing}
        onRefresh={()=>this._refreshListView()} />
    )
  }

  _refreshListView(){
    //Start Rendering Spinner
    this.setState({refreshing:true})
    // this.state.cars.push(
    //   {name:'Fusion',color:'Black'},
    //   {name:'Yaris',color:'Blue'}
    // )
    //Updating the dataSource with new data
    // this.setState({ dataSource:
    //     this.state.dataSource.cloneWithRows(this.state.cars) })
    this.setState({refreshing:false}) //Stop Rendering Spinner
  }

  scrolledBody() {
    return(
      <CollapsibleHeaderScrollView
      style={{padding:10}}
      refreshControl={this._refreshControl()}
      CollapsibleHeaderComponent={this.collapsedHeader()}
      headerHeight={90}
      bounces
      InterpolatedHeaderTranslation={{from:0, to:10}}
      headerContainerBackgroundColor={'#242A37'}>
            <UsersCard name={"Jenifer Lopez"}/>  
            <UsersCard name={"Katerina Kursitis"}/>  
            <UsersCard name={"Roman Nepomnashi"}/>  
            <UsersCard name={"Shimon Gershon"}/>
            <UsersCard name={"Victor Ivashenko"}/>  
            <UsersCard name={"Sasha pochtarenko"}/>  
            <UsersCard name={"Evgeny Vini"}/>  
            <UsersCard name={"Moolo Mekonen"}/>    
         
      </CollapsibleHeaderScrollView>
    )
  }

  renderMenu() {
    return(
      <TouchableOpacity style={styles.leftDrewerIndicator} onPress={()=>this.props.navigation.openDrawer()}>
      <LinearGradient
              style={styles.leftDrewerIndicator}
              colors={['#F78361', '#F54B64']}
              start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                <View style={{flex:1,justifyContent:'flex-end', alignItems:'center'}}>
                  <Text style={styles.whiteText}>U</Text>
                  <Text style={styles.whiteText}>N</Text>
                  <Text style={styles.whiteText}>E</Text>
                  <Text style={styles.whiteText}>M</Text>
                </View>
              </LinearGradient>
      </TouchableOpacity>
    )
  }

  collapsedHeader() {
    return(
      <ActionPanel containerStyle={{width:'100%',flexDirection:'row', borderBottomWidth:2, borderColor:'rgba(79,83,94,1)',borderRadius:10}}>
        {this.renderMenu()}
        <ListImageButton press={this.onPress} />
      </ActionPanel> 
    )
  }

  render() {
    
    return (
      <BasePanel>
        <BasePanel containerStyle={{flex:0.7,width:'100%', backgroundColor:'#242A37', zIndex:1, borderBottomWidth:2, borderColor:'rgba(79,83,94,1)',}}>
          <ActionPanel containerStyle={{width:'100%', marginLeft:70 ,paddingRight:70}} >
            <TextInputField text={'Search'} />
          </ActionPanel>
          <ActionPanel >
            <Text style={styles.mainText}>Specialists</Text>
          </ActionPanel>
        </BasePanel>
      <BasePanel containerStyle={{flex:4}}>
      {this.scrolledBody()}
      </BasePanel>
      </BasePanel>
    );
  }
}


const styles = StyleSheet.create({
  mainText: {
    fontSize: 28,
    fontFamily: FONT_PER_DIVICE,
    color: 'white',
    fontWeight: 'bold',
  },
  leftDrewerIndicator: {
    height:'100%', 
    width:25,
    borderRadius:5,
    zIndex:3
  },
  whiteText: {
    transform: [{ rotate: '270deg' }],
    fontSize: 15,
    fontFamily: FONT_PER_DIVICE,
    color: "white",
    fontWeight: 'bold'
},
});



