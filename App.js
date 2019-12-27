
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import WelcomeScreen from './src/screens/Welcome'
import LoginScreen from './src/screens/Login'
import SignUpScreen from './src/screens/SignUp'
import ForgotPasswordScreen from './src/screens/ForgotPass'
import SettingsScreen from './src/screens/Settings'
import ActivityScreen from './src/screens/Activity'
import DiscoverScreen from './src/screens/Discover'
import EditProfileScreen from './src/screens/EditProfile'
import Tab from './src/tabnavigation/Tab'


const AppStackNavigation = createStackNavigator({
  Welcome: WelcomeScreen,
  Login : LoginScreen,
  Signup: SignUpScreen,
  ForgotPass: ForgotPasswordScreen,
  Settings: SettingsScreen,
  Discover: DiscoverScreen,
  Activity: ActivityScreen,
  EditProfile: EditProfileScreen,
  Home: {screen: Tab,
    navigationOptions:{
      title: 'Liddap',
      headerStyle: {
        backgroundColor: '#242A37',
      },
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerLeft: null,
    }
  }
})

export default createAppContainer(AppStackNavigation)




