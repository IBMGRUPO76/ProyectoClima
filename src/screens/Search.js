import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Alert, FlatList} from 'react-native';
import SearchCard from '../components/SearchCard';
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
        <Stack.Screen
          options={{headerShown: false}}
          name="Busqueda"
          component={Search}
        />
        <Stack.Screen options={{title: ''}} name="Map" component={Map} />
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
      clima: '04a',
      desc: 'templado',
    },
  ]);

  //Eliminar ciudades del state

  const eliminarCiudad = id => {
    const ciudadesEliminadas = ciudad.filter(ciudad => ciudad.id !== id);
    setCiudad(ciudadesEliminadas);
    saveCitiesStore(JSON.stringify(ciudadesEliminadas));
  };

  const [search, saveSearch] = useState({
    city: '',
  });
  const [look, saveLook] = useState(false);
  const [result, saveResult] = useState({});

  const {city} = search;
  useEffect(() => {
    const lookWeather = async () => {
      if (look) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=502d18d2e3c71497990f825d744c3517&lang=es`;

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

  //Renderizar ciudades del storage
  useEffect(() => {
    const getCiudadesStore = async () => {
      try {
        const ciudadStore = await AsyncStorage.getItem('ciudadG');
        if (ciudadStore) {
          setCiudad(JSON.parse(ciudadStore));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCiudadesStore();
  }, []);
  // Guardar ciudades storage

  const saveCitiesStore = async ciudadesJSON => {
    try {
      await AsyncStorage.setItem('ciudadG', ciudadesJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        search={search}
        saveSearch={saveSearch}
        saveLook={saveLook}></SearchBar>

      <View>
        <SearchCard
          result={result}
          setCiudad={setCiudad}
          ciudad={ciudad}
          saveCitiesStore={saveCitiesStore}></SearchCard>

        <FlatList
          data={ciudad}
          renderItem={({item}) => (
            <Card
              result={result}
              item={item}
              eliminarCiudad={eliminarCiudad}
              navigation={navigation}
            />
          )}
          keyExtractor={ciudad => ciudad.id}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
