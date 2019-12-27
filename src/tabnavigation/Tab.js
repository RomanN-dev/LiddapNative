import React from 'react'
import {Dimensions} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home'
import { createDrawerNavigator } from 'react-navigation-drawer';
import Menu from '../components/Menu'
import ProfileScreen from '../screens/Profile'
import MapScreen from '../screens/Map'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Map: MapScreen,
  Profile: ProfileScreen,
},{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home`;
      } else if (routeName === 'Profile') {
        iconName = `ios-person`;
      } else if (routeName === 'Map') {
        iconName = `ios-map`;
      }
      
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    // tabBarOnPress: ({ scene, jumpToIndex }) => {
    //       // navigation.dispatch(NavigationActions.reset())
    //       // TODO reset old data
    // },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#242A37',
      borderWidth:0

    },
  },
})


const DrawerNavigation = createDrawerNavigator({
  Menu: TabNavigator,
},
{
  contentComponent: Menu,
  drawerWidth: Dimensions.get('screen').width / 2
}

);
  
  export default createAppContainer(DrawerNavigation);
