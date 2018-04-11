import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import { Card, Spinner, CardItem, Body } from 'native-base';

export default class extends Component {
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
        if(!this.state.fetched) {
            return <Spinner />;
        }
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtract.bind(this)}
                renderItem={
                    ({ item }) => {
                        console.log(item);
                        return (
                            <Card transparent>
                              <Body>
                                  <Text>{item.title}</Text>
                                  <Text>{item.body}</Text>
                              </Body>
                            </Card>
                        );
                    }
                }
            />
        );
    }
}
