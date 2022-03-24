import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Typograph from '../../components/atoms/Typograph';

import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import Icon from '../../components/atoms/icon';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
    {
    //component aqui
    }
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
