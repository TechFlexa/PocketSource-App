import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { 
	Container, Header, Content,
	Footer, FooterTab, Button, Icon,
	Text, Right, Body, Title,
}
from 'native-base';
import commonStyles from '../common/Styles';

import { AsyncStoreUtility, AuthUtility } from '../utils';

export default class HomeScreen extends Component {

  render() {
    return (
      <Container>
        <Header style={commonStyles.backgroundPrimary}>
          <Body>
            <Title style={commonStyles.textPrimary}>PocketSource</Title>
          </Body>
          <Right>
          	<Icon name="md-more" />
          </Right>
        </Header>
        <Content>
          <Button onPress={
            () => {
              AsyncStoreUtility.removeToken()
                .then(() => Actions.login());
            }
          }>
            <Text>Logout</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab style={commonStyles.backgroundPrimary}>
            <Button>
              <Icon name="apps" style={commonStyles.textPrimary} />
            </Button>
            <Button>
              <Icon name="camera" style={commonStyles.textPrimary} />
            </Button>
            <Button>
              <Icon name="navigate" style={commonStyles.textPrimary} />
            </Button>
            <Button>
              <Icon name="person" style={commonStyles.textPrimary} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}