import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import screenNames from './ScreenName';

const AppNavigator = createStackNavigator({
    SplashScreen: SplashScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: screenNames.SplashScreen,
    headerMode: 'none',
  });

export default createAppContainer(AppNavigator);
