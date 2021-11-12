import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import shortid from 'shortid';

function MaterialCardWithTextOverImage({result, ciudad, setCiudad}) {
  const {name, main, sys, coord} = result;

  if (!name) return null;

  const kel = 273.15;

  console.log(result);

  //definimos variables a pasar
  const nombre = name;
  const pais = sys.country;
  const temp = parseInt(main.temp - kel);
  const max = parseInt(main.temp_max - kel);
  const min = parseInt(main.temp_min - kel);
  const lon = coord.lon;
  const lat = coord.lat;

  //Tomamos los datos de la ciudad buscada
  const guardarCiudad = () => {
    const ciudadN = {nombre, pais, temp, max, min, lon, lat};

    ciudadN.id = shortid.generate();

    const ciudades = [...ciudad, ciudadN];
    setCiudad(ciudades);
  };

  return (
    <View style={([styles.container], {height: 250, width: 375})}>
      <Image
        source={require('../assets/images/cardImage.jpg')}
        style={styles.cardItemImagePlace}></Image>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>
            {name} , {sys.country}
          </Text>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={styles.icon}
              source={{
                uri: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
              }}
            />
            <Text style={styles.subtitleStyle}>
              {temp}
              <Text style={styles.subtitleStyle}>&#x2103;</Text>
            </Text>
            <Text style={styles.subtitleStyle}>
              Mínima {min}
              <Text style={styles.subtitleStyle}>&#x2103;</Text>
            </Text>

            <Text style={styles.subtitleStyle}>
              Máxima {max}
              <Text style={styles.subtitleStyle}>&#x2103;</Text>
            </Text>
          </View>
        </View>
        <View style={styles.actionBody}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Map')}
            style={styles.actionButton1}>
            <Text style={styles.actionText1}>Ver en mapa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => guardarCiudad()}
            style={styles.actionButton1}>
            <Text style={styles.actionText1}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#CCC',
    flexWrap: 'nowrap',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: 'hidden',
  },
  cardItemImagePlace: {
    backgroundColor: '#ccc',
    flex: 1,
    minHeight: 50,
  },
  icon: {
    width: 90,
    height: 55,
  },
  cardBody: {
    position: 'absolute',
    bottom: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    left: 0,
    right: 2,
  },
  titleStyle: {
    height: 30,
    fontSize: 20,
    color: '#FFF',
    marginBottom: 29,
  },
  subtitleStyle: {
    fontSize: 20,
    color: '#FFF',
  },
  actionBody: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton1: {
    padding: 8,
    height: 36,
  },
  actionText1: {
    marginRight: 20,
    fontSize: 14,
    color: '#FFF',
    opacity: 0.9,
  },
});
export default MaterialCardWithTextOverImage;
