import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutUs from './src/screens/AboutUs';
import Home from './src/screens/Home';
import Map from './src/screens/Map';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Mapa" component={Map} />
        <Tab.Screen name="Nosotros" component={AboutUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
