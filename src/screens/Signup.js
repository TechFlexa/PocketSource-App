import React from 'react';
import {
    Text,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native';

import {
    Content,
    Button,
    Form,
    Item,
    Label,
    Input
} from 'native-base';
import { Font, AppLoading } from 'expo';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentDidMount() {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
          });
          StatusBar.setTranslucent(false);
          StatusBar.setBackgroundColor('#000000');
          this.setState({ loading: false });
    }
	render() {
        if (this.state.loading) {
            return (
              <AppLoading />
            );
        }
        return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Content style={styles.mainContent}>
					<Text
						style={{ fontSize: 40, marginTop: 100, marginLeft: 20 }}
					>
						SignUp
					</Text>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item floatingLabel>
							<Label>Password</Label>
							<Input />
						</Item>
                        <Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
                        <Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
                        <Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
                        <Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Button full style={styles.loginButton}>
							<Text>Login</Text>
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
