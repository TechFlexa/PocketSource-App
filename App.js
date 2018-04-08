import React from 'react';
import Router from './src/routes/Router';
import { Font, AppLoading } from 'expo';
import { AuthUtility } from './src/utils';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			fontLoaded: false
		}

		this.loadAssets()
			.then(() => this.setState({fontLoaded: true}));
	}
	

	async loadAssets() {
		await Font.loadAsync({
		  'Roboto_medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
		});

		await AuthUtility.alreadyLogged();
	}

	render() {

		if (!this.state.fontLoaded) {
			return <AppLoading />;
		}

		return (
			<Router />
		);
	}
}
