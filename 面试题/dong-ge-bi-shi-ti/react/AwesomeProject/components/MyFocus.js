import React, {Component} from 'react';
import {TextInput, Button, View} from 'react-native';

type Props = {};
export default class MyFocus extends Component<Props> {
  constructor(){
    super();
    this.state={ uname:"dingding" }
    this.txtFocus=this.txtFocus.bind(this);
  }
  txtFocus(input){ input.focus(); }
  render() {
    return (
      <View>
        <TextInput value={this.state.uname} ref={this.txtFocus}></TextInput>
        <TextInput value={this.state.uname} ref="txt2"></TextInput>
        <Button title="获得焦点" onPress={()=>this.txtFocus(this.refs.txt2)}/>
      </View>
    );
  }
}