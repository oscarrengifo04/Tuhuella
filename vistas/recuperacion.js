import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

import Splash from './vistas/Splash';
import TiempoSplash from './vistas/tiemposplash';
import Inicio from './vistas/inicio';
import Noticia from './vistas/noticia';

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
        <Router hideNavBar= "true">
          <Scene key="root">
            <Scene key="pageOne" component={inicio} title="PageOne" initial={true} />
            <Scene key="pageTwo" component={noticia} title="PageTwo" />
          </Scene>
        </Router>
        <StatusBar backgroundColor="#97b498" barStyle="light-content"/>
        {this.state.loaded ? <Inicio></Inicio> : <Splash></Splash>}
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
