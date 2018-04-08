import React from 'react';
import {
	View, Text
} from 'react-native';

import Footer from '../common/components/Footer';

export default class HomeScreen extends React.Component {
	
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text style={{ flex: 1 }}>Home Screen</Text>
				<View style={{ flex: 0.1 }}>
					<Footer />
				</View>
			</View>
		);
	}
}
