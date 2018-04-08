import React from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux';
import HomeScreen from '../screens/Home';
import SignUpScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

const MainRouter = () => (
	<Router 
		sceneStyle={{ marginTop: 24 }} 
		navigationBarStyle={{ backgroundColor: '#fff200' }}
		titleStyle={{ color: '#3d3d3d' }}
	>
		<Stack key="root">
			<Scene key="login" component={LoginScreen} type="reset" hideNavBar initial />
			<Scene key="Home" component={HomeScreen} type="reset" hideNavBar />
			<Scene key="signup" component={SignUpScreen} hideNavBar />
		</Stack>
	</Router>
);

export default MainRouter;
