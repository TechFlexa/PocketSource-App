import { StackNavigator } from 'react-navigation';
import Login from './js/Login';

const Router = StackNavigator({
    login: { screen: Login }
    //drawer: { screen: Drawer }, <to implement sidebar/drawer/drawer>
  },
  
  {
    initialRouteName: 'login',
    headerMode: 'none'
  });

export default Router;
