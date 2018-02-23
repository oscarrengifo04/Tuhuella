import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View>
      <StatusBar backgroundColor="#97b498" barStyle="light-content"/>
      <View><Image style={styles.logo} source={require('./img/logo.png')} /></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
