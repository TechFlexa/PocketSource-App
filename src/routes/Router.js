import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';
<<<<<<< HEAD
import SignUpScreen from '../screens/Signup';

const Router = StackNavigator({
    login: { screen: LoginScreen },
    signup: { screen: SignUpScreen }
=======
import HomeScreen from '../screens/Home';

const Router = StackNavigator({
    login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
>>>>>>> 80d533e96f4afe269af73d8058af84291c3e2000
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  {
    initialRouteName: 'signup',
    headerMode: 'none',
  });

export default Router;
