import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import { Router, Scene, Stack } from 'react-native-router-flux';

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
        <Router >
          <Stack key="root" hideNavBar={true} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
            <Scene key="splash" component={Splash} title="Splash" initial={true} />
            <Scene key="inicio" component={Inicio} title="TuHuella" hideNavBar={false} />
            <Scene key="noticia" component={Noticia} title="Noticias" hideNavBar={false} />
          </Stack>
        </Router>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBar:{
    backgroundColor:'#a5d6a7',
  },
  navBarTitle: {
    color: 'black',
    paddingLeft: 60,

  }
});
