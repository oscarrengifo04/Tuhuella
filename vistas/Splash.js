/*
Splash de la App
@autor: Oscar Rengifo
*/
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
//importamos Actions para usar las acciones de Router-flux
import { Actions } from 'react-native-router-flux';
//pintamos la vista
export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#75a478" barStyle="light-content"/>
      <Image style={styles.logo} source={require('../img/logo.png')} />
      <TouchableOpacity style={styles.boton} onPress={() => {Actions.inicio();}}>
      <Text style={styles.text}>Comenzar</Text>
      </TouchableOpacity>
      </View>

    );
  }
}
//creamos los estilos para el splash (imagen y boton)
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
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  boton: {
    width: 120,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#75a478',
    borderRadius: 10,
  },
});
