import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
  
      <View style={styles.separator} lightColor="#eee" darkColor="#ffffff0" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
