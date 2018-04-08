import React, { Component } from 'react';
import { 
	Container, Header, Content,
	Footer, FooterTab, Button, Icon,
	Text, Right, Body, Title,
}
from 'native-base';
import commonStyles from '../common/Styles';

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
        <Content />
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