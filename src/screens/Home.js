import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { 
	Container, Header, Content,
	Footer, FooterTab, Button, Icon,
	Text, Right, Body, Title, View,
}
from 'native-base';
import TabMain from './Tabs/TabMain';
import commonStyles from '../common/Styles';
import { AsyncStoreUtility } from '../utils';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { pageSelected: 0 };
  }

  renderPage() {
    if (this.state.pageSelected === 0) {
      return (
        <Button 
          onPress={() => {
              AsyncStoreUtility.removeToken()
                .then(() => Actions.login());
            }
          }
        >
          <Text>Logout</Text>
        </Button>
      );
    } else if (this.state.pageSelected === 1) {
      return (
        <TabMain />
      );
    }
    return (
      <View />
    );
  }

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
          {this.renderPage()}
        </Content>
        <Footer>
          <FooterTab style={commonStyles.backgroundPrimary}>
            <Button
              onPress={() => this.setState({ pageSelected: 0 })}
            >
              <Icon name="apps" style={commonStyles.textPrimary} />
            </Button>
            <Button
              onPress={() => this.setState({ pageSelected: 1 })}
            >
              <Icon name="camera" style={commonStyles.textPrimary} />
            </Button>
            <Button
              onPress={() => this.setState({ pageSelected: 2 })}
            >
              <Icon name="navigate" style={commonStyles.textPrimary} />
            </Button>
            <Button
              onPress={() => this.setState({ pageSelected: 3 })}
            >
              <Icon name="person" style={commonStyles.textPrimary} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
