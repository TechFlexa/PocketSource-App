import React from 'react';
import { Stack, Router, Scene } from 'react-native-router-flux';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const MainRouter = () => (
	<Router 
		sceneStyle={{ marginTop: 24 }} 
		navigationBarStyle={{ backgroundColor: '#fff200' }}
		titleStyle={{ color: '#3d3d3d' }}
	>
		<Stack key="root">
			<Scene key="login" component={LoginScreen} hideNavBar />
			<Scene key="Home" title="Pocket Source" component={HomeScreen} initial
			/>
		</Stack>
	</Router>
);

export default MainRouter;