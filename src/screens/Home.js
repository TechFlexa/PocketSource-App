import React, { Component } from 'react';
import { FlatList, Image, View } from 'react-native';
import { 
        Container,
        Header,
        Content,
        Icon,
        Text,
        Body,
        Card,
        CardItem,
        Spinner,
        Left,
        Thumbnail
    } from 'native-base';
import axios from 'axios';
import { AuthUtility } from '../utils';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import commonStyles from '../common/Styles';

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
              data: response.data.data
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
    if (!this.state.fetched) {
      return <Spinner />;
    }

    return (
      <Container>
          <Header style={commonStyles.backgroundWhite}>
             <MenuContext style={{ flex: 1 }}>
              <TopNavigation/>
             </MenuContext>
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
                                    <Left>
                                    <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png' }} />
                                        <Body>
                                            <Text>{item.title}</Text>
                                            <Text note>{item.author}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image
                                        // to be replaced by item.cover
                                        source={{ uri: 'https://pbs.twimg.com/media/DYjXs1eU0AYDYgV.jpg' }}
                                        style={{ height: 200, width: null, flex: 1, backgroundColor: '#3C3C3C', resizeMode: 'stretch' }} 
                                    />
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
const TopNavigation = () => (
    <View style={{ padding:5, flexDirection: 'row', backgroundColor: '#fff' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Pocket Source</Text></View>
        <Menu
            onSelect={(value) => AuthUtility.signout() }>
            <MenuTrigger>
                <Text style={{ fontSize: 20 }}><Icon name="md-more" /></Text>
            </MenuTrigger>
            <MenuOptions>
                <MenuOption value={1}>
                    <Text>Sign Out</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    </View>
);
