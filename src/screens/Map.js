import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import LottieView from 'lottie-react-native';

function Map({navigation, route}) {
  // definiendo las constantes a pasar como props desde CardMap
  const {long, lati, name, tempe, count, mini, maxi, weat, des} = route.params;

  // denifiniendo los arrays de icon para la selección de la animación
  const despejado = ['01d', '01n']; //clear sky
  const nublado = ['02d', '02n', '03d', '03n', '04d', '04n']; //cloud-opening
  const lluvia = ['09d', '09n', '10d', '10n']; //rain
  const trueno = ['11d', '11n']; //thunder
  const nieve = ['13d', '13n']; //snow
  const niebla = ['50d', '50n']; //foggy

  const initialRegion = {
    latitude: lati,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Lógica para la animación dependiendo el icon
  if (despejado.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/35627-weather-day-clear-sky.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (nublado.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/7420-clouds-opening.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (lluvia.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/36240-rain-icon.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (trueno.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/85539-cloud-with-thunder.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (nieve.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/10790-let-it-snow.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else if (niebla.indexOf(weat) >= 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/4791-foggy.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}>
          <Marker
            coordinate={{
              latitude: lati,
              longitude: long,
            }}
            title={`${name}, ${count} | ${tempe}° `}></Marker>
        </MapView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            position: 'absolute',
            alignSelf: 'center',
            borderRadius: 20,
            height: 200,
            width: '95%',
            backgroundColor: '#fff',
            shadowOpacity: 0.3,
            shadowOffset: {x: 2, y: -2},
            shadowRadius: 5,
            shadowColor: '#000',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 420,
          }}>
          <Text
            style={{
              color: '#000',
              width: '100%',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              backgroundColor: '#7986CB',
              textAlign: 'center',
              fontSize: 30,
            }}>
            {name}, {count}
          </Text>
          <Text style={{color: '#000'}}>Temperatura: {tempe}°</Text>
          <View style={styles.cards}>
            <View style={styles.icondes}>
              <LottieView
                style={{
                  width: 200,
                  height: 200,
                  opacity: 0.8,
                }}
                source={require('../assets/animation/61302-weather-icon.json')}
                autoPlay
                loop
              />
              <Text style={{color: '#000'}}>{des}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
  icon: {
    width: 90,
    height: 55,
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icondes: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Map;
