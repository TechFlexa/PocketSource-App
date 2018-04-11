import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { 
	Container, Header, Content,
	Footer, FooterTab, Button, Icon,
	Text, Right, Body, Title, View,
  Spinner, Card, CardItem
}
from 'native-base';
import TabMain from './Tabs/TabMain';
import AddPost from './Tabs/AddPost';
import HomeTab from './Tabs/HomeTab';
import commonStyles from '../common/Styles';
import { AsyncStoreUtility } from '../utils';
import axios from 'axios';

export default class HomeScreen extends Component {
  constructor(props) {
        super(props);
        this.state = { 
            fetched: false,
            data: [] 
        };

        this.fetchPosts();
  }

  fetchPosts() {
      axios.post('http://protected-spire-54144.herokuapp.com/api/post/index/')
      .then(response => {
          this.setState({ 
              fetched: true,
              data: response.data.Posts
          });
      })
      .catch(e => {
          console.log(e);
          }
      );
  }

  keyExtract(item) {
      return item.id;
  }

  render() {
    // if (!this.state.fetched) {
    //   return <Spinner />;
    // }

    return (
      <Container>
        <Header style={commonStyles.backgroundWhite}>
          <Body>
            <Title style={commonStyles.textPrimary}>PocketSource</Title>
          </Body>
          <Right>
            <Icon name="md-more" />
          </Right>
        </Header>
        <Content>
          <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtract.bind(this)}
                onRefresh={this.fetchPosts.bind(this)}
                refreshing={!this.state.fetched}
                renderItem={
                    ({ item }) => {
                        console.log(item);
                        return (
                            <Card>
                              <CardItem>
                                  <Text>{item.title}</Text>
                              </CardItem>
                              <CardItem>
                                  <Text>{item.body}</Text>
                              </CardItem>
                            </Card>
                        );
                    }
                }
            />
        </Content>
      </Container>
    );
  }
}
