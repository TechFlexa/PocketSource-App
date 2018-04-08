import React from 'react';
import {
	View, Text, KeyboardAvoidingView,
	ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	Form,
	Item,
	Input,
	Label,
	Button,
	Spinner,

} from 'native-base';
import axios from 'axios';

export default class LoginScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
			loading: false,
			email: null,
			password: null,
			token: null
		};
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
			if (response.data.success) {
				this.setState({
					loggedIn: true,
					token: response.data.data.token
				});

				// Alert.alert('Success', 'Successfully Logged In!');
				ToastAndroid.show('Logged in Successfully!', ToastAndroid.SHORT);
				Actions.Home();
			} else {
				ToastAndroid.show('Invaild Credentials', ToastAndroid.LONG);
			}
		})
		.catch(e => {
			console.log(e);
		});
	}

	renderLoginText() {
		if (this.state.loading) {
			return (
				<Spinner />
			);
		}
		return <Text>Login</Text>;
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.head}>
					<Text style={styles.logo}>PocketSource</Text>
				</View>
				<View style={styles.mainContent}>
					<Form>
			            <Item floatingLabel>
			              <Label>Email</Label>
			              <Input onChangeText={(email) => this.setState({ email })} />
			            </Item>
			            <Item floatingLabel>
			              <Label>Password</Label>
			              <Input 
			              	onChangeText={(password) => this.setState({ password })}
			              	secureTextEntry
			              />
			            </Item>
			            <Button full style={styles.loginButton}
			            	onPress={this.loginButtonPress}
			            >
			            	{this.renderLoginText()}
			            </Button>
			        </Form>
			        <View style={{ padding: 8}}>
			        <Text>New to PocketSource? </Text>
			        <Text onPress={() => Actions.signup()}>SignUp Here</Text>
			        </View>				
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
