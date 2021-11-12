import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const Card = ({item, eliminarCiudad}) => {
  const eliminarC = id => {
    console.log('Eliminada');
    eliminarCiudad(id);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.but} onPress={() => eliminarC(item.id)}>
        <Text style={styles.textbut}>x</Text>
      </TouchableHighlight>
      <View>
        <Text>
          {item.nombre}, {item.pais}
        </Text>
      </View>
      <View>
        <Text>Temperatura: {item.temp}</Text>
      </View>
      <View style={styles.minmax}>
        <Text>
          Min {'\n'}
          {item.min}
        </Text>
        <Text>
          Max {'\n'}
          {item.max}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 120,
    width: '100%',
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 40,
  },
  minmax: {flex: 1, flexDirection: 'row'},
  but: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    alignItems: 'center',
  },
  textbut: {
    color: '#fff',
  },
});

export default Card;
