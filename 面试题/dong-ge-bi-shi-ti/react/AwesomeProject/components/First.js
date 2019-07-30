import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import HOC from './HOC'

type Props = {};
//ES5
/*var First=React.createClass({
  getInitialState(){//this.state={...}
    return { state变量 }
  }
})*/
//ES6
export default class First extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is my first component</Text>
        <HOC></HOC>
        <Button title="go to Counter" onPress={()=>this.props.navigation.navigate("Counter")}/>
        <Button title="go to MyFocus" onPress={()=>this.props.navigation.push("MyFocus")}/>
      </View>
    );
  }
}