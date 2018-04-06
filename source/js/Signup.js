import React, { Component } from 'react';
import axios from 'axios';
import {
  KeyboardAvoidingView,
  View,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Item, Input, Label, Form } from 'native-base';
import styles from './LoginStyle';

const window = Dimensions.get('window');

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      pnumber: '',
      firstname: '',
      lastname: '',
    };
  }

  async componentWillMount() {
   StatusBar.setHidden(true);
  }

  attemptSignup() {
    // axios call here
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <View style={styles.button}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.attemptSignup.bind(this)}
      >
        <Text style={styles.buttonText}>
          Sign Up
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { container } = styles;
    return (
        <KeyboardAvoidingView
          behavior='padding'
          style={container}
        >
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
                  value={this.state.username}
                  onChangeText={username => this.setState({ username })}
                />
              </Item>
              <Item
                floatingLabel
              >
                <Label style={{ color: '#FFF' }}>Password</Label>
                <Input
                  secureTextEntry
                  underline={false}
                  style={{ color: '#FFF' }}
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </Item>
              <Item
                floatingLabel
              >
                <Label style={{ color: '#FFF' }}>First Name</Label>
                <Input
                  underline={false}
                  style={{ color: '#FFF' }}
                  value={this.state.firstname}
                  onChangeText={firstname => this.setState({ firstname })}
                />
              </Item>
              <Item
                floatingLabel
              >
                <Label style={{ color: '#FFF' }}>Last Name</Label>
                <Input
                  underline={false}
                  style={{ color: '#FFF' }}
                  value={this.state.lastname}
                  onChangeText={lastname => this.setState({ lastname })}
                />
            </Item>
            <Item
              floatingLabel
            >
              <Label style={{ color: '#FFF' }}>Email</Label>
              <Input
                underline={false}
                style={{ color: '#FFF' }}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
          </Item>
          <Item
            floatingLabel
          >
            <Label style={{ color: '#FFF' }}>Phone Number</Label>
            <Input
              underline={false}
              style={{ color: '#FFF' }}
              value={this.state.pnumber}
              onChangeText={pnumber => this.setState({ pnumber })}
            />
        </Item>
          </Form>
          {this.renderButton()}
        </KeyboardAvoidingView>
    );
  }
}

export default Signup;
