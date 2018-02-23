import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image,FlatList } from 'react-native';
import flatlistdata from './flatlistdata';

class FlatListItem extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Image source ={{uri: this.props.item.imageUrl}} style={styles.imagenes}></Image>
      <Text style={styles.noticias}>
      <Text style={styles.noticiasTitulo}>{this.props.item.name} {'\n'}</Text>
      <Text >{this.props.item.description}{'\n'}{'\n'}</Text>
      </Text>
      <Text style={styles.boton}> {this.props.item.boton} </Text>
      </View>
    );
  }
}


export default class Inicio extends Component {
  render() {
    return (
      <View >
      <StatusBar backgroundColor="#97b498" barStyle="light-content"/>
      <Text style={styles.tituloinicio}>Noticias destacadas</Text>
      <FlatList data={flatlistdata} renderItem={({item,index})=>{
        return(
          <FlatListItem item={item} index={index}></FlatListItem>
        );
      }}
      >
      </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#e0e0e0',
  },
  tituloinicio:{
    fontSize: 22,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#c8e6c9',
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
    textAlign: 'center',
    marginTop: 98,
    marginLeft: 140,
    padding: 4,
    backgroundColor: '#DEE6E6',
    fontWeight: 'bold',
    position: 'absolute',
    borderRadius: 10,
    zIndex: 2,
  }
});
