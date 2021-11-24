import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

const Card = ({item, eliminarCiudad, navigation}) => {
  const eliminarC = id => {
    console.log('Eliminada');
    eliminarCiudad(id);
  };

  const car = item;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginLeft: 10}}
        onPress={() =>
          navigation.navigate('Map', {
            long: car.lon,
            lati: car.lat,
            tempe: car.temp,
            name: car.nombre,
            count: car.pais,
            mini: car.min,
            maxi: car.max,
            weat: car.clima,
            des: car.desc,
          })
        }>
        <Text>Ir a mapa </Text>
      </TouchableOpacity>
      <View style={{marginRight: 34}}>
        <Text>
          {item.nombre}, {item.pais}
        </Text>
      </View>

      <TouchableHighlight style={styles.but} onPress={() => eliminarC(item.id)}>
        <Text style={styles.textbut}>x</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  minmax: {flex: 1, flexDirection: 'row'},
  but: {
    height: 20,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    alignItems: 'center',
    marginRight: 10,
  },
  textbut: {
    color: '#fff',
  },
});

export default Card;
