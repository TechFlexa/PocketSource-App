import React from 'react';
import {
	View, Text, KeyboardAvoidingView,
	ToastAndroid
} from 'react-native';

import {
	Form,
	Item,
	Input,
	Label,
<<<<<<< HEAD
	Button
=======
	Content,
	Button,
>>>>>>> 80d533e96f4afe269af73d8058af84291c3e2000
} from 'native-base';

import axios from 'axios';

export default class LoginScreen extends React.Component {
<<<<<<< HEAD
=======

	state = {
		loggedIn: false,
		loading: false,
		email: null,
		password: null,
		token: null
	}

	constructor() {
		super();
		this.loginButtonPress = this.loginButtonPress.bind(this);
	}

	loginButtonPress() {
		//Call API
		this.setState({ loading: true });

		axios.post('http://protected-spire-54144.herokuapp.com/api/login',{
			email: this.state.email,
			password: this.state.password,
		})
		.then(response => {
			this.setState({
				loading: false,
			});
			console.log(response.data.success);
			if(response.data.success) {
				this.setState({
					loggedIn: true,
					token: response.data.data.token
				});

				// Alert.alert('Success', 'Successfully Logged In!');
				ToastAndroid.show('Logged in Successfully!', ToastAndroid.SHORT);
				this.props.navigation.navigate('Home');
			}
			else {
				ToastAndroid.show('Invaild Credentials', ToastAndroid.LONG);
			}
		})
		.catch(e => {
			console.log(e);
		}) 

	}

	renderLoginText() {
		if(this.state.loading) {
			return (
				<Text>Logging in...</Text>
			);
		}
		return <Text>Login</Text>;
	}

>>>>>>> 80d533e96f4afe269af73d8058af84291c3e2000
	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.head}>
					<Text style={styles.logo}>PocketSource</Text>
				</View>
				<View style={styles.mainContent}>
					<Form>
<<<<<<< HEAD
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
=======
			            <Item floatingLabel>
			              <Label>Email</Label>
			              <Input onChangeText={(email) => this.setState({email})} />
			            </Item>
			            <Item floatingLabel>
			              <Label>Password</Label>
			              <Input 
			              	onChangeText={(password) => this.setState({password})}
			              	secureTextEntry
			              />
			            </Item>
			            <Button full style={styles.loginButton}
			            	onPress={this.loginButtonPress}
			            >
			            	{this.renderLoginText()}
			            </Button>
			        </Form>				
         		</View>
>>>>>>> 80d533e96f4afe269af73d8058af84291c3e2000
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
		justifyContent: 'center',
	},
	mainContent: {
		flex: 1,
		backgroundColor: '#3d3d3d',
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
		borderRadius: 5,

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
