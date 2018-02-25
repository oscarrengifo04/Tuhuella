# Prueba Almundo, Aplicación TuHuella

Aplicación de noticias ambientales para aplicar a una vacante en la empresa Almundo

## Introducción

Esta aplicacion de noticias está desarrollada en React-native, y hace uso de la API:

* React Native Router Flux

Esta aplicación fue probada exitosamente en:

* react  16.2.0
* react-native 0.53.3
* react-native-router-flux ^4.0.0-beta.28
* Android 6.0
* macOS 10.13.3

## Instalación

Instalamos Node and Watchman usando Homebrew
```
brew install node
```
```
brew install watchman
```
Instalamos React-native

```
 npm install -g react-native-cli
```
Instalamos el ambiente de desarrollo de android

* Android SDK
* android SDK Platform
* performance Intel  HAXM
* Android 6.0 (Marshmallow)

Configuramos la variables de entorno en el archivo $HOME/.bash_profile

```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Luego de tener todo configurado nos ubicamos dentro de la carpeta del proyecto ("Tuhuella") y le damos el siguiente codigo:

```
cd Tuhuella
react-native run-android
```

## Componentes exigidos

La aplicación cumple con el uso de los componentes obligatorios y hace uso de algunos extra:

* Image
* ScrollView / ListView / FlatList
* Text
* Input
* View
* TextInput
* TouchableOpacity / TouchableHighlight


## Autor

**Oscar Rengifo Muñoz**
