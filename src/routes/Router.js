import React from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const MainRouter = () => (
	<Router>
		<Stack key="root">
			<Scene key="login" component={LoginScreen} hideNavBar />
			<Scene key="Home" component={HomeScreen} hideNavBar />
		</Stack>
	</Router>
);

export default MainRouter;