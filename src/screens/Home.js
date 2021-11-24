import React from 'react';
import {StyleSheet, View, Image, ImageBackground, Text} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.somosCheclima2Row}>
        <Image
          source={require('../assets/images/layer2.png')}
          resizeMode="contain"
          style={styles.image2}
        />
        <Image
          source={require('../assets/images/rain.png')}
          style={{width: 300, height: 250, marginRight: 20}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.imageStack}>
        <Text style={styles.loremIpsum}>
          Una aplicacion que brinda un {'\n'}servicio del clima de distintas{' '}
          {'\n'}ciudades en tiempo real.
        </Text>
        <Text style={styles.loremIpsum2}>
          Todas las busquedas van a poder ser guardadas para que puedas acceder
          a ellas cuando quieras!
        </Text>
        <Text style={styles.loremIpsum1}>
          Desde la sección mapas vas a poder{'\n'}realizar busquedas de
          cualquier ciudad del mundo
        </Text>

        <ImageBackground
          source={require('../assets/images/10087.png')}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}></ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    top: 130,
    width: 503,
    height: 321,
    position: 'absolute',
    backgroundColor: 'rgba(15,15, 15,0)',
    left: 0,
  },
  image_imageStyle: {},
  loremIpsum2: {
    fontFamily: 'poppins-regular',
    color: '#000',
    textAlign: 'center',
    fontSize: 13,
    width: 223,
    height: 60,
    marginTop: 85,
    marginLeft: 160,
  },
  loremIpsum1: {
    top: 10,
    position: 'absolute',
    fontFamily: 'poppins-regular',
    color: '#000',
    left: 58,
    textAlign: 'center',
    fontSize: 13,
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
    width: 120,
    height: 120,
    bottom:10,
    left:20,
    borderRadius: 100,
    backgroundColor: 'rgba(15,15, 15,0)',
  },
  somosCheclima2Row: {
    flex: 0.3,
    flexDirection: 'row',
  },
  loremIpsum: {
    fontFamily: 'poppins-regular',
    color: '#121212',
    textAlign: 'center',
    position: 'absolute',
    fontSize: 13,
    width: 223,
    height: 60,
    marginLeft: 45,
    bottom: 500,
  },
});
