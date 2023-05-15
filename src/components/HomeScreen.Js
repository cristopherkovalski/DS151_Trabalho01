import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from './IconButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Trabalho 01</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton
          title="Buscar Países"
          color='#7B68EE'
          onPress={() => navigation.navigate('CountriesList')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: 50,
  },
});