import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, View} from 'react-native';

type Props = {};
export default class Counter extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      //state变量
      count:0
    }
    this.add=this.add.bind(this);
  }
  add(){
    this.setState({count:this.state.count+1})
  }
  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button title="+" onPress={this.add}/>
      </View>
    );
  }
}