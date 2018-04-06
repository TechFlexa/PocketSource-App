import { StackNavigator } from 'react-navigation';
import Login from './js/Login';
import Signup from './js/Signup';

const Router = StackNavigator({
    login: { screen: Login },
    signup: { screen: Signup }
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  
  {
    initialRouteName: 'login',
    headerMode: 'none'
  });

export default Router;
