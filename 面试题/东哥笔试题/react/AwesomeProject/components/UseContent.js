import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

type Props = {};
export default class UseContent extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{`${this.props.title} - ${this.props.name}`}</Text>
      </View>
    );
  }
}