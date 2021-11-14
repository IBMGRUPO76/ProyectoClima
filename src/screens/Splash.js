import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Animated,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import nuiz from './assets/nuiz.png';
import nuder from './assets/nuder.png';
import sol from './assets/sol.png';

const Splash = ({navegation}) => {
  const [animated, setAnimated] = useState(false);
  const [show] = useState(new Animated.Value(0));
  const [positionl, setPositionl] = useState(new Animated.Value(-200));
  const [positionr, setPositionr] = useState(new Animated.Value(-200));
  const [positiont, setPositiont] = useState(new Animated.Value(-200));
  const [font, setFont] = useState(new Animated.Value(1));

  useEffect(() => {
   
      Animated.parallel([
        Animated.timing(show, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false,
        }),

        Animated.timing(positionl, {
          toValue: 105,
          duration: 3000,
          useNativeDriver: false,
        }),

        Animated.timing(positionr, {
          toValue: 105,
          duration: 3000,
          useNativeDriver: false,
        }),

        Animated.timing(positiont, {
          toValue: 170,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]).start( () => Animated.timing(font, {
        toValue: 200,
        duration: 5000,
        useNativeDriver: false,
      }).start(()=>setAnimated(true)))
  
  }, []);
  
  //navigation.navigate('Home'); 
  
  if (!animated)
    return (
      <>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          backgroundColor={'#226AA0'}
        />
        <View style={styles.container}>
          <Animated.Image
            style={[styles.nubes, {left: positionl}]}
            source={nuiz}
          />
          <Animated.Image
            style={[styles.nubes, {right: positionr}]}
            source={nuder}
          />
          <Animated.Image style={[styles.sol, {top: positiont, transform: [{scale:font}]}]} 
            source={sol} />

          <Animated.Text style={[styles.h2, {opacity: show}]}>
            Che Clima
          </Animated.Text>
          <Animated.Text style={[styles.h3, {opacity: show}]}>
            Tu APP del Clima
          </Animated.Text>
        </View>
      </>
    );
  return <Text>Inicio Aplicacion</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  nubes: {
    position: 'absolute',
    top: '30%',
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  sol: {
    position: 'absolute',
    top: '30%',
    width: 150,
    height: 150,
    zIndex: 1,
    resizeMode: 'contain',
  },

  h2: {
    position: 'absolute',
    top: '60%',
    color: '#226AA0',
    fontSize: 24,
  },
  h3: {
    position: 'absolute',
    top: '65%',
    color: '#226AA0',
    fontSize: 14,
  },
});

export default Splash;
