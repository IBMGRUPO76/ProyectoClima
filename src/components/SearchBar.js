import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Keyboard,
} from 'react-native';

function SearchBar({search, saveSearch, saveLook}) {
  const {city} = search;

  const lookWeather = () => {
    if (city.trim() === '') {
      showAlert();
      return;
    }
    saveLook(true);
    Keyboard.dismiss();
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
        style={styles.inputStyle}
        returnKeyType="done"
        onSubmitEditing={() => lookWeather()}></TextInput>

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
    textAlign: 'center',
  },
  butt: {
    color: '#000',
    fontSize: 15,
  },
});

export default SearchBar;
