import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import UseContent from './UseContent';

type Props = {};
export default class HOC extends Component<Props> {
  constructor(){
    super();
    this.state={
      emps:[
        {title:"manager",name:"eric"},
        {title:"developer",name:"dingding"}
      ]
    }
  }
  render() {
    return (
      <View>
        <UseContent title={this.state.emps[0].title} name={this.state.emps[0].name}></UseContent>
        <UseContent title={this.state.emps[1].title} name={this.state.emps[1].name}></UseContent>
      </View>
    );
  }
}