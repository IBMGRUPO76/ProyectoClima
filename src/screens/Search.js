import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import MaterialCardWithTextOverImage from '../components/SearchCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from './Map';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
const Stack = createNativeStackNavigator();

export function Mapa() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Busqueda" component={Search} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Search({navigation}) {
  //state de ciudad

  const [ciudad, setCiudad] = useState([
    {
      id: '1',
      nombre: 'Buenos Aires',
      pais: 'Ar',
      temp: 42,
      max: 50,
      min: 20,
      lon: 0,
      lat: 0,
    },
  ]);

  //Eliminar ciudades del state

  const eliminarCiudad = id => {
    setCiudad(ciudadesActuales => {
      return ciudadesActuales.filter(ciudad => ciudad.id !== id);
    });
  };

  //Guardar ciudades
  // const saveCities = async citiesJSON => {
  //   try {
  //     await AsyncStorage.setItem('cities', citiesJSON);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [search, saveSearch] = useState({
    city: '',
  });
  const [look, saveLook] = useState(false);
  const [result, saveResult] = useState({});

  const {city} = search;
  useEffect(() => {
    const lookWeather = async () => {
      if (look) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=502d18d2e3c71497990f825d744c3517`;

        try {
          const response = await fetch(url);
          const result = await response.json();
          saveResult(result);
          saveLook(false);
        } catch (error) {
          showAlert();
        }
      }
    };
    lookWeather();
  }, [look]);

  const showAlert = () => {
    Alert.alert('Error', 'No se encontraron resultados para esa busqueda', [
      {text: 'Entendido'},
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Map')}>
        <Text>Ir a mapa </Text>
      </TouchableOpacity>
      <SearchBar
        search={search}
        saveSearch={saveSearch}
        saveLook={saveLook}></SearchBar>
      <ScrollView>
        <View>
          <MaterialCardWithTextOverImage
            result={result}
            setCiudad={setCiudad}
            ciudad={ciudad}></MaterialCardWithTextOverImage>

          <FlatList
            data={ciudad}
            renderItem={({item}) => (
              <Card item={item} eliminarCiudad={eliminarCiudad} />
            )}
            keyExtractor={ciudad => ciudad.id}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

