import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image } from 'react-native';

export default class Inicio extends Component {
  render() {
    return (
      <View>
      <StatusBar backgroundColor="#97b498" barStyle="light-content"/>
      <Text>Hola mundo</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8e6c9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
