import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#75a478" barStyle="light-content"/>
      <Image style={styles.logo} source={require('./logo.png')} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a5d6a7',
  },
  logo:{
    width: 280,
    height: 280,
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
