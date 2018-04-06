import React from 'react';
import {
	View, Text, KeyboardAvoidingView
} from 'react-native';

import {
	Form,
	Item,
	Input,
	Label,
	Content,
	Button
} from 'native-base';

export default class LoginScreen extends React.Component {

	render() {
		return (
			<KeyboardAvoidingView behavior="height" style={styles.container}>
				<View style={styles.head}>
					<Text style={styles.logo}>PocketSource</Text>
				</View>
				<View style={styles.mainContent}>
					<Form>
			            <Item floatingLabel>
			              <Label>Username</Label>
			              <Input />
			            </Item>
			            <Item floatingLabel>
			              <Label>Password</Label>
			              <Input />
			            </Item>
			            <Button full style={styles.loginButton}>
			            	<Text>Login</Text>
			            </Button>
			        </Form>				
         		</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = {

	container: {
		flex: 1,
		backgroundColor: '#fff200',
	},

	head: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	mainContent: {
		flex: 1,
		backgroundColor: '#3d3d3d'
	},
	footer: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center'
	},

	logo: {
		fontWeight: 'bold',
		fontSize: 25,
		backgroundColor: '#3d3d3d',
		padding: 10,
		color: '#fffa65',
		borderRadius: 5

	},

	content: {

	},

	poweredBy: {
		fontSize: 20,
		borderWidth: 1,
		borderRadius: 5,
		padding: 5
	},

	loginButton: {
		margin: 8,
		borderRadius: 4,
		backgroundColor: '#fff200'
	}

};