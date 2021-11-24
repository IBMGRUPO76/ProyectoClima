import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Mapa, AboutUs} from './src/screens/index.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from './src/screens/Splash.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return <Splash />;
}
