import React from 'react';
import {
	Form, Button, Text, View, Item, Label, Input
} from 'native-base';

const addPost = () => {
	return (
		<View>
			<Form>
				<Item fixedLabel>
				  <Label>Username</Label>
				  <Input />
				</Item>
				<Item fixedLabel last>
				  <Label>Password</Label>
				  <Input />
				</Item>
			</Form>
		</View>
	)
};

export default addPost;