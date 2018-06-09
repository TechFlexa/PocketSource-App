import React from 'react';
import HudView from 'react-native-hud-view';
import {
    Text,
    KeyboardAvoidingView,
	View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    Form,
    Item,
    Label,
    Input,
    Button
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

        this.signupButtonPress =  this.signupButtonPress.bind(this);
	}

	componentDidMount() {
		this.setState({ loading: false });
	}
	
	signupButtonPress() {
		this.setState({ loading: true });
		this.refs.hudView.showSpinner();
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
				Actions.login();
                this.refs.hudView.showSuccess()
			} else {
                this.refs.hudView.hide();
                alert("Something went wrong");
			}
		})
		.catch(e => {
		    console.log(e);
            this.refs.hudView.hide();
            alert("Something went wrong");
		});
	}

	// renderSignUpText() {
	// 	if (this.state.loading) {
	// 		return (
	// 			<Text>Signing Up...</Text>
	// 		);
	// 	}
	// 	return <Text>Sign Up</Text>;
	// }

	render() {
        return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.head}>
                    <Text
                        style={ styles.logo  }
                    >
                        SignUp!!
                    </Text>
                </View>
                <View style={styles.mainContainer}>
					<Form>
						<Item floatingLabel>
							<Label>Full Name</Label>
							<Input
								underlineColorAndroid='transparent'
								onChangeText={(name) => this.setState({ name })}
							/>
						</Item>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input
								underlineColorAndroid='transparent' 
								onChangeText={(email) => this.setState({ email })}	
							/>
						</Item>
                        <Item floatingLabel>
							<Label>Password</Label>
							<Input
								secureTextEntry
								underlineColorAndroid='transparent'
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
                        <Item floatingLabel>
							<Label>Confirm Password</Label>
							<Input
								secureTextEntry
								underlineColorAndroid='transparent'
								onChangeText={(c_password) => this.setState({ c_password })}
							/>
						</Item>
						<Button
                            full
							style={styles.loginButton}
							onPress={this.signupButtonPress}
						>
							<Text style={commonStyles.textWhite}>Sign Up</Text>
						</Button>
					</Form>
				</View>
                <HudView ref="hudView"
                >
                </HudView>
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
		flex: 1,
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

	label: {
		color: '#FFF'
	},
	title: {
		fontSize: 35,
		color: '#FFF',

	},

	loginButton: {
		margin: 8,
		borderRadius: 4,
		backgroundColor: '#2ed573',
		marginTop: 20
	},

};
