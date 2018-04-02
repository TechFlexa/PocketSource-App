import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  BackHandler,
  StatusBar,
  Platform
} from 'react-native';
import { Item, Input, Label, Form } from 'native-base';
import { Font } from 'expo';
import styles from './LoginStyle';


const window = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false
    };
  }

  async componentDidMount() {
      if (Platform.OS === 'android') {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor('#000000');
      }
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
      });
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    // cool stuff to handle back button action
  }
  attemptLogin() {
    this.setState({ loading: true });
    // attempt login here
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <View style={styles.button}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.attemptLogin.bind(this)}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { container, bg, logo } = styles;
    return (
        <KeyboardAvoidingView
          behavior='padding'
          style={container}
        >
          <View style={bg}>
            <Image source={require('../BG/cgtlogo.png')} style={logo} />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signup')}
            >
              <Text
                style={{ marginBottom: 10, color: '#3C3C3C', fontSize: 18 }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
          <Form
            style={{ width: window.width - 70, marginBottom: 20 }}
          >
            <Item
              floatingLabel
              style={{ marginVertical: 20 }}
            >
                <Label style={{ color: '#FFF' }}>Username</Label>
                <Input
                  style={{ color: '#FFF' }}
                  underlineColorAndroid='transparent'
                  value={this.props.username}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item floatingLabel>
                <Label style={{ color: '#FFF' }}>Password</Label>
                <Input
                  secureTextEntry
                  underline={false}
                  style={{ color: '#FFF' }}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
            </Item>
          </Form>
          {this.renderButton()}
        </KeyboardAvoidingView>
    );
  }
}

export default Login;
