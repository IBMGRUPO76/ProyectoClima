import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Mapa, AboutUs} from './src/screens/index.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={'red'} size={20} />
            ),
          }}
          name="Inicio"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="map" color={'red'} size={20} />
            ),
          }}
          name="Mapa"
          component={Mapa}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Nosotros',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account-group"
                color={'red'}
                size={20}
              />
            ),
          }}
          name="Nosotros"
          component={AboutUs}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
