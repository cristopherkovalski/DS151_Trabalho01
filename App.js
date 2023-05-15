import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '/src/components/HomeScreen';
import CountriesList from './src/components/CountriesList';
import CountryDetails from './src/components/CountryDetails';
import CountryImages from './src/components/CountryImages';

    const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="CountriesList" component={CountriesList} options={{ title: 'Buscar País' }} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} options={{ title: 'Detalhes do País' }} />
        <Stack.Screen name="CountryImages" component={CountryImages} options={{title: 'Imagens do País'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});