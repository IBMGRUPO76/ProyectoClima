import React from 'react';
import {SafeAreaView, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <View style={{flex:1,backgroundColor:'red'}}>
      <MapView style={{flex:1}}
      provider={PROVIDER_GOOGLE} initialRegion={initialRegion} />
    </View>
  );
};

export default Map;
