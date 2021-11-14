import React from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require('../assets/images/10087.jpg')}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}>
          <Text style={styles.loremIpsum2}>
            Todas las busquedas van a poder ser guardadas para que puedas
            acceder a ellas cuando quieras!
          </Text>
        </ImageBackground>
        <Text style={styles.loremIpsum1}>
          Desde la sección mapas vas a poder{'\n'}realizar busquedas de
          cualquier ciudad del mundo
        </Text>
      </View>
      <View style={styles.somosCheclima2Row}>
        <Text style={styles.somosCheclima2}>Somos Checlima</Text>
        <Image
          source={require('../assets/images/rain.jpg')}
          resizeMode="contain"
          style={styles.image2}></Image>
      </View>
      <Text style={styles.loremIpsum}>
        Una aplicacion que brinda un {'\n'}servicio del clima de distintas{' '}
        {'\n'}ciudades en tiempo real.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  image: {
    top: 10,
    width: 503,
    height: 471,
    position: 'absolute',
    backgroundColor: 'rgba(15,15, 15,0)',
    left: 0,
  },
  image_imageStyle: {},
  loremIpsum2: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    textAlign: 'center',
    fontSize: 12,
    width: 223,
    height: 60,
    marginTop: 62,
    marginLeft: 186,
  },
  loremIpsum1: {
    top: 0,
    position: 'absolute',
    fontFamily: 'poppins-regular',
    color: '#121212',
    left: 58,
    textAlign: 'center',
    fontSize: 12,
    width: 223,
    height: 60,
  },
  imageStack: {
    width: 503,
    height: 486,
    marginTop: 240,
    marginLeft: -46,
  },
  somosCheclima2: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 19,
    marginTop: 160,
  },
  image2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(15,15, 15,0)',
    marginLeft: 32,
  },
  somosCheclima2Row: {
    height: 200,
    flexDirection: 'row',
    marginTop: -762,
    marginLeft: 12,
    marginRight: -13,
  },
  loremIpsum: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    textAlign: 'center',
    fontSize: 12,
    width: 223,
    height: 60,
    marginLeft: 140,
  },
});
