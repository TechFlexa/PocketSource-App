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
import commonStyles from '../common/Styles';
import { AuthUtility } from '../utils';

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

		AuthUtility.alreadyLogged();
	}

	loginButtonPress() {
		//Call API
		this.setState({ loading: true });

		axios.post('http://protected-spire-54144.herokuapp.com/api/login', {
			email: this.state.email,
			password: this.state.password,
		})
		.then(response => {
			this.setState({
				loading: false,
			});
			if (response.data.success) {
				this.setState({
					loggedIn: true,
					token: response.data.data.token
				});

				//Utitlity function to handle successful login
				AuthUtility.loginSuccessful(this.state.token);
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
		return <Text style={commonStyles.textWhite}>Login</Text>;
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
			            <Button
							full
							style={styles.loginButton}
			            	onPress={this.loginButtonPress}
			            >
			            	{this.renderLoginText()}
			            </Button>
			        </Form>
			        <View style={{ padding: 8, flex : 1, alignItems: 'center' }}>
			        <Text>New to PocketSource? </Text>
			          <Text
						style={{ padding : 5 }}
						onPress={() => Actions.signup()}
					>
						SignUp Here
					  </Text>
			        </View>				
         		</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = {

	container: {
		flex: 1,
		backgroundColor: '#f1f2f6',
	},

	head: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	mainContent: {
		flex: 2,
		backgroundColor: '#f1f2f6',
	},
	footer: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center'
	},

	logo: {
		fontWeight: 'bold',
		fontSize: 25,
		backgroundColor: '#2ed573',
		padding: 10,
		color: '#f1f2f6',
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
		backgroundColor: '#2ed573',
	}

};
