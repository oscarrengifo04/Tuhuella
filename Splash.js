import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
     backgroundColor="#00675b"
     barStyle="light-content"
     />
      <Text>Hello world!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
