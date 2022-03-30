import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ButtonIcon from '../../components/molecules/ButtonIcon';
import ItemListSelectButton from '../../components/molecules/ItemListSetectButton';

import { View } from '../../components/Themed';

export default function Home() {
  return (
    <View style={styles.container}>
    {
    <ItemListSelectButton children="terminar o aplicativo"/>
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
