//DOCUMENTAR
import React, { Component } from 'react';
import { Text,Button,View, StyleSheet, StatusBar, Image,FlatList, ScrollView, TouchableOpacity } from 'react-native';
import flatlistdata from './flatlistdata';
import { Actions } from 'react-native-router-flux';

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


export default class Inicio extends Component {

  render() {
    return (
      <View >
      <StatusBar backgroundColor="#75a478" barStyle="light-content"/>
      {/*}<View style={styles.fakeToolbar}></View>
      <Image style={styles.logonombre} source={require('../img/nombre.png')} />
      */}
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
  fakeToolbar:{
    backgroundColor: '#a5d6a7',
    height: 58,
  },
  logonombre: {
    marginTop: 12,
    marginLeft: '25%',
    position: 'absolute',
    width: 150,
    height: 30,
    alignItems: 'center',
    zIndex: 1,
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
