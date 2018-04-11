import React from 'react';
import {
	Button, Text, View, Item, Card, CardItem, Body,
} from 'native-base';

const homeTab = () => {
	return (
		<View style={styles.container}>
			<Card bordered>
				<CardItem header>
					<Text>All posts</Text>
				</CardItem>
				<CardItem>
					<Text>See all posts here</Text>
				</CardItem>
			</Card>
			<Card bordered>
				<CardItem header>
					<Text>Bookmarked</Text>
				</CardItem>
				<CardItem>
					<Text>Manage your bookmarks</Text>
				</CardItem>
			</Card>
		</View>
	)
};

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#7158e2',
		padding: 10
	},
	card: {
		borderRadius: 5
	}
}

export default homeTab;
