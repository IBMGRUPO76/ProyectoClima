import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

function Map({navigation, route}) {
  const {long, lati, name, tempe, count} = route.params;

  const initialRegion = {
    latitude: lati,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        <Marker
          coordinate={{
            latitude: lati,
            longitude: long,
          }}
          title={`${name}, ${count} | ${tempe}°`}></Marker>
      </MapView>
    </View>
  );
}

export default Map;
