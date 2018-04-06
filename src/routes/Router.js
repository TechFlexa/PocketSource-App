import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/Signup';

const Router = StackNavigator({
    login: { screen: LoginScreen },
    signup: { screen: SignUpScreen }
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  {
    initialRouteName: 'signup',
    headerMode: 'none',
  });

export default Router;
