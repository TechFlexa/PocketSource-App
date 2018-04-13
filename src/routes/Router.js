import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Icon, View } from 'native-base';
import HomeScreen from '../screens/Home';
import AddPostScreen from '../screens/AddPost';
import SignUpScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';

const MainRouter = () => (
	<View style={{ flex: 1, marginTop: 24 }}>
	<Router
		component={LoginScreen}
		navigationBarStyle={{ backgroundColor: '#fff200' }}
		titleStyle={{ color: '#3d3d3d' }}
	>
		<Scene key="root">
			<Scene
			tabs
			initial
			key="auth"
			showLabel={false}
		    lazy
		    swipeEnabled
		    tabBarPosition="bottom"
		    >
				<Scene
					key="login"
					component={LoginScreen}
					icon={({ focused }) => (
				            <Icon
				                name="ios-log-in"
				                text={`Sign In`}
				            />
				    )}
					hideNavBar
				/>
				<Scene
					key="signup"
					component={SignUpScreen}
					icon={({ focused }) => (
						<Icon
			                name="ios-person-add"
			                text={`Sign Up`}
			            />
					)}
					hideNavBar 
				/>
			</Scene>

			<Scene
			tabs
			key="Home"
			showLabel={false}
		    lazy
		    swipeEnabled
		    tabBarPosition="bottom"
		    >
				<Scene
					key="home"
					component={HomeScreen}
					icon={({ focused }) => (
				            <Icon
				                name="ios-home"
				                text={`Sign In`}
				            />
				    )}
					hideNavBar
				/>
				<Scene
					key="addPost"
					component={AddPostScreen}
					icon={({ focused }) => (
						<Icon
			                name="ios-add"
			                text={`Add Post`}
			            />
					)}
					hideNavBar 
				/>
			</Scene>
		</Scene>
	</Router>
	</View>
);

export default MainRouter;
