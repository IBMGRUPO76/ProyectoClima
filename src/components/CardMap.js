import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

//Card utilizada para visualiz
const CardMap = ({item}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          {item.name}, {item.count}
        </Text>
      </View>
      <View>
        <Text>Temperatura: {item.tempe}°</Text>
      </View>
      <View style={styles.minmax}>
        <Text>
          Min {'\n'}
          {item.mini}°
        </Text>
        <Text>
          Max {'\n'}
          {item.maxi}°
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 120,
    width: '100%',
    borderColor: '#000',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginTop: 40,
  },
  minmax: {flex: 1, flexDirection: 'row'},
  but: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    alignItems: 'center',
  },
  textbut: {
    color: '#fff',
  },
});

export default CardMap;
