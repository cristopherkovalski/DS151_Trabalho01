import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CountriesList = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useState(() => {
    if (searchTerm) {
      fetch('https://restcountries.com/v2/all')
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error(error));
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm) {
      fetch(`https://restcountries.com/v2/name/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error(error));
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.countryItem} onPress={() => navigation.navigate('CountryDetails', { country: item })}>
      <Image source={{ uri: item.flag }} style={styles.countryFlag} />
      <View style={styles.countryInfo}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryLanguage}>{item.languages[0].name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquisar país"
          onChangeText={(text) => setSearchTerm(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.alpha2Code}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#7B68EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  countryFlag: {
    width: 60,
    height: 40,
    marginRight: 10,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  countryLanguage: {
    fontSize: 16,
  },
});

export default CountriesList;