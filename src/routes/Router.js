import React from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux';
// import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

const MainRouter = () => (
	<Router>
		<Stack key="root">
			<Scene key="login" component={LoginScreen} hideNavBar />
			<Scene key="Home" component={HomeScreen} hideNavBar />
      <Scene key="signup" component={SignUpScreen} hideNavBar />
		</Stack>
	</Router>
);

export default MainRouter;
