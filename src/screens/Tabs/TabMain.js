import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import axios from 'axios';
import { Card } from 'native-base';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    componentWillMount() {
        axios.post('http://protected-spire-54144.herokuapp.com/api/post/index/')
        .then(response => {
            this.setState({ data: response.data });
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
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={this.keyExtract.bind(this)}
                renderItem={
                    ({ item }) => <Card />
                }
            />
        );
    }
}
