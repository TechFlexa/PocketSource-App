import React from 'react';
import Router from './src/routes/Router';
import { Font, AppLoading } from 'expo';

export default class App extends React.Component {

  render() {
    return (
		<Router />
    );
  }
}
