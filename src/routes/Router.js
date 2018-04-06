import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';

const Router = StackNavigator({
    login: { screen: LoginScreen },
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  {
    initialRouteName: 'login',
    headerMode: 'none',
  });

export default Router;