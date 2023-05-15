import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button } from '@rneui/base';


const CountryDetails = ({ route, navigation }) => {
  const { country } = route.params;

  const currencyCode = country.currencies[0].code;
  const currencyName = country.currencies[0].name;
  const capital = country.capital;

  const googleSearchLink = `https://www.google.com/search?q=${currencyCode}+to+USD`;

  const handleSearchGoogle = () => {
    Linking.openURL(googleSearchLink);
  };

  const handleViewImages = () => {
    navigation.navigate('CountryImages', { countryName: country.name });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryHeader}>
        <Text style={styles.countryName}>{country.name}</Text>
      </View>
      <View style={styles.countryDetails}>
        <View style={styles.countryItem}>
          <Text style={styles.label}>Nome completo: </Text>
          <Text style={styles.value}>{country.name}</Text>
        </View>
        <View style={styles.countryItem}>
          <Text style={styles.label}>Capital: </Text>
          <Text style={styles.value}>{capital}</Text>
        </View>
        <View style={styles.countryItem}>
          <Text style={styles.label}>Códigos de país: </Text>
          <Text style={styles.value}>{country.alpha2Code}, {country.alpha3Code}</Text>
        </View>
        <View style={styles.countryItem}>
          <Text style={styles.label}>Moeda: </Text>
          <TouchableOpacity onPress={openModal} style={styles.currencyContainer}>
            <Text style={styles.value}>{currencyName} ({currencyCode})</Text>
            <Icon name="chevron-right" type="material" size={24} onPress={openModal} color="#7B68EE" />
          </TouchableOpacity>
        </View>
        <Button title="Ver imagens" onPress={handleViewImages} color="#7B68EE" />
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Você está saindo do aplicativo para fazer uma pesquisa no Google.</Text>
            <Button title="Continuar" onPress={handleSearchGoogle}  buttonStyle={{
                backgroundColor: "#01FE5E",
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}/>
            <Button title="Cancelar" onPress={closeModal} buttonStyle={{
                backgroundColor: "#FE0101",
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  countryHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  countryDetails: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  countryItem: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  label:{
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 5,
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CountryDetails;