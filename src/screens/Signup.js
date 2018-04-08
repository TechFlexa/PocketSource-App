import React from 'react';
import {
    Text,
    KeyboardAvoidingView,
	ToastAndroid,
	StatusBar,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Content,
    Button,
    Form,
    Item,
    Label,
    Input
} from 'native-base';
import axios from 'axios';
import commonStyles from '../common/Styles';

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
			console.log(response.data);
			if (response.data.success) {
				ToastAndroid.show('Signed up Successfully!', ToastAndroid.SHORT);
				Actions.login();
			} else {
				ToastAndroid.show('Email Already Taken', ToastAndroid.LONG);
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
                <View style={styles.mainContent}>
					<Text
						style={styles.title}
					>
						SignUp
					</Text>
					<Form>
						<Item floatingLabel>
							<Label style={commonStyles.textWhite}>Full Name</Label>
							<Input
								style={commonStyles.textWhite}
								underlineColorAndroid='transparent'
								onChangeText={(name) => this.setState({ name })}
							/>
						</Item>
						<Item floatingLabel>
							<Label style={commonStyles.textWhite}>Email</Label>
							<Input
								style={commonStyles.textWhite}
								underlineColorAndroid='transparent' 
								onChangeText={(email) => this.setState({ email })}	
							/>
						</Item>
                        <Item floatingLabel>
							<Label style={commonStyles.textWhite}>Password</Label>
							<Input
								secureTextEntry
								style={commonStyles.textWhite}
								underlineColorAndroid='transparent'
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
                        <Item floatingLabel>
							<Label style={commonStyles.textWhite}>Confirm Password</Label>
							<Input
								secureTextEntry
								style={commonStyles.textWhite}
								underlineColorAndroid='transparent'
								onChangeText={(c_password) => this.setState({ c_password })}
							/>
						</Item>
						<Button 
							full
							style={styles.loginButton}
							onPress={this.signupButtonPress}
						>
							<Text>Sign Up</Text>
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

	label: {
		color: '#FFF'
	},
	title: {
		fontSize: 35,
		color: '#FFF',
		padding: 8
	},

	loginButton: {
		margin: 8,
		borderRadius: 4,
		backgroundColor: '#fff200',
		marginTop: 20
	},

};
