import React from 'react';
import {
    Text,
    KeyboardAvoidingView,
	StatusBar,
	ToastAndroid
} from 'react-native';

import {
    Content,
    Button,
    Form,
    Item,
    Label,
    Input
} from 'native-base';
import axios from 'axios';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
			loading: false,
			email: '',
			name: '',
			password: '',
			c_password: '',
		};
		this.signupButtonPress = this.signupButtonPress.bind(this);
	}

	componentDidMount() {
		StatusBar.setTranslucent(false);
		StatusBar.setBackgroundColor('#000000');
		this.setState({ loading: false });
	}
	
	signupButtonPress() {
		this.setState({ loading: true });
		axios.post('http://protected-spire-54144.herokuapp.com/api/register', {
			email: this.state.email,
			name: this.state.name,
			password: this.state.password,
			c_password: this.state.c_password
		})
		.then(response => {
			this.setState({
				loading: false,
			});
			console.log(response.data.success);
			if (response.data.success) {
				// Alert.alert('Success', 'Successfully Logged In!');
				ToastAndroid.show('Signed up Successfully!', ToastAndroid.SHORT);
				this.props.navigation.navigate('login');
			} else {
				ToastAndroid.show('Details Invalid', ToastAndroid.LONG);
			}
		})
		.catch(e => {
			console.log(e);
		});
	}

	renderSignUpText() {
		if (this.state.loading) {
			return (
				<Text>Signing Up...</Text>
			);
		}
		return <Text>Sign Up</Text>;
	}

	render() {
        return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Content style={styles.mainContent}>
					<Text
						style={styles.title}
					>
						SignUp
					</Text>
					<Form>
						<Item floatingLabel>
							<Label>Full Name</Label>
							<Input onChangeText={(name) => this.setState({ name })} />
						</Item>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input 
								onChangeText={(email) => this.setState({ email })}	
							/>
						</Item>
                        <Item floatingLabel>
							<Label>Password</Label>
							<Input
								secureTextEntry
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
                        <Item floatingLabel>
							<Label>Confirm Password</Label>
							<Input
								secureTextEntry
								onChangeText={(c_password) => this.setState({ c_password })}
							/>
						</Item>
						<Button 
							full
							style={styles.loginButton}
							onPress={this.signupButtonPress}
						>
							{this.renderSignUpText()}
						</Button>
					</Form>				
				</Content>
			</KeyboardAvoidingView>
		);
    }
}
    
const styles = {

	container: {
		flex: 1,
		backgroundColor: '#3d3d3d',
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

	title: {
		fontSize: 40,
		marginTop: 100,
		marginLeft: 20
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
