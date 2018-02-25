/*
En este componente desplegamos las noticias provenientes del arreglo
de datos "flatlisdata"
@autor: Oscar Rengifo
*/
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';
//importamos el arreglo de datos de las noticias
import flatlistdata from './flatlistdata';
// importamos los Actions para hacer los movimientos entre paginas
import { Actions } from 'react-native-router-flux';
// En esta clase renderizamos cada una de las noticias
class FlatListItem extends Component{
  render(){
    const News = this.props.item;
    return(
      <View style={styles.container}>
      <Image source ={{uri: this.props.item.imageUrl}} style={styles.imagenes}></Image>
      <Text style={styles.noticias}>
      <Text style={styles.noticiasTitulo}>{this.props.item.name} {'\n'}</Text>
      <Text >{this.props.item.shortdescription}{'\n'}{'\n'}</Text>
      </Text>
      <TouchableOpacity style={styles.boton} onPress={() => {Actions.noticia({News});}}>
      <Text style={styles.textoBoton}>Leer más</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

// en esta clase hacemos uso del FlatList para desplegar las noticias
export default class Inicio extends Component {

  render() {
    return (
      <View >
      <StatusBar backgroundColor="#75a478" barStyle="light-content"/>
      <ScrollView>
      <Text style={styles.tituloinicio}>Noticias destacadas</Text>
      <FlatList data={flatlistdata} renderItem={({item,index})=>{
        return(
          <FlatListItem item={item} index={index}></FlatListItem>
        );
      }}
      >
      </FlatList>
      </ScrollView>
      </View>
    );
  }
}
//creamos los estilos para las noticias (botones, imagenes, contenedores, etc)
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
  tituloinicio:{
    fontSize: 18,
    padding: 7,
    backgroundColor: '#e0e0e0',
  },
  noticias: {
    padding:8,
    paddingLeft:30,
    backgroundColor: 'white',
    height: 130,
    marginLeft: 90,
    marginRight: 5,
    marginBottom: 4,
    borderRadius: 15,
    textAlign: 'auto',
  },
  noticiasTitulo: {
    fontWeight: 'bold',
    textAlign: 'auto',
  },
  imagenes: {
    width: 100,
    height: 130,
    marginLeft: 5,
    position: 'absolute',
    zIndex: 1,
  },
  boton: {
    width: 190,
    marginTop: 98,
    marginLeft: 140,
    padding: 4,
    backgroundColor: '#DEE6E6',
    position: 'absolute',
    borderRadius: 10,
    zIndex: 2,
  },
  textoBoton:{
    textAlign: 'center',
  },
});
