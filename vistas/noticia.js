/*
En este componente  sin estado desplegamos en detalle la noticia trayendo los datos
de la constante "News".
@autor: Oscar Rengifo
*/
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
// importamos los Actions para hacer los movimientos entre paginas
import { Actions } from 'react-native-router-flux';
// recibimos la costante News del componente inicio
const Noticia = ({News}) => {
//pintamos los datos del arreglo "flatlistdata"
return(
    <View>
    <StatusBar backgroundColor="#75a478" barStyle="light-content"/>
    <ScrollView>
    <Image source ={{uri: News.imageUrl}} style={styles.imagenes}></Image>
    <Text style={styles.piedefoto}>Foto tomada del espectador</Text>
    <Text style={styles.titulo}>{News.name}</Text>
    <Text style={styles.description}>{News.description}</Text>
    <TextInput
            style={styles.input}
            editable = {true}
            placeholder="Agrega tus comentarios"
          />
    <View style={styles.container}>
    <TouchableOpacity style={styles.boton} onPress={() => {Actions.inicio();}}>
    <Text style={styles.text}>Agregar</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
);
}
//creamos los estilos para la pagina detallada de las noticias
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenes:{
    marginTop: 20,
    width: '100%',
    height: 200,
  },
  piedefoto:{
    padding: 10,
    fontSize: 11,
    backgroundColor: '#C9C9C9',
  },
  titulo:{
    marginTop: 8,
    padding: 10,
    fontWeight: 'bold',
    fontSize:16,
  },
  description:{
    marginTop: 4,
    padding: 10,
    fontSize:14,
    textAlign: "justify"
  },
  input:{
    margin: 10,
    marginBottom: 20,
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  boton: {
    width: 120,
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    backgroundColor: '#75a478',
    borderRadius: 10,
  },
});
export default Noticia;
