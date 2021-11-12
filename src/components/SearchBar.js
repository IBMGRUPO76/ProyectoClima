import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

function MaterialUnderlineTextbox({search, saveSearch, saveLook}) {
  const {city} = search;

  const lookWeather = () => {
    if (city.trim() === '') {
      showAlert();
      return;
    }
    saveLook(true);
  };
  const showAlert = () => {
    Alert.alert('Error', 'Agrega una ciudad', [{text: 'Entendido'}]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={city}
        placeholder="Ciudad"
        onChangeText={city => saveSearch({...search, city})}
        style={styles.inputStyle}></TextInput>
      <TouchableOpacity onPress={() => lookWeather()}>
        <Text style={{color: '#000', fontSize: 15}}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#D9D5DC',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#000',
    padding: 10,
    fontSize: 20,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: 300,
  },
  butt: {
    padding: 8,
    height: 36,
  },
});

export default MaterialUnderlineTextbox;
