import React from 'react';
import { Root } from 'native-base';
import Router from './source/Router';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Router />
      </Root>
    );
  }
}
