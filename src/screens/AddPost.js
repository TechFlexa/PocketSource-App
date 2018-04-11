import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
	Form, Button, Text, View, Item, Label, Input, Spinner
} from 'native-base';
import { ToastAndroid } from 'react-native';
import axios from 'axios';
import { AsyncStoreUtility } from '../utils';

export default class AddPost extends React.Component {
	state = {
		title: '',
		body: '',
		cover: '',
		token: '',
		addPost: false,
	}

	submitPost() {

		this.setState({ addPost: true });

		AsyncStoreUtility.getToken()
			.then(token => {
				this.setState({token});
				axios.post('http://protected-spire-54144.herokuapp.com/api/post/create', 
				this.state,
				{
					headers: {
						'Authorization': `Bearer ${this.state.token}`,
					}
				})
				.then(response => {
					console.log('---------------', response);
					if (response.data.success) {
						console.log('Added');
						Actions.Home();
						ToastAndroid.show('Success', ToastAndroid.LONG);
					}
					else {
						ToastAndroid.show('Failed', ToastAndroid.LONG);
					}
				})
				.catch(e => {
					console.log('---$$$$$$$-- Failed');
					ToastAndroid.show('Failed', ToastAndroid.LONG);
				});

			})
			.catch(e => console.log(e));

			this.setState({addPost: false});
	}

	renderAddButton() {
		if (this.state.addPost) {
			return (
				<Button disabled>
					<Spinner />
				</Button>
			);
		}
		return (
			<Button onPress={this.submitPost.bind(this)}>
				<Text>Add Post</Text>
			</Button>
		);
	}

	render() {
		return (
			<View>
				<Form>
					<Item floatingLabel>
					  <Label>Title</Label>
					  <Input onChangeText={(title) => this.setState({title})} />
					</Item>
					<Item floatingLabel>
					  <Label>Body</Label>
					  <Input onChangeText={(body) => this.setState({body})} multiline numberOfLines={4} />
					</Item>
					<Item floatingLabel>
					  <Label>Cover</Label>
					  <Input onChangeText={(cover) => this.setState({cover})} />
					</Item>
					{this.renderAddButton()}
				</Form>
			</View>
		)
	}
}