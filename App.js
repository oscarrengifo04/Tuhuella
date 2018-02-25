/*
En este componente realizamos la administracion de la navegacion
haciendo uso de ROUTER-FLUX
@autor: Oscar Rengifo
*/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//importamos la API router-flux
import { Router, Scene, Stack } from 'react-native-router-flux';

//Importamos las otras vistas para ser usadas
import Splash from './vistas/Splash';
import TiempoSplash from './vistas/tiemposplash';
import Inicio from './vistas/inicio';
import Noticia from './vistas/noticia';

type Props = {};

export default class App extends Component<Props> {

//la ruta de navegacion y sus paginas
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
//Agregamos los estilos para la Navegation bar
const styles = StyleSheet.create({
  navBar:{
    backgroundColor:'#a5d6a7',
  },
  navBarTitle: {
    color: 'black',
    paddingLeft: 60,
  }
});
