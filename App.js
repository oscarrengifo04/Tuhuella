/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Splash from './Splash';
import TiempoSplash from './tiemposplash';
import Inicio from './inicio';


type Props = {};
export default class App extends Component<Props> {

state = {
  loaded: false
}
constructor(){
  super();
  TiempoSplash.load(v => this.setState({loaded: true}));
}
  render() {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#97b498" barStyle="light-content"/>
        {this.state.loaded ? <Inicio></Inicio> : <Splash></Splash>}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
