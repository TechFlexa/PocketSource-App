import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const Router = StackNavigator({
    login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  {
    initialRouteName: 'login',
    headerMode: 'none',
  });

export default Router;