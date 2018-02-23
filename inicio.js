import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, FlatList } from 'react-native';
import flatlistdata from './flatlistdata';

class FlatListItem extends Component{
  render(){
    return(
      <View>
      <Text style={styles.noticias}>
      <Text style={styles.noticiasTitulo}>{this.props.item.name} {'\n'}{'\n'}</Text>
      <Text>{this.props.item.description}</Text>

      </Text>
      </View>
    );
  }
}


export default class Inicio extends Component {
  render() {
    return (
      <View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8e6c9',
  },
  tituloinicio:{
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  noticias: {
    padding:8,
    backgroundColor: 'white',
    height: 100,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: 15,

  },
  noticiasTitulo: {
    fontWeight: 'bold',

  }
});
